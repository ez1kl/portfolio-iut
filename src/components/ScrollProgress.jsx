import { useEffect, useState, useRef } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef(null);
  const lastProgressRef = useRef(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.pageYOffset;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        const progress = (currentScroll / scrollHeight) * 100;
        
        // Utiliser requestAnimationFrame pour une mise à jour fluide à 60fps
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
        
        rafRef.current = requestAnimationFrame(() => {
          if (Math.abs(progress - lastProgressRef.current) > 0.1) {
            setScrollProgress(progress);
            lastProgressRef.current = progress;
          }
        });
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[100] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-french via-battleGray to-taupe shadow-lg"
        style={{ 
          width: `${scrollProgress}%`,
          transition: 'width 0.08s ease-out'
        }}
      />
    </div>
  );
};

export default ScrollProgress;
