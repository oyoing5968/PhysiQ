import { useMemo, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import * as userService from '../services/userService'
import * as goalService from '../services/goalService'
import * as dietService from '../services/dietService'
import * as weightService from '../services/weightService'

const TODAY = new Date().toISOString().split('T')[0]

const MEAL_LABEL = {
  breakfast: '아침',
  lunch:     '점심',
  dinner:    '저녁',
  snack:     '간식',
}

const MEAL_COLOR = {
  breakfast: 'bg-orange-500/20 text-orange-400',
  lunch:     'bg-green-500/20  text-green-400',
  dinner:    'bg-blue-500/20   text-blue-400',
  snack:     'bg-purple-500/20 text-purple-400',
}

function RingProgress({ pct, size = 140, stroke = 12, color = '#3b82f6', children }) {
  const r      = (size - stroke) / 2
  const circ   = 2 * Math.PI * r
  const offset = circ * (1 - Math.min(pct, 1))
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r}
          fill="none" stroke="#1e3a5f" strokeWidth={stroke} />
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

function MacroBar({ label, current, goal: g, color }) {
  const pct = g > 0 ? Math.min((current / g) * 100, 100) : 0
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="font-medium text-white">{label}</span>
        <span className="text-gray-400">{current}g <span className="text-gray-600">/ {g}g</span></span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default function HomePage() {
  const { user: authUser } = useAuth()
  const navigate = useNavigate()

  // 사용자 정보
  const [userInfo, setUserInfo] = useState(null)
  // 목표
  const [goalData, setGoalData] = useState(null)
  // 오늘 식단 (API 응답 meals 객체)
  const [mealGroups, setMealGroups] = useState({ breakfast: [], lunch: [], dinner: [], snack: [] })
  const [totalCaloriesEaten, setTotalCaloriesEaten] = useState(0)
  const [macros, setMacros] = useState({ protein: 0, carbs: 0, fat: 0 })
  // 체중
  const [weightLogs, setWeightLogs] = useState([])
  const [todayWeight, setTodayWeight]   = useState(null)
  const [showWeightModal, setShowWeightModal] = useState(false)
  const [weightInput, setWeightInput]   = useState('')
  const [weightError, setWeightError]   = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const [infoRes, goalRes, dietRes, weightRes] = await Promise.allSettled([
          userService.getUserInfo(),
          goalService.getGoal(),
          dietService.getDietLogs(TODAY),
          weightService.getWeightLogs(),
        ])

        if (infoRes.status === 'fulfilled') {
          setUserInfo(infoRes.value.data)
        }

        if (goalRes.status === 'fulfilled') {
          setGoalData(goalRes.value.data)
        }

        if (dietRes.status === 'fulfilled') {
          const d = dietRes.value
          // meals: { breakfast: [...], lunch: [...], ... }
          // 각 항목: { Food: { name }, estimated_kcal, amount_g }
          const normalizedGroups = {}
          for (const type of ['breakfast', 'lunch', 'dinner', 'snack']) {
            normalizedGroups[type] = (d.meals?.[type] || []).map((log) => ({
              foodName: log.Food?.name ?? '알 수 없음',
              calories: log.estimated_kcal ?? 0,
            }))
          }
          setMealGroups(normalizedGroups)
          setTotalCaloriesEaten(d.total_kcal ?? 0)
          setMacros({
            protein: d.total_protein ?? 0,
            carbs:   d.total_carb   ?? 0,
            fat:     d.total_fat    ?? 0,
          })
        }

        if (weightRes.status === 'fulfilled') {
          const logs = weightRes.value.data ?? []
          setWeightLogs(logs)
          const todayLog = logs.find((w) => w.recorded_at?.startsWith(TODAY))
          if (todayLog) setTodayWeight(todayLog.weight)
        }
      } catch {
        // 개별 에러는 allSettled로 처리
      }
    }
    load()
  }, [])

  const yesterdayWeight = useMemo(() => {
    const yesterday = new Date(TODAY)
    yesterday.setDate(yesterday.getDate() - 1)
    const yStr = yesterday.toISOString().split('T')[0]
    const log = weightLogs.find((w) => w.recorded_at?.startsWith(yStr))
    return log?.weight ?? weightLogs[weightLogs.length - 1]?.weight ?? null
  }, [weightLogs])

  const weightDiff = todayWeight != null && yesterdayWeight != null
    ? (todayWeight - yesterdayWeight).toFixed(1)
    : null

  const handleWeightSave = async () => {
    const val = parseFloat(weightInput)
    if (isNaN(val) || val < 20 || val > 300) {
      setWeightError('올바른 체중을 입력해주세요 (20–300 kg)')
      return
    }
    try {
      await weightService.saveWeight(val, TODAY)
      setTodayWeight(val)
      setShowWeightModal(false)
      setWeightInput('')
      setWeightError('')
    } catch (err) {
      setWeightError(err.message || '저장 중 오류가 발생했습니다.')
    }
  }

  const userName    = authUser?.name ?? userInfo?.user?.name ?? '사용자'
  const height      = userInfo?.static_info?.height ?? 0
  const weight      = todayWeight ?? userInfo?.dynamic_info?.weight ?? 0
  const bodyFatRate = userInfo?.dynamic_info?.body_fat_pct ?? 0
  const muscleMass  = userInfo?.dynamic_info?.muscle_mass ?? 0
  const targetWeight = goalData?.target_weight ?? 0
  const dailyCalories = goalData?.daily_kcal ?? 2000
  const proteinGoal  = goalData?.protein_g ?? 0
  const carbGoal     = goalData?.carb_g ?? 0
  const fatGoal      = goalData?.fat_g ?? 0
  const bmi          = height > 0 ? (weight / ((height / 100) ** 2)).toFixed(1) : '—'
  const caloriePct   = dailyCalories > 0 ? totalCaloriesEaten / dailyCalories : 0
  const netCalories  = dailyCalories - totalCaloriesEaten

  return (
    <div className="min-h-screen bg-[#0D1B2A]">

      {/* ── 헤더 ───────────────────────────────────────────── */}
      <div className="px-6 pt-8 pb-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-gray-400 text-sm mb-1">
              {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' })}
            </p>
            <h1 className="text-2xl font-bold text-white">
              안녕하세요, {userName} 님 👋
            </h1>
          </div>
          <span className="mt-1 flex items-center gap-1.5 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full">
            🔥 7일 연속
          </span>
        </div>
      </div>

      <div className="px-5 space-y-4 pb-8">

        {/* ── Row 1: 3열 grid ────────────────────────────── */}
        <div className="grid grid-cols-3 gap-4">

          {/* 공복 체중 */}
          <div className="bg-[#132236] rounded-xl border border-white/10 p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-400 text-xs">공복 체중</p>
              <button
                onClick={() => { setWeightInput(todayWeight ? String(todayWeight) : ''); setShowWeightModal(true) }}
                className="text-xs text-gray-400 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-lg transition"
              >
                {todayWeight == null ? '+ 입력' : '수정'}
              </button>
            </div>
            {todayWeight == null ? (
              <p className="text-3xl font-bold text-white mb-1">—</p>
            ) : (
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-white">{todayWeight}</span>
                <span className="text-gray-400 text-sm">kg</span>
                {weightDiff !== null && (
                  <span className={`text-sm font-medium ${
                    parseFloat(weightDiff) < 0 ? 'text-blue-400' :
                    parseFloat(weightDiff) > 0 ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {parseFloat(weightDiff) > 0 ? '+' : ''}{weightDiff}
                  </span>
                )}
              </div>
            )}
            <p className="text-gray-500 text-xs mb-3">목표 {targetWeight}kg · {Math.abs(weight - targetWeight).toFixed(1)}kg 남음</p>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${targetWeight > 0 ? Math.min(((weight - targetWeight) / Math.abs(weight - targetWeight + 0.01)) * 100, 100) : 0}%` }}
              />
            </div>
          </div>

          {/* 오늘의 칼로리 — 링 차트 */}
          <div className="bg-[#132236] rounded-xl border border-white/10 p-5 flex flex-col items-center justify-center">
            <p className="text-gray-400 text-xs mb-4 self-start">오늘의 칼로리</p>
            <RingProgress
              pct={caloriePct}
              color={caloriePct >= 1 ? '#ef4444' : '#3b82f6'}
            >
              <span className="text-xl font-bold text-white">
                {totalCaloriesEaten.toLocaleString()}
              </span>
              <span className="text-xs text-gray-400">/ {dailyCalories}</span>
            </RingProgress>
            <p className="text-xs text-gray-500 mt-3">kcal</p>
          </div>

          {/* 영양소 목표 */}
          <div className="bg-[#132236] rounded-xl border border-white/10 p-5">
            <p className="text-gray-400 text-xs mb-4">영양소 목표</p>
            <div className="space-y-3">
              <MacroBar label="단백질"   current={Math.round(macros.protein)} goal={proteinGoal} color="bg-blue-500" />
              <MacroBar label="탄수화물" current={Math.round(macros.carbs)}   goal={carbGoal}    color="bg-green-500" />
              <MacroBar label="지방"     current={Math.round(macros.fat)}     goal={fatGoal}     color="bg-orange-400" />
            </div>
          </div>
        </div>

        {/* ── Row 2: 2열 grid ────────────────────────────── */}
        <div className="grid grid-cols-2 gap-4">

          {/* 신체 지표 */}
          <div className="bg-[#132236] rounded-xl border border-white/10 p-5">
            <p className="text-gray-400 text-xs mb-4">신체 지표</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#1A2B3C] rounded-xl p-3">
                <p className="text-xs text-gray-400 mb-1">BMI</p>
                <p className="text-xl font-bold text-blue-400">{bmi}</p>
              </div>
              <div className="bg-[#1A2B3C] rounded-xl p-3">
                <p className="text-xs text-gray-400 mb-1">체지방률</p>
                <p className="text-xl font-bold text-orange-400">{bodyFatRate}%</p>
              </div>
              <div className="bg-[#1A2B3C] rounded-xl p-3">
                <p className="text-xs text-gray-400 mb-1">골격근량</p>
                <p className="text-xl font-bold text-white">{muscleMass} kg</p>
              </div>
              <div className="bg-[#1A2B3C] rounded-xl p-3">
                <p className="text-xs text-gray-400 mb-1">키</p>
                <p className="text-xl font-bold text-white">{height} cm</p>
              </div>
            </div>
          </div>

          {/* 칼로리 요약 */}
          <div className="bg-[#132236] rounded-xl border border-white/10 p-5">
            <p className="text-gray-400 text-xs mb-4">칼로리 요약</p>
            <div className="space-y-3">
              <CalorieRow label="섭취"   value={totalCaloriesEaten} color="text-blue-400" />
              <CalorieRow label="소모"   value={0}                  color="text-green-400" />
              <CalorieRow label="목표"   value={dailyCalories}      color="text-gray-500" />
              <div className="border-t border-white/10 pt-3">
                <CalorieRow
                  label="남은 칼로리"
                  value={netCalories}
                  color={netCalories >= 0 ? 'text-white' : 'text-red-400'}
                  bold
                />
              </div>
            </div>
            <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${caloriePct >= 1 ? 'bg-red-500' : 'bg-blue-500'}`}
                style={{ width: `${Math.min(caloriePct * 100, 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* ── Row 3: 바로가기 5열 ────────────────────────── */}
        <div className="grid grid-cols-5 gap-3">
          {[
            { label: '신체 정보',  sub: '키체중 입력',   icon: '👤', path: '/profile' },
            { label: '목표 설정',  sub: '나만의 목표',   icon: '🎯', path: '/profile' },
            { label: '일일 기록',  sub: '식단·운동',     icon: '📅', path: '/diet' },
            { label: '변화 추이',  sub: '그래프 보기',   icon: '📈', path: '/progress' },
            { label: '추천 플랜',  sub: 'AI 맞춤 식단', icon: '✨', path: '/recommend' },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="bg-[#132236] border border-white/10 rounded-xl p-4 text-center hover:bg-white/5 transition flex flex-col items-center gap-2"
            >
              <span className="text-2xl">{item.icon}</span>
              <p className="text-white text-xs font-medium">{item.label}</p>
              <p className="text-gray-500 text-xs">{item.sub}</p>
            </button>
          ))}
        </div>

        {/* ── 오늘의 식단 ───────────────────────────────── */}
        <div className="bg-[#132236] rounded-xl border border-white/10 p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-400 text-xs">오늘의 식단</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/recommend')}
                className="text-xs text-orange-400 hover:text-orange-300 font-medium transition"
              >
                식단 추천 →
              </button>
              <button
                onClick={() => navigate('/diet')}
                className="text-xs text-blue-400 hover:text-blue-300 font-medium transition"
              >
                기록하기 →
              </button>
            </div>
          </div>
          <div className="space-y-3">
            {['breakfast', 'lunch', 'dinner', 'snack'].map((type) => {
              const items = mealGroups[type]
              if (!items || items.length === 0) return null
              const total = items.reduce((s, m) => s + m.calories, 0)
              return (
                <div key={type} className="flex items-start gap-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-lg shrink-0 ${MEAL_COLOR[type]}`}>
                    {MEAL_LABEL[type]}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate">
                      {items.map((m) => m.foodName).join(', ')}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{total} kcal</p>
                  </div>
                </div>
              )
            })}
            {Object.values(mealGroups).every((g) => g.length === 0) && (
              <p className="text-sm text-gray-500 text-center py-4">오늘 식단 기록이 없어요</p>
            )}
          </div>
        </div>

        {/* ── 오늘의 운동 ───────────────────────────────── */}
        <div className="bg-[#132236] rounded-xl border border-white/10 p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-400 text-xs">오늘의 운동</p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-green-400 bg-green-500/20 px-2.5 py-1 rounded-full">
                -0 kcal
              </span>
              <button
                onClick={() => navigate('/workout')}
                className="text-xs text-green-400 hover:text-green-300 font-medium transition"
              >
                기록하기 →
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center py-4">오늘 운동 기록이 없어요</p>
        </div>

      </div>

      {/* ── 공복 체중 입력 모달 ─────────────────────────── */}
      {showWeightModal && (
        <div
          className="fixed inset-0 bg-black/60 flex items-end justify-center z-50 px-4 pb-6"
          onClick={(e) => { if (e.target === e.currentTarget) { setShowWeightModal(false); setWeightError('') } }}
        >
          <div className="w-full max-w-lg bg-[#132236] border border-white/10 rounded-2xl p-6">
            <h3 className="text-base font-bold text-white mb-1">공복 몸무게 입력</h3>
            <p className="text-xs text-gray-400 mb-5">{TODAY} 기준</p>

            <div className="relative mb-2">
              <input
                type="number"
                value={weightInput}
                onChange={(e) => { setWeightInput(e.target.value); setWeightError('') }}
                onKeyDown={(e) => e.key === 'Enter' && handleWeightSave()}
                placeholder="예) 74.5"
                min={20} max={300} step={0.1}
                autoFocus
                className="w-full px-4 py-3 pr-12 rounded-xl bg-[#1A2B3C] border border-white/10 text-white text-lg font-semibold outline-none focus:border-blue-500/60 transition placeholder:text-gray-600"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">kg</span>
            </div>
            {weightError && <p className="text-xs text-red-400 mb-3">{weightError}</p>}

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => { setShowWeightModal(false); setWeightError('') }}
                className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 transition"
              >
                취소
              </button>
              <button
                onClick={handleWeightSave}
                className="flex-1 py-3 rounded-xl bg-white text-[#0D1B2A] text-sm font-semibold transition"
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

function CalorieRow({ label, value, color, bold }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-gray-400">{label}</span>
      <span className={`text-sm ${bold ? 'font-bold' : 'font-medium'} ${color}`}>
        {value.toLocaleString()} kcal
      </span>
    </div>
  )
}
