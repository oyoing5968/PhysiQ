import { useMemo, useState } from 'react'
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

// 식단·운동 조회용 날짜 — mock 데이터가 있는 날짜로 고정
// 백엔드 연결 후 실제 날짜로 교체 예정
const MOCK_DATE = '2026-03-26'

// 공복 체중 입력 기준 날짜 — 실제 오늘
const TODAY = new Date().toISOString().split('T')[0]

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

// SVG 원형 진행 바
// pct: 0~1 사이 비율, children: 원 중앙에 표시할 내용
function RingProgress({ pct, size = 140, stroke = 12, color = '#3b82f6', children }) {
  const r      = (size - stroke) / 2
  const circ   = 2 * Math.PI * r
  // 달성률만큼 선을 채우고 나머지는 비움 (strokeDashoffset)
  const offset = circ * (1 - Math.min(pct, 1))
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* -rotate-90: SVG 기본 시작점(3시)을 12시로 돌림 */}
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

// 영양소 가로 진행 바 — 100% 초과 방지
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

  // JWT 토큰에서 이름 추출, 없으면 mock user 이름으로 대체
  const payload  = parseToken(token)
  const userName = payload?.name ?? user.name

  // ── 공복 체중 ───────────────────────────────────────────
  // 오늘 날짜의 weightLog가 이미 있으면 초기값으로 사용, 없으면 null
  const initialTodayWeight = weightLogs.find((w) => w.date === TODAY)?.weightKg ?? null
  const [todayWeight,     setTodayWeight]     = useState(initialTodayWeight)
  const [showWeightModal, setShowWeightModal] = useState(false)
  const [weightInput,     setWeightInput]     = useState('')
  const [weightError,     setWeightError]     = useState('')

  // 어제 체중 — 전날 기록이 없으면 weightLogs 마지막 항목으로 대체
  const yesterdayWeight = useMemo(() => {
    const yesterday = new Date(TODAY)
    yesterday.setDate(yesterday.getDate() - 1)
    const yStr = yesterday.toISOString().split('T')[0]
    return weightLogs.find((w) => w.date === yStr)?.weightKg
      ?? weightLogs[weightLogs.length - 1]?.weightKg
      ?? null
  }, [])

  // 전날 대비 체중 변화 (양수=증가, 음수=감소)
  const weightDiff = todayWeight != null && yesterdayWeight != null
    ? (todayWeight - yesterdayWeight).toFixed(1)
    : null

  const handleWeightSave = () => {
    const val = parseFloat(weightInput)
    if (isNaN(val) || val < 20 || val > 300) {
      setWeightError('올바른 체중을 입력해주세요 (20–300 kg)')
      return
    }
    setTodayWeight(val)
    setShowWeightModal(false)
    setWeightInput('')
    setWeightError('')
  }

  // ── 식단 (MOCK_DATE 기준) ────────────────────────────────
  const todayMeals = useMemo(
    () => mealLogs.filter((m) => m.date === MOCK_DATE),
    []
  )

  const totalCaloriesEaten = useMemo(
    () => todayMeals.reduce((s, m) => s + m.calories, 0),
    [todayMeals]
  )

  // 섭취한 음식의 영양소를 foods 테이블 기반으로 비례 계산
  // ratio = 실제 섭취량(g) / 1회 제공량(g)
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

  // 끼니별로 식단 로그 묶기
  const mealGroups = useMemo(() => {
    const map = {}
    for (const m of todayMeals) {
      if (!map[m.mealType]) map[m.mealType] = []
      map[m.mealType].push(m)
    }
    return map
  }, [todayMeals])

  // ── 운동 (MOCK_DATE 기준) ────────────────────────────────
  const todayWorkouts = useMemo(
    () => workoutLogs.filter((w) => w.date === MOCK_DATE),
    []
  )
  const totalBurned = useMemo(
    () => todayWorkouts.reduce((s, w) => s + w.caloriesBurned, 0),
    [todayWorkouts]
  )

  // ── 파생 수치 ────────────────────────────────────────────
  // 헤더 "현재 체중": 오늘 입력값 → weightLogs 마지막값 → mock user 순으로 대체
  const displayWeight = todayWeight ?? weightLogs[weightLogs.length - 1]?.weightKg ?? user.weight
  const bmi           = (displayWeight / ((user.height / 100) ** 2)).toFixed(1)
  const caloriePct    = totalCaloriesEaten / goal.dailyCalories
  // 남은 칼로리 = 목표 - 섭취 + 소모 (운동으로 태운 만큼 더 먹을 수 있음)
  const netCalories   = goal.dailyCalories - totalCaloriesEaten + totalBurned

  const handleLogout = () => { logout(); navigate('/login', { replace: true }) }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">

      {/* ── 헤더 ──────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-500 px-5 pt-12 pb-8 text-white">
        <div className="flex items-center justify-between mb-1">
          <p className="text-blue-100 text-sm">
            {new Date().toLocaleDateString('ko-KR', { month: 'long', day: 'numeric', weekday: 'short' })}
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

        {/* 핵심 지표 3개 요약 */}
        <div className="grid grid-cols-3 gap-3 mt-5">
          {[
            { label: '현재 체중', value: `${displayWeight} kg` },
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

        {/* ── 공복 몸무게 카드 ───────────────────────────── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-sm font-semibold text-gray-500">오늘 공복 몸무게</h2>
            <span className="text-xs text-gray-400">{TODAY}</span>
          </div>

          {todayWeight == null ? (
            /* 미입력 — 입력 유도 버튼 표시 */
            <div className="flex items-center justify-between mt-3">
              <p className="text-sm text-gray-400">아직 입력하지 않았어요</p>
              <button
                onClick={() => setShowWeightModal(true)}
                className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition"
              >
                <span>+</span> 입력하기
              </button>
            </div>
          ) : (
            /* 입력 완료 — 체중과 전날 대비 증감 표시 */
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gray-800">{todayWeight}</span>
                <span className="text-base text-gray-500">kg</span>
                {/* 감소=파란색, 증가=빨간색, 동일=회색 */}
                {weightDiff !== null && (
                  <span className={`text-sm font-medium ${
                    parseFloat(weightDiff) < 0 ? 'text-blue-500' :
                    parseFloat(weightDiff) > 0 ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {parseFloat(weightDiff) > 0 ? '+' : ''}{weightDiff} kg
                  </span>
                )}
              </div>
              <button
                onClick={() => { setWeightInput(String(todayWeight)); setShowWeightModal(true) }}
                className="text-xs text-gray-400 hover:text-gray-600 border border-gray-200 px-3 py-1.5 rounded-lg transition"
              >
                수정
              </button>
            </div>
          )}
        </div>

        {/* ── 오늘의 칼로리 ─────────────────────────────── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <h2 className="text-sm font-semibold text-gray-500 mb-4">오늘의 칼로리</h2>
          <div className="flex items-center gap-6">
            {/* 목표 초과 시 빨간색으로 경고 */}
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

        {/* ── 영양소 달성률 ─────────────────────────────── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <h2 className="text-sm font-semibold text-gray-500 mb-4">영양소 달성률</h2>
          <div className="space-y-3">
            <MacroBar label="단백질"   current={Math.round(macros.protein)} goal={goal.protein} color="bg-blue-500" />
            <MacroBar label="탄수화물" current={Math.round(macros.carbs)}   goal={goal.carbs}   color="bg-amber-400" />
            <MacroBar label="지방"     current={Math.round(macros.fat)}     goal={goal.fat}     color="bg-rose-400" />
          </div>
        </div>

        {/* ── 오늘의 식단 ───────────────────────────────── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-500">오늘의 식단</h2>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/recommend')}
                className="text-xs text-orange-500 hover:text-orange-700 font-medium transition"
              >
                식단 추천 →
              </button>
              <button
                onClick={() => navigate('/diet')}
                className="text-xs text-blue-500 hover:text-blue-700 font-medium transition"
              >
                기록하기 →
              </button>
            </div>
          </div>
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

        {/* ── 오늘의 운동 ───────────────────────────────── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-500">오늘의 운동</h2>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                -{totalBurned} kcal
              </span>
              <button
                onClick={() => navigate('/workout')}
                className="text-xs text-green-500 hover:text-green-700 font-medium transition"
              >
                기록하기 →
              </button>
            </div>
          </div>

          {todayWorkouts.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-4">오늘 운동 기록이 없어요</p>
          ) : (
            <div className="space-y-2">
              {todayWorkouts.map((w) => (
                <div key={w.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-gray-700">{w.exerciseName}</p>
                    {/* 웨이트 운동: 세트×회수·무게, 유산소: 시간(분) */}
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

          {/* 운동 요약 통계 — 운동이 있을 때만 표시 */}
          {todayWorkouts.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[
                { label: '운동 수', value: `${todayWorkouts.length}개` },
                { label: '총 세트', value: `${todayWorkouts.filter(w => w.sets).reduce((s, w) => s + w.sets, 0)}세트` },
                { label: '유산소',  value: `${todayWorkouts.filter(w => w.durationMin).reduce((s, w) => s + w.durationMin, 0)}분` },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="text-sm font-semibold text-gray-700">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── 신체 지표 ─────────────────────────────────── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <h2 className="text-sm font-semibold text-gray-500 mb-3">신체 지표</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: '체지방률',  value: `${user.bodyFatRate}%`,         sub: '정상 범위 10–20%' },
              { label: '골격근량',  value: `${user.skeletalMuscleMass} kg`, sub: '목표 37 kg' },
              { label: '키',        value: `${user.height} cm`,            sub: '' },
              { label: '수면 시간', value: '6.5시간',                        sub: '권장 7–9시간' },
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

      {/* ── 공복 체중 입력 모달 (바텀시트) ─────────────────── */}
      {showWeightModal && (
        // 배경 클릭 시 모달 닫기
        <div
          className="fixed inset-0 bg-black/40 flex items-end justify-center z-50 px-4 pb-6"
          onClick={(e) => { if (e.target === e.currentTarget) { setShowWeightModal(false); setWeightError('') } }}
        >
          <div className="w-full max-w-lg bg-white rounded-2xl p-6 shadow-xl">
            <h3 className="text-base font-bold text-gray-800 mb-1">공복 몸무게 입력</h3>
            <p className="text-xs text-gray-400 mb-5">{TODAY} 기준</p>

            <div className="relative mb-2">
              {/* Enter 키로도 저장 가능 */}
              <input
                type="number"
                value={weightInput}
                onChange={(e) => { setWeightInput(e.target.value); setWeightError('') }}
                onKeyDown={(e) => e.key === 'Enter' && handleWeightSave()}
                placeholder="예) 74.5"
                min={20} max={300} step={0.1}
                autoFocus
                className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 text-lg font-semibold outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">kg</span>
            </div>
            {weightError && <p className="text-xs text-red-500 mb-3">{weightError}</p>}

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => { setShowWeightModal(false); setWeightError('') }}
                className="flex-1 py-3 rounded-xl border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-50 transition"
              >
                취소
              </button>
              <button
                onClick={handleWeightSave}
                className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
              >
                저장
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// 칼로리 항목 한 줄 표시용 컴포넌트
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
