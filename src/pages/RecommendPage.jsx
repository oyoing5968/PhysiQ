import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { foods } from '../mock'

const MEAL_TYPES = ['breakfast', 'lunch', 'dinner', 'snack']
const MEAL_LABEL = { breakfast: '아침', lunch: '점심', dinner: '저녁', snack: '간식' }

const MEAL_COLOR = {
  breakfast: { bg: 'bg-orange-50', badge: 'bg-orange-100 text-orange-600', btn: 'bg-orange-500 hover:bg-orange-600' },
  lunch:     { bg: 'bg-green-50',  badge: 'bg-green-100  text-green-600',  btn: 'bg-green-500  hover:bg-green-600'  },
  dinner:    { bg: 'bg-blue-50',   badge: 'bg-blue-100   text-blue-600',   btn: 'bg-blue-500   hover:bg-blue-600'   },
  snack:     { bg: 'bg-purple-50', badge: 'bg-purple-100 text-purple-600', btn: 'bg-purple-500 hover:bg-purple-600' },
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

// 끼니별 칼로리 배분 비율
const MEAL_CALORIE_RATIO = { breakfast: 0.25, lunch: 0.35, dinner: 0.30, snack: 0.10 }

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

    // 아침/점심/저녁: 단백질(40%) + 탄수화물(45%) + 채소·과일(15%)
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

  // localStorage에서 프로필 로드
  const profile = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('physiq_profile') || 'null')
    } catch {
      return null
    }
  }, [])

  // TDEE 및 목표 칼로리/매크로 계산
  const { tdee, targetCalories, targetProtein, targetCarbs, targetFat, goalLabel } = useMemo(() => {
    const fallback = { tdee: 2000, targetCalories: 1600, targetProtein: 140, targetCarbs: 160, targetFat: 44, goalLabel: '다이어트' }
    if (!profile) return fallback

    const w = parseFloat(profile.weight) || 70
    const h = parseFloat(profile.height) || 170

    // 생년월일로 만 나이 계산, 없으면 25세 기본값
    const age = (() => {
      if (!profile.birthDate) return 25
      const today = new Date()
      const birth = new Date(profile.birthDate)
      let a = today.getFullYear() - birth.getFullYear()
      const m = today.getMonth() - birth.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) a--
      return Math.max(10, Math.min(a, 120))
    })()

    // Mifflin-St Jeor: 남성 +5, 여성 -161
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

  // 식단 상태 — 초기값은 한 번만 계산
  const [plan, setPlan] = useState(() => buildMealPlan(targetCalories))

  const handleRegenerate = () => setPlan(buildMealPlan(targetCalories))

  // 해당 끼니를 localStorage에 저장 후 /diet로 이동
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

  // 프로필 없음 — 온보딩 안내 (훅은 모두 위에서 실행됐으므로 조건 반환 가능)
  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 gap-4">
        <p className="text-gray-600 text-center text-sm leading-relaxed">
          프로필이 없어요.<br />먼저 온보딩을 완료해주세요.
        </p>
        <button
          onClick={() => navigate('/onboarding')}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold"
        >
          온보딩 시작
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">

      {/* 헤더 */}
      <div className="bg-white border-b border-gray-100 px-4 pt-12 pb-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-1.5 rounded-lg hover:bg-gray-100 transition text-gray-500"
            >
              ←
            </button>
            <div>
              <h1 className="text-lg font-bold text-gray-800">오늘의 추천 식단</h1>
              <p className="text-xs text-gray-400">{goalLabel} 목표 기반</p>
            </div>
          </div>
          <button
            onClick={handleRegenerate}
            className="text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-xl transition"
          >
            다시 추천
          </button>
        </div>
      </div>

      <div className="px-4 pt-4 space-y-4">

        {/* 목표 요약 카드 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs text-gray-400">목표 칼로리</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gray-800">{targetCalories.toLocaleString()}</span>
                <span className="text-sm text-gray-400">kcal</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">TDEE {tdee.toLocaleString()} kcal 기준</p>
            </div>
            <span className="text-xs font-bold px-3 py-1.5 bg-blue-50 text-blue-600 rounded-xl">{goalLabel}</span>
          </div>
          <div className="flex gap-2">
            <MacroStat label="탄수화물" value={targetCarbs}   color="text-amber-500" />
            <MacroStat label="단백질"   value={targetProtein} color="text-blue-500"  />
            <MacroStat label="지방"     value={targetFat}     color="text-rose-400"  />
          </div>
        </div>

        {/* 끼니 카드 */}
        {MEAL_TYPES.map((mealType) => {
          const items      = plan[mealType]
          const colors     = MEAL_COLOR[mealType]
          const totalCal   = items.reduce((s, i) => s + i.calories, 0)
          const totProtein = Math.round(items.reduce((s, i) => s + i.protein, 0) * 10) / 10
          const totCarbs   = Math.round(items.reduce((s, i) => s + i.carbs,   0) * 10) / 10
          const totFat     = Math.round(items.reduce((s, i) => s + i.fat,     0) * 10) / 10

          return (
            <div key={mealType} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

              {/* 카드 헤더 */}
              <div className={`flex items-center justify-between px-4 py-3 ${colors.bg}`}>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${colors.badge}`}>
                  {MEAL_LABEL[mealType]}
                </span>
                <span className="text-xs font-semibold text-gray-600">{totalCal} kcal</span>
              </div>

              {/* 음식 목록 */}
              <ul className="divide-y divide-gray-50 px-4">
                {items.map((item) => (
                  <li key={item.id} className="py-3 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">{item.food.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.amount}g · {item.calories} kcal</p>
                    </div>
                    <div className="flex gap-2 text-xs shrink-0">
                      <span className="text-blue-500">단 {item.protein}g</span>
                      <span className="text-amber-500">탄 {item.carbs}g</span>
                      <span className="text-rose-400">지 {item.fat}g</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* 끼니 합계 + 추가 버튼 */}
              <div className="px-4 pb-4 pt-2">
                <div className="flex gap-3 text-xs text-gray-400 mb-3">
                  <span>단백질 {totProtein}g</span>
                  <span>탄수화물 {totCarbs}g</span>
                  <span>지방 {totFat}g</span>
                </div>
                <button
                  onClick={() => handleAddMeal(mealType)}
                  className={`w-full py-2.5 rounded-xl text-white text-sm font-semibold transition ${colors.btn}`}
                >
                  오늘 식단에 추가
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function MacroStat({ label, value, color }) {
  return (
    <div className="flex-1 bg-gray-50 rounded-xl px-3 py-2 text-center">
      <p className={`text-base font-bold ${color}`}>{value}g</p>
      <p className="text-xs text-gray-400 mt-0.5">{label}</p>
    </div>
  )
}
