import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { workoutLogs, user } from '../mock'
import { EXERCISES, MUSCLES, getExerciseById, getExercisesByMuscle, searchExercises } from '../exerciseData.js'

// DietPage와 동일하게 mock 데이터가 있는 날짜로 고정
const MOCK_DATE = '2026-03-26'

const CATEGORY_COLOR = {
  strength:     'bg-blue-100 text-blue-600',
  cardio:       'bg-green-100 text-green-600',
  powerlifting: 'bg-orange-100 text-orange-600',
}

const CATEGORY_LABEL = { strength: '웨이트', cardio: '유산소', powerlifting: '파워리프팅' }

const CATEGORIES = ['전체', 'strength', 'cardio', 'powerlifting']

// ── 칼로리 계산 (MET 공식) ────────────────────────────────────
// 유산소:      MET × 체중(kg) × 시간(h)  — durationMin 직접 사용
// 웨이트/맨몸: MET × 체중(kg) × 시간(h)  — 세트당 6분(운동+휴식) 추정
const DEFAULT_MET = { cardio: 7.0, strength: 5.5, stretching: 3.0 }

function calcCalories(exercise, inputs, weightKg) {
  const met = DEFAULT_MET[exercise.category] ?? 5.0
  if (exercise.category === 'cardio') {
    const min = parseFloat(inputs.durationMin)
    if (isNaN(min) || min <= 0) return null
    return Math.round(met * weightKg * (min / 60))
  } else {
    const sets = parseFloat(inputs.sets)
    if (isNaN(sets) || sets <= 0) return null
    return Math.round(met * weightKg * (sets * 6 / 60))
  }
}

// workoutLogs → 내부 로그 형식으로 변환
function initLogs() {
  return []
}

export default function WorkoutPage() {
  const navigate = useNavigate()

  const [logs, setLogs]                         = useState(initLogs)
  const [isModalOpen, setIsModalOpen]           = useState(false)
  const [categoryFilter, setCategoryFilter]     = useState('전체')
  const [query, setQuery]                       = useState('')
  const [selectedExercise, setSelectedExercise] = useState(null) // null=STEP1, 값=STEP2
  const [formInputs, setFormInputs]             = useState({ sets: '', reps: '', weightKg: '', durationMin: '', distanceKm: '' })
  const [formError, setFormError]               = useState('')
  const [previewExercise, setPreviewExercise]   = useState(null) // 미리보기 바텀시트

  // ── 파생 상태 ────────────────────────────────────────────────
  const filteredExercises = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = EXERCISES
    if (categoryFilter !== '전체') list = list.filter((e) => e.category === categoryFilter)
    if (!q) return list
    return list.filter((e) => e.name.toLowerCase().includes(q))
  }, [query, categoryFilter])

  const totalBurned = useMemo(
    () => logs.reduce((s, l) => s + l.caloriesBurned, 0),
    [logs]
  )
  const totalSets = useMemo(
    () => logs.filter((l) => l.sets).reduce((s, l) => s + l.sets, 0),
    [logs]
  )
  const totalCardioMin = useMemo(
    () => logs.filter((l) => l.exercise.category === 'cardio').reduce((s, l) => s + (l.durationMin ?? 0), 0),
    [logs]
  )
  const caloriePreview = useMemo(() => {
    if (!selectedExercise) return null
    return calcCalories(selectedExercise, formInputs, user.weight)
  }, [selectedExercise, formInputs])

  // ── 이벤트 핸들러 ────────────────────────────────────────────
  const handleSelectExercise = (ex) => {
    setSelectedExercise(ex)
    setFormInputs({ sets: '', reps: '', weightKg: '', durationMin: '', distanceKm: '' })
    setFormError('')
  }

  const handleAddWorkout = () => {
    if (!selectedExercise) return

    if (selectedExercise.category === 'cardio') {
      const min = parseFloat(formInputs.durationMin)
      if (isNaN(min) || min <= 0) {
        setFormError('운동 시간을 입력해주세요')
        return
      }
    } else {
      const sets = parseFloat(formInputs.sets)
      const reps = parseFloat(formInputs.reps)
      if (isNaN(sets) || sets <= 0) { setFormError('세트 수를 입력해주세요'); return }
      if (isNaN(reps) || reps <= 0) { setFormError('렙 수를 입력해주세요'); return }
    }

    const calories = calcCalories(selectedExercise, formInputs, user.weight) ?? 0
    const newLog = {
      id:            Date.now(),
      exercise:      selectedExercise,
      sets:          selectedExercise.category !== 'cardio' ? parseFloat(formInputs.sets) : null,
      reps:          selectedExercise.category !== 'cardio' ? parseFloat(formInputs.reps) : null,
      weightKg:      selectedExercise.category !== 'cardio' ? (parseFloat(formInputs.weightKg) || 0) : null,
      durationMin:   selectedExercise.category === 'cardio' ? parseFloat(formInputs.durationMin) : null,
      distanceKm:    selectedExercise.category === 'cardio' ? (parseFloat(formInputs.distanceKm) || null) : null,
      caloriesBurned: calories,
    }
    setLogs((prev) => [...prev, newLog])
    closeModal()
  }

  const handleDelete = (id) => setLogs((prev) => prev.filter((l) => l.id !== id))

  const closeModal = () => {
    setIsModalOpen(false)
    setQuery('')
    setCategoryFilter('전체')
    setSelectedExercise(null)
    setFormInputs({ sets: '', reps: '', weightKg: '', durationMin: '', distanceKm: '' })
    setFormError('')
  }

  const isCardio = selectedExercise?.category === 'cardio'

  return (
    <div className="min-h-screen bg-gray-50 pb-48">

      {/* ── 헤더 ─────────────────────────────────────────────── */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="text-gray-500 hover:text-gray-700 transition"
            aria-label="뒤로가기"
          >
            ←
          </button>
          <h1 className="text-base font-bold text-gray-800">운동 기록</h1>
        </div>
        <span className="text-xs text-gray-400">{MOCK_DATE}</span>
      </div>

      <div className="px-4 pt-4 space-y-3">

        {/* ── 요약 칩 ─────────────────────────────────────────── */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: '운동 수',    value: `${logs.length}개` },
            { label: '총 세트',   value: `${totalSets}세트` },
            { label: '유산소',    value: `${totalCardioMin}분` },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-3 text-center shadow-sm">
              <p className="text-sm font-bold text-gray-800">{s.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── 운동 카드 목록 ───────────────────────────────────── */}
        {logs.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
            <p className="text-gray-400 text-sm">아직 기록된 운동이 없어요</p>
            <p className="text-gray-300 text-xs mt-1">아래 버튼으로 운동을 추가해보세요</p>
          </div>
        ) : (
          <div className="space-y-2">
            {logs.map((log) => (
              <WorkoutCard key={log.id} log={log} onDelete={handleDelete} />
            ))}
          </div>
        )}

      </div>

      {/* ── 하단 고정 바 ─────────────────────────────────────── */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-gray-700">오늘 소모 칼로리</span>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold text-green-600">{totalBurned.toLocaleString()}</span>
            <span className="text-xs text-gray-400">kcal</span>
          </div>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition"
        >
          + 운동 추가
        </button>
      </div>

      {/* ── 모달 ─────────────────────────────────────────────── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/40 flex items-end justify-center z-50 px-4 pb-6"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
        >
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">

            {/* STEP 1 — 운동 검색 */}
            {!selectedExercise && (
              <>
                <div className="flex items-center justify-between px-5 pt-5 pb-3">
                  <h3 className="text-base font-bold text-gray-800">운동 추가</h3>
                  <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 text-lg leading-none">×</button>
                </div>

                {/* 검색창 */}
                <div className="px-5 mb-3">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="운동 이름으로 검색"
                    autoFocus
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                  />
                </div>

                {/* 카테고리 탭 */}
                <div className="flex gap-2 px-5 mb-3 overflow-x-auto">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategoryFilter(cat)}
                      className={`shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full border transition ${
                        categoryFilter === cat
                          ? 'bg-green-500 text-white border-green-500'
                          : 'bg-white text-gray-500 border-gray-200 hover:border-green-300'
                      }`}
                    >
                      {cat === '전체' ? '전체' : (CATEGORY_LABEL[cat] ?? cat)}
                    </button>
                  ))}
                </div>

                {/* 운동 목록 */}
                <div className="overflow-y-auto max-h-72 px-5 pb-5 space-y-1">
                  {filteredExercises.length === 0 ? (
                    <p className="text-sm text-gray-400 text-center py-6">검색 결과가 없어요</p>
                  ) : (
                    filteredExercises.map((ex) => (
                      <div key={ex.id} className="flex items-center">
                        <button
                          onClick={() => handleSelectExercise(ex)}
                          className="flex-1 flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-50 transition text-left"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CATEGORY_COLOR[ex.category]}`}>
                              {CATEGORY_LABEL[ex.category] ?? ex.category}
                            </span>
                            <span className="text-sm font-medium text-gray-800">{ex.name}</span>
                          </div>
                          <span className="text-xs text-gray-400 shrink-0 ml-2">{ex.primaryMuscles?.[0] ?? ''}</span>
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); setPreviewExercise(ex) }}
                          className="shrink-0 w-7 h-7 mr-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-400 text-xs font-bold transition"
                          aria-label="운동 설명 보기"
                        >
                          ?
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </>
            )}

            {/* STEP 2 — 상세 입력 */}
            {selectedExercise && (
              <>
                <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                  <button
                    onClick={() => { setSelectedExercise(null); setFormError('') }}
                    className="text-gray-400 hover:text-gray-600 transition"
                    aria-label="뒤로가기"
                  >
                    ←
                  </button>
                  <h3 className="text-base font-bold text-gray-800 flex-1">세부 정보 입력</h3>
                  <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 text-lg leading-none">×</button>
                </div>

                {/* 선택된 운동 요약 */}
                <div className="flex items-center gap-2 px-5 mb-4">
                  <span className="text-sm font-semibold text-gray-800">{selectedExercise.name}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CATEGORY_COLOR[selectedExercise.category]}`}>
                    {CATEGORY_LABEL[selectedExercise.category] ?? selectedExercise.category}
                  </span>
                  <span className="text-xs text-gray-400">{selectedExercise.primaryMuscles?.[0] ?? ''}</span>
                </div>

                <div className="px-5 pb-5 space-y-3">
                  {isCardio ? (
                    /* 유산소 폼 */
                    <>
                      <FormField label="시간 (분)" unit="분" required>
                        <input
                          type="number"
                          value={formInputs.durationMin}
                          onChange={(e) => { setFormInputs((p) => ({ ...p, durationMin: e.target.value })); setFormError('') }}
                          onKeyDown={(e) => e.key === 'Enter' && handleAddWorkout()}
                          placeholder="예) 30"
                          min={1} max={300}
                          autoFocus
                          className={inputCls(formError && !formInputs.durationMin)}
                        />
                      </FormField>
                      <FormField label="거리 (km)" unit="km" hint="선택">
                        <input
                          type="number"
                          value={formInputs.distanceKm}
                          onChange={(e) => setFormInputs((p) => ({ ...p, distanceKm: e.target.value }))}
                          onKeyDown={(e) => e.key === 'Enter' && handleAddWorkout()}
                          placeholder="예) 5.0"
                          min={0} step={0.1}
                          className={inputCls(false)}
                        />
                      </FormField>
                    </>
                  ) : (
                    /* 웨이트/맨몸 폼 */
                    <>
                      <FormField label="세트 수" unit="세트" required>
                        <input
                          type="number"
                          value={formInputs.sets}
                          onChange={(e) => { setFormInputs((p) => ({ ...p, sets: e.target.value })); setFormError('') }}
                          placeholder="예) 4"
                          min={1} max={20}
                          autoFocus
                          className={inputCls(formError && !formInputs.sets)}
                        />
                      </FormField>
                      <FormField label="렙 수" unit="회" required>
                        <input
                          type="number"
                          value={formInputs.reps}
                          onChange={(e) => { setFormInputs((p) => ({ ...p, reps: e.target.value })); setFormError('') }}
                          placeholder="예) 10"
                          min={1} max={100}
                          className={inputCls(formError && !formInputs.reps)}
                        />
                      </FormField>
                      <FormField label="무게" unit="kg" hint="선택">
                        <input
                          type="number"
                          value={formInputs.weightKg}
                          onChange={(e) => setFormInputs((p) => ({ ...p, weightKg: e.target.value }))}
                          onKeyDown={(e) => e.key === 'Enter' && handleAddWorkout()}
                          placeholder="예) 70"
                          min={0} step={0.5}
                          className={inputCls(false)}
                        />
                      </FormField>
                    </>
                  )}

                  {/* 에러 메시지 */}
                  {formError && <p className="text-xs text-red-500">{formError}</p>}

                  {/* 예상 칼로리 미리보기 */}
                  {caloriePreview !== null && (
                    <div className="bg-green-50 rounded-xl px-4 py-3 flex items-center justify-between">
                      <span className="text-xs text-green-700 font-medium">예상 소모 칼로리</span>
                      <span className="text-sm font-bold text-green-600">~{caloriePreview} kcal</span>
                    </div>
                  )}

                  <button
                    onClick={handleAddWorkout}
                    className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition mt-1"
                  >
                    운동 기록 추가
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      )}

      {/* ── 운동 미리보기 바텀시트 ───────────────────────────── */}
      {previewExercise && (
        <ExercisePreviewSheet
          exercise={previewExercise}
          onClose={() => setPreviewExercise(null)}
          onSelect={() => {
            handleSelectExercise(previewExercise)
            setPreviewExercise(null)
          }}
        />
      )}
    </div>
  )
}

// ── 로컬 컴포넌트 ─────────────────────────────────────────────

function WorkoutCard({ log, onDelete }) {
  const { exercise: ex, sets, reps, weightKg, durationMin, distanceKm, caloriesBurned } = log

  const detailText = ex.category === 'cardio'
    ? [durationMin && `${durationMin}분`, distanceKm && `${distanceKm}km`].filter(Boolean).join(' · ')
    : [sets && reps && `${sets}세트 × ${reps}회`, weightKg > 0 && `${weightKg}kg`].filter(Boolean).join(' · ')

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-sm font-semibold text-gray-800">{ex.name}</span>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CATEGORY_COLOR[ex.category]}`}>
            {CATEGORY_LABEL[ex.category] ?? ex.category}
          </span>
        </div>
        <button
          onClick={() => onDelete(log.id)}
          className="text-gray-300 hover:text-red-400 transition text-lg leading-none ml-2"
          aria-label="삭제"
        >
          ×
        </button>
      </div>
      <p className="text-xs text-gray-500 mb-2">{ex.primaryMuscles?.[0] ?? '—'}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-700">{detailText || '—'}</span>
        <span className="text-sm font-semibold text-green-600">-{caloriesBurned} kcal</span>
      </div>
    </div>
  )
}

function FormField({ label, unit, hint, required, children }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-1.5">
        <label className="text-xs font-semibold text-gray-600">{label}</label>
        {hint && <span className="text-xs text-gray-400">({hint})</span>}
      </div>
      <div className="relative">
        {children}
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
          {unit}
        </span>
      </div>
    </div>
  )
}

function inputCls(hasError) {
  return [
    'w-full px-4 py-2.5 pr-12 rounded-xl border text-sm font-medium outline-none transition',
    hasError
      ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
      : 'border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100',
  ].join(' ')
}

function ExercisePreviewSheet({ exercise, onClose, onSelect }) {
  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-end justify-center z-[60] px-4 pb-6"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-5 space-y-4">

        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CATEGORY_COLOR[exercise.category]}`}>
              {CATEGORY_LABEL[exercise.category] ?? exercise.category}
            </span>
            <h3 className="text-base font-bold text-gray-800">{exercise.name}</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-lg leading-none">×</button>
        </div>

        {/* 이미지 */}
        {exercise.images?.[0] ? (
          <img
            src={`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${exercise.images[0]}`}
            alt={exercise.name}
            className="w-full rounded-xl object-cover max-h-52"
          />
        ) : (
          <div className="w-full h-40 bg-gray-100 rounded-xl flex items-center justify-center">
            <span className="text-sm text-gray-400">동작 이미지 준비 중</span>
          </div>
        )}

        {/* 운동 정보 */}
        <div className="space-y-1">
          <p className="text-xs text-gray-500">
            타겟 근육: <span className="font-medium text-gray-700">{exercise.primaryMuscles?.join(', ') ?? '—'}</span>
          </p>
          {exercise.instructions && (
            <p className="text-sm text-gray-600">{exercise.instructions}</p>
          )}
        </div>

        {/* 선택 버튼 */}
        <button
          onClick={onSelect}
          className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition"
        >
          이 운동으로 기록하기
        </button>
      </div>
    </div>
  )
}
