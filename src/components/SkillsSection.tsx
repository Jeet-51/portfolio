import { useRef, useEffect } from "react";

// Staggered reveal for skill cards
const RevealCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
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
      { threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return <div ref={ref}>{children}</div>;
};

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Go", "C++", "Java", "Scala", "SQL", "Bash"],
    },
    {
      category: "Backend & Systems Engineering",
      skills: [
        "REST APIs", "gRPC", "Microservices", "Distributed Systems",
        "High-Concurrency Services", "API Design", "Idempotency",
        "Caching", "Rate Limiting", "WebSockets", "Linux",
      ],
    },
    {
      category: "AI & ML Engineering",
      skills: [
        "PyTorch", "TensorFlow", "Transformers", "Hugging Face",
        "scikit-learn", "XGBoost", "CUDA", "GPU Inference",
        "Quantization", "Batching", "Model Evaluation",
      ],
    },
    {
      category: "GenAI & LLM Systems",
      skills: [
        "LLM Serving", "RAG", "Vector Search (FAISS, Pinecone)", "vLLM",
        "LangChain", "LangGraph", "LlamaIndex", "Prompt Engineering",
        "AI Agents", "Guardrails",
      ],
    },
    {
      category: "Data & Storage",
      skills: [
        "PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB",
        "Snowflake", "Data Modeling", "Data Warehousing", "Delta Lake",
      ],
    },
    {
      category: "Data Processing & Pipelines",
      skills: [
        "Apache Spark (PySpark)", "Kafka", "Airflow", "dbt",
        "Batch Pipelines", "Streaming Pipelines", "ETL/ELT",
        "Feature Engineering", "FastAPI",
      ],
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        "AWS (EKS, EC2, S3, Lambda, Glue, Athena, Redshift, Bedrock)",
        "Azure (Azure ML, Synapse, Data Factory, CosmosDB)",
        "GCP (BigQuery, Cloud Storage)",
        "Docker", "Kubernetes", "Terraform",
      ],
    },
    {
      category: "DevOps & Observability",
      skills: [
        "CI/CD (GitHub Actions, Jenkins)", "Prometheus", "Grafana",
        "Logging & Monitoring", "Profiling", "Load Testing",
        "Git", "Postman", "Jira",
      ],
    },
    {
      category: "Collaboration",
      skills: [
        "Stakeholder Communication", "Technical Writing",
        "Cross-Functional Collaboration", "Project Ownership", "Mentorship",
      ],
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold tracking-tight mb-10 text-foreground">
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <RevealCard key={idx} index={idx}>
            <div 
              className="glass-card rounded-xl p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group h-full"
            >
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="text-sm text-muted-foreground px-2.5 py-1 rounded-md bg-secondary/60 border border-border/40 hover:border-primary/30 hover:text-foreground transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </RevealCard>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
