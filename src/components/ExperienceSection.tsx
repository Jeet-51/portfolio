import { useEffect, useRef, useState } from "react";

interface Experience {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  technologies: string[];
  accentColor: string;
}

const experiences: Experience[] = [
  {
    title: "AI Software Engineer",
    company: "Project 990 Inc. · IU O'Neill School",
    period: "May 2024 – Present",
    bullets: [
      "Built GPU-based inference pipelines serving 175K+ nonprofit records with Text-to-SQL and NLP interfaces",
      "Architected Mistral-7B + Gemma dual-model system for mission extraction and quality validation",
      "Deployed RoBERTa classification pipelines on HPC clusters powering grant analysis and org ranking",
      "Owns the full backend infrastructure — model serving, data pipelines, and stakeholder tooling",
    ],
    technologies: ["Mistral-7B", "Gemma", "RoBERTa", "CUDA", "HPC", "Neo4j", "Text-to-SQL"],
    accentColor: "#22d3ee",
  },
  {
    title: "Associate Instructor",
    company: "Luddy School of Informatics, Computing, and Engineering",
    period: "Aug 2024 – May 2025",
    bullets: [
      "Taught data visualization to 100+ students using Matplotlib, Seaborn, and Plotly",
      "Led live coding sessions and supported student D3.js interactive dashboard projects",
      "Helped students build visuals that communicate real data-driven insights clearly",
    ],
    technologies: ["Python", "Matplotlib", "Seaborn", "Plotly", "D3.js"],
    accentColor: "#a78bfa",
  },
  {
    title: "AI Engineer Intern",
    company: "Hyphenova Network",
    period: "May 2024 – Dec 2024",
    bullets: [
      "Shipped RAG chatbots and BERT classifiers into production on a creator-tech platform",
      "Built high-concurrency backend services supporting 50K+ campaigns and 500K+ creator-brand interactions",
      "Focused on inference optimization and MLOps reliability under real production load",
    ],
    technologies: ["RAG", "FAISS", "ChromaDB", "BERT", "LLMs", "DynamoDB", "S3", "MLOps"],
    accentColor: "#f59e0b",
  },
  {
    title: "Data Analyst",
    company: "Indiana University School of Public Health",
    period: "May 2024 – Sep 2024",
    bullets: [
      "Analyzed 50K+ DHS survey responses in Stata, cutting data inconsistencies by 30%",
      "Ran A/B testing on preprocessing pipelines, boosting model accuracy by 15%",
      "Built ArcGIS dashboard that reduced analysis time by 35% for regional health teams",
    ],
    technologies: ["Stata", "A/B Testing", "ArcGIS", "Statistical Analysis"],
    accentColor: "#34d399",
  },
  {
    title: "AI Research Engineer",
    company: "Dwarkadas J. Sanghvi College of Engineering",
    period: "Jun 2022 – May 2023",
    bullets: [
      "Achieved 94% F1-score on fetal health prediction using SMOTE and Bayesian optimization",
      "Migrated experiments to Azure ML pipelines, increasing cross-validation throughput by 40%",
      "Built distributed workflows on Azure Data Lake Analytics, eliminating processing bottlenecks",
    ],
    technologies: ["Azure ML", "Azure Data Lake", "SMOTE", "Bayesian Optimization", "Snowflake"],
    accentColor: "#f472b6",
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Gustovalley Technovations",
    period: "Feb 2022 – May 2022",
    bullets: [
      "Built LSTM time series forecasting models and gained early exposure to production ML workflows",
      "Worked on model deployment and real-time inference pipelines using Azure ML and AKS",
    ],
    technologies: ["LSTM", "Deep Learning", "Time Series", "Azure ML", "AKS"],
    accentColor: "#fb923c",
  },
  {
    title: "Software Engineer Intern",
    company: "Technocolabs Software",
    period: "Jun 2021 – Aug 2021",
    bullets: [
      "Built RESTful APIs with Python and Flask, cutting page load times by 40%",
      "Integrated PostgreSQL and MongoDB for cost tracking and real-time monitoring",
      "Delivered dashboards that reduced project expenses by 15% through operational visibility",
    ],
    technologies: ["Python", "Flask", "PostgreSQL", "MongoDB", "RESTful APIs"],
    accentColor: "#818cf8",
  },
];

/* Auto-highlight numbers and percentages in bullet text */
const BulletText = ({ text, color }: { text: string; color: string }) => {
  const parts = text.split(/(\d[\d,]*[KkMm+]?(?:\.\d+)?[%+]?(?:ms|K|M|k|m)?)/g);
  return (
    <>
      {parts.map((part, i) =>
        /^\d[\d,]*[KkMm+]?(?:\.\d+)?[%+]?(?:ms|K|M|k|m)?$/.test(part) ? (
          <span key={i} style={{ color }} className="font-semibold">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

const useRevealOnScroll = (idx: number) => {
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
    el.style.transition = `opacity 0.5s ease-out ${idx * 0.06}s, transform 0.5s ease-out ${idx * 0.06}s`;
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
  }, [idx]);
  return ref;
};

const ExperienceCard = ({
  exp,
  index,
  isActive,
}: {
  exp: Experience;
  index: number;
  isActive: boolean;
}) => {
  const ref = useRevealOnScroll(index);
  return (
    <div
      ref={ref}
      className={`experience-item relative rounded-xl border border-border bg-card transition-all duration-500 overflow-hidden ${
        isActive ? "opacity-100" : "opacity-50"
      }`}
      style={
        isActive
          ? {
              borderColor: `${exp.accentColor}40`,
              boxShadow: `0 0 0 1px ${exp.accentColor}20, 0 4px 24px ${exp.accentColor}0a`,
            }
          : {}
      }
    >
      {/* Colored left border */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl"
        style={{ backgroundColor: isActive ? exp.accentColor : `${exp.accentColor}40` }}
      />

      <div className="pl-6 pr-5 py-5">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <p
              className="text-[10px] font-mono uppercase tracking-[0.18em] mb-1"
              style={{ color: exp.accentColor }}
            >
              {exp.company}
            </p>
            <h3 className="font-display font-semibold text-foreground text-xl leading-tight">
              {exp.title}
            </h3>
          </div>
          <span
            className="text-[10px] font-mono whitespace-nowrap px-2.5 py-1 rounded-full border self-start"
            style={{
              color: exp.accentColor,
              borderColor: `${exp.accentColor}35`,
              backgroundColor: `${exp.accentColor}0d`,
            }}
          >
            {exp.period}
          </span>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mb-4">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
              <span
                className="mt-[7px] block w-1 h-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: exp.accentColor }}
              />
              <BulletText text={b} color={exp.accentColor} />
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {exp.technologies.map((t) => (
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
  );
};

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".experience-item");
      let next = activeIndex;
      items.forEach((item, idx) => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.55 && rect.bottom >= window.innerHeight * 0.2) {
          next = idx;
        }
      });
      if (next !== activeIndex) setActiveIndex(next);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <div className="py-12 relative z-10" ref={containerRef}>
      <div className="space-y-4 mb-16">
        <p className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
          &gt;_ Career Path
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight text-foreground">
          Experience
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 md:pl-8">
        {/* Glowing vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent">
          <div className="absolute inset-0 blur-sm bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        </div>

        <div className="space-y-4">
          {experiences.map((exp, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute -left-[21px] md:-left-[25px] top-5 w-2.5 h-2.5 rounded-full transition-all duration-500 flex-shrink-0"
                  style={
                    isActive
                      ? {
                          backgroundColor: exp.accentColor,
                          boxShadow: `0 0 0 3px ${exp.accentColor}25, 0 0 12px ${exp.accentColor}`,
                          transform: "scale(1.3)",
                        }
                      : { backgroundColor: "hsl(var(--muted-foreground) / 0.3)" }
                  }
                />
                <ExperienceCard exp={exp} index={idx} isActive={isActive} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
