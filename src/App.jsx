import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import AppLayout from './components/AppLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import Onboarding from './pages/Onboarding'
import HomePage from './pages/HomePage'
import DietPage from './pages/DietPage'
import WorkoutPage from './pages/WorkoutPage'
import RecommendPage from './pages/RecommendPage'
import ProgressPage from './pages/ProgressPage'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login"    element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 보호된 라우트 */}
        <Route element={<ProtectedRoute />}>
          {/* 온보딩은 바텀 네비 없이 단독 표시 */}
          <Route path="/onboarding" element={<Onboarding />} />

          {/* 바텀 네비가 포함된 메인 앱 레이아웃 */}
          <Route element={<AppLayout />}>
            <Route path="/"          element={<HomePage />} />
            <Route path="/diet"      element={<DietPage />} />
            <Route path="/workout"   element={<WorkoutPage />} />
            <Route path="/recommend" element={<RecommendPage />} />
            <Route path="/progress"  element={<ProgressPage />} />
          </Route>
        </Route>

        {/* 없는 경로 → 홈으로 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  )
}