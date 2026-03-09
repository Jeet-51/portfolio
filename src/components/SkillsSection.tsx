import { useRef, useEffect } from "react";
import {
  Brain, Server, Database, Cloud, Users,
  Code, Cpu, Zap, GitBranch, Terminal,
  BarChart3, Layers, Shield, Globe, Settings,
  Box, HardDrive, Workflow, MessageSquare, FileText,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Python: <Terminal className="w-3.5 h-3.5" />,
  Go: <Code className="w-3.5 h-3.5" />,
  "C++": <Code className="w-3.5 h-3.5" />,
  Java: <Code className="w-3.5 h-3.5" />,
  Scala: <Code className="w-3.5 h-3.5" />,
  SQL: <Database className="w-3.5 h-3.5" />,
  Bash: <Terminal className="w-3.5 h-3.5" />,
  PyTorch: <Brain className="w-3.5 h-3.5" />,
  TensorFlow: <Brain className="w-3.5 h-3.5" />,
  Transformers: <Cpu className="w-3.5 h-3.5" />,
  "Hugging Face": <Brain className="w-3.5 h-3.5" />,
  "scikit-learn": <BarChart3 className="w-3.5 h-3.5" />,
  XGBoost: <Zap className="w-3.5 h-3.5" />,
  CUDA: <Cpu className="w-3.5 h-3.5" />,
  "GPU Inference": <Cpu className="w-3.5 h-3.5" />,
  Quantization: <Settings className="w-3.5 h-3.5" />,
  Batching: <Layers className="w-3.5 h-3.5" />,
  "Model Evaluation": <BarChart3 className="w-3.5 h-3.5" />,
  "LLM Serving": <Server className="w-3.5 h-3.5" />,
  RAG: <Brain className="w-3.5 h-3.5" />,
  "Vector Search (FAISS, Pinecone)": <Database className="w-3.5 h-3.5" />,
  vLLM: <Zap className="w-3.5 h-3.5" />,
  LangChain: <Workflow className="w-3.5 h-3.5" />,
  LangGraph: <Workflow className="w-3.5 h-3.5" />,
  LlamaIndex: <Database className="w-3.5 h-3.5" />,
  "Prompt Engineering": <MessageSquare className="w-3.5 h-3.5" />,
  "AI Agents": <Brain className="w-3.5 h-3.5" />,
  Guardrails: <Shield className="w-3.5 h-3.5" />,
  "REST APIs": <Globe className="w-3.5 h-3.5" />,
  gRPC: <Zap className="w-3.5 h-3.5" />,
  Microservices: <Box className="w-3.5 h-3.5" />,
  "Distributed Systems": <Server className="w-3.5 h-3.5" />,
  "High-Concurrency Services": <Zap className="w-3.5 h-3.5" />,
  "API Design": <Globe className="w-3.5 h-3.5" />,
  Idempotency: <Shield className="w-3.5 h-3.5" />,
  Caching: <HardDrive className="w-3.5 h-3.5" />,
  "Rate Limiting": <Shield className="w-3.5 h-3.5" />,
  WebSockets: <Globe className="w-3.5 h-3.5" />,
  Linux: <Terminal className="w-3.5 h-3.5" />,
  PostgreSQL: <Database className="w-3.5 h-3.5" />,
  MySQL: <Database className="w-3.5 h-3.5" />,
  MongoDB: <Database className="w-3.5 h-3.5" />,
  Redis: <Database className="w-3.5 h-3.5" />,
  DynamoDB: <Database className="w-3.5 h-3.5" />,
  Snowflake: <Database className="w-3.5 h-3.5" />,
  "Data Modeling": <Layers className="w-3.5 h-3.5" />,
  "Data Warehousing": <HardDrive className="w-3.5 h-3.5" />,
  "Delta Lake": <Database className="w-3.5 h-3.5" />,
  "Apache Spark (PySpark)": <Zap className="w-3.5 h-3.5" />,
  Kafka: <Workflow className="w-3.5 h-3.5" />,
  Airflow: <Workflow className="w-3.5 h-3.5" />,
  dbt: <Layers className="w-3.5 h-3.5" />,
  "Batch Pipelines": <Workflow className="w-3.5 h-3.5" />,
  "Streaming Pipelines": <Workflow className="w-3.5 h-3.5" />,
  "ETL/ELT": <Workflow className="w-3.5 h-3.5" />,
  "Feature Engineering": <Settings className="w-3.5 h-3.5" />,
  FastAPI: <Zap className="w-3.5 h-3.5" />,
  Docker: <Box className="w-3.5 h-3.5" />,
  Kubernetes: <Box className="w-3.5 h-3.5" />,
  Terraform: <Layers className="w-3.5 h-3.5" />,
  "CI/CD (GitHub Actions, Jenkins)": <GitBranch className="w-3.5 h-3.5" />,
  Prometheus: <BarChart3 className="w-3.5 h-3.5" />,
  Grafana: <BarChart3 className="w-3.5 h-3.5" />,
  "Logging & Monitoring": <BarChart3 className="w-3.5 h-3.5" />,
  Profiling: <Settings className="w-3.5 h-3.5" />,
  "Load Testing": <Zap className="w-3.5 h-3.5" />,
  Git: <GitBranch className="w-3.5 h-3.5" />,
  Postman: <Globe className="w-3.5 h-3.5" />,
  Jira: <FileText className="w-3.5 h-3.5" />,
};

// Core/primary skills get emphasized sizing
const coreSkills = new Set([
  "Python", "Go", "PyTorch", "Kubernetes", "Docker",
  "TensorFlow", "PostgreSQL", "Apache Spark (PySpark)",
  "Kafka", "Redis", "FastAPI", "LLM Serving",
]);

// Staggered spring-pop chip
const SkillChip = ({ skill, index }: { skill: string; index: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isCore = coreSkills.has(skill);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      return;
    }
    el.style.opacity = "0";
    el.style.transform = "scale(0.7) translateY(8px)";
    el.style.transition = `opacity 0.4s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.04}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.04}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "scale(1) translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <span
      ref={ref}
      className={`
        group/chip inline-flex items-center gap-2 font-mono
        border border-border/30 rounded-lg cursor-default
        transition-all duration-300
        hover:border-primary/50 hover:shadow-[0_0_12px_-3px_hsl(var(--primary)/0.3)]
        hover:bg-primary/[0.04]
        ${isCore ? "px-4 py-2.5 text-sm text-foreground" : "px-3 py-2 text-xs text-muted-foreground"}
      `}
    >
      <span className="text-muted-foreground group-hover/chip:text-primary transition-colors duration-300">
        {iconMap[skill] ?? <Code className="w-3.5 h-3.5" />}
      </span>
      {skill}
    </span>
  );
};

const SkillsSection = () => {
  const categories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-5 h-5" />,
      skills: [
        "PyTorch", "TensorFlow", "Transformers", "Hugging Face",
        "scikit-learn", "XGBoost", "CUDA", "GPU Inference",
        "Quantization", "Batching", "Model Evaluation",
        "LLM Serving", "RAG", "Vector Search (FAISS, Pinecone)", "vLLM",
        "LangChain", "LangGraph", "LlamaIndex", "Prompt Engineering",
        "AI Agents", "Guardrails",
      ],
      span: "md:col-span-2",
    },
    {
      title: "Systems & Backend",
      icon: <Server className="w-5 h-5" />,
      skills: [
        "Go", "Python", "C++", "Java", "Scala", "SQL", "Bash",
        "REST APIs", "gRPC", "Microservices", "Distributed Systems",
        "High-Concurrency Services", "API Design", "Idempotency",
        "Caching", "Rate Limiting", "WebSockets", "Linux",
      ],
      span: "md:col-span-1",
    },
    {
      title: "Data Engineering",
      icon: <Workflow className="w-5 h-5" />,
      skills: [
        "Apache Spark (PySpark)", "Kafka", "Airflow", "dbt",
        "Batch Pipelines", "Streaming Pipelines", "ETL/ELT",
        "Feature Engineering", "FastAPI",
        "PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB",
        "Snowflake", "Data Modeling", "Data Warehousing", "Delta Lake",
      ],
      span: "md:col-span-1",
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5" />,
      skills: [
        "Docker", "Kubernetes", "Terraform",
        "CI/CD (GitHub Actions, Jenkins)", "Prometheus", "Grafana",
        "Logging & Monitoring", "Profiling", "Load Testing",
        "Git", "Postman", "Jira",
      ],
      span: "md:col-span-1",
    },
    {
      title: "Collaboration & Leadership",
      icon: <Users className="w-5 h-5" />,
      skills: [
        "Stakeholder Communication", "Technical Writing",
        "Cross-Functional Collaboration", "Project Ownership", "Mentorship",
      ],
      span: "md:col-span-1",
    },
  ];

  // Build a running index counter for global stagger
  let globalIndex = 0;

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold tracking-tight mb-10 text-foreground">
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const startIndex = globalIndex;
          globalIndex += cat.skills.length;

          return (
            <div
              key={cat.title}
              className={`glass-card rounded-2xl p-6 ${cat.span} transition-all duration-300 hover:border-primary/20`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-primary">{cat.icon}</span>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider font-mono">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <SkillChip key={skill} skill={skill} index={startIndex + i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
