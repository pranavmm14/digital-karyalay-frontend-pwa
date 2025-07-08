import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "@/routes/AppRoutes"
import { Navbar } from "@/components/Navbar"
import { AuthProvider, useAuth } from "@/context/AuthContext"
import { ThemeProvider } from "@/context/ThemeContext"
import { useEffect } from "react"
import "@/i18n"

const AppContent = () => {
  const { user } = useAuth()

  // Handle PWA installation and routing
  useEffect(() => {
    // Handle back button in PWA
    const handlePopState = () => {
      // Custom back button handling if needed
      console.log('Navigation occurred')
    }

    window.addEventListener('popstate', handlePopState)

    // Clean up
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {user && <Navbar />}
      <main className={user ? "pt-16" : ""}>
        <AppRoutes />
      </main>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App