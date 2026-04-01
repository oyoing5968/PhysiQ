import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* 공개 라우트 */}
        <Route path="/login"    element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 보호된 라우트 */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* 없는 경로 → 홈으로 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  )
}