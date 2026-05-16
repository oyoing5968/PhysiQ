import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as dietService from '../services/dietService'
import * as goalService from '../services/goalService'

const TODAY = new Date().toISOString().split('T')[0]

const MEAL_TYPES = ['breakfast', 'lunch', 'dinner', 'snack']
const MEAL_LABEL = { breakfast: '아침', lunch: '점심', dinner: '저녁', snack: '간식' }

const MEAL_COLOR = {
  breakfast: { badge: 'bg-orange-500/20 text-orange-400', border: 'border-l-orange-500/40' },
  lunch:     { badge: 'bg-green-500/20  text-green-400',  border: 'border-l-green-500/40'  },
  dinner:    { badge: 'bg-blue-500/20   text-blue-400',   border: 'border-l-blue-500/40'   },
  snack:     { badge: 'bg-purple-500/20 text-purple-400', border: 'border-l-purple-500/40' },
}

const GOAL_LABEL = {
  diet:        '다이어트',
  cutting:     '컷팅',
  dirty_bulk:  '벌크업',
  lean_mass:   '린매스업',
  bulk:        '벌크',
  recomp:      '리컴프',
}

const CARDIO = [
  { name: '러닝 (트레드밀)', duration: '30분', calories: 300, desc: '중간 강도' },
  { name: '사이클링',        duration: '45분', calories: 350, desc: '낮은 강도' },
  { name: '줄넘기',          duration: '20분', calories: 200, desc: '높은 강도' },
]

const STRENGTH = [
  { name: '스쿼트',     info: '3세트 × 12회', calories: 150, desc: '하체' },
  { name: '벤치프레스', info: '3세트 × 10회', calories: 120, desc: '가슴' },
  { name: '데드리프트', info: '3세트 × 8회',  calories: 180, desc: '등/허리' },
]

function normalizeRecommendation(apiRecommendations) {
  const plan = {}
  let counter = Date.now()
  for (const mealType of MEAL_TYPES) {
    const group = apiRecommendations?.[mealType]?.foods ?? []
    plan[mealType] = group.map((f) => ({
      id:       counter++,
      mealType,
      food_id:  f.food_id,
      food: {
        name:        f.name,
        category:    f.category,
        servingSize: 100,
        calories:    f.kcal_per_100g ?? 0,
      },
      amount:   f.recommended_g,
      calories: f.estimated_kcal,
      protein:  f.protein,
      carbs:    f.carb,
      fat:      f.fat,
    }))
  }
  return plan
}

export default function RecommendPage() {
  const navigate = useNavigate()

  const [plan, setPlan]         = useState(null)
  const [goalData, setGoalData] = useState(null)
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState('')
  const [adding, setAdding]     = useState({})

  const loadData = async () => {
    setLoading(true)
    setError('')
    try {
      const [recRes, goalRes] = await Promise.allSettled([
        dietService.recommendDiet(),
        goalService.getGoal(),
      ])

      if (recRes.status === 'fulfilled') {
        setPlan(normalizeRecommendation(recRes.value.recommendations))
      } else {
        setError(recRes.reason?.message || '추천 식단을 불러오지 못했습니다.')
      }

      if (goalRes.status === 'fulfilled') {
        setGoalData(goalRes.value.data)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleRegenerate = () => loadData()

  const handleAddMeal = async (mealType) => {
    if (!plan?.[mealType]?.length) return
    setAdding((prev) => ({ ...prev, [mealType]: true }))
    try {
      const foods = plan[mealType].map((item) => ({
        food_id:       item.food_id,
        amount_g:      item.amount,
        estimated_kcal: item.calories,
      }))
      await dietService.saveDietLog(mealType, foods, TODAY)
      navigate('/diet')
    } catch (err) {
      alert(err.message || '식단 추가에 실패했습니다.')
    } finally {
      setAdding((prev) => ({ ...prev, [mealType]: false }))
    }
  }

  const tdee           = goalData?.tdee        ?? 0
  const targetCalories = goalData?.daily_kcal  ?? 0
  const targetProtein  = goalData?.protein_g   ?? 0
  const targetCarbs    = goalData?.carb_g      ?? 0
  const targetFat      = goalData?.fat_g       ?? 0
  const goalLabel      = GOAL_LABEL[goalData?.goal_type] ?? '목표 없음'

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0D1B2A] flex items-center justify-center">
        <p className="text-gray-400 text-sm">추천 식단을 불러오는 중...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0D1B2A] flex flex-col items-center justify-center px-6 gap-4">
        <p className="text-gray-400 text-center text-sm leading-relaxed">
          {error}<br />먼저 목표를 설정해주세요.
        </p>
        <button
          onClick={() => navigate('/onboarding')}
          className="px-6 py-2.5 bg-white text-[#0D1B2A] rounded-xl text-sm font-semibold"
        >
          온보딩 시작
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0D1B2A]">

      {/* 헤더 */}
      <div className="bg-[#0D1B2A] border-b border-white/10 px-6 pt-8 pb-4 sticky top-0 z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-white">맞춤형 플랜</h1>
            <p className="text-gray-400 text-xs mt-0.5">당신만을 위한 완벽한 가이드</p>
          </div>
          <div className="flex gap-2 flex-wrap justify-end items-center">
            <StatChip label="목표" value={goalLabel} valueColor="text-green-400" />
            <StatChip label="TDEE" value={`${tdee.toLocaleString()} kcal`} valueColor="text-blue-400" />
            <StatChip label="목표 칼로리" value={`${targetCalories.toLocaleString()} kcal`} valueColor="text-white" />
            <button
              onClick={handleRegenerate}
              className="text-xs font-semibold text-gray-300 bg-white/10 hover:bg-white/20 border border-white/10 px-3 py-1.5 rounded-xl transition"
            >
              다시 추천
            </button>
          </div>
        </div>
      </div>

      <div className="px-5 pt-4 pb-8 space-y-6">

        {/* 오늘의 영양 목표 */}
        <div className="bg-[#132236] rounded-xl border border-white/10 p-4">
          <p className="text-gray-400 text-xs mb-3">오늘의 영양 목표</p>
          <div className="flex gap-3">
            <MacroStat label="탄수화물" value={targetCarbs}   color="text-green-400" />
            <MacroStat label="단백질"   value={targetProtein} color="text-blue-400"  />
            <MacroStat label="지방"     value={targetFat}     color="text-orange-400" />
          </div>
        </div>

        {/* 추천 식단 */}
        <div>
          <p className="text-white text-sm font-semibold mb-3">추천 식단</p>

          {/* 아침 / 점심 / 저녁: 3열 */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {['breakfast', 'lunch', 'dinner'].map((mealType) => {
              const items      = plan?.[mealType] ?? []
              const colors     = MEAL_COLOR[mealType]
              const totalCal   = items.reduce((s, i) => s + i.calories, 0)
              const totProtein = Math.round(items.reduce((s, i) => s + i.protein, 0) * 10) / 10
              const totCarbs   = Math.round(items.reduce((s, i) => s + i.carbs,   0) * 10) / 10
              const totFat     = Math.round(items.reduce((s, i) => s + i.fat,     0) * 10) / 10

              return (
                <div key={mealType} className={`bg-[#132236] rounded-xl border border-white/10 border-l-2 ${colors.border} overflow-hidden`}>
                  <div className="flex items-center justify-between px-4 py-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${colors.badge}`}>
                      {MEAL_LABEL[mealType]}
                    </span>
                    <span className="text-xs font-semibold text-orange-400">🔥 {totalCal} kcal</span>
                  </div>
                  <ul className="divide-y divide-white/5 px-4">
                    {items.map((item) => (
                      <li key={item.id} className="py-2.5">
                        <p className="text-sm font-medium text-white truncate">{item.food.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.amount}g · {item.calories} kcal</p>
                        <div className="flex gap-2 text-xs mt-0.5">
                          <span className="text-blue-400">단 {item.protein}g</span>
                          <span className="text-green-400">탄 {item.carbs}g</span>
                          <span className="text-orange-400">지 {item.fat}g</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="px-4 pb-4 pt-2">
                    <div className="flex gap-3 text-xs text-gray-500 mb-2">
                      <span className="text-blue-400">P {totProtein}g</span>
                      <span className="text-green-400">C {totCarbs}g</span>
                      <span className="text-orange-400">F {totFat}g</span>
                    </div>
                    <button
                      onClick={() => handleAddMeal(mealType)}
                      disabled={adding[mealType]}
                      className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-medium transition disabled:opacity-50"
                    >
                      {adding[mealType] ? '추가 중...' : '오늘 식단에 추가'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* 간식: 전체 너비 */}
          {(() => {
            const mealType  = 'snack'
            const items     = plan?.[mealType] ?? []
            const colors    = MEAL_COLOR[mealType]
            const totalCal  = items.reduce((s, i) => s + i.calories, 0)
            return (
              <div className={`bg-[#132236] rounded-xl border border-white/10 border-l-2 ${colors.border} overflow-hidden`}>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${colors.badge}`}>
                    {MEAL_LABEL[mealType]}
                  </span>
                  <span className="text-xs font-semibold text-orange-400">🔥 {totalCal} kcal</span>
                </div>
                <ul className="divide-y divide-white/5 px-4">
                  {items.map((item) => (
                    <li key={item.id} className="py-2.5 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-white">{item.food.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.amount}g · {item.calories} kcal</p>
                      </div>
                      <div className="flex gap-2 text-xs shrink-0">
                        <span className="text-blue-400">단 {item.protein}g</span>
                        <span className="text-green-400">탄 {item.carbs}g</span>
                        <span className="text-orange-400">지 {item.fat}g</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="px-4 pb-4 pt-2">
                  <button
                    onClick={() => handleAddMeal(mealType)}
                    disabled={adding[mealType]}
                    className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium transition disabled:opacity-50"
                  >
                    {adding[mealType] ? '추가 중...' : '오늘 식단에 추가'}
                  </button>
                </div>
              </div>
            )
          })()}
        </div>

        {/* 추천 운동 */}
        <div>
          <p className="text-white text-sm font-semibold mb-3">추천 운동</p>
          <div className="grid grid-cols-2 gap-4">

            {/* 유산소 */}
            <div className="bg-[#132236] rounded-xl border border-white/10 p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-red-500/20 text-red-400">유산소</span>
              </div>
              <div className="space-y-2">
                {CARDIO.map((w) => (
                  <div key={w.name} className="bg-[#1A2B3C] rounded-xl px-3 py-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-white">{w.name}</p>
                      <span className="text-xs text-orange-400 font-medium">-{w.calories} kcal</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">{w.duration} · {w.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 근력 운동 */}
            <div className="bg-[#132236] rounded-xl border border-white/10 p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-400">근력운동</span>
              </div>
              <div className="space-y-2">
                {STRENGTH.map((w) => (
                  <div key={w.name} className="bg-[#1A2B3C] rounded-xl px-3 py-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-white">{w.name}</p>
                      <span className="text-xs text-orange-400 font-medium">-{w.calories} kcal</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">{w.info} · {w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 전체 추가 CTA */}
        <button
          onClick={async () => {
            for (const t of MEAL_TYPES) await handleAddMeal(t)
          }}
          className="w-full py-4 rounded-xl bg-white text-[#0D1B2A] font-semibold text-sm transition hover:bg-gray-100"
        >
          오늘부터 시작하기 →
        </button>
        <p className="text-center text-xs text-gray-500">
          🔍 매일 꾸준히 기록하면 더 정확한 추천을 받을 수 있어요
        </p>
      </div>
    </div>
  )
}

function StatChip({ label, value, valueColor }) {
  return (
    <div className="bg-[#132236] border border-white/10 rounded-lg px-3 py-1.5 text-xs">
      <span className="text-gray-400">{label} </span>
      <span className={`font-semibold ${valueColor}`}>{value}</span>
    </div>
  )
}

function MacroStat({ label, value, color }) {
  return (
    <div className="flex-1 bg-[#1A2B3C] rounded-xl px-3 py-2.5 text-center">
      <p className={`text-base font-bold ${color}`}>{value}g</p>
      <p className="text-xs text-gray-500 mt-0.5">{label}</p>
    </div>
  )
}
