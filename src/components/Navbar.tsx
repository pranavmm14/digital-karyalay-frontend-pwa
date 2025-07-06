import { useTranslation } from "react-i18next"
import { useAuth } from "@/context/AuthContext"
import { useTheme } from "@/context/ThemeContext"

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const { user, logout } = useAuth()
  const { t } = useTranslation();

  return (
    <nav className="w-full h-14 px-6 flex items-center justify-between bg-primary text-white shadow">
      {/* <span className="font-bold text-lg">Digital Karyalay</span> */}
      <span className="font-bold text-lg">{t("navbar.appname")}</span>
      <div className="flex gap-4 items-center">
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        {user && (
          <>
            <span className="text-sm">{user.name}</span>
            <button onClick={logout} className="text-xs underline">Logout</button>
          </>
        )}
      </div>
    </nav>
  )
}
