
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Floating particles animation
    const particlesArray: Particle[] = [];
    const numberOfParticles = 60;
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.opacity = Math.random() * 0.3 + 0.1;
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
        ctx.fillStyle = `rgba(139, 92, 246, ${this.opacity})`;
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

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    };

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
    'Data Scientist',
    'AI Developer',
    'GenAI Specialist',
    'Data Engineer'
  ]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentText = typewriterTexts.current[currentTextIndex];
    const typeSpeed = isDeleting ? 50 : 120;
    
    if (!isDeleting && displayText === currentText) {
      setTimeout(() => setIsDeleting(true), 2000);
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-gray-50/80 to-slate-100/90 z-0"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center py-20 px-6 max-w-7xl mx-auto">
        {/* Profile Image */}
        <div className="flex-shrink-0 animate-fadeIn">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse-ring"></div>
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl animate-float">
              <img 
                src="/lovable-uploads/24ebecb7-c38b-42f7-b4e0-d93e922d9064.png"
                alt="Jeet Patel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="animate-slideInUp">
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 gradient-text leading-tight">
              Jeet Patel
            </h1>
            <div className="h-20 mb-8">
              <h2 className="text-3xl lg:text-4xl text-gray-700 font-light flex items-center justify-center lg:justify-start">
                <span className="mr-3 text-violet-600">&lt;</span>
                <span className="min-w-0">{displayText}</span>
                <span className="animate-pulse ml-1 text-violet-600">|</span>
                <span className="ml-3 text-violet-600">/&gt;</span>
              </h2>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start animate-fadeIn">
            {['Machine Learning', 'Data Engineering', 'GenAI Systems', 'Cloud Architecture'].map((skill, index) => (
              <Badge 
                key={skill}
                variant="outline" 
                className={`px-6 py-3 text-sm font-medium rounded-2xl bg-white/80 border-violet-200 text-violet-700 hover:bg-violet-50 transition-all duration-300 delay-${index * 100}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0 animate-fadeIn">
            Transforming complex data into intelligent solutions with cutting-edge AI and machine learning technologies. 
            Specialized in building scalable systems that drive innovation and business growth.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slideInRight">
            <a href="mailto:jeetp5118@gmail.com" className="inline-block">
              <Button className="modern-button flex items-center gap-3">
                <Mail size={20} /> Get In Touch
              </Button>
            </a>
            <a 
              href="https://drive.google.com/file/d/1DTSiTMMfJBxAKnztLxeMmhpEetEGvsiS/view?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="outline" 
                className="bg-white/80 border-2 border-violet-200 text-violet-700 hover:bg-violet-50 px-8 py-4 rounded-2xl font-medium transition-all duration-300 flex items-center gap-3"
              >
                <Download size={20} /> Download CV
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8 justify-center lg:justify-start">
            <a 
              href="https://github.com/Jeet-51" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/80 border border-gray-200 text-gray-600 hover:text-violet-600 hover:border-violet-200 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/pateljeet22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/80 border border-gray-200 text-gray-600 hover:text-violet-600 hover:border-violet-200 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="tel:9303335103"
              className="p-3 rounded-full bg-white/80 border border-gray-200 text-gray-600 hover:text-violet-600 hover:border-violet-200 transition-all duration-300 hover:scale-110"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
