import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { foods } from '../mock'

const MEAL_TYPES = ['breakfast', 'lunch', 'dinner', 'snack']
const MEAL_LABEL = { breakfast: '아침', lunch: '점심', dinner: '저녁', snack: '간식' }

const MEAL_COLOR = {
  breakfast: { badge: 'bg-orange-500/20 text-orange-400', border: 'border-l-orange-500/40' },
  lunch:     { badge: 'bg-green-500/20  text-green-400',  border: 'border-l-green-500/40'  },
  dinner:    { badge: 'bg-blue-500/20   text-blue-400',   border: 'border-l-blue-500/40'   },
  snack:     { badge: 'bg-purple-500/20 text-purple-400', border: 'border-l-purple-500/40' },
}

const ACTIVITY_MULTIPLIER = {
  '거의 안 함':  1.2,
  '주 1-2회':   1.375,
  '주 3-4회':   1.55,
  '주 5회 이상': 1.725,
}

const GOAL_CONFIG = {
  diet:         { label: '다이어트',  delta: -400, ratio: { carbs: 0.40, protein: 0.35, fat: 0.25 } },
  cutting:      { label: '다이어트',  delta: -400, ratio: { carbs: 0.40, protein: 0.35, fat: 0.25 } },
  dirty_bulkup: { label: '벌크업',    delta: +400, ratio: { carbs: 0.50, protein: 0.30, fat: 0.20 } },
  lean_massup:  { label: '린매스업',  delta: +150, ratio: { carbs: 0.45, protein: 0.30, fat: 0.25 } },
  recomp:       { label: '체형 개선', delta:    0, ratio: { carbs: 0.40, protein: 0.35, fat: 0.25 } },
}

const MEAL_CALORIE_RATIO = { breakfast: 0.25, lunch: 0.35, dinner: 0.30, snack: 0.10 }

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

function groupByCategory(foodList) {
  return foodList.reduce((acc, food) => {
    if (!acc[food.category]) acc[food.category] = []
    acc[food.category].push(food)
    return acc
  }, {})
}

function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function buildMealPlan(targetCalories) {
  const byCategory = groupByCategory(foods)
  let counter = Date.now()

  const makeEntry = (mealType, food, targetCal) => {
    const amount = Math.max(10, Math.round((targetCal / food.calories) * food.servingSize))
    const ratio  = amount / food.servingSize
    return {
      id:       counter++,
      mealType,
      food,
      amount,
      calories: Math.round(food.calories * ratio),
      protein:  Math.round(food.protein  * ratio * 10) / 10,
      carbs:    Math.round(food.carbs    * ratio * 10) / 10,
      fat:      Math.round(food.fat      * ratio * 10) / 10,
    }
  }

  const plan = {}
  MEAL_TYPES.forEach((mealType) => {
    const mealCal = Math.round(targetCalories * MEAL_CALORIE_RATIO[mealType])

    if (mealType === 'snack') {
      const pool = [...(byCategory['과일'] || []), ...(byCategory['보충제'] || [])]
      plan[mealType] = [makeEntry(mealType, randomPick(pool), mealCal)]
      return
    }

    const proteinFood = randomPick(byCategory['단백질'] || [])
    const carbFood    = randomPick(byCategory['탄수화물'] || [])
    const extraPool   = mealType === 'breakfast'
      ? [...(byCategory['과일'] || []), ...(byCategory['채소'] || [])]
      : [...(byCategory['채소'] || []), ...(byCategory['과일'] || [])]

    plan[mealType] = [
      makeEntry(mealType, proteinFood, mealCal * 0.40),
      makeEntry(mealType, carbFood,    mealCal * 0.45),
      makeEntry(mealType, randomPick(extraPool), mealCal * 0.15),
    ]
  })

  return plan
}

export default function RecommendPage() {
  const navigate = useNavigate()

  const profile = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('physiq_profile') || 'null')
    } catch {
      return null
    }
  }, [])

  const { tdee, targetCalories, targetProtein, targetCarbs, targetFat, goalLabel } = useMemo(() => {
    const fallback = { tdee: 2000, targetCalories: 1600, targetProtein: 140, targetCarbs: 160, targetFat: 44, goalLabel: '다이어트' }
    if (!profile) return fallback

    const w = parseFloat(profile.weight) || 70
    const h = parseFloat(profile.height) || 170

    const age = (() => {
      if (!profile.birthDate) return 25
      const today = new Date()
      const birth = new Date(profile.birthDate)
      let a = today.getFullYear() - birth.getFullYear()
      const m = today.getMonth() - birth.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) a--
      return Math.max(10, Math.min(a, 120))
    })()

    const genderOffset = profile.gender === 'female' ? -161 : 5
    const bmr = 10 * w + 6.25 * h - 5 * age + genderOffset
    const multiplier = ACTIVITY_MULTIPLIER[profile.exerciseVolume] || 1.375
    const tdee = Math.round(bmr * multiplier)

    const config = GOAL_CONFIG[profile.goal] || GOAL_CONFIG['diet']
    const targetCal = Math.max(1200, tdee + config.delta)

    return {
      tdee,
      targetCalories: targetCal,
      targetProtein:  Math.round((targetCal * config.ratio.protein) / 4),
      targetCarbs:    Math.round((targetCal * config.ratio.carbs)   / 4),
      targetFat:      Math.round((targetCal * config.ratio.fat)     / 9),
      goalLabel:      config.label,
    }
  }, [profile])

  const [plan, setPlan] = useState(() => buildMealPlan(targetCalories))

  const handleRegenerate = () => setPlan(buildMealPlan(targetCalories))

  const handleAddMeal = (mealType) => {
    let existing = []
    try { existing = JSON.parse(localStorage.getItem('physiq_today_meals') || '[]') } catch { /* noop */ }

    const merged = [
      ...existing.filter((item) => item.mealType !== mealType),
      ...plan[mealType],
    ]
    localStorage.setItem('physiq_today_meals', JSON.stringify(merged))
    navigate('/diet')
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-[#0D1B2A] flex flex-col items-center justify-center px-6 gap-4">
        <p className="text-gray-400 text-center text-sm leading-relaxed">
          프로필이 없어요.<br />먼저 온보딩을 완료해주세요.
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
              const items      = plan[mealType]
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
                      className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-medium transition"
                    >
                      오늘 식단에 추가
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* 간식: 전체 너비 */}
          {(() => {
            const mealType  = 'snack'
            const items     = plan[mealType]
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
                    className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium transition"
                  >
                    오늘 식단에 추가
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
          onClick={() => {
            MEAL_TYPES.forEach((t) => handleAddMeal(t))
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
