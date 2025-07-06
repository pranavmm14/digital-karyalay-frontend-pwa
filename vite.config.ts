// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true,
//     port: 5173,
//   },
// })


// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'; // Import the plugin

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // PWA configuration options
      registerType: 'autoUpdate', // This tells the plugin how to register the service worker
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'maskable-icon.png'], // Assets to be pre-cached

      // Manifest file configuration (essential for PWA features like "Add to Home Screen")
      manifest: {
        name: 'Digital Karyalay Kothrud', // Your app's full name
        short_name: 'Digital Karyalay',     // Short name for the home screen icon
        description: 'A fantastic PWA built with React and Vite!',
        theme_color: '#ffffff',      // Theme color for the browser's address bar
        background_color: '#ffffff', // Background color for the splash screen
        display: 'standalone',       // How your app should be displayed (standalone, fullscreen, browser)
        scope: '/',                  // The scope of your PWA
        start_url: '/',              // The URL that loads when the PWA is launched
        icons: [
          // Essential icons for different devices and purposes
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'maskable-icon.png', // Maskable icon for adaptive icons on Android
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      // Optional: Development options for easier debugging
      devOptions: {
        enabled: true, // Enable PWA features during development (e.g., service worker in dev server)
        type: 'module', // Use 'module' for modern setups
      },
      // Optional: Workbox configuration for advanced caching strategies
      // workbox: {
      //   globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      //   runtimeCaching: [
      //     {
      //       urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
      //       handler: 'CacheFirst',
      //       options: {
      //         cacheName: 'google-fonts-cache',
      //         expiration: {
      //           maxEntries: 10,
      //           maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
      //         },
      //         cacheableResponse: {
      //           statuses: [0, 200],
      //         },
      //       },
      //     },
      //   ],
      // },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src', // This allows you to use '@' as an alias for the 'src' directory
    },
  },
  server: {
    host: true, // Keep this for mobile access during development
    port: 5173, // Your desired port
  },
});