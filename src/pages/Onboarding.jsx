import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const STEPS = [
  { title: '키를 입력해주세요',          desc: '정확한 추천을 위해 현재 키를\n입력해주세요',             icon: '📏', iconBg: 'bg-blue-500' },
  { title: '체중을 입력해주세요',         desc: '현재 체중을 입력해주세요\n(공복 체중 권장)',            icon: '⚖️', iconBg: 'bg-pink-500' },
  { title: '인바디 정보를\n입력해주세요',  desc: '더 정확한 추천을 위한 선택 정보입니다',                icon: '⚡', iconBg: 'bg-green-500' },
  { title: '어떤 목표를\n이루고 싶으신가요?', desc: '목표에 맞는 최적의 플랜을 제공해드립니다',           icon: null, iconBg: null },
]

const GOALS = [
  { value: 'lose_weight',   icon: '↘', label: '체중 감량',     sub: '다이어트',  desc: '건강한 방법으로 체중을 줄이고 싶어요' },
  { value: 'cutting',       icon: '✂', label: '체지방 감소',   sub: '컷팅',     desc: '근육은 유지하면서 체지방만 빼고 싶어요' },
  { value: 'dirty_bulkup',  icon: '↗', label: '근육 증가',     sub: '벌크업',   desc: '체중과 근육량을 늘리고 싶어요' },
  { value: 'lean_massup',   icon: '⚡', label: '체지방 최소화', sub: '린매스업', desc: '체지방은 최소화하면서 근육만 늘리고 싶어요' },
]

export default function Onboarding() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)

  const [data, setData] = useState({
    gender: '',
    birthDate: '',
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

  const update = (field, value) =>
    setData((prev) => ({ ...prev, [field]: value }))

  const finish = () => {
    localStorage.setItem('physiq_profile', JSON.stringify(data))
    navigate('/', { replace: true })
  }

  const goNext = () => (step < STEPS.length - 1 ? setStep((s) => s + 1) : finish())
  const goBack = () => (step > 0 ? setStep((s) => s - 1) : navigate(-1))

  const isLast = step === STEPS.length - 1
  const progress = ((step + 1) / STEPS.length) * 100

  return (
    <div className="min-h-screen bg-[#0D1B2A] flex flex-col">
    <div className="w-full max-w-md mx-auto flex flex-col flex-1 px-6 py-6">

      {/* 상단 네비게이션 */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goBack}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-gray-400 text-sm">
          {step === 2 && (
            <button onClick={goNext} className="text-gray-400 hover:text-white transition text-sm">
              건너뛰기
            </button>
          )}
          {step !== 2 && `${step + 1}/${STEPS.length}`}
        </span>
      </div>

      {/* 진행 바 */}
      <div className="w-full h-1 bg-white/10 rounded-full mb-8">
        <div
          className="h-1 bg-yellow-400 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 아이콘 (Step 0-2) */}
      {STEPS[step].icon && (
        <div className="flex justify-center mb-6">
          <div className={`w-14 h-14 rounded-full ${STEPS[step].iconBg} flex items-center justify-center text-2xl`}>
            {STEPS[step].icon}
          </div>
        </div>
      )}

      {/* 제목 + 설명 */}
      <h2 className="text-2xl font-bold text-white mb-2 leading-snug whitespace-pre-line">
        {STEPS[step].title}
      </h2>
      <p className="text-gray-400 text-sm mb-8 whitespace-pre-line">
        {STEPS[step].desc}
      </p>

      {/* 단계별 콘텐츠 */}
      <div className="flex-1">
        {step === 0 && <HeightStep data={data} update={update} />}
        {step === 1 && <WeightStep data={data} update={update} />}
        {step === 2 && <InbodyStep data={data} update={update} />}
        {step === 3 && <GoalStep   data={data} update={update} />}
      </div>

      {/* 하단 버튼 */}
      <div className="mt-6 flex gap-3">
        {step === 2 && (
          <button
            onClick={goNext}
            className="flex-1 py-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium transition hover:bg-white/10"
          >
            건너뛰기
          </button>
        )}
        <button
          onClick={goNext}
          className={`flex-1 py-4 rounded-xl text-sm font-semibold transition ${
            hasInput(step, data)
              ? 'bg-white text-[#0D1B2A]'
              : 'bg-white/20 text-gray-400 cursor-default'
          }`}
        >
          {isLast ? '완료' : '다음'}
        </button>
      </div>
    </div>
    </div>
  )
}

function hasInput(step, data) {
  if (step === 0) return !!data.height
  if (step === 1) return !!data.weight
  return true
}

/* ─── Step 0: 키 ───────────────────────────────────────── */
function HeightStep({ data, update }) {
  const chips = ['160', '170', '180']
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-center gap-3">
        <input
          type="number"
          value={data.height}
          onChange={(e) => update('height', e.target.value)}
          placeholder="170"
          min={100} max={250}
          className="w-36 bg-transparent text-5xl font-bold text-blue-400 text-center border-b-2 border-blue-400/50 outline-none focus:border-blue-400 transition pb-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <span className="text-white text-2xl font-medium mb-1">cm</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {chips.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => update('height', v)}
            className={`py-3 rounded-xl text-sm font-medium transition ${
              data.height === v
                ? 'bg-blue-500/30 border border-blue-400 text-blue-300'
                : 'bg-[#132236] border border-white/10 text-white hover:bg-white/10'
            }`}
          >
            {v}cm
          </button>
        ))}
      </div>
    </div>
  )
}

/* ─── Step 1: 체중 ─────────────────────────────────────── */
function WeightStep({ data, update }) {
  const chips = ['60', '70', '80']
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-center gap-3">
        <input
          type="number"
          value={data.weight}
          onChange={(e) => update('weight', e.target.value)}
          placeholder="70"
          min={20} max={300}
          className="w-36 bg-transparent text-5xl font-bold text-blue-400 text-center border-b-2 border-blue-400/50 outline-none focus:border-blue-400 transition pb-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <span className="text-white text-2xl font-medium mb-1">kg</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {chips.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => update('weight', v)}
            className={`py-3 rounded-xl text-sm font-medium transition ${
              data.weight === v
                ? 'bg-blue-500/30 border border-blue-400 text-blue-300'
                : 'bg-[#132236] border border-white/10 text-white hover:bg-white/10'
            }`}
          >
            {v}kg
          </button>
        ))}
      </div>
    </div>
  )
}

/* ─── Step 2: 인바디 ───────────────────────────────────── */
function InbodyStep({ data, update }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">체지방률</label>
        <div className="relative">
          <input
            type="number"
            value={data.bodyFat}
            onChange={(e) => update('bodyFat', e.target.value)}
            placeholder="15"
            min={1} max={60} step={0.1}
            className="w-full px-4 py-3.5 rounded-xl bg-[#1A2B3C] border border-white/10 text-white text-sm placeholder:text-gray-500 outline-none focus:border-blue-500/60 transition pr-10"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">골격근량</label>
        <div className="relative">
          <input
            type="number"
            value={data.skeletalMuscle}
            onChange={(e) => update('skeletalMuscle', e.target.value)}
            placeholder="30"
            min={5} max={100} step={0.1}
            className="w-full px-4 py-3.5 rounded-xl bg-[#1A2B3C] border border-white/10 text-white text-sm placeholder:text-gray-500 outline-none focus:border-blue-500/60 transition pr-10"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">kg</span>
        </div>
      </div>

      {/* 안내 */}
      <div className="bg-[#132236] border border-white/10 rounded-xl px-4 py-3 mt-2">
        <p className="text-sm text-gray-300 font-medium mb-1">🔍 인바디 측정을 하지 않으셨나요?</p>
        <p className="text-xs text-gray-500 leading-relaxed">
          괜찮습니다! 건너뛰고 기본 정보만으로도<br />맞춤형 추천을 받으실 수 있습니다
        </p>
      </div>
    </div>
  )
}

/* ─── Step 3: 목표 ─────────────────────────────────────── */
function GoalStep({ data, update }) {
  return (
    <div className="space-y-3">
      {GOALS.map((goal) => (
        <button
          key={goal.value}
          type="button"
          onClick={() => update('goal', goal.value)}
          className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition ${
            data.goal === goal.value
              ? 'border-blue-400 bg-blue-500/10'
              : 'border-white/10 bg-[#132236] hover:border-white/20'
          }`}
        >
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg flex-shrink-0">
            {goal.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-semibold">{goal.label}</p>
            <p className="text-gray-500 text-xs">{goal.sub}</p>
            <p className="text-gray-400 text-xs mt-0.5">{goal.desc}</p>
          </div>
        </button>
      ))}
    </div>
  )
}
