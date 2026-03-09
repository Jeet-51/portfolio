import {
  Brain, Server, Database, Cloud,
  Code, Cpu, Zap, GitBranch, Terminal,
  BarChart3, Layers, Shield, Globe, Settings,
  Box, HardDrive, Workflow, MessageSquare, FileText,
} from "lucide-react";
import { useRef, useEffect } from "react";

const iconMap: Record<string, React.ReactNode> = {
  Python: <Terminal className="w-4 h-4" />,
  Go: <Code className="w-4 h-4" />,
  "C++": <Code className="w-4 h-4" />,
  Java: <Code className="w-4 h-4" />,
  Scala: <Code className="w-4 h-4" />,
  SQL: <Database className="w-4 h-4" />,
  Bash: <Terminal className="w-4 h-4" />,
  PyTorch: <Brain className="w-4 h-4" />,
  TensorFlow: <Brain className="w-4 h-4" />,
  Transformers: <Cpu className="w-4 h-4" />,
  "Hugging Face": <Brain className="w-4 h-4" />,
  "scikit-learn": <BarChart3 className="w-4 h-4" />,
  XGBoost: <Zap className="w-4 h-4" />,
  CUDA: <Cpu className="w-4 h-4" />,
  "GPU Inference": <Cpu className="w-4 h-4" />,
  Quantization: <Settings className="w-4 h-4" />,
  Batching: <Layers className="w-4 h-4" />,
  "Model Eval": <BarChart3 className="w-4 h-4" />,
  "LLM Serving": <Server className="w-4 h-4" />,
  RAG: <Brain className="w-4 h-4" />,
  "Vector Search": <Database className="w-4 h-4" />,
  vLLM: <Zap className="w-4 h-4" />,
  LangChain: <Workflow className="w-4 h-4" />,
  LangGraph: <Workflow className="w-4 h-4" />,
  LlamaIndex: <Database className="w-4 h-4" />,
  "Prompt Eng.": <MessageSquare className="w-4 h-4" />,
  "AI Agents": <Brain className="w-4 h-4" />,
  Guardrails: <Shield className="w-4 h-4" />,
  "REST APIs": <Globe className="w-4 h-4" />,
  gRPC: <Zap className="w-4 h-4" />,
  Microservices: <Box className="w-4 h-4" />,
  "Distributed Sys": <Server className="w-4 h-4" />,
  "High Concurrency": <Zap className="w-4 h-4" />,
  "API Design": <Globe className="w-4 h-4" />,
  Idempotency: <Shield className="w-4 h-4" />,
  Caching: <HardDrive className="w-4 h-4" />,
  "Rate Limiting": <Shield className="w-4 h-4" />,
  WebSockets: <Globe className="w-4 h-4" />,
  Linux: <Terminal className="w-4 h-4" />,
  PostgreSQL: <Database className="w-4 h-4" />,
  MySQL: <Database className="w-4 h-4" />,
  MongoDB: <Database className="w-4 h-4" />,
  Redis: <Database className="w-4 h-4" />,
  DynamoDB: <Database className="w-4 h-4" />,
  Snowflake: <Database className="w-4 h-4" />,
  "Data Modeling": <Layers className="w-4 h-4" />,
  "Data Warehouse": <HardDrive className="w-4 h-4" />,
  "Delta Lake": <Database className="w-4 h-4" />,
  PySpark: <Zap className="w-4 h-4" />,
  Kafka: <Workflow className="w-4 h-4" />,
  Airflow: <Workflow className="w-4 h-4" />,
  dbt: <Layers className="w-4 h-4" />,
  "Batch Pipelines": <Workflow className="w-4 h-4" />,
  "Stream Pipelines": <Workflow className="w-4 h-4" />,
  "ETL/ELT": <Workflow className="w-4 h-4" />,
  "Feature Eng.": <Settings className="w-4 h-4" />,
  FastAPI: <Zap className="w-4 h-4" />,
  Docker: <Box className="w-4 h-4" />,
  Kubernetes: <Box className="w-4 h-4" />,
  Terraform: <Layers className="w-4 h-4" />,
  "CI/CD": <GitBranch className="w-4 h-4" />,
  Prometheus: <BarChart3 className="w-4 h-4" />,
  Grafana: <BarChart3 className="w-4 h-4" />,
  Monitoring: <BarChart3 className="w-4 h-4" />,
  Profiling: <Settings className="w-4 h-4" />,
  "Load Testing": <Zap className="w-4 h-4" />,
  Git: <GitBranch className="w-4 h-4" />,
  Postman: <Globe className="w-4 h-4" />,
  Jira: <FileText className="w-4 h-4" />,
};

const SkillCard = ({ skill, index }: { skill: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      return;
    }
    el.style.opacity = "0";
    el.style.transform = "scale(0.85)";
    el.style.transition = `opacity 0.35s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.03}s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.03}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "scale(1)";
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
      className="h-14 flex items-center justify-center gap-2 rounded-lg border border-border/10 bg-white/[0.04] font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/[0.06] hover:text-foreground hover:shadow-[0_0_16px_-4px_hsl(var(--primary)/0.25)] cursor-default"
    >
      <span className="text-muted-foreground/70">
        {iconMap[skill] ?? <Code className="w-4 h-4" />}
      </span>
      <span className="truncate">{skill}</span>
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
      "Quantization", "Batching", "Model Eval", "LLM Serving",
      "RAG", "Vector Search", "vLLM", "LangChain",
      "LangGraph", "LlamaIndex", "Prompt Eng.", "AI Agents",
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
      "WebSockets", "Linux", "FastAPI", "Guardrails",
    ],
  },
  {
    title: "Data & Infrastructure",
    icon: <Database className="w-5 h-5" />,
    skills: [
      "PostgreSQL", "MySQL", "MongoDB", "Redis",
      "DynamoDB", "Snowflake", "Delta Lake", "Data Modeling",
      "Data Warehouse", "PySpark", "Kafka", "Airflow",
      "dbt", "Batch Pipelines", "Stream Pipelines", "ETL/ELT",
      "Feature Eng.", "Profiling", "Postman", "Jira",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      "Docker", "Kubernetes", "Terraform", "CI/CD",
      "Prometheus", "Grafana", "Monitoring", "Load Testing",
      "Git", "Linux", "Caching", "WebSockets",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => {
          const startIdx = globalIdx;
          globalIdx += cat.skills.length;

          return (
            <div
              key={cat.title}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-primary/20"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-primary">{cat.icon}</span>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider font-mono">
                  {cat.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {cat.skills.map((skill, i) => (
                  <SkillCard key={skill} skill={skill} index={startIdx + i} />
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
