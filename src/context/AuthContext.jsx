import { createContext, useContext, useState } from 'react'
import * as authService from '../services/authService'
import * as userService from '../services/userService'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token'))
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('physiq_user') || 'null')
    } catch {
      return null
    }
  })

  const login = async (email, password) => {
    const { token: newToken } = await authService.login(email, password)
    localStorage.setItem('token', newToken)
    setToken(newToken)

    try {
      const { data } = await userService.getUserInfo()
      const userInfo = { name: data.user.name, email: data.user.email }
      localStorage.setItem('physiq_user', JSON.stringify(userInfo))
      setUser(userInfo)
    } catch {
      // 온보딩 전 유저는 info가 없을 수 있으므로 무시
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('physiq_user')
    setToken(null)
    setUser(null)
  }

  const isAuthenticated = !!token

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
