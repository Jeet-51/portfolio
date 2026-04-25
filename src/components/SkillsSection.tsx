import {
  Brain, Server, Database, Cloud,
  Code, Cpu, Zap, GitBranch, Terminal,
  BarChart3, Layers, Shield, Globe, Settings,
  Box, HardDrive, Workflow, MessageSquare, FileText,
} from "lucide-react";

const iconFor: Record<string, React.ComponentType<{ className?: string }>> = {
  Python: Terminal, Go: Code, "C++": Code, Java: Code, Scala: Code, SQL: Database, Bash: Terminal,
  PyTorch: Brain, TensorFlow: Brain, Transformers: Cpu, "Hugging Face": Brain,
  "scikit-learn": BarChart3, XGBoost: Zap, CUDA: Cpu, "GPU Inference": Cpu,
  Quantization: Settings, Batching: Layers, "Model Eval": BarChart3, "LLM Serving": Server,
  RAG: Brain, "Vector Search": Database, vLLM: Zap, LangChain: Workflow, LangGraph: Workflow,
  LlamaIndex: Database, "Prompt Eng.": MessageSquare, "AI Agents": Brain, Guardrails: Shield,
  "REST APIs": Globe, gRPC: Zap, Microservices: Box, "Distributed Sys": Server,
  "High Concurrency": Zap, "API Design": Globe, Idempotency: Shield, Caching: HardDrive,
  "Rate Limiting": Shield, WebSockets: Globe, Linux: Terminal,
  PostgreSQL: Database, MySQL: Database, MongoDB: Database, Redis: Database,
  DynamoDB: Database, Snowflake: Database, "Data Modeling": Layers, "Data Warehouse": HardDrive,
  "Delta Lake": Database, PySpark: Zap, Kafka: Workflow, Airflow: Workflow, dbt: Layers,
  "ETL/ELT": Workflow, "Feature Eng.": Settings, FastAPI: Zap,
  Docker: Box, Kubernetes: Box, Terraform: Layers, "CI/CD": GitBranch,
  Prometheus: BarChart3, Grafana: BarChart3, Monitoring: BarChart3, Profiling: Settings,
  "Load Testing": Zap, Git: GitBranch, Postman: Globe, Jira: FileText,
};

const rowOne = [
  "PyTorch", "TensorFlow", "Transformers", "Hugging Face", "LangChain", "LangGraph", "vLLM",
  "RAG", "AI Agents", "Vector Search", "CUDA", "GPU Inference", "Quantization", "LLM Serving",
  "scikit-learn", "XGBoost", "Prompt Eng.", "Guardrails", "Model Eval", "LlamaIndex",
  "Python", "Go", "C++", "Java", "Scala", "SQL", "Bash", "FastAPI",
];

const rowTwo = [
  "REST APIs", "gRPC", "Microservices", "Distributed Sys", "High Concurrency", "API Design",
  "Idempotency", "Caching", "Rate Limiting", "WebSockets", "Linux",
  "PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB", "Snowflake", "Delta Lake",
  "Data Modeling", "Data Warehouse", "PySpark", "Kafka", "Airflow", "dbt", "ETL/ELT",
  "Docker", "Kubernetes", "Terraform", "CI/CD", "Prometheus", "Grafana",
  "Monitoring", "Profiling", "Load Testing", "Git", "Postman", "Jira",
];

const Chip = ({ skill }: { skill: string }) => {
  const Icon = iconFor[skill] ?? Code;
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-foreground/[0.03] backdrop-blur-sm font-mono text-sm text-muted-foreground whitespace-nowrap hover:border-primary/40 hover:text-foreground hover:bg-primary/[0.06] transition-colors duration-200">
      <Icon className="w-3.5 h-3.5 flex-shrink-0 text-muted-foreground/70" />
      <span>{skill}</span>
    </div>
  );
};

const MarqueeRow = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => {
  // Duplicate items for seamless loop
  return (
    <div className="marquee">
      <div className={`marquee__track ${reverse ? "marquee__track--reverse" : ""}`}>
        {items.map((s) => <Chip key={`a-${s}`} skill={s} />)}
      </div>
      <div className={`marquee__track ${reverse ? "marquee__track--reverse" : ""}`} aria-hidden="true">
        {items.map((s) => <Chip key={`b-${s}`} skill={s} />)}
      </div>
    </div>
  );
};

const categories = [
  { title: "AI & Core Intelligence", icon: Brain },
  { title: "Systems & Backend", icon: Server },
  { title: "Data & Infrastructure", icon: Database },
  { title: "Cloud & DevOps", icon: Cloud },
];

const SkillsSection = () => {
  return (
    <div className="py-2">
      <div className="space-y-4 mb-10">
        <p className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
          &gt;_ Toolkit
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight text-foreground">
          Skills &amp; <span className="gradient-text font-medium">Expertise</span>
        </h2>
      </div>

      {/* Category badges */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map(({ title, icon: Icon }) => (
          <div
            key={title}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-foreground/[0.03] text-sm text-muted-foreground"
          >
            <Icon className="w-4 h-4 text-primary" />
            <span className="font-mono uppercase tracking-wider text-xs">{title}</span>
          </div>
        ))}
      </div>

      {/* Two-row marquee */}
      <div className="space-y-4 -mx-6 md:-mx-12">
        <MarqueeRow items={rowOne} />
        <MarqueeRow items={rowTwo} reverse />
      </div>
    </div>
  );
};

export default SkillsSection;
