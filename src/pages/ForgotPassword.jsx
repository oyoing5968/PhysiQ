import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSent(true)
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
        <h1 className="text-3xl font-bold text-white mb-2 leading-snug">
          비밀번호를<br />잊으셨나요?
        </h1>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
          가입하신 이메일을 입력하시면<br />
          비밀번호 재설정 링크를 보내드립니다
        </p>

        {sent ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-4 text-green-400 text-sm">
            ✓ 재설정 링크를 전송했습니다. 이메일을 확인해주세요.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
              required
              className="w-full px-4 py-3.5 rounded-xl bg-[#1A2B3C] border border-white/10 text-white text-sm placeholder:text-gray-500 outline-none focus:border-blue-500/60 transition"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white disabled:bg-white/40 text-[#0D1B2A] font-semibold py-3.5 rounded-xl text-sm transition"
            >
              {loading ? '전송 중...' : '재설정 링크 보내기'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
