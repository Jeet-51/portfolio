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
      "GPU-backed LLM inference service for low-latency, high-concurrency workloads. Production-grade reliability with 100+ concurrent users.",
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
    title: "ClaimGuard",
    description:
      "Scalable ML pipeline forecasting Medicare billing behaviors using Bio_ClinicalBERT embeddings with full MLOps tracking.",
    metric: { value: "0.95", label: "R² accuracy" },
    outcomes: [
      "R² = 0.95 on unseen Medicare billing data",
      "Processed 200K+ claims",
      "MLflow + SHAP interpretability",
    ],
    tech: ["XGBoost", "PySpark", "MLflow", "SHAP", "Transformers"],
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
      "Modular dbt models on Snowflake",
    ],
    tech: ["Tableau", "dbt", "Snowflake", "SQL"],
    githubUrl: "https://github.com/Jeet-51/EPA-Greenhouse-Gas-GHG-Emissions-Dashboard",
    category: "Analytics",
    accentColor: "#fb923c",
  },
  {
    title: "FinanceFlow",
    description:
      "Real-time ETL pipeline on AWS using PySpark and SageMaker for fraud detection with end-to-end MLOps.",
    metric: { value: "+40%", label: "fraud detection" },
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
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.55s ease-out ${index * 0.09}s, transform 0.55s ease-out ${index * 0.09}s`;
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
  return ref;
};

/* ── Featured card (2-col wide) ── */
const FeaturedCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useReveal(index);
  return (
    <div ref={ref} className="md:col-span-2">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col h-full rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1"
        style={{
          boxShadow: "0 0 0 0 transparent",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${project.accentColor}55, 0 8px 40px ${project.accentColor}18`;
          (e.currentTarget as HTMLElement).style.borderColor = `${project.accentColor}55`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 transparent";
          (e.currentTarget as HTMLElement).style.borderColor = "";
        }}
      >
        {/* Ghost watermark number */}
        <div
          className="absolute bottom-0 right-4 font-display font-black leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(7rem, 14vw, 12rem)",
            color: project.accentColor,
            opacity: 0.055,
            lineHeight: 1,
            bottom: "-0.1em",
          }}
        >
          {project.metric.value}
        </div>

        <div className="relative flex flex-col h-full p-8">
          {/* Top row */}
          <div className="flex items-center justify-between mb-6">
            <span
              className="text-[10px] font-mono uppercase tracking-[0.22em]"
              style={{ color: project.accentColor }}
            >
              {project.category}
            </span>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
              <span className="text-xs font-mono text-muted-foreground">View project</span>
              <ArrowUpRight className="w-3.5 h-3.5" style={{ color: project.accentColor }} />
            </div>
          </div>

          {/* Metric */}
          <div className="mb-5">
            <div
              className="font-display font-bold leading-none tracking-tight"
              style={{ fontSize: "2.75rem", color: project.accentColor }}
            >
              {project.metric.value}
            </div>
            <div
              className="mt-1 text-[10px] font-mono uppercase tracking-widest"
              style={{ color: project.accentColor, opacity: 0.65 }}
            >
              {project.metric.label}
            </div>
          </div>

          {/* Title + desc */}
          <h3 className="font-display font-semibold text-foreground text-2xl leading-tight mb-3">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-lg">
            {project.description}
          </p>

          {/* Outcomes */}
          <ul className="space-y-1.5 mb-7">
            {project.outcomes.map((o, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
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
                className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-foreground/[0.04] text-muted-foreground border border-border"
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

/* ── Standard card (1-col) ── */
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useReveal(index);
  return (
    <div ref={ref} className="md:col-span-1">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col h-full rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${project.accentColor}55, 0 8px 32px ${project.accentColor}15`;
          (e.currentTarget as HTMLElement).style.borderColor = `${project.accentColor}55`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "";
          (e.currentTarget as HTMLElement).style.borderColor = "";
        }}
      >
        {/* Ghost watermark */}
        <div
          className="absolute bottom-0 right-2 font-display font-black leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(4rem, 8vw, 7rem)",
            color: project.accentColor,
            opacity: 0.055,
            lineHeight: 1,
            bottom: "-0.1em",
          }}
        >
          {project.metric.value}
        </div>

        <div className="relative flex flex-col h-full p-6">
          {/* Top row */}
          <div className="flex items-center justify-between mb-5">
            <span
              className="text-[10px] font-mono uppercase tracking-[0.22em]"
              style={{ color: project.accentColor }}
            >
              {project.category}
            </span>
            <ArrowUpRight
              className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200"
              style={{ color: project.accentColor }}
            />
          </div>

          {/* Metric */}
          <div className="mb-4">
            <div
              className="font-display font-bold leading-none tracking-tight"
              style={{ fontSize: "2rem", color: project.accentColor }}
            >
              {project.metric.value}
            </div>
            <div
              className="mt-1 text-[10px] font-mono uppercase tracking-widest"
              style={{ color: project.accentColor, opacity: 0.65 }}
            >
              {project.metric.label}
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display font-semibold text-foreground text-lg leading-snug mb-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="mt-auto flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono px-2 py-1 rounded-lg bg-foreground/[0.04] text-muted-foreground border border-border"
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
    <section className="py-16 px-6 md:px-12 relative z-10">
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

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Row 1: LLM featured (2-col) + PitchPal (1-col) */}
          <FeaturedCard project={projects[0]} index={0} />
          <ProjectCard  project={projects[1]} index={1} />

          {/* Row 2: ClaimGuard (1-col) + EPA (1-col) + FinanceFlow (1-col) */}
          <ProjectCard project={projects[2]} index={2} />
          <ProjectCard project={projects[3]} index={3} />
          <ProjectCard project={projects[4]} index={4} />
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
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
