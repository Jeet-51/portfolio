import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Download, MapPin } from "lucide-react";

const NewHero = () => {
  const getImagePath = () => {
    const imagePath = "/lovable-uploads/24ebecb7-c38b-42f7-b4e0-d93e922d9064.png";
    if (process.env.NODE_ENV === 'production' && window.location.hostname.includes('github.io')) {
      return '/portfolio' + imagePath;
    }
    return imagePath;
  };

  const typewriterTexts = [
    'ML Engineer',
    'GenAI Developer', 
    'Data Scientist',
    'AI Engineer',
    'Data Engineer'
  ];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentText = typewriterTexts[currentTextIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && displayText === currentText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((currentTextIndex + 1) % typewriterTexts.length);
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
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Subtle background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium glass-card text-muted-foreground animate-fade-in">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Available for opportunities</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-slide-up">
                Jeet Patel
              </h1>
              
              <div className="h-16 flex items-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl inline-flex items-center font-mono">
                  <span className="min-w-[200px] text-left gradient-text">{displayText}</span>
                  <span className="animate-pulse ml-1 text-primary/60">|</span>
                </h2>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Senior ML Engineer, Data Scientist & Data Analytics specialist working with GenAI, LangChain, and scalable data architectures. 
              Building intelligent solutions that drive business impact through advanced analytics and machine learning.
            </p>
            
            {/* Quote Section */}
            <div className="my-6 animate-slide-up" style={{ animationDelay: '0.25s' }}>
              <div className="border-l-2 border-primary/40 pl-6 py-2">
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  "I don't just build models, I build tools that automate decisions, drive efficiency, and solve real-world problems, 
                  <span className="text-foreground font-medium"> evolving with every interaction.</span>"
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {["Machine Learning", "GenAI & LLMs", "Data Engineering", "MLOps"].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 text-sm glass-card rounded-md text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="h-11 px-6 font-medium bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
                asChild
              >
                <a href="mailto:jeetp5118@gmail.com" className="inline-flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="h-11 px-6 font-medium border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                asChild
              >
                <a href="#" className="inline-flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-2 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <a 
                href="tel:+19303335103" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">(930) 333-5103</span>
              </a>
              
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/Jeet-51" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/jeet-patel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center order-1 lg:order-2 animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-border/60">
                <img 
                  src={getImagePath()}
                  alt="Jeet Patel - ML Engineer & Data Scientist"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border-2 border-border/60 flex justify-center">
              <div className="w-1 h-2.5 bg-primary/60 rounded-full animate-bounce mt-1.5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
