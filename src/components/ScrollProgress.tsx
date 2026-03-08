import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scroll = totalScroll / windowHeight;
        setProgress(scroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-background/50 backdrop-blur-sm">
      <div 
        className="h-full bg-gradient-to-r from-primary to-cyan-400 origin-left transition-transform duration-100 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};

export default ScrollProgress;