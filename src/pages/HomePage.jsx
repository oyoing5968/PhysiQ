import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { parseToken } from '../context/AuthContext'
import {
  user,
  goal,
  mealLogs,
  workoutLogs,
  weightLogs,
  foods,
} from '../mock'

// mock 가상 자작 데이터 사용
const TODAY = '2026-03-26'

const MEAL_LABEL = {
  breakfast: '아침',
  lunch:     '점심',
  dinner:    '저녁',
  snack:     '간식',
}

const MEAL_COLOR = {
  breakfast: 'bg-orange-100 text-orange-600',
  lunch:     'bg-green-100  text-green-600',
  dinner:    'bg-blue-100   text-blue-600',
  snack:     'bg-purple-100 text-purple-600',
}

// 그 뭐야 칼로리 소비량 원형으로 보여주는 그거
function RingProgress({ pct, size = 140, stroke = 12, color = '#3b82f6', children }) {
  const r   = (size - stroke) / 2
  const circ = 2 * Math.PI * r
  const offset = circ * (1 - Math.min(pct, 1))
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r}
          fill="none" stroke="#e5e7eb" strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r}
          fill="none" stroke={color} strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.6s ease' }} />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}

// 식단: 영양소 그래프
function MacroBar({ label, current, goal: g, color }) {
  const pct = Math.min((current / g) * 100, 100)
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-gray-500">
        <span className="font-medium text-gray-700">{label}</span>
        <span>{current}g <span className="text-gray-400">/ {g}g</span></span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default function HomePage() {
  const { token, logout } = useAuth()
  const navigate = useNavigate()
  const payload  = parseToken(token)
  const userName = payload?.name ?? user.name

  // 식단 추천
  const todayMeals = useMemo(
    () => mealLogs.filter((m) => m.date === TODAY),
    []
  )//얘가 먹은거 기록

  const totalCaloriesEaten = useMemo(
    () => todayMeals.reduce((s, m) => s + m.calories, 0),
    [todayMeals]
  )//얘는 칼로리 계산

  // 매크로 계산: foods 테이블 기준 비율로 추산 이라는데 저는 아직 이해못함;;
  const macros = useMemo(() => {
    const foodMap = Object.fromEntries(foods.map((f) => [f.name, f]))
    return todayMeals.reduce(
      (acc, log) => {
        const f = foodMap[log.foodName]
        if (!f) return acc
        const ratio = log.amount / f.servingSize
        return {
          protein: acc.protein + f.protein * ratio,
          carbs:   acc.carbs   + f.carbs   * ratio,
          fat:     acc.fat     + f.fat     * ratio,
        }
      },
      { protein: 0, carbs: 0, fat: 0 }
    )
  }, [todayMeals])

  // 식사유형별 그룹
  const mealGroups = useMemo(() => {
    const map = {}
    for (const m of todayMeals) {
      if (!map[m.mealType]) map[m.mealType] = []
      map[m.mealType].push(m)
    }
    return map
  }, [todayMeals])


  // 얘부터 운동
  const todayWorkouts = useMemo(
    () => workoutLogs.filter((w) => w.date === TODAY),
    []
  )
  const totalBurned = useMemo(
    () => todayWorkouts.reduce((s, w) => s + w.caloriesBurned, 0),
    [todayWorkouts]
  )

  // 체중 파트
  const latestWeight = weightLogs[weightLogs.length - 1]?.weightKg ?? user.weight
  const bmi = (latestWeight / ((user.height / 100) ** 2)).toFixed(1)

  const caloriePct  = totalCaloriesEaten / goal.dailyCalories
  const netCalories = goal.dailyCalories - totalCaloriesEaten + totalBurned

  const handleLogout = () => { logout(); navigate('/login', { replace: true }) }

  return (
    <div className="min-h-screen bg-gray-50 pb-10">

      {/* ── 헤더 ──────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-500 px-5 pt-12 pb-8 text-white">
        <div className="flex items-center justify-between mb-1">
          <p className="text-blue-100 text-sm">
            {new Date(TODAY).toLocaleDateString('ko-KR', { month: 'long', day: 'numeric', weekday: 'short' })}
          </p>
          <button
            onClick={handleLogout}
            className="text-xs text-blue-200 hover:text-white transition"
          >
            로그아웃
          </button>
        </div>
        <h1 className="text-2xl font-bold">안녕하세요, {userName}님!</h1>
        <p className="text-blue-100 text-sm mt-0.5">오늘도 목표를 향해 나아가요 💪</p>

        {/* 최상단 3개 */}
        <div className="grid grid-cols-3 gap-3 mt-5">
          {[
            { label: '현재 체중', value: `${latestWeight} kg` },
            { label: '목표 체중', value: `${goal.targetWeight} kg` },
            { label: 'BMI',       value: bmi },
          ].map((item) => (
            <div key={item.label} className="bg-white/15 rounded-xl p-3 text-center">
              <p className="text-white font-semibold text-base">{item.value}</p>
              <p className="text-blue-100 text-xs mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 space-y-4 mt-4">

        {/* 당일 칼로리 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <h2 className="text-sm font-semibold text-gray-500 mb-4">오늘의 칼로리</h2>
          <div className="flex items-center gap-6">
            <RingProgress
              pct={caloriePct}
              color={caloriePct >= 1 ? '#ef4444' : '#3b82f6'}
            >
              <span className="text-xl font-bold text-gray-800">
                {Math.round(caloriePct * 100)}%
              </span>
              <span className="text-xs text-gray-400">달성</span>
            </RingProgress>

            <div className="flex-1 space-y-3">
              <CalorieRow label="섭취"    value={totalCaloriesEaten} color="text-blue-500" />
              <CalorieRow label="소모"    value={totalBurned}        color="text-green-500" />
              <CalorieRow label="목표"    value={goal.dailyCalories} color="text-gray-400" />
              <div className="border-t border-gray-100 pt-2">
                <CalorieRow
                  label="남은 칼로리"
                  value={netCalories}
                  color={netCalories >= 0 ? 'text-gray-700' : 'text-red-500'}
                  bold
                />
              </div>
            </div>
          </div>
        </div>

        {/* 영양소 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <h2 className="text-sm font-semibold text-gray-500 mb-4">영양소 달성률</h2>
          <div className="space-y-3">
            <MacroBar
              label="단백질"
              current={Math.round(macros.protein)}
              goal={goal.protein}
              color="bg-blue-500"
            />
            <MacroBar
              label="탄수화물"
              current={Math.round(macros.carbs)}
              goal={goal.carbs}
              color="bg-amber-400"
            />
            <MacroBar
              label="지방"
              current={Math.round(macros.fat)}
              goal={goal.fat}
              color="bg-rose-400"
            />
          </div>
        </div>

        {/* 당일 식단 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <h2 className="text-sm font-semibold text-gray-500 mb-3">오늘의 식단</h2>
          <div className="space-y-3">
            {['breakfast', 'lunch', 'dinner', 'snack'].map((type) => {
              const items = mealGroups[type]
              if (!items) return null
              const total = items.reduce((s, m) => s + m.calories, 0)
              return (
                <div key={type} className="flex items-start gap-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-lg shrink-0 ${MEAL_COLOR[type]}`}>
                    {MEAL_LABEL[type]}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-700 truncate">
                      {items.map((m) => m.foodName).join(', ')}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{total} kcal</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 당일 운동 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-500">오늘의 운동</h2>
            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
              -{totalBurned} kcal
            </span>
          </div>

          {todayWorkouts.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-4">오늘 운동 기록이 없어요</p>
          ) : (
            <div className="space-y-2">
              {todayWorkouts.map((w) => (
                <div key={w.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-gray-700">{w.exerciseName}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {w.sets && w.reps
                        ? `${w.sets}세트 × ${w.reps}회${w.weightKg ? ` · ${w.weightKg}kg` : ''}`
                        : `${w.durationMin}분`}
                    </p>
                  </div>
                  <span className="text-xs text-green-600 font-medium">-{w.caloriesBurned} kcal</span>
                </div>
              ))}
            </div>
          )}

          {/* 운동 요약 */}
          {todayWorkouts.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[
                {
                  label: '운동 수',
                  value: `${todayWorkouts.length}개`,
                },
                {
                  label: '총 세트',
                  value: `${todayWorkouts.filter(w => w.sets).reduce((s, w) => s + w.sets, 0)}세트`,
                },
                {
                  label: '유산소',
                  value: `${todayWorkouts.filter(w => w.durationMin).reduce((s, w) => s + w.durationMin, 0)}분`,
                },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="text-sm font-semibold text-gray-700">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 신체 지표 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <h2 className="text-sm font-semibold text-gray-500 mb-3">신체 지표</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: '체지방률',  value: `${user.bodyFatRate}%`,          sub: '정상 범위 10–20%' },
              { label: '골격근량',  value: `${user.skeletalMuscleMass} kg`,  sub: '목표 37 kg' },
              { label: '키',        value: `${user.height} cm`,             sub: '' },
              { label: '수면 시간', value: `${user.height > 0 ? '6.5시간' : ''}`, sub: '권장 7–9시간' },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-3">
                <p className="text-base font-semibold text-gray-800">{item.value}</p>
                <p className="text-xs font-medium text-gray-600 mt-0.5">{item.label}</p>
                {item.sub && <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

function CalorieRow({ label, value, color, bold }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-gray-500">{label}</span>
      <span className={`text-sm ${bold ? 'font-bold' : 'font-medium'} ${color}`}>
        {value.toLocaleString()} kcal
      </span>
    </div>
  )
}