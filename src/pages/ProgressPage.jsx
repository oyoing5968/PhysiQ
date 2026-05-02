import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
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

// X축 날짜 표시 — 1주는 월/일, 1달 이상은 틱 수 줄이기 위해 같은 포맷 유지
function formatTick(dateStr) {
  const d = new Date(dateStr)
  return `${d.getMonth() + 1}/${d.getDate()}`
}

// Tooltip 날짜 표시
function formatLabel(dateStr) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

export default function ProgressPage() {
  const navigate = useNavigate()
  const [period, setPeriod] = useState('1달')

  // physiq_profile → 목표 칼로리 계산, 없으면 mock goal.dailyCalories
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

  // 기간 필터 적용
  const filteredWeight = useMemo(() => weightLogs.slice(-days), [days])

  const filteredBodyComp = useMemo(() => bodyCompositionLogs.slice(-days), [days])

  const filteredCalorie = useMemo(
    () =>
      dailyCalorieLogs.slice(-days).map((d) => ({
        ...d,
        rate: Math.round((d.calories / targetCalories) * 100),
      })),
    [days, targetCalories]
  )

  // 체중 Y축 범위 — 데이터 최소/최대 ± 0.5
  const weightDomain = useMemo(() => {
    const vals = filteredWeight.map((d) => d.weightKg)
    return [
      Math.floor(Math.min(...vals) * 2) / 2 - 0.5,
      Math.ceil(Math.max(...vals)  * 2) / 2 + 0.5,
    ]
  }, [filteredWeight])

  // X축 틱 간격 — 데이터 많을수록 드문드문
  const xTickCount = days === 7 ? 7 : days === 30 ? 6 : 6

  return (
    <div className="min-h-screen bg-gray-50 pb-24">

      {/* 헤더 */}
      <div className="bg-white border-b border-gray-100 px-4 pt-12 pb-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition text-gray-500"
          >
            ←
          </button>
          <h1 className="text-lg font-bold text-gray-800">변화 추이</h1>
        </div>
      </div>

      {/* 기간 필터 탭 */}
      <div className="px-4 pt-4">
        <div className="flex bg-gray-100 rounded-xl p-1 gap-1">
          {PERIODS.map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition ${
                period === p
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 pt-4 space-y-4">

        {/* ── 체중 추이 ────────────────────────────────────── */}
        <ChartCard title="체중 추이" unit="kg">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={filteredWeight} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis
                dataKey="date"
                tickFormatter={formatTick}
                tick={{ fontSize: 11, fill: '#9ca3af' }}
                interval={Math.floor(days / xTickCount)}
              />
              <YAxis
                domain={weightDomain}
                tick={{ fontSize: 11, fill: '#9ca3af' }}
                tickFormatter={(v) => `${v}`}
                unit="kg"
              />
              <Tooltip
                labelFormatter={formatLabel}
                formatter={(v) => [`${v} kg`, '체중']}
                contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e5e7eb' }}
              />
              <Line
                dataKey="weightKg"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={days <= 7 ? { r: 3, fill: '#3b82f6' } : false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* ── 체지방률 + 골격근량 ───────────────────────────── */}
        <ChartCard title="체지방률 / 골격근량">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={filteredBodyComp} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis
                dataKey="date"
                tickFormatter={formatTick}
                tick={{ fontSize: 11, fill: '#9ca3af' }}
                interval={Math.floor(days / xTickCount)}
              />
              <YAxis
                yAxisId="fat"
                orientation="left"
                tick={{ fontSize: 11, fill: '#f43f5e' }}
                unit="%"
                domain={['auto', 'auto']}
              />
              <YAxis
                yAxisId="muscle"
                orientation="right"
                tick={{ fontSize: 11, fill: '#22c55e' }}
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
                contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e5e7eb' }}
              />
              <Legend
                formatter={(val) => val === 'bodyFatRate' ? '체지방률' : '골격근량'}
                wrapperStyle={{ fontSize: 11 }}
              />
              <Line
                yAxisId="fat"
                dataKey="bodyFatRate"
                stroke="#f43f5e"
                strokeWidth={2}
                dot={days <= 7 ? { r: 3, fill: '#f43f5e' } : false}
                activeDot={{ r: 4 }}
              />
              <Line
                yAxisId="muscle"
                dataKey="skeletalMuscleMass"
                stroke="#22c55e"
                strokeWidth={2}
                dot={days <= 7 ? { r: 3, fill: '#22c55e' } : false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* ── 칼로리 달성률 ────────────────────────────────── */}
        <ChartCard
          title="칼로리 달성률"
          subtitle={`목표 ${targetCalories.toLocaleString()} kcal 기준`}
        >
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={filteredCalorie} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
              <XAxis
                dataKey="date"
                tickFormatter={formatTick}
                tick={{ fontSize: 11, fill: '#9ca3af' }}
                interval={Math.floor(days / xTickCount)}
              />
              <YAxis
                tick={{ fontSize: 11, fill: '#9ca3af' }}
                unit="%"
                domain={[0, 150]}
              />
              <Tooltip
                labelFormatter={formatLabel}
                formatter={(v, _, props) => [
                  `${v}% (${props.payload.calories} kcal)`,
                  '달성률',
                ]}
                contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e5e7eb' }}
              />
              {/* 100% 목표 기준선 */}
              <ReferenceLine
                y={100}
                stroke="#9ca3af"
                strokeDasharray="4 4"
                label={{ value: '목표', position: 'right', fontSize: 10, fill: '#9ca3af' }}
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
          {/* 범례 */}
          <div className="flex gap-4 mt-2 justify-center">
            <LegendDot color="bg-blue-400"  label="목표 미달" />
            <LegendDot color="bg-red-400"   label="목표 초과" />
          </div>
        </ChartCard>

      </div>
    </div>
  )
}

function ChartCard({ title, subtitle, unit, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
      <div className="mb-3">
        <div className="flex items-baseline gap-2">
          <h2 className="text-sm font-semibold text-gray-700">{title}</h2>
          {unit && <span className="text-xs text-gray-400">(단위: {unit})</span>}
        </div>
        {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
      </div>
      {children}
    </div>
  )
}

function LegendDot({ color, label }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
      <span className="text-xs text-gray-500">{label}</span>
    </div>
  )
}
