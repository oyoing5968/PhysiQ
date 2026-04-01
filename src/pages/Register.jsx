import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const GENDER_OPTIONS = [
  { value: 'male',   label: '남성' },
  { value: 'female', label: '여성' },
]

export default function Register() {
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true })
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
  const [errors, setErrors] = useState({})
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
      login(form.email, form.name)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/* 로고 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">PhysiQ</h1>
          <p className="text-gray-500 mt-1 text-sm">건강한 하루를 기록하세요</p>
        </div>

        {/* 카드 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">회원가입</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* 이름 */}
            <Field label="이름" error={errors.name}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="홍길동"
                className={inputClass(errors.name)}
              />
            </Field>

            {/* 이메일 */}
            <Field label="이메일" error={errors.email}>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className={inputClass(errors.email)}
              />
            </Field>

            {/* 비밀번호 */}
            <Field label="비밀번호" error={errors.password}>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="6자 이상 입력하세요"
                className={inputClass(errors.password)}
              />
            </Field>

            {/* 비밀번호 확인 */}
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

            {/* 생년월일 */}
            <Field label="생년월일" error={errors.birthDate}>
              <input
                type="date"
                name="birthDate"
                value={form.birthDate}
                onChange={handleChange}
                className={inputClass(errors.birthDate)}
              />
            </Field>

            {/* 성별 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">성별</label>
              <div className="flex gap-3">
                {GENDER_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex-1 flex items-center justify-center py-2.5 rounded-lg border text-sm cursor-pointer transition
                      ${form.gender === opt.value
                        ? 'border-blue-500 bg-blue-50 text-blue-600 font-medium'
                        : 'border-gray-300 text-gray-600 hover:border-gray-400'}`}
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
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2.5 rounded-lg text-sm transition mt-2"
            >
              {loading ? '가입 중...' : '회원가입'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            이미 계정이 있으신가요?{' '}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}

function inputClass(error) {
  return `w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition
    ${error
      ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
      : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'}`
}