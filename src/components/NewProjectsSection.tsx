import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, ArrowUpRight, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  metric: { value: string; label: string };
  outcomes: string[];
  tech: string[];
  githubUrl: string;
  category: string;
  accentColor: string;
  glowColor: string;
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
    glowColor: "rgba(34,211,238,0.12)",
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
    glowColor: "rgba(245,158,11,0.12)",
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
    glowColor: "rgba(52,211,153,0.12)",
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
    glowColor: "rgba(251,146,60,0.12)",
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
    glowColor: "rgba(129,140,248,0.12)",
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
    el.style.transition = `opacity 0.55s ease-out ${index * 0.07}s, transform 0.55s ease-out ${index * 0.07}s`;
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

const FeaturedCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useReveal(index);
  return (
    <div ref={ref} className="md:col-span-2">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col md:flex-row gap-0 rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        style={{ backgroundColor: "hsl(var(--card))" }}
      >
        {/* Left accent panel — metric */}
        <div
          className="flex flex-col justify-center px-8 py-10 md:py-12 md:w-56 flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${project.glowColor.replace("0.12", "0.25")}, ${project.glowColor.replace("0.12", "0.08")})`,
            borderRight: `1px solid ${project.accentColor}22`,
          }}
        >
          <div
            className="font-display font-bold leading-none tracking-tight text-5xl md:text-6xl"
            style={{ color: project.accentColor }}
          >
            {project.metric.value}
          </div>
          <div
            className="mt-2 text-[10px] font-mono uppercase tracking-widest"
            style={{ color: project.accentColor, opacity: 0.7 }}
          >
            {project.metric.label}
          </div>
        </div>

        {/* Right content */}
        <div className="flex flex-col p-7 md:p-9 flex-grow">
          {/* Top border accent */}
          <div
            className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `linear-gradient(to right, ${project.accentColor}, transparent)` }}
          />

          <div className="flex items-start justify-between gap-3 mb-5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              {project.category}
            </span>
            <ExternalLink
              className="w-4 h-4 flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
              style={{ color: project.accentColor }}
            />
          </div>

          <h3 className="font-display font-semibold text-foreground text-xl md:text-2xl leading-tight mb-3">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          <ul className="space-y-1.5 mb-6">
            {project.outcomes.map((o, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span
                  className="mt-[7px] block w-1 h-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: project.accentColor }}
                />
                {o}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-foreground/[0.04] text-muted-foreground border border-border"
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

const SmallCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useReveal(index);
  return (
    <div ref={ref} className="md:col-span-1">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col h-full rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        style={{ backgroundColor: "hsl(var(--card))" }}
      >
        {/* Top border — always visible, stronger on hover */}
        <div
          className="h-[2px] flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ background: `linear-gradient(to right, ${project.accentColor}, ${project.accentColor}44)` }}
        />

        <div className="flex flex-col p-6 flex-grow">
          <div className="flex items-start justify-between gap-3 mb-5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              {project.category}
            </span>
            <ArrowUpRight
              className="w-3.5 h-3.5 flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
              style={{ color: project.accentColor }}
            />
          </div>

          {/* Metric */}
          <div className="mb-5">
            <div
              className="font-display font-bold leading-none tracking-tight text-4xl"
              style={{ color: project.accentColor }}
            >
              {project.metric.value}
            </div>
            <div
              className="mt-1.5 text-[10px] font-mono uppercase tracking-widest"
              style={{ color: project.accentColor, opacity: 0.65 }}
            >
              {project.metric.label}
            </div>
          </div>

          <h3 className="font-display font-semibold text-foreground text-lg leading-tight mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
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

const WideCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useReveal(index);
  return (
    <div ref={ref} className="md:col-span-3">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col md:flex-row gap-0 rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        style={{ backgroundColor: "hsl(var(--card))" }}
      >
        <div
          className="flex flex-col justify-center px-8 py-8 md:w-48 flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${project.glowColor.replace("0.12","0.2")}, ${project.glowColor.replace("0.12","0.05")})`,
            borderRight: `1px solid ${project.accentColor}22`,
          }}
        >
          <div className="font-display font-bold leading-none tracking-tight text-4xl md:text-5xl" style={{ color: project.accentColor }}>
            {project.metric.value}
          </div>
          <div className="mt-2 text-[10px] font-mono uppercase tracking-widest" style={{ color: project.accentColor, opacity: 0.65 }}>
            {project.metric.label}
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-6 p-7 flex-grow">
          <div className="flex-grow">
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{project.category}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: project.accentColor }} />
            </div>
            <h3 className="font-display font-semibold text-foreground text-xl mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-1.5 md:flex-col md:items-end flex-shrink-0">
            {project.tech.map((t) => (
              <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-foreground/[0.04] text-muted-foreground border border-border whitespace-nowrap">
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
  // Layout: [Featured LLM 2-col][PitchPal 1-col] / [ClaimGuard 2-col][EPA 1-col] / [FinanceFlow full]
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Row 1: LLM Inference (2-col featured) + PitchPal (1-col) */}
          <FeaturedCard project={projects[0]} index={0} />
          <SmallCard project={projects[1]} index={1} />

          {/* Row 2: ClaimGuard (2-col featured) + EPA (1-col) */}
          <FeaturedCard project={projects[2]} index={2} />
          <SmallCard project={projects[3]} index={3} />

          {/* Row 3: FinanceFlow full-width */}
          <WideCard project={projects[4]} index={4} />
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
