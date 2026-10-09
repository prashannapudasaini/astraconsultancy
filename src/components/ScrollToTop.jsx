import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Temporarily disable smooth scrolling to instantly jump to top
    const originalScrollBehavior = window.getComputedStyle(document.documentElement).scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    
    window.scrollTo(0, 0);
    
    // Restore original scroll behavior after jumping
    const timeout = setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
