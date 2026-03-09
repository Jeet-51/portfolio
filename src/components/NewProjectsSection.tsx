import { useRef, useEffect } from "react";
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
  wide?: boolean;
}

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

  return <div ref={ref} className={`${className} h-full`}>{children}</div>;
};

const projects: Project[] = [
  {
    title: "Backend – Customer Subscription & Gifting Platform",
    description: "A production-grade backend system supporting subscription purchases, gifting, renewals, and cancellations, with a strong focus on correctness, idempotency, and low-latency performance.",
    outcomes: ["Designed idempotent APIs to prevent duplicate charges", "Achieved sub-125ms P95 latency under load", "Maintained <1% error rates across workflows"],
    tech: ["Go", "PostgreSQL", "Redis", "REST APIs", "Docker"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200&h=800",
    githubUrl: "https://github.com/Jeet-51",
    category: "Backend",
  },
  {
    title: "LLM Inference Service",
    description: "GPU-backed LLM inference service designed for low-latency, high-concurrency workloads.",
    outcomes: ["Reduced latency to ~180ms", "Supported 100+ concurrent requests"],
    tech: ["FastAPI", "Python", "vLLM", "CUDA", "Mistral-7B"],
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200&h=800",
    githubUrl: "https://github.com/Jeet-51",
    category: "AI Infrastructure",
  },
  {
    title: "PitchPal – AI Evaluator",
    description: "AI-powered startup evaluation platform using LangChain ReAct agents.",
    outcomes: ["Processed 100+ pitch evaluations", "Accelerated due diligence by 60%"],
    tech: ["LangChain", "OpenAI GPT-4", "Streamlit"],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200&h=800",
    githubUrl: "https://github.com/Jeet-51/PitchPal-AI-Agent-for-Startup-Pitch-Evaluation",
    category: "GenAI",
  },
  {
    title: "ClaimGuard: Healthcare Pattern Analysis",
    description: "Scalable ML pipeline forecasting Medicare billing behaviors using Bio_ClinicalBERT embeddings.",
    outcomes: ["Achieved R² = 0.95 prediction accuracy", "Processed 200K+ claims with semantic classification", "Implemented MLflow tracking and SHAP interpretability"],
    tech: ["Delta Lake", "MLflow", "SHAP", "XGBoost", "PySpark", "Transformers"],
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200&h=800",
    githubUrl: "https://github.com/Jeet-51/ClaimGuard-Intelligent-Healthcare-Service-Pattern-Analysis",
    category: "ML Engineering",
  },
  {
    title: "EPA GHG Dashboard",
    description: "Production-style analytics stack with dbt models on Snowflake.",
    outcomes: ["Reduced Tableau latency", "Cut analysis time by 40%"],
    tech: ["Tableau", "dbt", "Snowflake"],
    imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=1200&h=800",
    githubUrl: "https://github.com/Jeet-51/EPA-Greenhouse-Gas-GHG-Emissions-Dashboard",
    category: "Analytics",
  },
  {
    title: "FinanceFlow: Cloud Analytics",
    description: "Real-time ETL pipeline using PySpark and AWS services for enhanced fraud detection.",
    outcomes: ["Boosted fraud detection accuracy by 40%", "Delivered 40% faster insights"],
    tech: ["AWS", "S3", "SageMaker", "PySpark"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=800",
    githubUrl: "https://github.com/Jeet-51/FinanceFlow-Cloud-Enabled-Analytics-for-Fraud-Detection",
    category: "Data Engineering",
    wide: true,
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative overflow-hidden rounded-[24px] h-full flex flex-col cursor-pointer">
      {/* 16:9 image container */}
      <div className="relative w-full aspect-video overflow-hidden flex-shrink-0">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* GitHub link */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-20 text-white/70 hover:text-white transition-colors p-2 rounded-full bg-white/10 backdrop-blur-sm"
        >
          <Github className="w-4 h-4" />
        </a>

        {/* Category badge */}
        <span className="absolute top-4 left-4 z-20 text-xs font-mono px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 border border-white/10">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 bg-card border border-border/30 border-t-0 rounded-b-[24px]">
        <h3 className="text-lg font-bold text-foreground mb-2 leading-tight line-clamp-2">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
          {project.description}
        </p>

        {/* Outcomes */}
        <ul className="space-y-1 mb-4">
          {project.outcomes.slice(0, 2).map((outcome, idx) => (
            <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
              <span className="mt-1 block w-1 h-1 rounded-full bg-primary flex-shrink-0" />
              <span className="line-clamp-1">{outcome}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags pinned to bottom */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border/30"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const NewProjectsSection = () => {
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

        {/* Uniform 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          {projects.map((project, i) => (
            <RevealCard
              key={project.title}
              index={i}
              className={project.wide ? "md:col-span-2" : ""}
            >
              <ProjectCard project={project} />
            </RevealCard>
          ))}
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
