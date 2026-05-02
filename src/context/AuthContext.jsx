import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

// btoa는 ASCII만 처리하므로 유니코드(한글 등)를 위해 encodeURIComponent 사용
function b64encode(str) {
  return btoa(unescape(encodeURIComponent(str)))
}
function b64decode(str) {
  return decodeURIComponent(escape(atob(str)))
}

function makeToken(payload) {
  const header = b64encode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const body   = b64encode(JSON.stringify({ ...payload, exp: Date.now() + 86400000 }))
  const sig    = b64encode('mock-signature')
  return `${header}.${body}.${sig}`
}

export function parseToken(token) {
  try {
    return JSON.parse(b64decode(token.split('.')[1]))
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token'))

  const login = (email, name) => {
    const newToken = makeToken({ email, name })
    localStorage.setItem('token', newToken)
    setToken(newToken)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  const isAuthenticated = !!token && (() => {
    const payload = parseToken(token)
    return payload && payload.exp > Date.now()
  })()

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}