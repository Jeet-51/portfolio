import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  companyShort: string;
  period: string;
  bullets: string[];
  technologies: string[];
  accentColor: string;
  logoBg: string;
}

const experiences: Experience[] = [
  {
    title: "AI Software Engineer",
    company: "Project 990 Inc.",
    companyShort: "990",
    period: "May 2024 – Present",
    bullets: [
      "Built GPU inference pipelines serving 175K+ nonprofit records via Text-to-SQL and NLP interfaces",
      "Architected Mistral-7B + Gemma dual-model system for mission extraction and quality validation",
      "Deployed RoBERTa classification pipelines on HPC clusters powering grant analysis and org ranking",
      "Owns full backend — model serving, data pipelines, and stakeholder tooling",
    ],
    technologies: ["Mistral-7B", "Gemma", "RoBERTa", "CUDA", "HPC", "Neo4j", "Text-to-SQL"],
    accentColor: "#22d3ee",
    logoBg: "linear-gradient(135deg, #0e7490, #22d3ee)",
  },
  {
    title: "Associate Instructor",
    company: "Luddy School · Indiana University",
    companyShort: "IU",
    period: "Aug 2024 – May 2025",
    bullets: [
      "Taught data visualization to 100+ students using Matplotlib, Seaborn, and Plotly",
      "Led live coding sessions and supported student D3.js interactive dashboard projects",
      "Helped students build visuals that communicate real data-driven insights clearly",
    ],
    technologies: ["Python", "Matplotlib", "Seaborn", "Plotly", "D3.js"],
    accentColor: "#a78bfa",
    logoBg: "linear-gradient(135deg, #5b21b6, #a78bfa)",
  },
  {
    title: "AI Engineer Intern",
    company: "Hyphenova Network",
    companyShort: "HN",
    period: "May 2024 – Dec 2024",
    bullets: [
      "Shipped RAG chatbots and BERT classifiers into production on a creator-tech platform",
      "Built high-concurrency backend supporting 50K+ campaigns and 500K+ creator-brand interactions",
      "Focused on inference optimization and MLOps reliability under real production load",
    ],
    technologies: ["RAG", "FAISS", "ChromaDB", "BERT", "DynamoDB", "S3", "MLOps"],
    accentColor: "#f59e0b",
    logoBg: "linear-gradient(135deg, #b45309, #f59e0b)",
  },
  {
    title: "Data Analyst",
    company: "IU School of Public Health",
    companyShort: "IU",
    period: "May 2024 – Sep 2024",
    bullets: [
      "Analyzed 50K+ DHS survey responses in Stata, cutting data inconsistencies by 30%",
      "Ran A/B testing on preprocessing pipelines, boosting model accuracy by 15%",
      "Built ArcGIS dashboard that reduced analysis time by 35% for regional health teams",
    ],
    technologies: ["Stata", "A/B Testing", "ArcGIS", "Statistical Analysis"],
    accentColor: "#34d399",
    logoBg: "linear-gradient(135deg, #065f46, #34d399)",
  },
  {
    title: "AI Research Engineer",
    company: "D.J. Sanghvi College of Engineering",
    companyShort: "DJS",
    period: "Jun 2022 – May 2023",
    bullets: [
      "Achieved 94% F1-score on fetal health prediction using SMOTE and Bayesian optimization",
      "Migrated experiments to Azure ML pipelines, increasing throughput by 40%",
      "Built distributed workflows on Azure Data Lake Analytics, eliminating processing bottlenecks",
    ],
    technologies: ["Azure ML", "Azure Data Lake", "SMOTE", "Bayesian Opt", "Snowflake"],
    accentColor: "#f472b6",
    logoBg: "linear-gradient(135deg, #9d174d, #f472b6)",
  },
  {
    title: "ML Engineer Intern",
    company: "Gustovalley Technovations",
    companyShort: "GV",
    period: "Feb 2022 – May 2022",
    bullets: [
      "Built LSTM time series forecasting models with early production ML exposure",
      "Worked on model deployment and real-time inference pipelines via Azure ML and AKS",
    ],
    technologies: ["LSTM", "Deep Learning", "Time Series", "Azure ML", "AKS"],
    accentColor: "#fb923c",
    logoBg: "linear-gradient(135deg, #9a3412, #fb923c)",
  },
  {
    title: "Software Engineer Intern",
    company: "Technocolabs Software",
    companyShort: "TC",
    period: "Jun 2021 – Aug 2021",
    bullets: [
      "Built RESTful APIs with Python and Flask, cutting page load times by 40%",
      "Integrated PostgreSQL and MongoDB for cost tracking and real-time monitoring",
      "Delivered dashboards that reduced project expenses by 15% through operational visibility",
    ],
    technologies: ["Python", "Flask", "PostgreSQL", "MongoDB", "RESTful APIs"],
    accentColor: "#818cf8",
    logoBg: "linear-gradient(135deg, #3730a3, #818cf8)",
  },
];

/* Auto-highlight numbers/percentages */
const BulletText = ({ text, color }: { text: string; color: string }) => {
  const parts = text.split(/(\d[\d,]*(?:\.\d+)?[KkMm%+]?(?:\+)?)/g);
  return (
    <>
      {parts.map((part, i) =>
        /^\d[\d,]*(?:\.\d+)?[KkMm%+]?(?:\+)?$/.test(part) ? (
          <span key={i} style={{ color }} className="font-bold">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

const ExperienceSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const total = experiences.length;

  const scrollTo = useCallback((idx: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[idx] as HTMLElement;
    if (!card) return;
    container.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
    setActiveIdx(idx);
  }, []);

  const prev = () => scrollTo(Math.max(0, activeIdx - 1));
  const next = () => scrollTo(Math.min(total - 1, activeIdx + 1));

  /* Track active card on scroll */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      let closest = 0;
      let minDist = Infinity;
      Array.from(container.children).forEach((child, i) => {
        const el = child as HTMLElement;
        const dist = Math.abs(el.offsetLeft - scrollLeft - 24);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActiveIdx(closest);
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  /* Keyboard nav */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIdx]);

  return (
    <div className="py-12 relative z-10">
      {/* Header */}
      <div className="space-y-4 mb-12">
        <p className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
          &gt;_ Career Path
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight text-foreground">
          Experience
        </h2>
      </div>

      {/* Carousel wrapper */}
      <div className="relative">
        {/* Prev arrow */}
        <button
          onClick={prev}
          disabled={activeIdx === 0}
          className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all disabled:opacity-20 disabled:cursor-not-allowed shadow-lg"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scroll track */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 px-1"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {experiences.map((exp, idx) => {
            const isActive = idx === activeIdx;
            return (
              <div
                key={idx}
                className="flex-shrink-0 w-[88vw] sm:w-[420px] md:w-[460px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <div
                  className="h-full rounded-2xl border bg-card flex flex-col transition-all duration-300"
                  style={{
                    borderColor: isActive ? `${exp.accentColor}50` : "hsl(var(--border))",
                    boxShadow: isActive
                      ? `0 0 0 1px ${exp.accentColor}25, 0 8px 32px ${exp.accentColor}12`
                      : "none",
                  }}
                >
                  {/* Card top strip */}
                  <div
                    className="h-[3px] w-full rounded-t-2xl"
                    style={{
                      background: isActive
                        ? `linear-gradient(to right, ${exp.accentColor}, ${exp.accentColor}44)`
                        : `linear-gradient(to right, ${exp.accentColor}44, transparent)`,
                    }}
                  />

                  <div className="p-6 flex flex-col flex-grow gap-5">
                    {/* Logo + title row */}
                    <div className="flex items-center gap-4">
                      {/* Company logo circle */}
                      <div
                        className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-lg"
                        style={{ background: exp.logoBg }}
                      >
                        <span className="text-white font-display font-bold text-base tracking-tight leading-none">
                          {exp.companyShort}
                        </span>
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-display font-semibold text-foreground text-lg leading-tight truncate">
                          {exp.title}
                        </h3>
                        <p
                          className="text-[11px] font-mono mt-0.5 truncate"
                          style={{ color: exp.accentColor }}
                        >
                          {exp.company}
                        </p>
                      </div>

                      {/* Date — pushed right */}
                      <span
                        className="ml-auto flex-shrink-0 text-[10px] font-mono px-2.5 py-1 rounded-full border whitespace-nowrap"
                        style={{
                          color: exp.accentColor,
                          borderColor: `${exp.accentColor}35`,
                          backgroundColor: `${exp.accentColor}0d`,
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    {/* Divider */}
                    <div
                      className="h-px w-full"
                      style={{ background: `linear-gradient(to right, ${exp.accentColor}30, transparent)` }}
                    />

                    {/* Bullets */}
                    <ul className="space-y-2.5 flex-grow">
                      {exp.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span
                            className="mt-[7px] block w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: exp.accentColor }}
                          />
                          <BulletText text={b} color={exp.accentColor} />
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
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
              </div>
            );
          })}
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          disabled={activeIdx === total - 1}
          className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all disabled:opacity-20 disabled:cursor-not-allowed shadow-lg"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {experiences.map((exp, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === activeIdx ? "20px" : "6px",
              height: "6px",
              backgroundColor:
                i === activeIdx ? exp.accentColor : "hsl(var(--muted-foreground) / 0.3)",
            }}
            aria-label={`Go to ${exp.company}`}
          />
        ))}
      </div>

      {/* Counter */}
      <p className="text-center text-xs font-mono text-muted-foreground mt-3">
        <span style={{ color: experiences[activeIdx].accentColor }}>{activeIdx + 1}</span>
        <span className="mx-1">/</span>
        {total}
      </p>
    </div>
  );
};

export default ExperienceSection;
