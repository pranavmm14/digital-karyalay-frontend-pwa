// src/components/Layout.tsx
import { Navbar } from "./Navbar"
import { useTheme } from "@/context/ThemeContext"
import "@/styles/Layout.css"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme()

  return (
    <div className={`app-container ${theme}`}>
      <Navbar />
      <main className="app-content">{children}</main>
    </div>
  )
}


