// main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// import { ThemeProvider } from '@/context/ThemeContext'; // Use your custom theme provider

// Register Service Worker for PWA
import { registerSW } from 'virtual:pwa-register';

// const _updateSW = 
registerSW({
  onNeedRefresh() {
    console.log('New content is available; please refresh.');
  },
  onOfflineReady() {
    console.log('App is ready to work offline.');
  },
  onRegisterError(error: unknown) {
    console.log('SW registration error', error);
  },
});

// Handle navigation in PWA
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  console.log('PWA install prompt available');
});

// Mount the React app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);