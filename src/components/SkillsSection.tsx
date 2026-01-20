import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  CloudCog,
  Workflow,
  Brain,
  Wrench,
  MessageSquareText,
  Server,
  Cpu,
} from "lucide-react";

interface SkillCategory {
  category: string;
  skills: string[];
  icon: React.ReactNode;
  gridClass: string;
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Programming Languages",
      skills: ["Python", "Go", "C++", "Java", "Scala", "SQL", "Bash"],
      icon: <Code className="w-6 h-6" />,
      gridClass: "md:col-span-1 md:row-span-1",
    },
    {
      category: "Backend & Systems Engineering",
      skills: [
        "REST APIs",
        "gRPC",
        "Microservices",
        "Distributed Systems",
        "High-Concurrency Services",
        "API Design",
        "Idempotency",
        "Caching",
        "Rate Limiting",
        "WebSockets",
        "Linux",
      ],
      icon: <Server className="w-6 h-6" />,
      gridClass: "md:col-span-2 md:row-span-1",
    },
    {
      category: "AI & ML Engineering",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Transformers",
        "Hugging Face",
        "scikit-learn",
        "XGBoost",
        "CUDA",
        "GPU Inference",
        "Quantization",
        "Batching",
        "Model Evaluation",
      ],
      icon: <Cpu className="w-6 h-6" />,
      gridClass: "md:col-span-1 md:row-span-2",
    },
    {
      category: "GenAI & LLM Systems",
      skills: [
        "LLM Serving",
        "RAG",
        "Vector Search (FAISS, Pinecone)",
        "vLLM",
        "LangChain",
        "LangGraph",
        "LlamaIndex",
        "Prompt Engineering",
        "AI Agents",
        "Guardrails",
      ],
      icon: <Brain className="w-6 h-6" />,
      gridClass: "md:col-span-1 md:row-span-2",
    },
    {
      category: "Data & Storage",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "DynamoDB",
        "Snowflake",
        "Data Modeling",
        "Data Warehousing",
        "Delta Lake",
      ],
      icon: <Database className="w-6 h-6" />,
      gridClass: "md:col-span-1 md:row-span-1",
    },
    {
      category: "Data Processing & Pipelines",
      skills: [
        "Apache Spark (PySpark)",
        "Kafka",
        "Airflow",
        "dbt",
        "Batch Pipelines",
        "Streaming Pipelines",
        "ETL/ELT",
        "Feature Engineering",
        "FastAPI",
      ],
      icon: <Workflow className="w-6 h-6" />,
      gridClass: "md:col-span-2 md:row-span-1",
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        "AWS (EKS, EC2, S3, Lambda, Glue, Athena, Redshift, Bedrock)",
        "Azure (Azure ML, Synapse, Data Factory, CosmosDB)",
        "GCP (BigQuery, Cloud Storage)",
        "Docker",
        "Kubernetes",
        "Terraform",
      ],
      icon: <CloudCog className="w-6 h-6" />,
      gridClass: "md:col-span-2 md:row-span-1",
    },
    {
      category: "DevOps & Observability",
      skills: [
        "CI/CD (GitHub Actions, Jenkins)",
        "Prometheus",
        "Grafana",
        "Logging & Monitoring",
        "Profiling",
        "Load Testing",
        "Git",
        "Postman",
        "Jira",
      ],
      icon: <Wrench className="w-6 h-6" />,
      gridClass: "md:col-span-1 md:row-span-1",
    },
    {
      category: "Collaboration",
      skills: [
        "Stakeholder Communication",
        "Technical Writing",
        "Cross-Functional Collaboration",
        "Project Ownership",
        "Mentorship",
      ],
      icon: <MessageSquareText className="w-6 h-6" />,
      gridClass: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold tracking-tight mb-10 flex items-center gap-3">
        <div className="p-2.5 rounded-xl glass-card">
          <Code className="w-6 h-6 text-primary cyan-glow" />
        </div>
        <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
          Skills & Expertise
        </span>
      </h2>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className={`glass-card group p-6 transition-all duration-500 interactive-hover ${category.gridClass}`}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(175_85%_50%/0.3)] transition-all duration-300">
                {category.icon}
              </div>
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {category.category}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <Badge
                  key={skillIdx}
                  variant="outline"
                  className="px-3 py-1.5 text-xs font-medium rounded-lg 
                    bg-muted/30 border-border/50 text-muted-foreground
                    hover:bg-primary/10 hover:border-primary/30 hover:text-primary
                    transition-all duration-300 hover:shadow-[0_0_10px_hsl(175_85%_50%/0.2)]"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
