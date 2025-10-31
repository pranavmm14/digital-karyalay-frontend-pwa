import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { LoginPage } from '@/pages/LoginPage'
import ComingSoon from '@/pages/ComingSoon'
import unfinishedRoutes from '@/config/unfinished'
import Dashboard from '@/pages/Dashboard'
import MeetingForm from '@/pages/MeetingForm'
import AttendancePage from '@/pages/AttendancePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import Reports from '@/pages/Reports'
import PravasChakra from '@/pages/PravasChakra'
import Management from '@/pages/Management'

export const AppRoutes = () => {
  const { user, loading } = useAuth()

  const wrap = (path: string, element: any) =>
    unfinishedRoutes.includes(path) ? <ComingSoon /> : element

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
      {/* Public coming soon page */}
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage />} />
      {user ? (
        <>
          <Route path="/" element={<Dashboard />} />
          <Route path="/meetings/new" element={wrap('/meetings/new', <MeetingForm />)} />
          <Route path="/meetings/:id/attendance" element={wrap('/meetings/:id/attendance', <AttendancePage />)} />
          <Route path="/reports" element={wrap('/reports', <Reports />)} />
          {/* FIX: Remove the year prop. PravasChakra now manages its own month/year state. */}
          <Route path="/PravasChakra" element={wrap('/PravasChakra', <PravasChakra />)} />
          {/* Add more routes as needed */}
          <Route path='/management' element={wrap('/management', <Management />)} />
          <Route path="*" element={<NotFoundPage />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  )
}