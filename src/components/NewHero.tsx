import { useState, useEffect } from "react";
import NeuralNetworkBackground from "./NeuralNetworkBackground";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Download } from "lucide-react";

const NewHero = () => {
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
    <section className="relative min-h-screen flex items-center px-4 py-20 overflow-hidden">
      <NeuralNetworkBackground />

      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[60vh] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-4 animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
              <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight tracking-tight">
                Hey, I'm <span className="gradient-text">Jeet</span>
              </h1>
            </div>
          </div>

          {/* Subtitle with pipe separators */}
          <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide animate-slide-up" style={{ animationDelay: '0.05s' }}>
            Engineer <span className="text-border mx-2">|</span> Builder <span className="text-border mx-2">|</span> Lifelong Learner
          </p>

          {/* Typewriter */}
          <div className="h-12 flex items-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-xl md:text-2xl inline-flex items-center font-mono font-light tracking-wide">
              <span className="min-w-[180px] text-left gradient-text">{displayText}</span>
              <span className="animate-pulse ml-1 text-primary/60">|</span>
            </h2>
          </div>

          {/* About paragraphs */}
          <div className="space-y-5 max-w-3xl animate-slide-up" style={{ animationDelay: '0.15s' }}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm a Software Engineer with a passion for building things that work in the real world, not just in notebooks. I recently completed my MS in Data Science at Indiana University and have spent the last couple of years shipping production AI systems, LLM pipelines, and full-stack platforms across healthcare, nonprofit analytics, and creator economy products.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I've worked across the full stack, from GPU-accelerated inference and RAG-based agents to scalable backend services and data pipelines handling millions of records. I care deeply about writing clean, reliable code and building software that actually solves problems for real people.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Outside of engineering, I'm obsessed with learning new things, whether that's a new framework, a new domain, or a new way to think about a problem.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              If you want to connect, collaborate, or just chat about building things, feel free to reach out!
            </p>
          </div>

          {/* Quote */}
          <div className="my-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="border-l-2 border-primary/40 pl-6 py-2">
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "I don't just build models, I build tools that automate decisions, drive efficiency, and solve real-world problems, 
                <span className="text-foreground font-medium"> evolving with every interaction.</span>"
              </p>
            </div>
          </div>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2 animate-slide-up" style={{ animationDelay: '0.25s' }}>
            {["Machine Learning", "GenAI & LLMs", "Data Engineering", "MLOps"].map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1.5 text-sm glass-card rounded-md text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="h-11 px-6 font-medium bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
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
              className="h-11 px-6 font-medium border-border/60 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300"
              asChild
            >
              <a href="#" className="inline-flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
          </div>
          
          {/* Contact links */}
          <div className="flex items-center gap-6 pt-2 animate-slide-up" style={{ animationDelay: '0.35s' }}>
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
        
        {/* Scroll indicator */}
        <div className="flex justify-center mt-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
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
