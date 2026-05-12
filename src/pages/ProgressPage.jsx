import { useState, useMemo } from 'react'
import {
  ResponsiveContainer,
  LineChart, Line,
  BarChart, Bar, Cell,
  XAxis, YAxis, Tooltip, Legend,
  ReferenceLine, CartesianGrid,
} from 'recharts'
import {
  weightLogs,
  bodyCompositionLogs,
  dailyCalorieLogs,
  goal,
  workoutLogs,
  user,
} from '../mock'

const PERIODS = ['1주', '1달', '3달']
const PERIOD_DAYS = { '1주': 7, '1달': 30, '3달': 90 }

const ACTIVITY_MULTIPLIER = {
  '거의 안 함':  1.2,
  '주 1-2회':   1.375,
  '주 3-4회':   1.55,
  '주 5회 이상': 1.725,
}
const GOAL_DELTA = {
  diet: -400, cutting: -400,
  dirty_bulkup: 400, lean_massup: 150, recomp: 0,
}

const BADGES = [
  { label: '7일 연속',  icon: '🔥', achieved: true  },
  { label: '5kg 감량',  icon: '🏆', achieved: true  },
  { label: '30회 운동', icon: '💪', achieved: false },
  { label: '목표 달성', icon: '🎯', achieved: false },
]

function formatTick(dateStr) {
  const d = new Date(dateStr)
  return `${d.getMonth() + 1}/${d.getDate()}`
}

function formatLabel(dateStr) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

const CHART_TOOLTIP_STYLE = {
  fontSize: 12,
  borderRadius: 8,
  border: '1px solid rgba(255,255,255,0.1)',
  backgroundColor: '#0D1B2A',
  color: '#fff',
}

export default function ProgressPage() {
  const [period, setPeriod] = useState('1달')

  const targetCalories = useMemo(() => {
    try {
      const profile = JSON.parse(localStorage.getItem('physiq_profile') || 'null')
      if (!profile) return goal.dailyCalories
      const w = parseFloat(profile.weight) || 70
      const h = parseFloat(profile.height) || 170
      const bmr = 10 * w + 6.25 * h - 5 * 25 + 5
      const multiplier = ACTIVITY_MULTIPLIER[profile.exerciseVolume] || 1.375
      const tdee = Math.round(bmr * multiplier)
      const delta = GOAL_DELTA[profile.goal] ?? 0
      return Math.max(1200, tdee + delta)
    } catch {
      return goal.dailyCalories
    }
  }, [])

  const days = PERIOD_DAYS[period]

  const filteredWeight   = useMemo(() => weightLogs.slice(-days), [days])
  const filteredBodyComp = useMemo(() => bodyCompositionLogs.slice(-days), [days])
  const filteredCalorie  = useMemo(
    () =>
      dailyCalorieLogs.slice(-days).map((d) => ({
        ...d,
        rate: Math.round((d.calories / targetCalories) * 100),
      })),
    [days, targetCalories]
  )

  const weightDomain = useMemo(() => {
    const vals = filteredWeight.map((d) => d.weightKg)
    return [
      Math.floor(Math.min(...vals) * 2) / 2 - 0.5,
      Math.ceil(Math.max(...vals)  * 2) / 2 + 0.5,
    ]
  }, [filteredWeight])

  const xTickCount = days === 7 ? 7 : days === 30 ? 6 : 6

  // 좌측 패널 / 하단 stats 계산
  const latestWeight  = weightLogs[weightLogs.length - 1].weightKg
  const initialWeight = weightLogs[0].weightKg
  const weightLost    = +(initialWeight - latestWeight).toFixed(1)
  const bmi           = (latestWeight / ((user.height / 100) ** 2)).toFixed(1)

  const avgCalories = useMemo(
    () => Math.round(filteredCalorie.reduce((s, d) => s + d.calories, 0) / filteredCalorie.length),
    [filteredCalorie]
  )
  const periodLoss = useMemo(
    () => +(filteredWeight[0].weightKg - filteredWeight[filteredWeight.length - 1].weightKg).toFixed(1),
    [filteredWeight]
  )
  const workoutCount = useMemo(
    () => workoutLogs.filter((w) => (new Date() - new Date(w.date)) / 86400000 <= days).length,
    [days]
  )

  const progressPct = Math.min(
    ((initialWeight - latestWeight) / (initialWeight - goal.targetWeight)) * 100,
    100
  )

  return (
    <div className="min-h-screen bg-[#0D1B2A]">

      {/* 헤더 */}
      <div className="bg-[#0D1B2A] border-b border-white/10 px-6 pt-8 pb-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">변화 통계</h1>
            <p className="text-gray-400 text-xs mt-0.5">
              {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' })}
            </p>
          </div>
          {/* 기간 탭 */}
          <div className="flex bg-[#132236] border border-white/10 rounded-xl p-1 gap-1">
            {PERIODS.map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  period === p
                    ? 'bg-white text-[#0D1B2A]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 pt-4 pb-8 space-y-4">

        {/* ── 메인 2열 그리드 ────────────────────────────── */}
        <div className="grid grid-cols-[280px_1fr] gap-4">

          {/* 좌측 패널 */}
          <div className="sticky top-[73px] self-start space-y-4">

            {/* 진행상황 카드 */}
            <div className="bg-[#132236] rounded-xl border border-white/10 p-4">
              <p className="text-gray-400 text-xs mb-3">진행 상황</p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">현재 체중</span>
                  <span className="text-sm font-bold text-white">{latestWeight} kg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">총 감량</span>
                  <span className={`text-sm font-bold ${weightLost > 0 ? 'text-blue-400' : 'text-gray-400'}`}>
                    {weightLost > 0 ? '-' : ''}{Math.abs(weightLost)} kg
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">목표 체중</span>
                  <span className="text-sm font-bold text-gray-300">{goal.targetWeight} kg</span>
                </div>
              </div>

              {/* 목표 달성률 진행바 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">목표 달성률</span>
                  <span className="text-blue-400 font-semibold">{Math.round(Math.max(progressPct, 0))}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${Math.max(progressPct, 0)}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>{initialWeight} kg</span>
                  <span>{goal.targetWeight} kg</span>
                </div>
              </div>
            </div>

            {/* 성취 배지 */}
            <div className="bg-[#132236] rounded-xl border border-white/10 p-4">
              <p className="text-gray-400 text-xs mb-3">성취 배지</p>
              <div className="grid grid-cols-2 gap-2">
                {BADGES.map((b) => (
                  <div
                    key={b.label}
                    className={`bg-[#1A2B3C] rounded-xl p-3 text-center transition ${
                      b.achieved ? '' : 'opacity-40'
                    }`}
                  >
                    <p className="text-2xl mb-1">{b.icon}</p>
                    <p className="text-xs text-white font-medium">{b.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 우측: 차트 */}
          <div className="space-y-4">

            {/* 체중 변화 추이 */}
            <ChartCard title="체중 변화 추이" unit="kg">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={filteredWeight} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={formatTick}
                    tick={{ fontSize: 11, fill: '#6b7280' }}
                    interval={Math.floor(days / xTickCount)}
                  />
                  <YAxis
                    domain={weightDomain}
                    tick={{ fontSize: 11, fill: '#6b7280' }}
                    tickFormatter={(v) => `${v}`}
                    unit="kg"
                  />
                  <Tooltip
                    labelFormatter={formatLabel}
                    formatter={(v) => [`${v} kg`, '체중']}
                    contentStyle={CHART_TOOLTIP_STYLE}
                  />
                  <Line
                    dataKey="weightKg"
                    stroke="#60a5fa"
                    strokeWidth={2}
                    dot={days <= 7 ? { r: 3, fill: '#60a5fa' } : false}
                    activeDot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* 체지방률 + 골격근량 */}
            <ChartCard title="체지방률 / 골격근량">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={filteredBodyComp} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={formatTick}
                    tick={{ fontSize: 11, fill: '#6b7280' }}
                    interval={Math.floor(days / xTickCount)}
                  />
                  <YAxis
                    yAxisId="fat"
                    orientation="left"
                    tick={{ fontSize: 11, fill: '#f87171' }}
                    unit="%"
                    domain={['auto', 'auto']}
                  />
                  <YAxis
                    yAxisId="muscle"
                    orientation="right"
                    tick={{ fontSize: 11, fill: '#4ade80' }}
                    unit="kg"
                    domain={['auto', 'auto']}
                  />
                  <Tooltip
                    labelFormatter={formatLabel}
                    formatter={(v, name) =>
                      name === 'bodyFatRate'
                        ? [`${v}%`, '체지방률']
                        : [`${v} kg`, '골격근량']
                    }
                    contentStyle={CHART_TOOLTIP_STYLE}
                  />
                  <Legend
                    formatter={(val) => val === 'bodyFatRate' ? '체지방률' : '골격근량'}
                    wrapperStyle={{ fontSize: 11, color: '#9ca3af' }}
                  />
                  <Line
                    yAxisId="fat"
                    dataKey="bodyFatRate"
                    stroke="#f87171"
                    strokeWidth={2}
                    dot={days <= 7 ? { r: 3, fill: '#f87171' } : false}
                    activeDot={{ r: 4 }}
                  />
                  <Line
                    yAxisId="muscle"
                    dataKey="skeletalMuscleMass"
                    stroke="#4ade80"
                    strokeWidth={2}
                    dot={days <= 7 ? { r: 3, fill: '#4ade80' } : false}
                    activeDot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* 칼로리 달성률 */}
            <ChartCard
              title="칼로리 달성률"
              subtitle={`목표 ${targetCalories.toLocaleString()} kcal 기준`}
            >
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={filteredCalorie} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" vertical={false} />
                  <XAxis
                    dataKey="date"
                    tickFormatter={formatTick}
                    tick={{ fontSize: 11, fill: '#6b7280' }}
                    interval={Math.floor(days / xTickCount)}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: '#6b7280' }}
                    unit="%"
                    domain={[0, 150]}
                  />
                  <Tooltip
                    labelFormatter={formatLabel}
                    formatter={(v, _, props) => [
                      `${v}% (${props.payload.calories} kcal)`,
                      '달성률',
                    ]}
                    contentStyle={CHART_TOOLTIP_STYLE}
                  />
                  <ReferenceLine
                    y={100}
                    stroke="#4b5563"
                    strokeDasharray="4 4"
                    label={{ value: '목표', position: 'right', fontSize: 10, fill: '#6b7280' }}
                  />
                  <Bar dataKey="rate" radius={[2, 2, 0, 0]} maxBarSize={20}>
                    {filteredCalorie.map((entry, i) => (
                      <Cell
                        key={i}
                        fill={entry.rate >= 100 ? '#f87171' : '#60a5fa'}
                        fillOpacity={0.85}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="flex gap-4 mt-2 justify-center">
                <LegendDot color="bg-blue-400"  label="목표 미달" />
                <LegendDot color="bg-red-400"   label="목표 초과" />
              </div>
            </ChartCard>
          </div>
        </div>

        {/* ── 하단 4열 통계 ──────────────────────────────── */}
        <div className="grid grid-cols-4 gap-4">
          <StatCard
            label="평균 칼로리"
            value={`${avgCalories.toLocaleString()}`}
            unit="kcal"
            color="text-orange-400"
            icon="🔥"
          />
          <StatCard
            label="기간 감량"
            value={periodLoss > 0 ? `-${periodLoss}` : `+${Math.abs(periodLoss)}`}
            unit="kg"
            color={periodLoss > 0 ? 'text-blue-400' : 'text-red-400'}
            icon="⚖️"
          />
          <StatCard
            label="운동 횟수"
            value={`${workoutCount}`}
            unit="회"
            color="text-green-400"
            icon="💪"
          />
          <StatCard
            label="현재 BMI"
            value={bmi}
            unit=""
            color="text-purple-400"
            icon="📊"
          />
        </div>
      </div>
    </div>
  )
}

function ChartCard({ title, subtitle, unit, children }) {
  return (
    <div className="bg-[#132236] rounded-xl border border-white/10 p-5">
      <div className="mb-3">
        <div className="flex items-baseline gap-2">
          <h2 className="text-sm font-semibold text-white">{title}</h2>
          {unit && <span className="text-xs text-gray-500">(단위: {unit})</span>}
        </div>
        {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
      </div>
      {children}
    </div>
  )
}

function LegendDot({ color, label }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  )
}

function StatCard({ label, value, unit, color, icon }) {
  return (
    <div className="bg-[#132236] rounded-xl border border-white/10 p-4 text-center">
      <p className="text-xl mb-1">{icon}</p>
      <p className={`text-xl font-bold ${color}`}>
        {value}<span className="text-sm font-medium text-gray-400 ml-0.5">{unit}</span>
      </p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  )
}
