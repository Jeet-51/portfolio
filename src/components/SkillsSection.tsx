
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  category: string;
  skills: string[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Languages & Databases",
      skills: [
        "Python", "R", "Scala", "C++", "SAS", "CUDA", 
        "SQL (MySQL, Oracle, PostgreSQL)", "NoSQL (MongoDB, CosmosDB)", 
        "Snowflake", "Spark (PySpark)", "Hadoop", "Hive", "XML"
      ]
    },
    {
      category: "Libraries & Frameworks",
      skills: [
        "PyTorch", "TensorFlow", "Keras", "Transformers", "XGBoost", 
        "Scikit-Learn", "SpaCy", "NLTK", "Gensim", "LangChain", 
        "LangGraph", "Langsmith", "Alteryx", "Seaborn"
      ]
    },
    {
      category: "Cloud Platforms",
      skills: [
        "AWS (EC2, S3, Athena, Glue, Lambda, EventBridge, Redshift, Bedrock)", 
        "Azure (Data Factory, Synapse, CosmosDB, Data Explorer, Logic Apps, Storage)", 
        "GCP (Cloud Storage, BigQuery)"
      ]
    },
    {
      category: "Data Engineering & Pipelines",
      skills: [
        "ETL Development", "Data Warehousing", "API Integration", 
        "Delta Lake", "Data Lake Architecture", "dbt", "Apache Kafka", 
        "Airflow", "FastAPI"
      ]
    },
    {
      category: "GenAI & LLM Systems",
      skills: [
        "Prompt Engineering", "LLMs (GPT, Claude, Mistral)", 
        "Retrieval-Augmented Generation (RAG)", "LlamaIndex", 
        "Vector Databases (FAISS, Pinecone)"
      ]
    },
    {
      category: "Machine Learning & Analytics",
      skills: [
        "Regression", "Classification", "Clustering (K-Means, DBSCAN)", 
        "Time Series (ARIMA, Exponential Smoothing)", "CNNs", "RNNs", "LSTMs", 
        "A/B Testing", "Hypothesis Testing", "EDA"
      ]
    },
    {
      category: "Tools & DevOps",
      skills: [
        "Git", "Docker", "Kubernetes", "MLflow", "Tableau", 
        "Power BI", "Excel (Advanced)", "Looker", "Power Automate", 
        "Power Apps", "CI/CD (GitHub Actions, Jenkins)", "Jira"
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        "Data-Driven Strategic Planning", "Analytical Market Research", 
        "Stakeholder Engagement", "Data Storytelling"
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight mb-6">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <Card key={idx}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <Badge key={skillIdx} variant="secondary" className="bg-gray-100 dark:bg-gray-800 text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
