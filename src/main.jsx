import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initPerformanceOptimizations } from './utils/performance.js'
import { initPerformanceMonitoring } from './utils/webVitals.js'

// Initialize performance optimizations
initPerformanceOptimizations();
initPerformanceMonitoring();

const root = createRoot(document.getElementById('root'));

// Use scheduler to avoid blocking main thread
const render = () => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

// Render immediately but allow browser to handle other tasks
if ('scheduler' in window && 'postTask' in window.scheduler) {
  window.scheduler.postTask(render, { priority: 'user-blocking' });
} else if ('requestIdleCallback' in window) {
  requestIdleCallback(render, { timeout: 100 });
} else {
  setTimeout(render, 0);
}
