// [UNUSED] BottomNav — 사이드바 전환으로 비활성화 (2026-05-12)
// AppLayout.jsx에서 import가 제거됨. Sidebar.jsx 참고.

/* import { useLocation, useNavigate } from 'react-router-dom'

const NAV_ITEMS = [
  {
    path: '/',
    label: '홈',
    icon: (active) => (
      <svg viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
      </svg>
    ),
  },
  {
    path: '/diet',
    label: '식단',
    icon: (active) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        {active && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h4" />}
      </svg>
    ),
  },
  {
    path: '/workout',
    label: '운동',
    icon: (active) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15M7 9l-2.5 3L7 15M17 9l2.5 3-2.5 3" />
        <circle cx="4" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="20" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    path: '/recommend',
    label: '추천',
    icon: (active) => (
      <svg viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    path: '/progress',
    label: '변화',
    icon: (active) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        {active
          ? <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l4-4 4 4 4-6 4 3" strokeWidth={2.5} />
          : <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l4-4 4 4 4-6 4 3" />}
      </svg>
    ),
  },
]

export default function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20">
      <div className="flex items-center justify-around px-2 py-2 pb-safe">
        {NAV_ITEMS.map(({ path, label, icon }) => {
          const active = location.pathname === path
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition min-w-0 flex-1 ${
                active ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {icon(active)}
              <span className={`text-xs font-medium ${active ? 'text-blue-600' : 'text-gray-400'}`}>
                {label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
*/
