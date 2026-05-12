import { useNavigate } from 'react-router-dom'
import { useAuth, parseToken } from '../context/AuthContext'
import { user as mockUser, goal } from '../mock'

const GOAL_LABEL = {
  lose_weight:  '체중 감량',
  gain_muscle:  '근육 증가',
  maintain:     '체중 유지',
}

const SETTINGS_SECTIONS = [
  {
    title: '계정 설정',
    icon: '⚙️',
    items: [
      { label: '프로필 수정',  sub: '이름, 사진 변경' },
      { label: '비밀번호 변경', sub: '보안 설정' },
      { label: '알림 설정',    sub: '푸시 알림 관리' },
    ],
  },
  {
    title: '개인정보',
    icon: '🔒',
    items: [
      { label: '개인정보 처리방침', sub: '데이터 사용 안내' },
      { label: '이용약관',         sub: '서비스 약관' },
    ],
  },
  {
    title: '지원',
    icon: '❓',
    items: [
      { label: '도움말',  sub: '자주 묻는 질문' },
      { label: '문의하기', sub: '1:1 채팅 문의' },
      { label: '앱 버전', sub: 'v1.0.0', badge: '최신 버전' },
    ],
  },
]

export default function ProfilePage() {
  const { token, logout } = useAuth()
  const navigate = useNavigate()

  const payload = parseToken(token)
  const userName  = payload?.name  ?? mockUser.name
  const userEmail = payload?.email ?? mockUser.email

  const goalLabel = GOAL_LABEL[goal.goalType] ?? '목표 없음'

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="min-h-screen bg-[#0D1B2A]">

      {/* 헤더 */}
      <div className="px-6 pt-8 pb-4 border-b border-white/10">
        <h1 className="text-xl font-bold text-white">프로필</h1>
        <p className="text-gray-400 text-xs mt-0.5">계정 및 앱 설정</p>
      </div>

      <div className="px-5 py-6">
        <div className="grid grid-cols-[300px_1fr] gap-6">

          {/* ── 좌측: 프로필 카드 ──────────────────────────── */}
          <div className="space-y-3">

            {/* 아바타 + 기본 정보 */}
            <div className="bg-[#132236] border border-white/10 rounded-xl p-6 text-center">
              {/* 아바타 */}
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 rounded-full bg-blue-600/30 border-2 border-blue-500/40 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-blue-400">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <button className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>

              <p className="text-xl font-bold text-white">{userName}</p>
              <div className="flex items-center justify-center gap-1.5 mt-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-400 text-sm">{userEmail}</p>
              </div>

              {/* 배지 */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="flex items-center gap-1 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                  🔥 7일 연속
                </span>
                <span className="flex items-center gap-1 bg-white/10 text-gray-400 text-xs px-3 py-1.5 rounded-full">
                  2025년 3월 가입
                </span>
              </div>
            </div>

            {/* 신체 정보 그리드 */}
            <div className="bg-[#132236] border border-white/10 rounded-xl p-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: '키',    value: `${mockUser.height}cm` },
                  { label: '체중',  value: `${mockUser.weight}kg` },
                  { label: '목표',  value: `${goal.targetWeight}kg` },
                  { label: '체지방', value: `${mockUser.bodyFatRate}%` },
                ].map((item) => (
                  <div key={item.label} className="bg-[#1A2B3C] rounded-xl p-3">
                    <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                    <p className="text-base font-bold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 현재 목표 */}
            <button className="w-full bg-[#132236] border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:bg-white/5 transition text-left">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-xl flex-shrink-0">
                🎯
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400">현재 목표</p>
                <p className="text-white font-semibold text-sm">{goalLabel}</p>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* 로그아웃 */}
            <button
              onClick={handleLogout}
              className="w-full bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl py-3 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-red-500/20 transition"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              로그아웃
            </button>
          </div>

          {/* ── 우측: 설정 섹션 ────────────────────────────── */}
          <div className="space-y-6">
            {SETTINGS_SECTIONS.map((section) => (
              <div key={section.title}>
                <div className="flex items-center gap-2 mb-2 px-1">
                  <span className="text-sm">{section.icon}</span>
                  <p className="text-gray-400 text-sm font-medium">{section.title}</p>
                </div>
                <div className="bg-[#132236] border border-white/10 rounded-xl overflow-hidden">
                  {section.items.map((item, idx) => (
                    <button
                      key={item.label}
                      className={`w-full flex items-center justify-between px-4 py-4 hover:bg-white/5 transition text-left ${
                        idx < section.items.length - 1 ? 'border-b border-white/5' : ''
                      }`}
                    >
                      <div>
                        <p className="text-white text-sm font-medium">{item.label}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.badge && (
                          <span className="text-xs text-green-400 bg-green-500/20 px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                        {!item.badge && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
