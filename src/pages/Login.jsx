import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await login(form.email, form.password)
    } catch (err) {
      setError(err.message || '이메일 또는 비밀번호가 올바르지 않습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0D1B2A] flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        {/* 뒤로가기 */}
        <button
          onClick={() => navigate(-1)}
          className="mb-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* 헤딩 */}
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
        <p className="text-gray-400 text-sm mb-8">당신의 변화가 시작됩니다</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="이메일"
            required
            className="w-full px-4 py-3.5 rounded-xl bg-[#1A2B3C] border border-white/10 text-white text-sm placeholder:text-gray-500 outline-none focus:border-blue-500/60 transition"
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="비밀번호"
            required
            className="w-full px-4 py-3.5 rounded-xl bg-[#1A2B3C] border border-white/10 text-white text-sm placeholder:text-gray-500 outline-none focus:border-blue-500/60 transition"
          />

          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-xs text-gray-400 hover:text-white transition"
            >
              비밀번호를 잊으셨나요?
            </Link>
          </div>

          {error && (
            <p className="text-sm text-red-400 bg-red-500/10 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white disabled:bg-white/40 text-[#0D1B2A] font-semibold py-3.5 rounded-xl text-sm transition mt-2"
          >
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          계정이 없으신가요?{' '}
          <Link to="/register" className="text-white font-semibold hover:underline">
            지금 가입하기
          </Link>
        </p>

      </div>
    </div>
  )
}
