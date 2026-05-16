import { useState, useMemo, useEffect } from 'react'
import {
  ResponsiveContainer,
  LineChart, Line,
  BarChart, Bar, Cell,
  XAxis, YAxis, Tooltip, Legend,
  ReferenceLine, CartesianGrid,
} from 'recharts'
import * as weightService from '../services/weightService'
import * as analysisService from '../services/analysisService'
import * as goalService from '../services/goalService'
import * as userService from '../services/userService'

const PERIODS = ['1주', '1달', '3달']
const PERIOD_DAYS = { '1주': 7, '1달': 30, '3달': 90 }

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

  const [weightLogs, setWeightLogs]     = useState([])
  const [analysis, setAnalysis]         = useState(null)
  const [goalData, setGoalData]         = useState(null)
  const [userInfo, setUserInfo]         = useState(null)

  useEffect(() => {
    const load = async () => {
      const [weightRes, analysisRes, goalRes, userRes] = await Promise.allSettled([
        weightService.getWeightLogs(),
        analysisService.getWeightAnalysis(),
        goalService.getGoal(),
        userService.getUserInfo(),
      ])

      if (weightRes.status === 'fulfilled') {
        const logs = (weightRes.value.data ?? []).map((w) => ({
          date:     w.recorded_at?.split('T')[0] ?? w.recorded_at,
          weightKg: w.weight,
        }))
        setWeightLogs(logs)
      }

      if (analysisRes.status === 'fulfilled') {
        setAnalysis(analysisRes.value.data)
      }

      if (goalRes.status === 'fulfilled') {
        setGoalData(goalRes.value.data)
      }

      if (userRes.status === 'fulfilled') {
        setUserInfo(userRes.value.data)
      }
    }
    load()
  }, [])

  const days = PERIOD_DAYS[period]
  const xTickCount = days === 7 ? 7 : 6

  const filteredWeight = useMemo(() => {
    if (!weightLogs.length) return []
    return weightLogs.slice(-days)
  }, [weightLogs, days])

  const weightDomain = useMemo(() => {
    if (!filteredWeight.length) return ['auto', 'auto']
    const vals = filteredWeight.map((d) => d.weightKg)
    return [
      Math.floor(Math.min(...vals) * 2) / 2 - 0.5,
      Math.ceil(Math.max(...vals)  * 2) / 2 + 0.5,
    ]
  }, [filteredWeight])

  const latestWeight  = analysis?.current_weight ?? filteredWeight[filteredWeight.length - 1]?.weightKg ?? 0
  const initialWeight = analysis?.start_weight   ?? filteredWeight[0]?.weightKg ?? 0
  const weightChange  = analysis?.weight_change  ?? 0
  const progressPct   = analysis?.progress_pct   ?? 0
  const targetWeight  = goalData?.target_weight  ?? 0
  const dailyCalories = goalData?.daily_kcal     ?? 0
  const height        = userInfo?.static_info?.height ?? 0
  const bmi           = height > 0 ? (latestWeight / ((height / 100) ** 2)).toFixed(1) : '—'

  const periodLoss = useMemo(() => {
    if (!filteredWeight.length) return 0
    return +(filteredWeight[0].weightKg - filteredWeight[filteredWeight.length - 1].weightKg).toFixed(1)
  }, [filteredWeight])

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
                  <span className="text-xs text-gray-400">총 변화</span>
                  <span className={`text-sm font-bold ${weightChange < 0 ? 'text-blue-400' : weightChange > 0 ? 'text-red-400' : 'text-gray-400'}`}>
                    {weightChange > 0 ? '+' : ''}{weightChange} kg
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">목표 체중</span>
                  <span className="text-sm font-bold text-gray-300">{targetWeight} kg</span>
                </div>
              </div>

              {/* 목표 달성률 진행바 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">목표 달성률</span>
                  <span className="text-blue-400 font-semibold">{Math.max(progressPct, 0)}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(Math.max(progressPct, 0), 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>{initialWeight} kg</span>
                  <span>{targetWeight} kg</span>
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
              {filteredWeight.length > 0 ? (
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={filteredWeight} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                    <XAxis
                      dataKey="date"
                      tickFormatter={formatTick}
                      tick={{ fontSize: 11, fill: '#6b7280' }}
                      interval={Math.floor(filteredWeight.length / xTickCount)}
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
                      dot={filteredWeight.length <= 7 ? { r: 3, fill: '#60a5fa' } : false}
                      activeDot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <NoData />
              )}
            </ChartCard>

            {/* 체지방률 + 골격근량 */}
            <ChartCard title="체지방률 / 골격근량">
              <NoData message="인바디 기록을 추가하면 표시됩니다" />
            </ChartCard>

            {/* 칼로리 달성률 */}
            <ChartCard
              title="칼로리 달성률"
              subtitle={`목표 ${dailyCalories.toLocaleString()} kcal 기준`}
            >
              <NoData message="식단을 기록하면 달성률이 표시됩니다" />
            </ChartCard>
          </div>
        </div>

        {/* ── 하단 4열 통계 ──────────────────────────────── */}
        <div className="grid grid-cols-4 gap-4">
          <StatCard
            label="평균 칼로리"
            value="—"
            unit="kcal"
            color="text-orange-400"
            icon="🔥"
          />
          <StatCard
            label="기간 감량"
            value={periodLoss > 0 ? `-${periodLoss}` : periodLoss < 0 ? `+${Math.abs(periodLoss)}` : '—'}
            unit={periodLoss !== 0 ? 'kg' : ''}
            color={periodLoss > 0 ? 'text-blue-400' : periodLoss < 0 ? 'text-red-400' : 'text-gray-400'}
            icon="⚖️"
          />
          <StatCard
            label="운동 횟수"
            value="—"
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

function NoData({ message = '데이터가 없습니다' }) {
  return (
    <div className="h-[200px] flex items-center justify-center">
      <p className="text-sm text-gray-600">{message}</p>
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
