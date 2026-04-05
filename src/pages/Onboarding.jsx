import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// 온보딩 단계 정의 — 모두 선택 사항
const STEPS = [
  { title: '신체 정보',   desc: '현재 몸 상태를 입력해주세요 (선택 사항)' },
  { title: '라이프스타일', desc: '생활 패턴을 알려주세요 (선택 사항)' },
  { title: '목표 설정',   desc: '달성하고 싶은 목표를 선택해주세요 (선택 사항)' },
]

// 목표 선택지
const GOALS = [
  { value: 'diet',         emoji: '🥗', label: '다이어트',           desc: '체중 감량에 집중합니다' },
  { value: 'dirty_bulkup', emoji: '💪', label: '더티 벌크업',        desc: '칼로리 잉여로 빠른 근육 성장' },
  { value: 'lean_massup',  emoji: '⚡', label: '린매스업',           desc: '클린 칼로리로 깔끔하게 늘리기' },
  { value: 'cutting',      emoji: '✂️', label: '컷팅',               desc: '근육을 유지하며 체지방 제거' },
  { value: 'recomp',       emoji: '🎯', label: '근성장·다이어트 병행', desc: '체지방 감소와 근성장 동시에' },
]

const EXERCISE_VOLUMES = ['거의 안 함', '주 1-2회', '주 3-4회', '주 5회 이상']

// 기피 음식 선택지
const AVOID_FOODS = [
  '돼지고기', '소고기', '닭고기', '생선', '해산물',
  '유제품', '계란', '견과류', '밀가루/글루텐', '콩류',
  '매운 음식', '당류/단 음식',
]

export default function Onboarding() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)

  // 모든 단계의 입력값을 하나의 객체로 관리
  const [data, setData] = useState({
    height: '',
    weight: '',
    bodyFat: '',
    skeletalMuscle: '',
    sleepHours: 7,
    eatStart: '',
    eatEnd: '',
    exerciseVolume: '',
    avoidFoods: [],
    goal: '',
  })

  // 단일 필드 업데이트 헬퍼
  const update = (field, value) =>
    setData((prev) => ({ ...prev, [field]: value }))

  // 기피 음식 토글 — 이미 있으면 제거, 없으면 추가
  const toggleFood = (food) =>
    setData((prev) => ({
      ...prev,
      avoidFoods: prev.avoidFoods.includes(food)
        ? prev.avoidFoods.filter((f) => f !== food)
        : [...prev.avoidFoods, food],
    }))

  // 온보딩 완료 또는 전체 건너뛰기
  // 입력값을 localStorage에 저장하고 홈으로 이동
  const finish = () => {
    localStorage.setItem('physiq_profile', JSON.stringify(data))
    navigate('/', { replace: true })
  }

  // "다음" 또는 "건너뛰기" 버튼 — 마지막 단계면 finish
  const goNext = () => (step < STEPS.length - 1 ? setStep((s) => s + 1) : finish())
  const goBack = () => setStep((s) => s - 1)

  const isLast = step === STEPS.length - 1

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-8">

      {/* 상단 헤더 — 나중에 하기로 전체 건너뛰기 가능 */}
      <div className="w-full max-w-lg flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-blue-600">PhysiQ</h1>
        <button
          onClick={finish}
          className="text-sm text-gray-400 hover:text-gray-600 transition"
        >
          나중에 하기
        </button>
      </div>

      {/* 진행 바 — 현재 단계까지 파란색으로 채움 */}
      <div className="w-full max-w-lg mb-6">
        <div className="flex gap-1.5 mb-4">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-1.5 rounded-full transition-colors duration-300
                ${i <= step ? 'bg-blue-600' : 'bg-gray-200'}`}
            />
          ))}
        </div>
        <p className="text-xs font-medium text-blue-500 mb-1">
          STEP {step + 1} / {STEPS.length}
        </p>
        <h2 className="text-xl font-bold text-gray-800">{STEPS[step].title}</h2>
        <p className="text-sm text-gray-500 mt-0.5">{STEPS[step].desc}</p>
      </div>

      {/* 현재 단계에 맞는 컴포넌트 렌더링 */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
        {step === 0 && <BodyInfoStep  data={data} update={update} />}
        {step === 1 && <LifestyleStep data={data} update={update} toggleFood={toggleFood} />}
        {step === 2 && <GoalStep      data={data} update={update} />}
      </div>

      {/* 하단 버튼 — 건너뛰기(입력 없이 다음)와 다음(입력 포함 다음)이 같은 동작 */}
      <div className="w-full max-w-lg flex gap-2">
        {step > 0 && (
          <button
            onClick={goBack}
            className="px-5 py-3 rounded-xl border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-50 transition"
          >
            이전
          </button>
        )}
        <button
          onClick={goNext}
          className="flex-1 py-3 rounded-xl border border-gray-300 text-gray-500 text-sm font-medium hover:bg-gray-50 transition"
        >
          {isLast ? '건너뛰기' : '이 단계 건너뛰기'}
        </button>
        <button
          onClick={goNext}
          className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
        >
          {isLast ? '완료' : '다음'}
        </button>
      </div>
    </div>
  )
}

/* ─── STEP 1: 신체 정보 ───────────────────────────────── */
function BodyInfoStep({ data, update }) {
  return (
    <div className="space-y-5">

      {/* 키 */}
      <Field label="키 (cm)">
        <div className="relative">
          <input
            type="number"
            value={data.height}
            onChange={(e) => update('height', e.target.value)}
            placeholder="예) 175"
            min={100} max={250}
            className={inputCls()}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">cm</span>
        </div>
      </Field>

      {/* 몸무게 */}
      <Field label="몸무게 (kg)">
        <div className="relative">
          <input
            type="number"
            value={data.weight}
            onChange={(e) => update('weight', e.target.value)}
            placeholder="예) 72"
            min={20} max={300}
            className={inputCls()}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">kg</span>
        </div>
      </Field>

      {/* 체지방률 */}
      <Field label="체지방률 (%)">
        <div className="relative">
          <input
            type="number"
            value={data.bodyFat}
            onChange={(e) => update('bodyFat', e.target.value)}
            placeholder="예) 18"
            min={1} max={60} step={0.1}
            className={inputCls()}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">%</span>
        </div>
      </Field>

      {/* 골격근량 */}
      <Field label="골격근량 (kg)">
        <div className="relative">
          <input
            type="number"
            value={data.skeletalMuscle}
            onChange={(e) => update('skeletalMuscle', e.target.value)}
            placeholder="예) 34"
            min={5} max={100} step={0.1}
            className={inputCls()}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">kg</span>
        </div>
      </Field>

      <p className="text-xs text-gray-400 pt-1">
        인바디 등 체성분 분석 결과가 있다면 입력해주세요.
      </p>
    </div>
  )
}

/* ─── STEP 2: 라이프스타일 ────────────────────────────── */
function LifestyleStep({ data, update, toggleFood }) {
  return (
    <div className="space-y-6">

      {/* 수면 시간 — range 슬라이더, 0.5시간 단위 */}
      <Field label={`수면 시간 — ${data.sleepHours}시간`}>
        <input
          type="range"
          min={4} max={12} step={0.5}
          value={data.sleepHours}
          onChange={(e) => update('sleepHours', parseFloat(e.target.value))}
          className="w-full accent-blue-600"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>4시간</span>
          <span>12시간</span>
        </div>
      </Field>

      {/* 음식 섭취 가능 시간 — 시작/종료 time picker */}
      <Field label="음식 섭취 가능 시간">
        <div className="flex items-center gap-2">
          <input
            type="time"
            value={data.eatStart}
            onChange={(e) => update('eatStart', e.target.value)}
            className={`${inputCls()} flex-1`}
          />
          <span className="text-gray-400 text-sm shrink-0">부터</span>
          <input
            type="time"
            value={data.eatEnd}
            onChange={(e) => update('eatEnd', e.target.value)}
            className={`${inputCls()} flex-1`}
          />
          <span className="text-gray-400 text-sm shrink-0">까지</span>
        </div>
      </Field>

      {/* 운동 볼륨 — 단일 선택 버튼 그룹 */}
      <Field label="주간 운동 볼륨">
        <div className="grid grid-cols-2 gap-2">
          {EXERCISE_VOLUMES.map((vol) => (
            <button
              key={vol}
              type="button"
              onClick={() => update('exerciseVolume', vol)}
              className={`py-2.5 px-3 rounded-lg border text-sm font-medium transition
                ${data.exerciseVolume === vol
                  ? 'border-blue-500 bg-blue-50 text-blue-600'
                  : 'border-gray-300 text-gray-600 hover:border-gray-400'}`}
            >
              {vol}
            </button>
          ))}
        </div>
      </Field>

      {/* 기피 음식 — 복수 선택 칩, 선택 시 빨간색 */}
      <Field label="기피 음식 (복수 선택 가능)">
        <div className="flex flex-wrap gap-2 mt-1">
          {AVOID_FOODS.map((food) => (
            <button
              key={food}
              type="button"
              onClick={() => toggleFood(food)}
              className={`px-3 py-1.5 rounded-full border text-xs font-medium transition
                ${data.avoidFoods.includes(food)
                  ? 'border-red-400 bg-red-50 text-red-500'
                  : 'border-gray-300 text-gray-600 hover:border-gray-400'}`}
            >
              {food}
            </button>
          ))}
        </div>
      </Field>
    </div>
  )
}

/* ─── STEP 3: 목표 선택 ───────────────────────────────── */
function GoalStep({ data, update }) {
  return (
    <div className="space-y-3">
      {GOALS.map((goal) => (
        // 카드 전체가 클릭 가능한 라디오 역할
        <button
          key={goal.value}
          type="button"
          onClick={() => update('goal', goal.value)}
          className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition
            ${data.goal === goal.value
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}
        >
          <span className="text-2xl">{goal.emoji}</span>
          <div className="flex-1">
            <p className={`text-sm font-semibold ${data.goal === goal.value ? 'text-blue-700' : 'text-gray-800'}`}>
              {goal.label}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">{goal.desc}</p>
          </div>
          {/* 선택 여부를 나타내는 원형 인디케이터 */}
          <div className={`w-4 h-4 rounded-full border-2 transition shrink-0
            ${data.goal === goal.value
              ? 'border-blue-500 bg-blue-500'
              : 'border-gray-300'}`}
          />
        </button>
      ))}
    </div>
  )
}

/* ─── 공통 헬퍼 ───────────────────────────────────────── */

// 라벨 + 인풋을 묶는 공통 래퍼
function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      {children}
    </div>
  )
}

// 공통 인풋 클래스
function inputCls() {
  return 'w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
}
