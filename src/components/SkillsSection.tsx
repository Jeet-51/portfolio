import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  CloudCog,
  Workflow,
  Brain,
  LineChart,
  Wrench,
  MessageSquareText,
  Server,
  Cpu,
} from "lucide-react";

interface SkillCategory {
  category: string;
  skills: string[];
  colorClass: string;
  icon: React.ReactNode;
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Programming Languages",
      skills: ["Python", "Go", "C++", "Java", "Scala", "SQL", "Bash"],
      colorClass: "from-blue-500 to-indigo-600",
      icon: <Code className="w-8 h-8 text-blue-500" strokeWidth={1.5} />,
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
      colorClass: "from-indigo-500 to-purple-600",
      icon: <Server className="w-8 h-8 text-indigo-500" strokeWidth={1.5} />,
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
      colorClass: "from-purple-500 to-pink-600",
      icon: <Cpu className="w-8 h-8 text-purple-500" strokeWidth={1.5} />,
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
      colorClass: "from-pink-500 to-red-600",
      icon: <Brain className="w-8 h-8 text-pink-500" strokeWidth={1.5} />,
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
      colorClass: "from-red-500 to-orange-600",
      icon: <Database className="w-8 h-8 text-red-500" strokeWidth={1.5} />,
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
      colorClass: "from-orange-500 to-yellow-600",
      icon: <Workflow className="w-8 h-8 text-orange-500" strokeWidth={1.5} />,
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
      colorClass: "from-teal-500 to-cyan-600",
      icon: <CloudCog className="w-8 h-8 text-teal-500" strokeWidth={1.5} />,
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
      colorClass: "from-cyan-500 to-blue-600",
      icon: <Wrench className="w-8 h-8 text-cyan-500" strokeWidth={1.5} />,
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
      colorClass: "from-blue-500 to-indigo-600",
      icon: (
        <MessageSquareText className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
      ),
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold tracking-tight mb-8 bg-gradient-to-r from-white to-slate-300 text-transparent bg-clip-text flex items-center gap-3">
        <div className="p-2 rounded-full bg-indigo-900/30 border border-indigo-700/30">
          <Code className="w-6 h-6 text-indigo-400" />
        </div>
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <Card
            key={idx}
            className="overflow-hidden border-none rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800/80 border border-slate-700/50"
          >
            <div
              className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${category.colorClass}`}
            ></div>
            <CardHeader className="relative pb-2 flex flex-row items-center">
              <div className="p-3 mr-4 rounded-xl bg-slate-800/80 border border-slate-700/50 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {category.icon}
              </div>
              <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors">
                {category.category}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIdx) => {
                  const badgeColorClass =
                    idx % 9 === 0
                      ? "bg-blue-900/20 border-blue-700/50 text-blue-300 hover:bg-blue-800/30"
                      : idx % 9 === 1
                      ? "bg-indigo-900/20 border-indigo-700/50 text-indigo-300 hover:bg-indigo-800/30"
                      : idx % 9 === 2
                      ? "bg-purple-900/20 border-purple-700/50 text-purple-300 hover:bg-purple-800/30"
                      : idx % 9 === 3
                      ? "bg-pink-900/20 border-pink-700/50 text-pink-300 hover:bg-pink-800/30"
                      : idx % 9 === 4
                      ? "bg-red-900/20 border-red-700/50 text-red-300 hover:bg-red-800/30"
                      : idx % 9 === 5
                      ? "bg-orange-900/20 border-orange-700/50 text-orange-300 hover:bg-orange-800/30"
                      : idx % 9 === 6
                      ? "bg-teal-900/20 border-teal-700/50 text-teal-300 hover:bg-teal-800/30"
                      : idx % 9 === 7
                      ? "bg-cyan-900/20 border-cyan-700/50 text-cyan-300 hover:bg-cyan-800/30"
                      : "bg-slate-900/30 border-slate-700/50 text-slate-300 hover:bg-slate-800/40";

                  return (
                    <Badge
                      key={skillIdx}
                      variant="outline"
                      className={`px-3 py-1.5 text-sm rounded-lg ${badgeColorClass} transition-all duration-300 hover:scale-105 hover:shadow-md`}
                    >
                      {skill}
                    </Badge>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
