import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "@/routes/AppRoutes"
import { Navbar } from "@/components/Navbar"
import { AuthProvider, useAuth } from "@/context/AuthContext"
import "@/i18n"

const AppContent = () => {
  const { user } = useAuth()

  return (
    <>
      {user && <Navbar />}
      <AppRoutes />
    </>
  )
}

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  </BrowserRouter>
)

export default App
