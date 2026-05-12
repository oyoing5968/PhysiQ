import { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const GENDER_OPTIONS = [
  { value: 'male',   label: '남성' },
  { value: 'female', label: '여성' },
]

export default function Register() {
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const justRegistered = useRef(false)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(justRegistered.current ? '/onboarding' : '/', { replace: true })
    }
  }, [isAuthenticated])

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    birthDate: '',
    gender: 'male',
  })
  const [errors, setErrors]   = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim())             next.name = '이름을 입력해주세요.'
    if (!form.email.includes('@'))     next.email = '올바른 이메일 형식을 입력해주세요.'
    if (form.password.length < 6)      next.password = '비밀번호는 6자 이상이어야 합니다.'
    if (form.password !== form.passwordConfirm)
                                       next.passwordConfirm = '비밀번호가 일치하지 않습니다.'
    if (!form.birthDate)               next.birthDate = '생년월일을 입력해주세요.'
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }
    setLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 600))
      justRegistered.current = true
      login(form.email, form.name)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0D1B2A] flex items-center justify-center px-6 py-10">
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
          PhysiQ에 오신 것을<br />환영합니다
        </h1>
        <p className="text-gray-400 text-sm mb-8">계정을 만들고 건강 관리를 시작하세요</p>

        <form onSubmit={handleSubmit} className="space-y-3">

          <Field label="이름" error={errors.name}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="이름을 입력하세요"
              className={inputClass(errors.name)}
            />
          </Field>

          <Field label="이메일" error={errors.email}>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="이메일을 입력하세요"
              className={inputClass(errors.email)}
            />
          </Field>

          <Field label="비밀번호" error={errors.password}>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력하세요"
              className={inputClass(errors.password)}
            />
          </Field>

          <Field label="비밀번호 확인" error={errors.passwordConfirm}>
            <input
              type="password"
              name="passwordConfirm"
              value={form.passwordConfirm}
              onChange={handleChange}
              placeholder="비밀번호를 다시 입력하세요"
              className={inputClass(errors.passwordConfirm)}
            />
          </Field>

          <Field label="생년월일" error={errors.birthDate}>
            <input
              type="date"
              name="birthDate"
              value={form.birthDate}
              onChange={handleChange}
              className={inputClass(errors.birthDate) + ' [color-scheme:dark]'}
            />
          </Field>

          {/* 성별 */}
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">성별</label>
            <div className="flex gap-3">
              {GENDER_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex-1 flex items-center justify-center py-3 rounded-xl border text-sm cursor-pointer transition
                    ${form.gender === opt.value
                      ? 'border-blue-400 bg-blue-500/20 text-blue-300 font-medium'
                      : 'border-white/10 bg-[#1A2B3C] text-gray-400 hover:border-white/20'}`}
                >
                  <input
                    type="radio"
                    name="gender"
                    value={opt.value}
                    checked={form.gender === opt.value}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white disabled:bg-white/40 text-[#0D1B2A] font-semibold py-3.5 rounded-xl text-sm transition mt-2"
          >
            {loading ? '가입 중...' : '가입하기'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          이미 계정이 있으신가요?{' '}
          <Link to="/login" className="text-white font-semibold hover:underline">
            로그인
          </Link>
        </p>
      </div>
    </div>
  )
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm text-gray-400 mb-1.5">{label}</label>
      {children}
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  )
}

function inputClass(error) {
  return `w-full px-4 py-3.5 rounded-xl border text-white text-sm outline-none transition bg-[#1A2B3C] placeholder:text-gray-500
    ${error
      ? 'border-red-500/50 focus:border-red-400'
      : 'border-white/10 focus:border-blue-500/60'}`
}
