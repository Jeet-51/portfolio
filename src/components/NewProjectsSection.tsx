import { useRef, useEffect, useCallback } from "react";
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
    category: "Backend"
  },
  {
    title: "LLM Inference Service",
    description: "GPU-backed LLM inference service designed for low-latency, high-concurrency workloads.",
    outcomes: ["Reduced latency to ~180ms", "Supported 100+ concurrent requests"],
    tech: ["FastAPI", "Python", "vLLM", "CUDA", "Mistral-7B"],
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200&h=800",
    githubUrl: "https://github.com/Jeet-51",
    category: "AI Infrastructure"
  },
  {
    title: "PitchPal – AI Evaluator",
    description: "AI-powered startup evaluation platform using LangChain ReAct agents.",
    outcomes: ["Processed 100+ pitch evaluations", "Accelerated due diligence by 60%"],
    tech: ["LangChain", "OpenAI GPT-4", "Streamlit"],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200&h=800",
    githubUrl: "https://github.com/Jeet-51/PitchPal-AI-Agent-for-Startup-Pitch-Evaluation",
    category: "GenAI"
  },
  {
    title: "ClaimGuard: Healthcare Pattern Analysis",
    description: "Scalable ML pipeline forecasting Medicare billing behaviors using Bio_ClinicalBERT embeddings.",
    outcomes: ["Achieved R² = 0.95 prediction accuracy", "Processed 200K+ claims with semantic classification", "Implemented MLflow tracking and SHAP interpretability"],
    tech: ["Delta Lake", "MLflow", "SHAP", "XGBoost", "PySpark", "Transformers"],
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200&h=800",
    githubUrl: "https://github.com/Jeet-51/ClaimGuard-Intelligent-Healthcare-Service-Pattern-Analysis",
    category: "ML Engineering"
  },
  {
    title: "EPA GHG Dashboard",
    description: "Production-style analytics stack with dbt models on Snowflake.",
    outcomes: ["Reduced Tableau latency", "Cut analysis time by 40%"],
    tech: ["Tableau", "dbt", "Snowflake"],
    imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=1200&h=800",
    githubUrl: "https://github.com/Jeet-51/EPA-Greenhouse-Gas-GHG-Emissions-Dashboard",
    category: "Analytics"
  },
  {
    title: "FinanceFlow: Cloud Analytics",
    description: "Real-time ETL pipeline using PySpark and AWS services for enhanced fraud detection.",
    outcomes: ["Boosted fraud detection accuracy by 40%", "Delivered 40% faster insights"],
    tech: ["AWS", "S3", "SageMaker", "PySpark"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=800",
    githubUrl: "https://github.com/Jeet-51/FinanceFlow-Cloud-Enabled-Analytics-for-Fraud-Detection",
    category: "Data Engineering"
  }
];

const ProjectCard = ({ project, isWide, isTall }: { project: Project; isWide?: boolean; isTall?: boolean }) => {
  const minH = isTall ? "min-h-[480px]" : isWide ? "min-h-[320px]" : "min-h-[360px]";

  return (
    <div className={`group relative overflow-hidden rounded-[24px] ${minH} cursor-pointer`}>
      {/* Background image */}
      <img
        src={project.imageUrl}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

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

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
          {project.title}
        </h3>

        {/* Description - slides up on hover */}
        <p className="text-white/70 text-sm leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden mb-0 group-hover:mb-3">
          {project.description}
        </p>

        {/* Outcomes on hover */}
        <ul className="space-y-1 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-out delay-75 overflow-hidden mb-0 group-hover:mb-4">
          {project.outcomes.slice(0, 2).map((outcome, idx) => (
            <li key={idx} className="text-xs text-white/60 flex items-start gap-2">
              <span className="mt-1 block w-1 h-1 rounded-full bg-primary flex-shrink-0" />
              {outcome}
            </li>
          ))}
        </ul>

        {/* Tech tags at bottom left */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-white/70 border border-white/10"
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Row 1: large + small */}
          <RevealCard index={0} className="md:col-span-2 md:row-span-2">
            <ProjectCard project={projects[0]} isWide isTall />
          </RevealCard>
          <RevealCard index={1} className="md:col-span-1">
            <ProjectCard project={projects[1]} />
          </RevealCard>
          <RevealCard index={2} className="md:col-span-1">
            <ProjectCard project={projects[2]} />
          </RevealCard>

          {/* Row 2: wide + single */}
          <RevealCard index={3} className="md:col-span-2">
            <ProjectCard project={projects[3]} isWide />
          </RevealCard>
          <RevealCard index={4} className="md:col-span-1">
            <ProjectCard project={projects[4]} />
          </RevealCard>

          {/* Row 3: full width */}
          <RevealCard index={5} className="md:col-span-3">
            <ProjectCard project={projects[5]} isWide />
          </RevealCard>
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
