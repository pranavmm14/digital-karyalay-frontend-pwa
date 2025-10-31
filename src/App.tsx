import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "@/routes/AppRoutes"
import { AuthProvider } from "@/context/AuthContext"
import { ThemeProvider } from "@/context/ThemeContext"
import { useEffect, useState } from "react" 
import { Layout } from "@/components/Layout"
import CentenaryLoader from '@/components/CentenaryLoader/CentenaryLoader'
import "@/i18n"

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showOffline, setShowOffline] = useState(false);
  const [loaderCount, setLoaderCount] = useState(0);

  useEffect(() => {
    // Get loader play count from localStorage
    const count = parseInt(localStorage.getItem('centenaryLoaderCount') || '0', 10);
    setLoaderCount(count);

    // Always play loader at least once, and up to 2-3 times
    if (count < 2) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('centenaryLoaderCount', String(count + 1));
      }, 7000);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Listen for offline events
    const handleOffline = () => setShowOffline(true);
    const handleOnline = () => setShowOffline(false);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);
    if (!navigator.onLine) setShowOffline(true);
    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  return (
    <>
      {isLoading && <CentenaryLoader showOffline={showOffline && loaderCount >= 2} />}
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <Layout>
          <AppRoutes />
        </Layout>
      </div>
    </>
  );
}
// const AppContent = () => {
//   // Temporarily show only the animation for development
//   return <TestAnimation />;
// }

const App = () => (
  // 4. Uncomment the core components
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;