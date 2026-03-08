import { useRef, useEffect, useCallback } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

interface Project {
  title: string;
  description: string;
  outcomes: string[];
  tech: string[];
  imageUrl: string;
  githubUrl: string;
  category: string;
}

const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useRef(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (reducedMotion.current) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(10px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.2s ease-out";
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return <div ref={ref} className={className} style={{ transformStyle: 'preserve-3d' }}>{children}</div>;
};

const RevealCard = ({ children, index, className = "" }: { children: React.ReactNode; index: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      return;
    }
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    el.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return <div ref={ref} className={className}>{children}</div>;
};

const NewProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Backend – Customer Subscription & Gifting Platform",
      description: "A production-grade backend system supporting subscription purchases, gifting, renewals, and cancellations, with a strong focus on correctness, idempotency, and low-latency performance.",
      outcomes: [
        "Designed idempotent APIs to prevent duplicate charges",
        "Achieved sub-125ms P95 latency under load",
        "Maintained <1% error rates across workflows"
      ],
      tech: ["Go", "PostgreSQL", "Redis", "REST APIs", "Docker"],
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=400",
      githubUrl: "https://github.com/Jeet-51",
      category: "Backend"
    },
    {
      title: "LLM Inference Service",
      description: "GPU-backed LLM inference service designed for low-latency, high-concurrency workloads.",
      outcomes: [
        "Reduced latency to ~180ms",
        "Supported 100+ concurrent requests"
      ],
      tech: ["FastAPI", "Python", "vLLM", "CUDA", "Mistral-7B"],
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800&h=400",
      githubUrl: "https://github.com/Jeet-51",
      category: "AI Infrastructure"
    },
    {
      title: "PitchPal – AI Evaluator",
      description: "AI-powered startup evaluation platform using LangChain ReAct agents.",
      outcomes: [
        "Processed 100+ pitch evaluations",
        "Accelerated due diligence by 60%"
      ],
      tech: ["LangChain", "OpenAI GPT-4", "Streamlit"],
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=400",
      githubUrl: "https://github.com/Jeet-51/PitchPal-AI-Agent-for-Startup-Pitch-Evaluation",
      category: "GenAI"
    },
    {
      title: "ClaimGuard: Healthcare Pattern Analysis",
      description: "Scalable ML pipeline forecasting Medicare billing behaviors using Bio_ClinicalBERT embeddings.",
      outcomes: [
        "Achieved R² = 0.95 prediction accuracy",
        "Processed 200K+ claims with semantic classification",
        "Implemented MLflow tracking and SHAP interpretability"
      ],
      tech: ["Delta Lake", "MLflow", "SHAP", "XGBoost", "PySpark", "Transformers"],
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=400",
      githubUrl: "https://github.com/Jeet-51/ClaimGuard-Intelligent-Healthcare-Service-Pattern-Analysis",
      category: "ML Engineering"
    },
    {
      title: "EPA GHG Dashboard",
      description: "Production-style analytics stack with dbt models on Snowflake.",
      outcomes: [
        "Reduced Tableau latency",
        "Cut analysis time by 40%"
      ],
      tech: ["Tableau", "dbt", "Snowflake"],
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=800&h=400",
      githubUrl: "https://github.com/Jeet-51/EPA-Greenhouse-Gas-GHG-Emissions-Dashboard",
      category: "Analytics"
    },
    {
      title: "FinanceFlow: Cloud Analytics",
      description: "Real-time ETL pipeline using PySpark and AWS services for enhanced fraud detection.",
      outcomes: [
        "Boosted fraud detection accuracy by 40%",
        "Delivered 40% faster insights"
      ],
      tech: ["AWS", "S3", "SageMaker", "PySpark"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400",
      githubUrl: "https://github.com/Jeet-51/FinanceFlow-Cloud-Enabled-Analytics-for-Fraud-Detection",
      category: "Data Engineering"
    }
  ];

  return (
    <section className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-mono text-primary uppercase tracking-wider">&gt;_ System.out.println("Featured Work")</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Projects & Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing impactful AI and data science projects that solve real-world problems.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto]">
          {projects.map((project, index) => {
            let gridClass = "md:col-span-1 md:row-span-1";
            if (index === 0) gridClass = "md:col-span-2 md:row-span-2";
            else if (index === 3) gridClass = "md:col-span-2 md:row-span-1";
            else if (index === 5) gridClass = "md:col-span-3"; // FinanceFlow full width

            const isLarge = index === 0 || index === 5;

            return (
              <RevealCard key={index} index={index} className={gridClass}>
                <TiltCard className="h-full">
                  <Card className="group h-full overflow-hidden glass-card flex flex-col border-white/10 hover:border-primary/40 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    {/* Project image */}
                    <div className={`relative overflow-hidden ${isLarge ? 'h-52' : 'h-40'}`}>
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                      <Badge className="absolute top-3 left-3 bg-primary/20 text-primary backdrop-blur-md border-primary/20 font-mono text-xs">
                        {project.category}
                      </Badge>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 text-foreground/70 hover:text-primary transition-colors p-2 rounded-full bg-background/40 backdrop-blur-md"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="p-6 relative z-10 flex flex-col flex-grow">
                      <CardTitle className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>

                      <CardDescription className="text-muted-foreground/80 line-clamp-3 mb-6 flex-grow">
                        {project.description}
                      </CardDescription>

                      <div className="space-y-4 mt-auto">
                        <ul className="space-y-1.5 hidden md:block">
                          {project.outcomes.slice(0, isLarge ? 3 : 2).map((outcome, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="mt-1 block w-1 h-1 rounded-full bg-primary/60 flex-shrink-0"></span>
                              {outcome}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                          {project.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs font-mono px-2 py-1 bg-white/5 border border-white/10 rounded text-foreground/70 group-hover:border-primary/30 group-hover:text-primary group-hover:shadow-[0_0_10px_hsl(var(--primary)/0.2)] transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </TiltCard>
              </RevealCard>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-muted-foreground mb-6 font-mono text-sm">
            Ready to deploy your next big idea?
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300" asChild>
            <a href="mailto:jeetp5118@gmail.com" className="inline-flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Let's Build Together
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewProjectsSection;
