// Web Vitals monitoring (simplified - no external dependencies)
export const measureWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Simple implementation without external lib
    // You can install 'web-vitals' package later: npm install web-vitals
    console.log('Web vitals monitoring initialized');
  }
};

// Simple performance observer
export const observePerformance = () => {
  if ('PerformanceObserver' in window) {
    // Observe largest contentful paint
    try {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime + 'ms');
      });
      
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Observe first contentful paint
      const fcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime + 'ms');
          }
        });
      });
      
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (error) {
      console.warn('Performance observer not supported:', error);
    }
  }
};

// Performance analytics
export const sendToAnalytics = (metric) => {
  console.log('Performance metric:', metric);
  // Send to your analytics service
};

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  observePerformance();
  measureWebVitals(sendToAnalytics);
};
