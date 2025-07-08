import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import "@/styles/Navbar.css";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <a href="/" className="navbar-title" title={t("navbar.appTitle")}>
        {t("navbar.appTitle")}
      </a>

      <div className="navbar-actions">
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          title={theme === "light" ? "Dark Mode" : "Light Mode"}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {user && (
          <>
            <span className="user-name">{user.name}</span>
            <button onClick={logout} className="logout-button" title="Log out">
              Logout
            </button>
          </>
        )}
      </div>

      {/* Hamburger menu for mobile */}
      <button
        className="hamburger"
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {mobileMenuOpen && (
        <div className="mobile-menu show">
          <button
            onClick={() => {
              toggleTheme();
              setMobileMenuOpen(false);
            }}
            className="theme-toggle"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>

          {user && (
            <>
              <span className="user-name">{user.name}</span>
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="logout-button"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};
