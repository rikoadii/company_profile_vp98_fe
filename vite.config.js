import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh
      fastRefresh: true,
    }),
    tailwindcss(),
  ],
  build: {
    // Improve build performance
    target: 'esnext',
    minify: 'esbuild', // Use esbuild instead of terser
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          swiper: ['swiper'],
        },
      },
    },
    // Enable compression
    reportCompressedSize: false,
  },
  server: {
    // Enable HTTP/2
    https: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'swiper'],
  },
})
