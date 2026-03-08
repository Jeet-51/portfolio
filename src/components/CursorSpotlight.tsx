import { useEffect, useState } from "react";

const CursorSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      const target = e.target as HTMLElement;
      const isMagnetic = target.closest('button') || target.closest('a') || target.closest('.magnetic') || target.closest('[role="button"]');
      setIsHovering(!!isMagnetic);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      <div 
        className="pointer-events-none fixed inset-0 z-[25] transition-opacity duration-300 mix-blend-screen"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.05), transparent 40%)`,
          opacity: isVisible ? 1 : 0
        }}
      />
      <div 
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 z-[100] -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out flex items-center justify-center mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          backgroundColor: isHovering ? 'hsl(var(--primary) / 0.2)' : 'transparent',
          opacity: isVisible ? 1 : 0
        }}
      >
        <div className={`w-1.5 h-1.5 bg-primary rounded-full transition-transform duration-300 ${isHovering ? 'scale-0' : 'scale-100'}`} />
      </div>
    </>
  );
};

export default CursorSpotlight;