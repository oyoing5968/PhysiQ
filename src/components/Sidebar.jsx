import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth, parseToken } from '../context/AuthContext'
import { goal } from '../mock'

const NAV_ITEMS = [
  { path: '/',         label: '홈',       icon: '🏠' },
  { path: '/diet',     label: '식단 기록', icon: '📅' },
  { path: '/recommend',label: '추천 플랜', icon: '✨' },
  { path: '/progress', label: '변화 통계', icon: '📈' },
  { path: '/profile',  label: '프로필',    icon: '👤' },
]

const GOAL_LABEL = {
  lose_weight:  '다이어트 목표',
  gain_muscle:  '근육 증가 목표',
  maintain:     '체중 유지 목표',
}

export default function Sidebar() {
  const { token, logout } = useAuth()
  const navigate = useNavigate()
  const user = parseToken(token)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-[220px] bg-[#0D1B2A] flex flex-col z-30">
      {/* 로고 */}
      <div className="px-6 py-6">
        <span className="text-white text-xl font-bold tracking-tight">PhysiQ</span>
      </div>

      {/* 네비게이션 */}
      <nav className="flex-1 px-3 space-y-1">
        {NAV_ITEMS.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <span className="text-base">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* 유저 정보 + 로그아웃 */}
      <div className="px-4 py-5 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white/70">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">
              {user?.name ?? '사용자'}
            </p>
            <p className="text-gray-400 text-xs truncate">
              {GOAL_LABEL[goal?.goalType] ?? '목표 없음'}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
            title="로그아웃"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  )
}
