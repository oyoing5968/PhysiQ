import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { foods, mealLogs, goal } from '../mock'

// 백엔드 연결 전까지 mock 데이터 기준 날짜 고정
const MOCK_DATE = '2026-03-26'

const MEAL_TYPES = ['breakfast', 'lunch', 'dinner', 'snack']
const MEAL_LABEL = { breakfast: '아침', lunch: '점심', dinner: '저녁', snack: '간식' }

// 끼니별 색상 테마 (배경, 뱃지, 추가 버튼)
const MEAL_COLOR = {
  breakfast: { bg: 'bg-orange-50', badge: 'bg-orange-100 text-orange-600', btn: 'text-orange-500 border-orange-200 hover:bg-orange-50' },
  lunch:     { bg: 'bg-green-50',  badge: 'bg-green-100  text-green-600',  btn: 'text-green-500  border-green-200  hover:bg-green-50'  },
  dinner:    { bg: 'bg-blue-50',   badge: 'bg-blue-100   text-blue-600',   btn: 'text-blue-500   border-blue-200   hover:bg-blue-50'   },
  snack:     { bg: 'bg-purple-50', badge: 'bg-purple-100 text-purple-600', btn: 'text-purple-500 border-purple-200 hover:bg-purple-50' },
}

// mock mealLogs → 내부 로그 형식으로 변환
// ratio = 실제 섭취량 / 1회 제공량 으로 영양소를 비례 계산
function initLogs() {
  const foodMap = Object.fromEntries(foods.map((f) => [f.name, f]))
  return mealLogs
    .filter((m) => m.date === MOCK_DATE)
    .map((m, i) => {
      const food = foodMap[m.foodName]
      if (!food) return null  // foods 목록에 없는 음식은 무시
      const ratio = m.amount / food.servingSize
      return {
        id: i + 1,
        mealType: m.mealType,
        food,
        amount: m.amount,
        calories: Math.round(food.calories * ratio),
        protein:  Math.round(food.protein  * ratio * 10) / 10,
        carbs:    Math.round(food.carbs    * ratio * 10) / 10,
        fat:      Math.round(food.fat      * ratio * 10) / 10,
      }
    })
    .filter(Boolean)
}

export default function DietPage() {
  const navigate = useNavigate()

  // 페이지 진입 시 mock 데이터로 초기화 (함수형 초기값 → 최초 1회만 실행)
  const [logs, setLogs] = useState(initLogs)

  // 모달 상태 — activeMealType이 null이면 닫힌 상태
  const [activeMealType, setActiveMealType] = useState(null)
  const [query,          setQuery]          = useState('')
  const [selectedFood,   setSelectedFood]   = useState(null)  // 검색에서 선택한 음식
  const [amountInput,    setAmountInput]    = useState('')
  const [amountError,    setAmountError]    = useState('')

  // 모달 표시 여부 / 현재 단계 (검색 vs 섭취량 입력) 파생
  const isModalOpen  = activeMealType !== null
  const isAmountStep = selectedFood !== null

  // 검색어로 음식 필터링 — 이름 또는 브랜드에서 검색
  const filteredFoods = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return foods
    return foods.filter(
      (f) => f.name.toLowerCase().includes(q) || (f.brand ?? '').toLowerCase().includes(q)
    )
  }, [query])

  // 음식 선택 시 기본 섭취량을 1회 제공량으로 세팅
  const handleSelectFood = (food) => {
    setSelectedFood(food)
    setAmountInput(String(food.servingSize))
    setAmountError('')
  }

  // 섭취량 입력 후 해당 끼니에 음식 추가
  const handleAddFood = () => {
    const val = parseFloat(amountInput)
    if (isNaN(val) || val <= 0) {
      setAmountError('올바른 섭취량을 입력해주세요')
      return
    }
    const ratio = val / selectedFood.servingSize
    const newLog = {
      id: Date.now(),  // 고유 ID로 timestamp 사용
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

  // 모달 닫기 시 모든 임시 상태 초기화
  const closeModal = () => {
    setActiveMealType(null)
    setQuery('')
    setSelectedFood(null)
    setAmountInput('')
    setAmountError('')
  }

  const handleDelete = (id) => setLogs((prev) => prev.filter((l) => l.id !== id))

  // logs를 끼니별로 분류 — logs가 바뀔 때만 재계산
  const logsByMeal = useMemo(() => {
    const map = {}
    for (const t of MEAL_TYPES) map[t] = []
    for (const l of logs) map[l.mealType].push(l)
    return map
  }, [logs])

  // 전체 칼로리 합산 및 목표 대비 비율 (1 초과 방지)
  const totalCalories = useMemo(() => logs.reduce((s, l) => s + l.calories, 0), [logs])
  const caloriePct    = Math.min(totalCalories / goal.dailyCalories, 1)

  // 섭취량 입력 중 실시간 영양소 미리보기 — selectedFood나 amountInput이 바뀔 때 재계산
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
    <div className="min-h-screen bg-gray-50 pb-36">

      {/* 헤더 — sticky로 스크롤 시에도 상단 고정 */}
      <div className="bg-white border-b border-gray-100 px-4 pt-12 pb-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition text-gray-500"
          >
            ←
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-800">식단 기록</h1>
            <p className="text-xs text-gray-400">{MOCK_DATE}</p>
          </div>
        </div>
      </div>

      {/* 끼니 섹션 목록 */}
      <div className="px-4 pt-4 space-y-3">
        {MEAL_TYPES.map((type) => {
          const items  = logsByMeal[type]
          const total  = items.reduce((s, l) => s + l.calories, 0)
          const colors = MEAL_COLOR[type]
          return (
            <div key={type} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

              {/* 끼니 헤더 — 총 칼로리와 추가 버튼 */}
              <div className={`flex items-center justify-between px-4 py-3 ${colors.bg}`}>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${colors.badge}`}>
                    {MEAL_LABEL[type]}
                  </span>
                  {/* 음식이 있을 때만 끼니 총 칼로리 표시 */}
                  {total > 0 && (
                    <span className="text-xs text-gray-500 font-medium">{total} kcal</span>
                  )}
                </div>
                <button
                  onClick={() => setActiveMealType(type)}
                  className={`flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg border transition ${colors.btn}`}
                >
                  <span className="text-base leading-none">+</span> 추가
                </button>
              </div>

              {/* 음식 목록 또는 빈 상태 메시지 */}
              {items.length === 0 ? (
                <p className="text-xs text-gray-400 text-center py-4">
                  아직 기록된 음식이 없어요
                </p>
              ) : (
                <ul className="divide-y divide-gray-50">
                  {items.map((log) => (
                    <li key={log.id} className="flex items-center gap-3 px-4 py-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-gray-800 truncate">{log.food.name}</p>
                          {log.food.brand && (
                            <span className="text-xs text-gray-400 shrink-0">{log.food.brand}</span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5">{log.amount}g</p>
                        {/* 탄단지 한 줄 요약 */}
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs font-semibold text-gray-700">{log.calories} kcal</span>
                          <MacroChip label="단" value={log.protein} color="text-blue-500" />
                          <MacroChip label="탄" value={log.carbs}   color="text-amber-500" />
                          <MacroChip label="지" value={log.fat}     color="text-rose-400" />
                        </div>
                      </div>
                      <button
                        onClick={() => handleDelete(log.id)}
                        className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-gray-300 hover:text-red-400 hover:bg-red-50 transition text-lg"
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

      {/* 하단 총 칼로리 바 — fixed로 화면 하단에 항상 고정 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4 shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">오늘 총 칼로리</span>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold text-gray-800">{totalCalories.toLocaleString()}</span>
            <span className="text-xs text-gray-400">/ {goal.dailyCalories.toLocaleString()} kcal</span>
            {/* 목표 초과 시 빨간색으로 경고 */}
            <span className={`text-xs font-semibold ml-1 ${caloriePct >= 1 ? 'text-red-500' : 'text-blue-500'}`}>
              {Math.round(caloriePct * 100)}%
            </span>
          </div>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${caloriePct >= 1 ? 'bg-red-400' : 'bg-blue-500'}`}
            style={{ width: `${caloriePct * 100}%` }}
          />
        </div>
      </div>

      {/* ── 음식 추가 모달 (바텀시트) ── */}
      {isModalOpen && (
        // 배경 클릭 시 모달 닫기
        <div
          className="fixed inset-0 bg-black/40 flex items-end justify-center z-50"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
        >
          <div
            className="w-full max-w-lg bg-white rounded-t-2xl shadow-xl flex flex-col"
            style={{ maxHeight: '85vh' }}
          >
            {/* 모달 헤더 — 단계에 따라 제목 변경 */}
            <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-gray-100 shrink-0">
              <div className="flex items-center gap-2">
                {/* 섭취량 입력 단계에서만 뒤로가기 버튼 표시 */}
                {isAmountStep && (
                  <button
                    onClick={() => { setSelectedFood(null); setAmountInput(''); setAmountError('') }}
                    className="text-gray-400 hover:text-gray-600 text-sm mr-1"
                  >
                    ←
                  </button>
                )}
                <h3 className="text-base font-bold text-gray-800">
                  {isAmountStep ? '섭취량 입력' : `${MEAL_LABEL[activeMealType]} 음식 추가`}
                </h3>
              </div>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 text-xl w-8 h-8 flex items-center justify-center">×</button>
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
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>
                {/* 검색 결과 목록 — overflow-y-auto로 스크롤 가능 */}
                <ul className="overflow-y-auto flex-1 px-4 pb-4 space-y-1">
                  {filteredFoods.length === 0 ? (
                    <li className="text-sm text-gray-400 text-center py-8">검색 결과가 없어요</li>
                  ) : (
                    filteredFoods.map((food) => (
                      <li key={food.id}>
                        <button
                          onClick={() => handleSelectFood(food)}
                          className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-gray-50 transition text-left"
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-gray-800">{food.name}</span>
                              {food.brand && (
                                <span className="text-xs text-gray-400">{food.brand}</span>
                              )}
                            </div>
                            <p className="text-xs text-gray-400 mt-0.5">
                              1회 제공량 {food.servingSize}g
                            </p>
                          </div>
                          <div className="shrink-0 text-right ml-3">
                            <p className="text-sm font-semibold text-gray-700">{food.calories} kcal</p>
                            {/* 카테고리별 색상 뱃지 */}
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                              food.category === '단백질'   ? 'bg-blue-50 text-blue-500'       :
                              food.category === '탄수화물' ? 'bg-amber-50 text-amber-500'     :
                              food.category === '지방'     ? 'bg-rose-50 text-rose-400'       :
                              food.category === '과일'     ? 'bg-green-50 text-green-500'     :
                              food.category === '채소'     ? 'bg-emerald-50 text-emerald-500' :
                              'bg-gray-100 text-gray-500'
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

                {/* 선택된 음식 정보 요약 */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-base font-semibold text-gray-800">{selectedFood.name}</p>
                  {selectedFood.brand && (
                    <p className="text-xs text-gray-400 mt-0.5">{selectedFood.brand}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    기준 1회 제공량: <span className="font-medium">{selectedFood.servingSize}g</span>
                    &nbsp;·&nbsp;{selectedFood.calories} kcal
                  </p>
                </div>

                {/* 섭취량 입력 — Enter로도 추가 가능 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">섭취량</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amountInput}
                      onChange={(e) => { setAmountInput(e.target.value); setAmountError('') }}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddFood()}
                      placeholder={`예) ${selectedFood.servingSize}`}
                      min={1} step={1}
                      autoFocus
                      className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-300 text-base font-semibold outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">g</span>
                  </div>
                  {amountError && <p className="text-xs text-red-500 mt-1">{amountError}</p>}
                </div>

                {/* 섭취량에 따른 실시간 영양소 미리보기 */}
                {preview && (
                  <div className="bg-blue-50 rounded-xl px-4 py-3">
                    <p className="text-xs text-blue-400 font-medium mb-1.5">예상 영양 정보</p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl font-bold text-blue-600">{preview.calories}</span>
                      <span className="text-sm text-blue-400">kcal</span>
                    </div>
                    <div className="flex gap-4">
                      <NutriBadge label="단백질"  value={preview.protein} unit="g" color="text-blue-600" />
                      <NutriBadge label="탄수화물" value={preview.carbs}   unit="g" color="text-amber-600" />
                      <NutriBadge label="지방"    value={preview.fat}     unit="g" color="text-rose-500" />
                    </div>
                  </div>
                )}

                <button
                  onClick={handleAddFood}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition mt-1"
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

// 탄단지 한 줄 표시용 칩
function MacroChip({ label, value, color }) {
  return (
    <span className={`text-xs ${color}`}>
      {label} <span className="font-medium">{value}g</span>
    </span>
  )
}

// 미리보기 영역의 영양소 항목
function NutriBadge({ label, value, unit, color }) {
  return (
    <div>
      <p className={`text-sm font-semibold ${color}`}>{value}{unit}</p>
      <p className="text-xs text-gray-400">{label}</p>
    </div>
  )
}
