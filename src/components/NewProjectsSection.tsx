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
  metricColor: string;   // explicit CSS color for metric number
  borderColor: string;   // top border color
  spotlight: string;     // hover radial glow
  illustration: React.ReactNode;
}

// Inline SVG illustrations per project type
const BackendIllustration = () => (
  <svg viewBox="0 0 120 60" className="w-full h-full opacity-40" fill="none">
    <rect x="10" y="10" width="30" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="50" y="10" width="30" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="90" y="10" width="20" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="40" y1="19" x2="50" y2="19" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
    <line x1="80" y1="19" x2="90" y2="19" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
    <rect x="30" y="38" width="60" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="60" y1="28" x2="60" y2="38" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="25" cy="19" r="2" fill="currentColor"/>
    <circle cx="65" cy="19" r="2" fill="currentColor"/>
    <circle cx="60" cy="45" r="2" fill="currentColor"/>
  </svg>
);

const LLMIllustration = () => (
  <svg viewBox="0 0 120 60" className="w-full h-full opacity-40" fill="none">
    <circle cx="60" cy="30" r="18" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="60" cy="30" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3"/>
    <circle cx="60" cy="30" r="3" fill="currentColor"/>
    <line x1="10" y1="30" x2="42" y2="30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
    <line x1="78" y1="30" x2="110" y2="30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
    <circle cx="10" cy="30" r="3" fill="currentColor"/>
    <circle cx="110" cy="30" r="3" fill="currentColor"/>
    <text x="52" y="56" fontSize="8" fill="currentColor" opacity="0.6" fontFamily="monospace">GPU</text>
  </svg>
);

const GenAIIllustration = () => (
  <svg viewBox="0 0 120 60" className="w-full h-full opacity-40" fill="none">
    {[0,1,2,3,4].map(i => (
      <circle key={i} cx={20 + i * 20} cy={i % 2 === 0 ? 20 : 40} r="5" stroke="currentColor" strokeWidth="1.5"/>
    ))}
    {[[0,1],[1,2],[2,3],[3,4],[0,2],[1,3],[2,4]].map(([a,b],i) => (
      <line key={i} x1={20+a*20} y1={a%2===0?20:40} x2={20+b*20} y2={b%2===0?20:40}
        stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" opacity="0.6"/>
    ))}
  </svg>
);

const MLIllustration = () => (
  <svg viewBox="0 0 120 60" className="w-full h-full opacity-40" fill="none">
    {[55,42,48,35,52,38,45,30,50,40].map((y, i) => (
      <circle key={i} cx={10 + i * 11} cy={y} r="2.5" fill="currentColor"/>
    ))}
    <polyline points="10,55 21,42 32,48 43,35 54,52 65,38 76,45 87,30 98,50 109,40"
      stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    <line x1="10" y1="55" x2="110" y2="20" stroke="currentColor" strokeWidth="1"
      strokeDasharray="4 3" opacity="0.5"/>
  </svg>
);

const AnalyticsIllustration = () => (
  <svg viewBox="0 0 120 60" className="w-full h-full opacity-40" fill="none">
    {[40,25,50,15,35,45,20,38].map((h, i) => (
      <rect key={i} x={8 + i * 14} y={55 - h} width="10" height={h} rx="2"
        fill="currentColor" opacity={0.5 + i * 0.06}/>
    ))}
    <line x1="8" y1="55" x2="120" y2="55" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
  </svg>
);

const DataIllustration = () => (
  <svg viewBox="0 0 120 60" className="w-full h-full opacity-40" fill="none">
    <ellipse cx="30" cy="22" rx="22" ry="9" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="8" y1="22" x2="8" y2="38" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="52" y1="22" x2="52" y2="38" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="30" cy="38" rx="22" ry="9" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="52" y1="38" x2="90" y2="38" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
    <ellipse cx="100" cy="38" rx="15" ry="7" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="100" cy="38" r="3" fill="currentColor"/>
  </svg>
);

const projects: Project[] = [
  {
    title: "Production Backend Platform",
    description: "High-throughput backend powering 175K+ nonprofit records with GPU-accelerated inference and Text-to-SQL interfaces.",
    metric: { value: "175K+", label: "records served" },
    outcomes: ["Scaled to 175K+ nonprofit records", "Sub-second query response"],
    tech: ["Python", "FastAPI", "PostgreSQL", "Mistral-7B", "CUDA"],
    githubUrl: "https://github.com/Jeet-51",
    category: "Backend",
    metricColor: "#a855f7",
    borderColor: "linear-gradient(to right, #8b5cf6, #d946ef, #22d3ee)",
    spotlight: "hsl(270 95% 60% / 0.12)",
    illustration: <BackendIllustration />,
  },
  {
    title: "LLM Inference Service",
    description: "GPU-backed LLM inference service designed for low-latency, high-concurrency workloads.",
    metric: { value: "180ms", label: "p50 latency" },
    outcomes: ["Reduced latency to ~180ms", "Supported 100+ concurrent requests"],
    tech: ["FastAPI", "vLLM", "CUDA", "Mistral-7B"],
    githubUrl: "https://github.com/Jeet-51",
    category: "AI Infrastructure",
    metricColor: "#22d3ee",
    borderColor: "linear-gradient(to right, #22d3ee, #0ea5e9)",
    spotlight: "hsl(190 95% 55% / 0.12)",
    illustration: <LLMIllustration />,
  },
  {
    title: "PitchPal — AI Evaluator",
    description: "AI-powered startup evaluation platform using LangChain ReAct agents.",
    metric: { value: "60%", label: "faster diligence" },
    outcomes: ["Processed 100+ pitch evaluations", "Accelerated due diligence by 60%"],
    tech: ["LangChain", "GPT-4", "Streamlit"],
    githubUrl: "https://github.com/Jeet-51/PitchPal-AI-Agent-for-Startup-Pitch-Evaluation",
    category: "GenAI",
    metricColor: "#f59e0b",
    borderColor: "linear-gradient(to right, #fbbf24, #ec4899)",
    spotlight: "hsl(330 90% 60% / 0.12)",
    illustration: <GenAIIllustration />,
  },
  {
    title: "ClaimGuard: Healthcare Pattern Analysis",
    description: "Scalable ML pipeline forecasting Medicare billing behaviors using Bio_ClinicalBERT embeddings.",
    metric: { value: "0.95", label: "R² accuracy" },
    outcomes: [
      "Achieved R² = 0.95 prediction accuracy",
      "Processed 200K+ claims with semantic classification",
      "MLflow tracking & SHAP interpretability",
    ],
    tech: ["Delta Lake", "MLflow", "SHAP", "XGBoost", "PySpark", "Transformers"],
    githubUrl: "https://github.com/Jeet-51/ClaimGuard-Intelligent-Healthcare-Service-Pattern-Analysis",
    category: "ML Engineering",
    metricColor: "#34d399",
    borderColor: "linear-gradient(to right, #34d399, #14b8a6)",
    spotlight: "hsl(160 80% 50% / 0.12)",
    illustration: <MLIllustration />,
  },
  {
    title: "EPA GHG Dashboard",
    description: "Production-style analytics stack with dbt models on Snowflake.",
    metric: { value: "40%", label: "less analysis time" },
    outcomes: ["Reduced Tableau latency", "Cut analysis time by 40%"],
    tech: ["Tableau", "dbt", "Snowflake"],
    githubUrl: "https://github.com/Jeet-51/EPA-Greenhouse-Gas-GHG-Emissions-Dashboard",
    category: "Analytics",
    metricColor: "#fb923c",
    borderColor: "linear-gradient(to right, #fb923c, #ef4444)",
    spotlight: "hsl(20 90% 55% / 0.12)",
    illustration: <AnalyticsIllustration />,
  },
  {
    title: "FinanceFlow: Cloud Analytics",
    description: "Real-time ETL pipeline using PySpark and AWS services for enhanced fraud detection.",
    metric: { value: "+40%", label: "fraud accuracy" },
    outcomes: ["Boosted fraud detection accuracy by 40%", "Delivered 40% faster insights"],
    tech: ["AWS", "S3", "SageMaker", "PySpark"],
    githubUrl: "https://github.com/Jeet-51/FinanceFlow-Cloud-Enabled-Analytics-for-Fraud-Detection",
    category: "Data Engineering",
    metricColor: "#60a5fa",
    borderColor: "linear-gradient(to right, #3b82f6, #6366f1)",
    spotlight: "hsl(220 90% 60% / 0.12)",
    illustration: <DataIllustration />,
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
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        (e.currentTarget as HTMLElement).style.setProperty("--mx", `${e.clientX - rect.left}px`);
        (e.currentTarget as HTMLElement).style.setProperty("--my", `${e.clientY - rect.top}px`);
        (e.currentTarget as HTMLElement).style.backgroundImage =
          `radial-gradient(500px circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, ${project.spotlight}, transparent 40%)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundImage = "none";
      }}
    >
      {/* Colored top border */}
      <div
        className="absolute top-0 inset-x-0 h-[3px] opacity-90 group-hover:opacity-100 transition-opacity"
        style={{ background: project.borderColor }}
      />

      {/* Illustration strip */}
      <div
        className="relative overflow-hidden transition-all duration-500"
        style={{
          height: featured ? "120px" : "80px",
          background: `radial-gradient(ellipse at 60% 50%, ${project.spotlight.replace("0.12", "0.25")}, transparent 70%)`,
          color: project.metricColor,
        }}
      >
        <div className="absolute inset-0 p-4 flex items-center justify-center">
          {project.illustration}
        </div>
        {/* Big metric overlaid */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-8">
          <div
            className={`font-display font-bold leading-none tracking-tight select-none ${
              featured ? "text-6xl md:text-7xl" : "text-4xl md:text-5xl"
            }`}
            style={{ color: project.metricColor }}
          >
            {project.metric.value}
          </div>
          <div className="mt-1 text-[10px] font-mono uppercase tracking-widest opacity-70"
            style={{ color: project.metricColor }}>
            {project.metric.label}
          </div>
        </div>
      </div>

      <div className="relative p-6 md:p-7 h-auto flex flex-col">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/80">
            {project.category}
          </span>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
        </div>

        {/* Title */}
        <h3
          className={`font-display font-semibold text-foreground leading-tight mb-3 ${
            featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
          }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="mt-auto space-y-4">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <RevealCard index={0} className="md:col-span-2 md:row-span-2">
            <ProjectCard project={projects[0]} featured />
          </RevealCard>

          <RevealCard index={1} className="md:col-span-1">
            <ProjectCard project={projects[1]} />
          </RevealCard>
          <RevealCard index={2} className="md:col-span-1">
            <ProjectCard project={projects[2]} />
          </RevealCard>

          <RevealCard index={3} className="md:col-span-2">
            <ProjectCard project={projects[3]} featured />
          </RevealCard>
          <RevealCard index={4} className="md:col-span-1">
            <ProjectCard project={projects[4]} />
          </RevealCard>

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
