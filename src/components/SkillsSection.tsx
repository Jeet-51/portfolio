import {
  Brain, Server, Database, Cloud,
  Code, Cpu, Zap, GitBranch, Terminal,
  BarChart3, Layers, Shield, Globe, Settings,
  Box, HardDrive, Workflow, MessageSquare, FileText,
} from "lucide-react";
import { useRef, useEffect } from "react";

const iconMap: Record<string, React.ReactNode> = {
  Python: <Terminal className="w-3.5 h-3.5 flex-shrink-0" />,
  Go: <Code className="w-3.5 h-3.5 flex-shrink-0" />,
  "C++": <Code className="w-3.5 h-3.5 flex-shrink-0" />,
  Java: <Code className="w-3.5 h-3.5 flex-shrink-0" />,
  Scala: <Code className="w-3.5 h-3.5 flex-shrink-0" />,
  SQL: <Database className="w-3.5 h-3.5 flex-shrink-0" />,
  Bash: <Terminal className="w-3.5 h-3.5 flex-shrink-0" />,
  PyTorch: <Brain className="w-3.5 h-3.5 flex-shrink-0" />,
  TensorFlow: <Brain className="w-3.5 h-3.5 flex-shrink-0" />,
  Transformers: <Cpu className="w-3.5 h-3.5 flex-shrink-0" />,
  "Hugging Face": <Brain className="w-3.5 h-3.5 flex-shrink-0" />,
  "scikit-learn": <BarChart3 className="w-3.5 h-3.5 flex-shrink-0" />,
  XGBoost: <Zap className="w-3.5 h-3.5 flex-shrink-0" />,
  CUDA: <Cpu className="w-3.5 h-3.5 flex-shrink-0" />,
  "GPU Inference": <Cpu className="w-3.5 h-3.5 flex-shrink-0" />,
  Quantization: <Settings className="w-3.5 h-3.5 flex-shrink-0" />,
  Batching: <Layers className="w-3.5 h-3.5 flex-shrink-0" />,
  "Model Eval": <BarChart3 className="w-3.5 h-3.5 flex-shrink-0" />,
  "LLM Serving": <Server className="w-3.5 h-3.5 flex-shrink-0" />,
  RAG: <Brain className="w-3.5 h-3.5 flex-shrink-0" />,
  "Vector Search": <Database className="w-3.5 h-3.5 flex-shrink-0" />,
  vLLM: <Zap className="w-3.5 h-3.5 flex-shrink-0" />,
  LangChain: <Workflow className="w-3.5 h-3.5 flex-shrink-0" />,
  LangGraph: <Workflow className="w-3.5 h-3.5 flex-shrink-0" />,
  LlamaIndex: <Database className="w-3.5 h-3.5 flex-shrink-0" />,
  "Prompt Eng.": <MessageSquare className="w-3.5 h-3.5 flex-shrink-0" />,
  "AI Agents": <Brain className="w-3.5 h-3.5 flex-shrink-0" />,
  Guardrails: <Shield className="w-3.5 h-3.5 flex-shrink-0" />,
  "REST APIs": <Globe className="w-3.5 h-3.5 flex-shrink-0" />,
  gRPC: <Zap className="w-3.5 h-3.5 flex-shrink-0" />,
  Microservices: <Box className="w-3.5 h-3.5 flex-shrink-0" />,
  "Distributed Sys": <Server className="w-3.5 h-3.5 flex-shrink-0" />,
  "High Concurrency": <Zap className="w-3.5 h-3.5 flex-shrink-0" />,
  "API Design": <Globe className="w-3.5 h-3.5 flex-shrink-0" />,
  Idempotency: <Shield className="w-3.5 h-3.5 flex-shrink-0" />,
  Caching: <HardDrive className="w-3.5 h-3.5 flex-shrink-0" />,
  "Rate Limiting": <Shield className="w-3.5 h-3.5 flex-shrink-0" />,
  WebSockets: <Globe className="w-3.5 h-3.5 flex-shrink-0" />,
  Linux: <Terminal className="w-3.5 h-3.5 flex-shrink-0" />,
  PostgreSQL: <Database className="w-3.5 h-3.5 flex-shrink-0" />,
  MySQL: <Database className="w-3.5 h-3.5 flex-shrink-0" />,
  MongoDB: <Database className="w-3.5 h-3.5 flex-shrink-0" />,
  Redis: <Database className="w-3.5 h-3.5 flex-shrink-0" />,
  DynamoDB: <Database className="w-3.5 h-3.5 flex-shrink-0" />,
  Snowflake: <Database className="w-3.5 h-3.5 flex-shrink-0" />,
  "Data Modeling": <Layers className="w-3.5 h-3.5 flex-shrink-0" />,
  "Data Warehouse": <HardDrive className="w-3.5 h-3.5 flex-shrink-0" />,
  "Delta Lake": <Database className="w-3.5 h-3.5 flex-shrink-0" />,
  PySpark: <Zap className="w-3.5 h-3.5 flex-shrink-0" />,
  Kafka: <Workflow className="w-3.5 h-3.5 flex-shrink-0" />,
  Airflow: <Workflow className="w-3.5 h-3.5 flex-shrink-0" />,
  dbt: <Layers className="w-3.5 h-3.5 flex-shrink-0" />,
  "ETL/ELT": <Workflow className="w-3.5 h-3.5 flex-shrink-0" />,
  "Feature Eng.": <Settings className="w-3.5 h-3.5 flex-shrink-0" />,
  FastAPI: <Zap className="w-3.5 h-3.5 flex-shrink-0" />,
  Docker: <Box className="w-3.5 h-3.5 flex-shrink-0" />,
  Kubernetes: <Box className="w-3.5 h-3.5 flex-shrink-0" />,
  Terraform: <Layers className="w-3.5 h-3.5 flex-shrink-0" />,
  "CI/CD": <GitBranch className="w-3.5 h-3.5 flex-shrink-0" />,
  Prometheus: <BarChart3 className="w-3.5 h-3.5 flex-shrink-0" />,
  Grafana: <BarChart3 className="w-3.5 h-3.5 flex-shrink-0" />,
  Monitoring: <BarChart3 className="w-3.5 h-3.5 flex-shrink-0" />,
  Profiling: <Settings className="w-3.5 h-3.5 flex-shrink-0" />,
  "Load Testing": <Zap className="w-3.5 h-3.5 flex-shrink-0" />,
  Git: <GitBranch className="w-3.5 h-3.5 flex-shrink-0" />,
  Postman: <Globe className="w-3.5 h-3.5 flex-shrink-0" />,
  Jira: <FileText className="w-3.5 h-3.5 flex-shrink-0" />,
};

const SkillChip = ({ skill, index }: { skill: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      return;
    }
    el.style.opacity = "0";
    el.style.transform = "scale(0.85) translateY(6px)";
    el.style.transition = `opacity 0.35s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.05}s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.05}s`;

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
    <div
      ref={ref}
      className="h-11 flex items-center justify-center gap-2 rounded-lg border border-border/10 bg-white/[0.04] px-3 font-mono text-xs text-muted-foreground whitespace-nowrap transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:bg-primary/[0.06] hover:text-foreground hover:shadow-[0_0_16px_-4px_hsl(var(--primary)/0.25)] cursor-default"
    >
      <span className="text-muted-foreground/70">
        {iconMap[skill] ?? <Code className="w-3.5 h-3.5 flex-shrink-0" />}
      </span>
      <span>{skill}</span>
    </div>
  );
};

const categories = [
  {
    title: "AI & Core Intelligence",
    icon: <Brain className="w-5 h-5" />,
    skills: [
      "PyTorch", "TensorFlow", "Transformers", "Hugging Face",
      "scikit-learn", "XGBoost", "CUDA", "GPU Inference",
      "Quantization", "Model Eval", "LLM Serving", "RAG",
      "Vector Search", "vLLM", "LangChain", "LangGraph",
      "LlamaIndex", "Prompt Eng.", "AI Agents", "Guardrails",
      "Batching",
    ],
  },
  {
    title: "Systems & Backend",
    icon: <Server className="w-5 h-5" />,
    skills: [
      "Go", "Python", "C++", "Java",
      "Scala", "SQL", "Bash", "REST APIs",
      "gRPC", "Microservices", "Distributed Sys", "High Concurrency",
      "API Design", "Idempotency", "Caching", "Rate Limiting",
      "WebSockets", "Linux", "FastAPI",
    ],
  },
  {
    title: "Data & Infrastructure",
    icon: <Database className="w-5 h-5" />,
    skills: [
      "PostgreSQL", "MySQL", "MongoDB", "Redis",
      "DynamoDB", "Snowflake", "Delta Lake", "Data Modeling",
      "Data Warehouse", "PySpark", "Kafka", "Airflow",
      "dbt", "ETL/ELT", "Feature Eng.",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      "Docker", "Kubernetes", "Terraform", "CI/CD",
      "Prometheus", "Grafana", "Monitoring", "Load Testing",
      "Profiling", "Git", "Postman", "Jira",
    ],
  },
];

const SkillsSection = () => {
  let globalIdx = 0;

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold tracking-tight mb-10 text-foreground">
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {categories.map((cat) => {
          const startIdx = globalIdx;
          globalIdx += cat.skills.length;

          return (
            <div
              key={cat.title}
              className="glass-card rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:scale-[1.01] hover:border-primary/20"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-primary">{cat.icon}</span>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider font-mono">
                  {cat.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 flex-1 content-start">
                {cat.skills.map((skill, i) => (
                  <SkillChip key={skill} skill={skill} index={startIdx + i} />
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
