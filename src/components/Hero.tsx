
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Neural network animation parameters
    const particlesArray: Particle[] = [];
    const numberOfParticles = 100;
    const connectionDistance = 150;
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.color = `rgba(92, 120, 255, ${Math.random() * 0.5 + 0.2})`;
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            if (!ctx) return;
            const opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(92, 120, 255, ${opacity * 0.4})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesArray.length = 0;
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const typewriterTexts = useRef<string[]>([
    'ML Engineer',
    'GenAI Developer',
    'Data Scientist',
    'AI Engineer',
    'Data Storyteller'
  ]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentText = typewriterTexts.current[currentTextIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && displayText === currentText) {
      // Delay before starting to delete
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((currentTextIndex + 1) % typewriterTexts.current.length);
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting 
          ? currentText.substring(0, displayText.length - 1)
          : currentText.substring(0, displayText.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Neural network animation background */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center py-10 px-4 max-w-6xl mx-auto">
        {/* Profile Image */}
        <div className="flex-shrink-0 animate-fadeIn">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 z-0"></div>
            <img 
              src="/lovable-uploads/24ebecb7-c38b-42f7-b4e0-d93e922d9064.png"
              alt="Jeet Patel"
              className="w-full h-full object-cover relative z-10"
            />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-70 group-hover:opacity-90 transition duration-1000 animate-pulse"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="animate-slideInUp">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Jeet Patel
            </h1>
            <div className="h-12 mt-2">
              <h2 className="text-xl md:text-2xl text-cyan-200 dark:text-cyan-300 inline-flex items-center">
                <span className="text-2xl md:text-3xl font-light mr-2">&lt;</span>
                {displayText}
                <span className="animate-blink ml-1">|</span>
                <span className="text-2xl md:text-3xl font-light ml-2">/&gt;</span>
              </h2>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start animate-fadeIn">
            <Badge variant="outline" className="px-3 py-1.5 text-sm bg-blue-900/30 border-blue-500/50 text-blue-300">
              Machine Learning
            </Badge>
            <Badge variant="outline" className="px-3 py-1.5 text-sm bg-purple-900/30 border-purple-500/50 text-purple-300">
              Data Engineering
            </Badge>
            <Badge variant="outline" className="px-3 py-1.5 text-sm bg-indigo-900/30 border-indigo-500/50 text-indigo-300">
              LLM Systems
            </Badge>
            <Badge variant="outline" className="px-3 py-1.5 text-sm bg-cyan-900/30 border-cyan-500/50 text-cyan-300">
              ML Engineering
            </Badge>
          </div>
          
          <p className="mt-6 max-w-lg text-gray-300 dark:text-gray-300 leading-relaxed animate-fadeIn">
            Building intelligent data-driven solutions with expertise in GenAI, machine learning, 
            and scalable data architectures.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start animate-slideInRight">
            <Button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-500 shadow-lg shadow-blue-700/20">
              <Mail size={16} className="animate-bounce-subtle" /> Contact Me
            </Button>
            <Button variant="outline" className="flex items-center gap-2 rounded-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-900/20 transition-all duration-500">
              <Phone size={16} className="animate-pulse" /> (930) 333-5103
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-cyan-400/50 flex items-center justify-center">
          <div className="w-1.5 h-3 bg-cyan-400/50 rounded-full animate-scrollDown"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
