import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  metric: { value: string; label: string };
  outcomes: string[];
  tech: string[];
  githubUrl: string;
  category: string;
  accent: string; // tailwind gradient classes for top border
  spotlight: string; // bg radial color for hover
}

const projects: Project[] = [
  {
    title: "Production Backend Platform",
    description:
      "High-throughput backend powering 175K+ nonprofit records with GPU-accelerated inference and Text-to-SQL interfaces.",
    metric: { value: "175K+", label: "records served" },
    outcomes: ["Scaled to 175K+ nonprofit records", "Sub-second query response"],
    tech: ["Python", "FastAPI", "PostgreSQL", "Mistral-7B", "CUDA"],
    githubUrl: "https://github.com/Jeet-51",
    category: "Backend",
    accent: "from-violet-500 via-fuchsia-500 to-cyan-400",
    spotlight: "hsl(270 95% 60% / 0.15)",
  },
  {
    title: "LLM Inference Service",
    description:
      "GPU-backed LLM inference service designed for low-latency, high-concurrency workloads.",
    metric: { value: "180ms", label: "p50 latency" },
    outcomes: ["Reduced latency to ~180ms", "Supported 100+ concurrent requests"],
    tech: ["FastAPI", "vLLM", "CUDA", "Mistral-7B"],
    githubUrl: "https://github.com/Jeet-51",
    category: "AI Infrastructure",
    accent: "from-cyan-400 to-sky-500",
    spotlight: "hsl(190 95% 55% / 0.15)",
  },
  {
    title: "PitchPal — AI Evaluator",
    description:
      "AI-powered startup evaluation platform using LangChain ReAct agents.",
    metric: { value: "60%", label: "faster diligence" },
    outcomes: ["Processed 100+ pitch evaluations", "Accelerated due diligence by 60%"],
    tech: ["LangChain", "GPT-4", "Streamlit"],
    githubUrl: "https://github.com/Jeet-51/PitchPal-AI-Agent-for-Startup-Pitch-Evaluation",
    category: "GenAI",
    accent: "from-amber-400 to-pink-500",
    spotlight: "hsl(330 90% 60% / 0.15)",
  },
  {
    title: "ClaimGuard: Healthcare Pattern Analysis",
    description:
      "Scalable ML pipeline forecasting Medicare billing behaviors using Bio_ClinicalBERT embeddings.",
    metric: { value: "0.95", label: "R² accuracy" },
    outcomes: [
      "Achieved R² = 0.95 prediction accuracy",
      "Processed 200K+ claims with semantic classification",
      "MLflow tracking & SHAP interpretability",
    ],
    tech: ["Delta Lake", "MLflow", "SHAP", "XGBoost", "PySpark", "Transformers"],
    githubUrl: "https://github.com/Jeet-51/ClaimGuard-Intelligent-Healthcare-Service-Pattern-Analysis",
    category: "ML Engineering",
    accent: "from-emerald-400 to-teal-500",
    spotlight: "hsl(160 80% 50% / 0.15)",
  },
  {
    title: "EPA GHG Dashboard",
    description:
      "Production-style analytics stack with dbt models on Snowflake.",
    metric: { value: "40%", label: "less analysis time" },
    outcomes: ["Reduced Tableau latency", "Cut analysis time by 40%"],
    tech: ["Tableau", "dbt", "Snowflake"],
    githubUrl: "https://github.com/Jeet-51/EPA-Greenhouse-Gas-GHG-Emissions-Dashboard",
    category: "Analytics",
    accent: "from-orange-400 to-red-500",
    spotlight: "hsl(20 90% 55% / 0.15)",
  },
  {
    title: "FinanceFlow: Cloud Analytics",
    description:
      "Real-time ETL pipeline using PySpark and AWS services for enhanced fraud detection.",
    metric: { value: "+40%", label: "fraud accuracy" },
    outcomes: ["Boosted fraud detection accuracy by 40%", "Delivered 40% faster insights"],
    tech: ["AWS", "S3", "SageMaker", "PySpark"],
    githubUrl: "https://github.com/Jeet-51/FinanceFlow-Cloud-Enabled-Analytics-for-Fraud-Detection",
    category: "Data Engineering",
    accent: "from-blue-500 to-indigo-500",
    spotlight: "hsl(220 90% 60% / 0.15)",
  },
];

const RevealCard = ({
  children,
  index,
  className = "",
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
}) => {
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
    el.style.transition = `opacity 0.6s ease-out ${index * 0.08}s, transform 0.6s ease-out ${index * 0.08}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

const ProjectCard = ({ project, featured }: { project: Project; featured?: boolean }) => {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full surface-card overflow-hidden"
      style={{
        // colored radial spotlight on hover
        backgroundImage: `radial-gradient(600px circle at var(--mx, 50%) var(--my, 0%), ${project.spotlight}, transparent 40%)`,
      }}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        (e.currentTarget as HTMLElement).style.setProperty("--mx", `${e.clientX - rect.left}px`);
        (e.currentTarget as HTMLElement).style.setProperty("--my", `${e.clientY - rect.top}px`);
      }}
    >
      {/* Colored top border accent */}
      <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${project.accent} opacity-90`} />

      <div className="relative p-6 md:p-8 h-full flex flex-col">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground/80">
            {project.category}
          </span>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground/60 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </div>

        {/* Big metric */}
        <div className="mb-6">
          <div
            className={`font-display font-light bg-clip-text text-transparent bg-gradient-to-r ${project.accent} ${
              featured ? "text-7xl md:text-8xl" : "text-5xl md:text-6xl"
            } leading-none tracking-tight`}
          >
            {project.metric.value}
          </div>
          <div className="mt-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            {project.metric.label}
          </div>
        </div>

        {/* Title */}
        <h3
          className={`font-display font-semibold text-foreground leading-tight mb-3 ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="mt-auto space-y-4">
          {/* Outcomes (only featured shows full list) */}
          {featured && project.outcomes.length > 1 && (
            <ul className="space-y-1.5">
              {project.outcomes.slice(0, 3).map((o, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="mt-2 block w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          )}

          {/* Tech */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono px-2 py-1 rounded-md bg-foreground/[0.04] text-muted-foreground border border-border"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

const NewProjectsSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-4 mb-20">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
            &gt;_ Featured Work
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight text-foreground">
            Projects &amp; <span className="gradient-text font-medium">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Showcasing impactful AI and data science projects that solve real-world problems.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-fr">
          {/* Featured: 2-col, 2-row */}
          <RevealCard index={0} className="md:col-span-2 md:row-span-2">
            <ProjectCard project={projects[0]} featured />
          </RevealCard>

          {/* 1-col cards */}
          <RevealCard index={1} className="md:col-span-1">
            <ProjectCard project={projects[1]} />
          </RevealCard>
          <RevealCard index={2} className="md:col-span-1">
            <ProjectCard project={projects[2]} />
          </RevealCard>

          {/* Wide */}
          <RevealCard index={3} className="md:col-span-2">
            <ProjectCard project={projects[3]} featured />
          </RevealCard>
          <RevealCard index={4} className="md:col-span-1">
            <ProjectCard project={projects[4]} />
          </RevealCard>

          {/* Wide bottom */}
          <RevealCard index={5} className="md:col-span-3">
            <ProjectCard project={projects[5]} />
          </RevealCard>
        </div>

        <div className="text-center mt-24">
          <p className="text-muted-foreground mb-6 font-mono text-sm">
            Ready to deploy your next big idea?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300"
            asChild
          >
            <a href="mailto:jeetp5118@gmail.com" className="inline-flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Let&rsquo;s Build Together
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewProjectsSection;
