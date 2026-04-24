import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Download } from "lucide-react";

const NewHero = () => {
  const typewriterTexts = [
    "ML Engineer",
    "GenAI Developer",
    "Data Scientist",
    "AI Engineer",
    "Data Engineer",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typewriterTexts[currentTextIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === "") {
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
    <section className="relative min-h-screen flex items-center px-6 md:px-12 py-28 overflow-hidden">
      <div className="hero-mesh" />
      <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-transparent via-transparent to-background/80" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center">

          {/* ── Left: text content ── */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="animate-slide-up">
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <div className="animate-slide-up" style={{ animationDelay: "0.05s" }}>
              <h1 className="font-display font-thin text-foreground leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[7rem]">
                Hey, I&rsquo;m{" "}
                <span className="font-light gradient-text">Jeet</span>
                <span
                  className="cursor-blink ml-2 md:ml-3 inline-block w-[0.08em] align-middle bg-gradient-to-b from-primary to-accent"
                  style={{ height: "0.85em" }}
                  aria-hidden="true"
                />
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-muted-foreground font-light tracking-wide animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Engineer
              <span className="text-border mx-3">/</span>
              Builder
              <span className="text-border mx-3">/</span>
              Lifelong Learner
            </p>

            {/* Typewriter */}
            <div
              className="h-10 flex items-center animate-slide-up"
              style={{ animationDelay: "0.15s" }}
            >
              <h2 className="text-xl md:text-2xl inline-flex items-center font-mono font-light tracking-wide">
                <span className="text-primary mr-3">&gt;_</span>
                <span className="min-w-[180px] text-left gradient-text font-medium">
                  {displayText}
                </span>
                <span className="cursor-blink ml-1 text-primary/80">|</span>
              </h2>
            </div>

            {/* About — condensed */}
            <div
              className="space-y-4 max-w-2xl animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                MS in Data Science from Indiana University. I ship production AI systems — LLM pipelines, GPU-accelerated inference, RAG agents, and full-stack platforms — across healthcare, social impact analytics, and creator tech.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I care about clean, reliable code and building software that solves real problems for real people.
              </p>
            </div>

            {/* Quote */}
            <div className="animate-slide-up" style={{ animationDelay: "0.25s" }}>
              <div className="border-l-2 border-primary/40 pl-5 py-1">
                <p className="text-base text-muted-foreground leading-relaxed italic">
                  &ldquo;I don&rsquo;t just build models — I build tools that automate decisions and solve real-world problems,
                  <span className="text-foreground font-medium"> evolving with every interaction.</span>&rdquo;
                </p>
              </div>
            </div>

            {/* Skill tags */}
            <div
              className="flex flex-wrap gap-2 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              {["Machine Learning", "GenAI & LLMs", "Data Engineering", "MLOps"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-full border border-border bg-foreground/[0.03] text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 animate-slide-up"
              style={{ animationDelay: "0.35s" }}
            >
              <Button
                size="lg"
                className="h-12 px-7 font-medium bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300"
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
                className="h-12 px-7 font-medium border-border hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300"
                asChild
              >
                <a href="#" className="inline-flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Contact links */}
            <div
              className="flex items-center gap-6 pt-1 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
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
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/pateljeet22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: profile photo ── */}
          <div className="hidden lg:flex flex-col items-center gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {/* Decorative ring + photo */}
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 blur-xl" />
              {/* Border ring */}
              <div className="relative rounded-full p-[3px] bg-gradient-to-br from-primary via-accent to-primary/50 shadow-2xl shadow-primary/20">
                <div className="rounded-full overflow-hidden w-72 h-72 xl:w-80 xl:h-80 bg-muted">
                  <img
                    src={`${import.meta.env.BASE_URL}profile.jpeg`}
                    alt="Jeet Patel"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>
              </div>
              {/* Floating badge — top right */}
              <div className="absolute -top-2 -right-4 bg-card border border-border rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
                <span className="text-xs font-mono text-foreground whitespace-nowrap">Open to work</span>
              </div>
              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-3 -left-6 bg-card border border-border rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
                <span className="text-lg">🎓</span>
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">MS '25 · GPA 3.8</p>
                  <p className="text-xs font-semibold gradient-text">Indiana University</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div
          className="flex justify-center mt-20 animate-fade-in"
          style={{ animationDelay: "0.55s" }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs font-mono uppercase tracking-widest">Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border border-foreground/20 flex justify-center">
              <div className="w-1 h-2.5 bg-primary/80 rounded-full animate-bounce mt-1.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
