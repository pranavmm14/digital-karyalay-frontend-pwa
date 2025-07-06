// src/pages/LoginPage.tsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/auth/firebase";
import { useAuth } from "@/context/AuthContext";
import Logo from "@/assets/logo.svg";
import { useNavigate } from "react-router-dom";
// import { useTheme } from "next-themes";
import "@/styles/loginPage.css";

export const LoginPage = () => {
  const { loginWithGoogle } = useAuth();
  const { t, i18n } = useTranslation();
  // const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  if (error) {
    console.error("Login error:", error);
  }

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
    } catch (err) {
      console.error("Google login failed", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>

      <div className="login-card">
        <div className="card-glow"></div>
        
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="login-logo" />
        </div>
        
        <h2 className="login-title">{t("login.title")}</h2>
        <p className="login-subtitle">Welcome back! Please sign in to continue</p>

        <div className="language-switch">
          <button 
            onClick={() => i18n.changeLanguage("en")}
            className={i18n.language === "en" ? "active" : ""}
          >
            EN
          </button>
          <button 
            onClick={() => i18n.changeLanguage("mr")}
            className={i18n.language === "mr" ? "active" : ""}
          >
            MR
          </button>
        </div>

        {error && (
          <div className="login-error">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
            </svg>
            {error}
          </div>
        )}

        <button
          onClick={handleGoogleLogin}
          className={`login-button google-button ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading ? (
            <div className="spinner-container">
              <div className="spinner" />
              <span>Signing in...</span>
            </div>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {t("login.google")}
            </>
          )}
        </button>

        <div className="divider">
          <span>or</span>
        </div>

        <form onSubmit={handleEmailLogin} className="login-form">
          <div className={`input-group ${isEmailFocused ? "focused" : ""} ${email ? "filled" : ""}`}>
            <input
              type="email"
              value={email}
              placeholder=" "
              required
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>{t("login.email")}</label>
            <div className="input-highlight"></div>
          </div>
          
          <div className={`input-group ${isPasswordFocused ? "focused" : ""} ${password ? "filled" : ""}`}>
            <input
              type="password"
              value={password}
              placeholder=" "
              required
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>{t("login.password")}</label>
            <div className="input-highlight"></div>
          </div>
          
          <button type="submit" className="login-button primary-button">
            <span>{t("login.submit")}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

// Export default LoginPage
export default LoginPage;