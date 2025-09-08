import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "@/routes/AppRoutes"
import { AuthProvider, useAuth } from "@/context/AuthContext"
import { ThemeProvider } from "@/context/ThemeContext"
import { useEffect } from "react"
import { Layout } from "@/components/Layout"
import "@/i18n"

const AppContent = () => {
  // const { user } = useAuth()

  // Handle PWA installation and routing
  useEffect(() => {
    const handlePopState = () => {
      // Custom back button handling if needed
      console.log('Navigation occurred')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <Layout>
      <AppRoutes />
    </Layout>
  )
}

const App = () => (
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
)

export default App