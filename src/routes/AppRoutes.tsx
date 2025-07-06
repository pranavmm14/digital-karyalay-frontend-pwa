import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { LoginPage } from '@/pages/LoginPage'
import Dashboard from '@/pages/Dashboard'
import MeetingForm from '@/pages/MeetingForm'
import AttendancePage from '@/pages/AttendancePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import Reports from '@/pages/Reports'

export const AppRoutes = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white text-gray-800">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
          <p className="text-sm text-gray-500">Checking login status...</p>
        </div>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage />} />
      {user ? (
        <>
          <Route path="/" element={<Dashboard />} />
          <Route path="/meetings/new" element={<MeetingForm />} />
          <Route path="/meetings/:id/attendance" element={<AttendancePage />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<NotFoundPage />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  )
}
