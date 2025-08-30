// Preload critical resources for faster LCP
export const preloadCriticalResources = () => {
  // Preload critical API endpoints
  const criticalApis = [
    'https://admin.victoryproduction98.com/api/projects.php',
    'https://admin.victoryproduction98.com/api/teams.php',
    'https://admin.victoryproduction98.com/api/categories.php'
  ];

  criticalApis.forEach(url => {
    // Use link preload for critical resources
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    link.as = 'fetch';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Resource hints for better performance
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: 'https://admin.victoryproduction98.com' },
    { rel: 'preconnect', href: 'https://admin.victoryproduction98.com' },
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.rel === 'preconnect') {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      addResourceHints();
      // Delay preload to not block critical rendering
      setTimeout(preloadCriticalResources, 100);
    });
  } else {
    addResourceHints();
    setTimeout(preloadCriticalResources, 100);
  }
};
