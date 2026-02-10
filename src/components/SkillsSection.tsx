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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
        {skillCategories.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="text-sm text-muted-foreground px-2.5 py-1 rounded-md bg-secondary border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
