import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Linkedin, Download, MapPin } from "lucide-react";

const NewHero = () => {
  // Get the correct image path based on environment
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
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient"></div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(175 85% 50% / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(175 85% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      ></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium animate-fade-in glass-card badge-glow">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-primary">Available for opportunities</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-slide-up">
                Jeet Patel
              </h1>
              
              <div className="h-16 flex items-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground inline-flex items-center">
                  <span className="text-primary font-mono mr-2">&lt;</span>
                  <span className="min-w-[200px] text-left text-primary cyan-glow-text">{displayText}</span>
                  <span className="animate-pulse ml-1 text-primary">|</span>
                  <span className="text-primary font-mono ml-2">/&gt;</span>
                </h2>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Senior ML Engineer, Data Scientist & Data Analytics specialist working with GenAI, LangChain, and scalable data architectures. 
              Building intelligent solutions that drive business impact through advanced analytics and machine learning.
            </p>
            
            {/* Quote Section */}
            <div className="relative my-8 animate-slide-up" style={{ animationDelay: '0.25s' }}>
              <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-xl"></div>
              <div className="relative glass-card p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <span className="text-4xl text-primary/40 leading-none font-serif">"</span>
                  <blockquote className="flex-1">
                    <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed italic">
                      I don't just build models, I build tools that automate decisions, drive efficiency, and solve real-world problems, 
                      <span className="text-primary font-semibold cyan-glow-text"> evolving with every interaction.</span>
                    </p>
                  </blockquote>
                  <span className="text-4xl text-primary/40 leading-none font-serif self-end">"</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {["Machine Learning", "GenAI & LLMs", "Data Engineering", "MLOps"].map((skill) => (
                <Badge 
                  key={skill}
                  variant="outline" 
                  className="px-4 py-2 text-sm bg-muted/30 border-border/50 text-muted-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="h-12 px-6 font-medium btn-premium text-primary-foreground"
                asChild
              >
                <a href="mailto:jeetp5118@gmail.com" className="inline-flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="h-12 px-6 font-medium border-border/50 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
                asChild
              >
                <a href="#" className="inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <a 
                href="tel:+19303335103" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">(930) 333-5103</span>
              </a>
              
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/Jeet-51" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_hsl(175_85%_50%/0.6)]"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/jeet-patel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_hsl(175_85%_50%/0.6)]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center order-1 lg:order-2 animate-scale-up">
            <div className="relative group">
              {/* Outer glow */}
              <div className="absolute -inset-6 rounded-2xl bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
              
              {/* Image container with glass border */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glass-card">
                <img 
                  src={getImagePath()}
                  alt="Jeet Patel - ML Engineer & Data Scientist"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"></div>
              </div>
              
              {/* Animated glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/30 via-transparent to-primary/30 blur-sm animate-pulse-glow"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full animate-bounce mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
