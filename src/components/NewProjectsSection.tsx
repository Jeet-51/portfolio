import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  metric: { value: string; label: string };
  outcomes: string[];
  tech: string[];
  githubUrl: string;
  category: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    title: "LLM Inference Service",
    description:
      "GPU-backed LLM inference service designed for low-latency, high-concurrency workloads. Built for production-grade reliability with 100+ concurrent users.",
    metric: { value: "180ms", label: "P50 latency" },
    outcomes: [
      "Reduced inference latency to ~180ms P50",
      "Supported 100+ concurrent requests",
      "Deployed on GPU cluster with vLLM optimization",
    ],
    tech: ["FastAPI", "vLLM", "CUDA", "Mistral-7B", "Python"],
    githubUrl: "https://github.com/Jeet-51",
    category: "AI Infrastructure",
    accentColor: "#22d3ee",
  },
  {
    title: "PitchPal — AI Evaluator",
    description:
      "AI-powered startup evaluation platform using LangChain ReAct agents to automate investor due diligence workflows.",
    metric: { value: "60%", label: "faster diligence" },
    outcomes: [
      "Processed 100+ pitch deck evaluations",
      "Accelerated due diligence cycle by 60%",
    ],
    tech: ["LangChain", "GPT-4", "Streamlit", "Python"],
    githubUrl: "https://github.com/Jeet-51/PitchPal-AI-Agent-for-Startup-Pitch-Evaluation",
    category: "GenAI",
    accentColor: "#f59e0b",
  },
  {
    title: "ClaimGuard: Healthcare Analytics",
    description:
      "Scalable ML pipeline forecasting Medicare billing behaviors using Bio_ClinicalBERT embeddings with full MLOps tracking.",
    metric: { value: "0.95", label: "R² accuracy" },
    outcomes: [
      "R² = 0.95 on unseen Medicare billing data",
      "Processed 200K+ claims with semantic classification",
      "MLflow tracking + SHAP model interpretability",
    ],
    tech: ["XGBoost", "PySpark", "MLflow", "SHAP", "Delta Lake", "Transformers"],
    githubUrl: "https://github.com/Jeet-51/ClaimGuard-Intelligent-Healthcare-Service-Pattern-Analysis",
    category: "ML Engineering",
    accentColor: "#34d399",
  },
  {
    title: "EPA GHG Dashboard",
    description:
      "Production analytics stack with dbt models on Snowflake powering a Tableau dashboard for EPA greenhouse gas emissions analysis.",
    metric: { value: "40%", label: "less analysis time" },
    outcomes: [
      "Cut analyst query time by 40%",
      "Modular dbt models on Snowflake data warehouse",
    ],
    tech: ["Tableau", "dbt", "Snowflake", "SQL"],
    githubUrl: "https://github.com/Jeet-51/EPA-Greenhouse-Gas-GHG-Emissions-Dashboard",
    category: "Analytics",
    accentColor: "#fb923c",
  },
  {
    title: "FinanceFlow: Cloud Analytics",
    description:
      "Real-time ETL pipeline on AWS using PySpark and SageMaker for fraud detection with end-to-end MLOps.",
    metric: { value: "+40%", label: "fraud detection accuracy" },
    outcomes: [
      "Boosted fraud detection accuracy by 40%",
      "Real-time pipeline: S3 → PySpark → SageMaker",
    ],
    tech: ["AWS", "S3", "SageMaker", "PySpark", "Python"],
    githubUrl: "https://github.com/Jeet-51/FinanceFlow-Cloud-Enabled-Analytics-for-Fraud-Detection",
    category: "Data Engineering",
    accentColor: "#818cf8",
  },
];

const useReveal = (index: number) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      return;
    }
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.5s ease-out ${index * 0.08}s, transform 0.5s ease-out ${index * 0.08}s`;
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
  return ref;
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useReveal(index);
  return (
    <div ref={ref} className="h-full">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-foreground/20"
      >
        {/* Thin top accent line */}
        <div
          className="h-[2px] w-full flex-shrink-0"
          style={{ background: `linear-gradient(to right, ${project.accentColor}, ${project.accentColor}33)` }}
        />

        <div className="flex flex-col flex-grow p-6">
          {/* Header row */}
          <div className="flex items-center justify-between mb-4">
            <span
              className="text-[10px] font-mono uppercase tracking-[0.18em]"
              style={{ color: project.accentColor }}
            >
              {project.category}
            </span>
            <ArrowUpRight
              className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200"
              style={{ color: project.accentColor }}
            />
          </div>

          {/* Title */}
          <h3 className="font-display font-semibold text-foreground text-lg leading-snug mb-2">
            {project.title}
          </h3>

          {/* Metric pill */}
          <div className="mb-4">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border"
              style={{
                color: project.accentColor,
                borderColor: `${project.accentColor}33`,
                backgroundColor: `${project.accentColor}10`,
              }}
            >
              <span className="font-bold text-sm">{project.metric.value}</span>
              <span className="opacity-70">{project.metric.label}</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
            {project.description}
          </p>

          {/* Outcomes */}
          <ul className="space-y-1.5 mb-5">
            {project.outcomes.map((o, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span
                  className="mt-[7px] block w-1 h-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: project.accentColor }}
                />
                {o}
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="mt-auto flex flex-wrap gap-1.5">
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
      </a>
    </div>
  );
};

const NewProjectsSection = () => {
  return (
    <section className="py-28 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-4">
            &gt;_ Featured Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
            Projects &amp; <span className="gradient-text font-medium">Solutions</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl">
            Production AI and data science systems solving real-world problems.
          </p>
        </div>

        {/* Uniform 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-muted-foreground mb-5 font-mono text-sm">
            Want to collaborate on something impactful?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-[0_0_24px_hsl(var(--primary)/0.25)] hover:shadow-[0_0_36px_hsl(var(--primary)/0.4)] transition-all duration-300"
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
