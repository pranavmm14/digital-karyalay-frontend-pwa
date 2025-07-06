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
      <div className="login-card">
        <img src={Logo} alt="Logo" className="login-logo" />
        <h2 className="login-title">{t("login.title")}</h2>

        <div className="language-switch">
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
          <button onClick={() => i18n.changeLanguage("mr")}>MR</button>
        </div>

        {error && <p className="login-error">{error}</p>}

        <button
          onClick={handleGoogleLogin}
          className={`login-button google-button ${loading ? "disabled" : ""}`}
          disabled={loading}
        >
          {loading ? (
            <div className="spinner" />
          ) : (
            <>
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
              />
              {t("login.google")}
            </>
          )}
        </button>

        <form onSubmit={handleEmailLogin} className="login-form">
          <input
            type="email"
            value={email}
            placeholder={t("login.email")}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder={t("login.password")}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            {t("login.submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

// Export default LoginPage
export default LoginPage;
