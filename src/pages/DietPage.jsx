import { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { foods } from '../mock'
import * as dietService from '../services/dietService'
import * as goalService from '../services/goalService'

const TODAY = new Date().toISOString().split('T')[0]

const MEAL_TYPES = ['breakfast', 'lunch', 'dinner', 'snack']
const MEAL_LABEL = { breakfast: '아침', lunch: '점심', dinner: '저녁', snack: '간식' }

const MEAL_COLOR = {
  breakfast: { border: 'border-orange-500/40', badge: 'bg-orange-500/20 text-orange-400', btn: 'text-orange-400 border-orange-500/30 hover:bg-orange-500/10' },
  lunch:     { border: 'border-green-500/40',  badge: 'bg-green-500/20  text-green-400',  btn: 'text-green-400  border-green-500/30  hover:bg-green-500/10'  },
  dinner:    { border: 'border-blue-500/40',   badge: 'bg-blue-500/20   text-blue-400',   btn: 'text-blue-400   border-blue-500/30   hover:bg-blue-500/10'   },
  snack:     { border: 'border-purple-500/40', badge: 'bg-purple-500/20 text-purple-400', btn: 'text-purple-400 border-purple-500/30 hover:bg-purple-500/10' },
}

function normalizeDietLog(log) {
  const protein = Math.round((log.amount_g / 100) * (log.Food?.protein ?? 0) * 10) / 10
  const carbs   = Math.round((log.amount_g / 100) * (log.Food?.carb   ?? 0) * 10) / 10
  const fat     = Math.round((log.amount_g / 100) * (log.Food?.fat    ?? 0) * 10) / 10
  return {
    id:       log.log_id ?? log.id ?? Date.now(),
    mealType: log.meal_type,
    food: {
      name:        log.Food?.name     ?? '알 수 없음',
      brand:       null,
      servingSize: 100,
      calories:    log.Food?.kcal     ?? 0,
      category:    log.Food?.category ?? '',
    },
    amount:   log.amount_g,
    calories: log.estimated_kcal ?? 0,
    protein,
    carbs,
    fat,
  }
}

function MacroBar({ label, current, goal: g, color }) {
  const pct = g > 0 ? Math.min((current / g) * 100, 100) : 0
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="font-medium text-white">{label}</span>
        <span className="text-gray-400">{Math.round(current)}g <span className="text-gray-600">/ {g}g</span></span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default function DietPage() {
  const navigate = useNavigate()

  const [logs, setLogs]       = useState([])
  const [goalData, setGoalData] = useState(null)

  const [activeMealType, setActiveMealType] = useState(null)
  const [query,          setQuery]          = useState('')
  const [selectedFood,   setSelectedFood]   = useState(null)
  const [amountInput,    setAmountInput]    = useState('')
  const [amountError,    setAmountError]    = useState('')

  useEffect(() => {
    const load = async () => {
      const [dietRes, goalRes] = await Promise.allSettled([
        dietService.getDietLogs(TODAY),
        goalService.getGoal(),
      ])

      if (dietRes.status === 'fulfilled') {
        const d = dietRes.value
        const allLogs = []
        for (const type of MEAL_TYPES) {
          const group = d.meals?.[type] ?? []
          group.forEach((log) => allLogs.push(normalizeDietLog({ ...log, meal_type: type })))
        }
        setLogs(allLogs)
      }

      if (goalRes.status === 'fulfilled') {
        setGoalData(goalRes.value.data)
      }
    }
    load()
  }, [])

  const dailyCalories = goalData?.daily_kcal  ?? 2000
  const proteinGoal   = goalData?.protein_g   ?? 0
  const carbGoal      = goalData?.carb_g      ?? 0
  const fatGoal       = goalData?.fat_g       ?? 0

  const isModalOpen  = activeMealType !== null
  const isAmountStep = selectedFood !== null

  const filteredFoods = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return foods
    return foods.filter(
      (f) => f.name.toLowerCase().includes(q) || (f.brand ?? '').toLowerCase().includes(q)
    )
  }, [query])

  const handleSelectFood = (food) => {
    setSelectedFood(food)
    setAmountInput(String(food.servingSize))
    setAmountError('')
  }

  const handleAddFood = () => {
    const val = parseFloat(amountInput)
    if (isNaN(val) || val <= 0) {
      setAmountError('올바른 섭취량을 입력해주세요')
      return
    }
    const ratio = val / selectedFood.servingSize
    const newLog = {
      id: Date.now(),
      mealType: activeMealType,
      food: selectedFood,
      amount: val,
      calories: Math.round(selectedFood.calories * ratio),
      protein:  Math.round(selectedFood.protein  * ratio * 10) / 10,
      carbs:    Math.round(selectedFood.carbs    * ratio * 10) / 10,
      fat:      Math.round(selectedFood.fat      * ratio * 10) / 10,
    }
    setLogs((prev) => [...prev, newLog])
    closeModal()
  }

  const closeModal = () => {
    setActiveMealType(null)
    setQuery('')
    setSelectedFood(null)
    setAmountInput('')
    setAmountError('')
  }

  const handleDelete = (id) => setLogs((prev) => prev.filter((l) => l.id !== id))

  const logsByMeal = useMemo(() => {
    const map = {}
    for (const t of MEAL_TYPES) map[t] = []
    for (const l of logs) map[l.mealType].push(l)
    return map
  }, [logs])

  const totalCalories = useMemo(() => logs.reduce((s, l) => s + l.calories, 0), [logs])
  const caloriePct    = dailyCalories > 0 ? Math.min(totalCalories / dailyCalories, 1) : 0

  const totalMacros = useMemo(() => logs.reduce(
    (acc, l) => ({ protein: acc.protein + l.protein, carbs: acc.carbs + l.carbs, fat: acc.fat + l.fat }),
    { protein: 0, carbs: 0, fat: 0 }
  ), [logs])

  const preview = useMemo(() => {
    if (!selectedFood) return null
    const val = parseFloat(amountInput)
    if (isNaN(val) || val <= 0) return null
    const ratio = val / selectedFood.servingSize
    return {
      calories: Math.round(selectedFood.calories * ratio),
      protein:  Math.round(selectedFood.protein  * ratio * 10) / 10,
      carbs:    Math.round(selectedFood.carbs    * ratio * 10) / 10,
      fat:      Math.round(selectedFood.fat      * ratio * 10) / 10,
    }
  }, [selectedFood, amountInput])

  return (
    <div className="min-h-screen bg-[#0D1B2A]">

      {/* 헤더 */}
      <div className="bg-[#0D1B2A] border-b border-white/10 px-6 pt-8 pb-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">오늘의 기록</h1>
            <p className="text-gray-400 text-xs mt-0.5">{TODAY}</p>
          </div>
          <button
            onClick={() => setActiveMealType('breakfast')}
            className="flex items-center gap-1.5 bg-white text-[#0D1B2A] text-sm font-semibold px-4 py-2 rounded-xl transition hover:bg-gray-100"
          >
            <span>+</span> 기록 추가
          </button>
        </div>
      </div>

      {/* 메인 레이아웃: 좌측 패널 + 우측 콘텐츠 */}
      <div className="grid grid-cols-[280px_1fr] gap-4 px-5 pt-4 pb-8">

        {/* ── 좌측 패널 (sticky) ─────────────────────────── */}
        <div className="sticky top-[73px] self-start space-y-3">

          {/* 칼로리 요약 */}
          <div className="bg-[#132236] rounded-xl border border-white/10 p-4">
            <p className="text-gray-400 text-xs mb-3">칼로리 요약</p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-3xl font-bold text-white">{totalCalories.toLocaleString()}</span>
              <span className="text-gray-400 text-sm">/ {dailyCalories.toLocaleString()} kcal</span>
            </div>
            <p className={`text-xs font-medium mb-3 ${dailyCalories - totalCalories >= 0 ? 'text-blue-400' : 'text-red-400'}`}>
              {dailyCalories - totalCalories >= 0
                ? `${(dailyCalories - totalCalories).toLocaleString()} kcal 남음`
                : `${Math.abs(dailyCalories - totalCalories).toLocaleString()} kcal 초과`
              }
            </p>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${caloriePct >= 1 ? 'bg-red-400' : 'bg-blue-500'}`}
                style={{ width: `${caloriePct * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1.5">
              <span>{Math.round(caloriePct * 100)}% 달성</span>
              <span>목표 {dailyCalories.toLocaleString()} kcal</span>
            </div>
          </div>

          {/* 영양소 */}
          <div className="bg-[#132236] rounded-xl border border-white/10 p-4">
            <p className="text-gray-400 text-xs mb-3">영양소</p>
            <div className="space-y-3">
              <MacroBar label="단백질"   current={totalMacros.protein} goal={proteinGoal} color="bg-blue-500" />
              <MacroBar label="탄수화물" current={totalMacros.carbs}   goal={carbGoal}    color="bg-green-500" />
              <MacroBar label="지방"     current={totalMacros.fat}     goal={fatGoal}     color="bg-orange-400" />
            </div>
          </div>

          {/* 수분 섭취 */}
          <div className="bg-[#132236] rounded-xl border border-white/10 p-4">
            <p className="text-gray-400 text-xs mb-3">수분 섭취</p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-2xl font-bold text-blue-400">1.2</span>
              <span className="text-gray-400 text-sm">/ 2.0 L</span>
            </div>
            <div className="flex gap-1.5">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-2 rounded-full ${i < 5 ? 'bg-blue-500' : 'bg-white/10'}`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-1.5">5 / 8 잔</p>
          </div>
        </div>

        {/* ── 우측: 식단 카드 + 운동 ─────────────────────── */}
        <div className="space-y-4">

          {/* 끼니 2×2 grid */}
          <div className="grid grid-cols-2 gap-3">
            {MEAL_TYPES.map((type) => {
              const items  = logsByMeal[type]
              const total  = items.reduce((s, l) => s + l.calories, 0)
              const colors = MEAL_COLOR[type]
              return (
                <div key={type} className={`bg-[#132236] rounded-xl border border-white/10 overflow-hidden border-l-2 ${colors.border}`}>

                  {/* 끼니 헤더 */}
                  <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${colors.badge}`}>
                        {MEAL_LABEL[type]}
                      </span>
                      {total > 0 && (
                        <span className="text-xs text-gray-400 font-medium">🔥 {total} kcal</span>
                      )}
                    </div>
                    <button
                      onClick={() => setActiveMealType(type)}
                      className={`flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg border transition ${colors.btn}`}
                    >
                      <span className="text-base leading-none">+</span> 추가
                    </button>
                  </div>

                  {/* 음식 목록 */}
                  {items.length === 0 ? (
                    <p className="text-xs text-gray-600 text-center py-4">
                      아직 기록된 음식이 없어요
                    </p>
                  ) : (
                    <ul className="divide-y divide-white/5">
                      {items.map((log) => (
                        <li key={log.id} className="flex items-center gap-3 px-4 py-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium text-white truncate">{log.food.name}</p>
                              {log.food.brand && (
                                <span className="text-xs text-gray-500 shrink-0">{log.food.brand}</span>
                              )}
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">{log.amount}g</p>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-xs font-semibold text-white">{log.calories} kcal</span>
                              <MacroChip label="단" value={log.protein} color="text-blue-400" />
                              <MacroChip label="탄" value={log.carbs}   color="text-green-400" />
                              <MacroChip label="지" value={log.fat}     color="text-orange-400" />
                            </div>
                          </div>
                          <button
                            onClick={() => handleDelete(log.id)}
                            className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-gray-600 hover:text-red-400 hover:bg-red-500/10 transition text-lg"
                          >
                            ×
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>

          {/* 오늘의 운동 */}
          <div className="bg-[#132236] rounded-xl border border-white/10 p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-400 text-xs">오늘의 운동</p>
              <button
                onClick={() => navigate('/workout')}
                className="text-xs text-green-400 hover:text-green-300 font-medium transition"
              >
                기록하기 →
              </button>
            </div>
            <p className="text-sm text-gray-600 text-center py-4">오늘 운동 기록이 없어요</p>
          </div>
        </div>
      </div>

      {/* 음식 추가 모달 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-end justify-center z-50"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
        >
          <div
            className="w-full max-w-lg bg-[#132236] border border-white/10 rounded-t-2xl shadow-xl flex flex-col"
            style={{ maxHeight: '85vh' }}
          >
            {/* 모달 헤더 */}
            <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2">
                {isAmountStep && (
                  <button
                    onClick={() => { setSelectedFood(null); setAmountInput(''); setAmountError('') }}
                    className="text-gray-400 hover:text-white text-sm mr-1 transition"
                  >
                    ←
                  </button>
                )}
                <h3 className="text-base font-bold text-white">
                  {isAmountStep ? '섭취량 입력' : `${MEAL_LABEL[activeMealType]} 음식 추가`}
                </h3>
              </div>
              <button onClick={closeModal} className="text-gray-400 hover:text-white text-xl w-8 h-8 flex items-center justify-center transition">×</button>
            </div>

            {/* STEP 1: 음식 검색 */}
            {!isAmountStep && (
              <>
                <div className="px-4 py-3 shrink-0">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="음식 이름으로 검색"
                    autoFocus
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1A2B3C] border border-white/10 text-white text-sm placeholder:text-gray-500 outline-none focus:border-blue-500/60 transition"
                  />
                </div>
                <ul className="overflow-y-auto flex-1 px-4 pb-4 space-y-1">
                  {filteredFoods.length === 0 ? (
                    <li className="text-sm text-gray-500 text-center py-8">검색 결과가 없어요</li>
                  ) : (
                    filteredFoods.map((food) => (
                      <li key={food.id}>
                        <button
                          onClick={() => handleSelectFood(food)}
                          className="w-full flex items-center justify-between px-3 py-3 rounded-xl bg-[#1A2B3C] hover:bg-white/5 transition text-left"
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-white">{food.name}</span>
                              {food.brand && (
                                <span className="text-xs text-gray-500">{food.brand}</span>
                              )}
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">
                              1회 제공량 {food.servingSize}g
                            </p>
                          </div>
                          <div className="shrink-0 text-right ml-3">
                            <p className="text-sm font-semibold text-white">{food.calories} kcal</p>
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                              food.category === '단백질'   ? 'bg-blue-500/20 text-blue-400'       :
                              food.category === '탄수화물' ? 'bg-green-500/20 text-green-400'     :
                              food.category === '지방'     ? 'bg-orange-500/20 text-orange-400'   :
                              food.category === '과일'     ? 'bg-emerald-500/20 text-emerald-400' :
                              food.category === '채소'     ? 'bg-teal-500/20 text-teal-400'       :
                              'bg-white/10 text-gray-400'
                            }`}>
                              {food.category}
                            </span>
                          </div>
                        </button>
                      </li>
                    ))
                  )}
                </ul>
              </>
            )}

            {/* STEP 2: 섭취량 입력 */}
            {isAmountStep && (
              <div className="px-5 py-4 flex flex-col gap-4">
                <div className="bg-[#1A2B3C] rounded-xl p-4">
                  <p className="text-base font-semibold text-white">{selectedFood.name}</p>
                  {selectedFood.brand && (
                    <p className="text-xs text-gray-400 mt-0.5">{selectedFood.brand}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    기준 1회 제공량: <span className="font-medium text-gray-300">{selectedFood.servingSize}g</span>
                    &nbsp;·&nbsp;{selectedFood.calories} kcal
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">섭취량</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amountInput}
                      onChange={(e) => { setAmountInput(e.target.value); setAmountError('') }}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddFood()}
                      placeholder={`예) ${selectedFood.servingSize}`}
                      min={1} step={1}
                      autoFocus
                      className="w-full px-4 py-3 pr-10 rounded-xl bg-[#1A2B3C] border border-white/10 text-white text-base font-semibold outline-none focus:border-blue-500/60 transition placeholder:text-gray-600"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">g</span>
                  </div>
                  {amountError && <p className="text-xs text-red-400 mt-1">{amountError}</p>}
                </div>

                {preview && (
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl px-4 py-3">
                    <p className="text-xs text-blue-400 font-medium mb-1.5">예상 영양 정보</p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl font-bold text-blue-400">{preview.calories}</span>
                      <span className="text-sm text-blue-400/70">kcal</span>
                    </div>
                    <div className="flex gap-4">
                      <NutriBadge label="단백질"  value={preview.protein} unit="g" color="text-blue-400" />
                      <NutriBadge label="탄수화물" value={preview.carbs}   unit="g" color="text-green-400" />
                      <NutriBadge label="지방"    value={preview.fat}     unit="g" color="text-orange-400" />
                    </div>
                  </div>
                )}

                <button
                  onClick={handleAddFood}
                  className="w-full py-3 rounded-xl bg-white text-[#0D1B2A] text-sm font-semibold transition mt-1 hover:bg-gray-100"
                >
                  {MEAL_LABEL[activeMealType]}에 추가
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function MacroChip({ label, value, color }) {
  return (
    <span className={`text-xs ${color}`}>
      {label} <span className="font-medium">{value}g</span>
    </span>
  )
}

function NutriBadge({ label, value, unit, color }) {
  return (
    <div>
      <p className={`text-sm font-semibold ${color}`}>{value}{unit}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  )
}
