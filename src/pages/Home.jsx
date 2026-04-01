import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { parseToken } from '../context/AuthContext'

export default function Home() {
  const { token, logout } = useAuth()
  const navigate = useNavigate()
  const payload = parseToken(token)

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold text-blue-600">PhysiQ</h1>
      <p className="text-gray-600">안녕하세요, {payload?.name}님!</p>
      <button
        onClick={handleLogout}
        className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition"
      >
        로그아웃
      </button>
    </div>
  )
}