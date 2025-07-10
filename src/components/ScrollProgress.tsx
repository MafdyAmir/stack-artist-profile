import { useEffect, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className="scroll-progress-bar">
      <div
        className={`h-full bg-gradient-to-r from-primary to-primary/80 ${reducedMotion ? '' : 'transition-all duration-200 ease-out'}`}
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;