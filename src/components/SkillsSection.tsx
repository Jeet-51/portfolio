
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  category: string;
  skills: string[];
  colorClass: string;
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Languages & Databases",
      skills: [
        "Python", "R", "Scala", "C++", "SAS", "CUDA", 
        "SQL (MySQL, Oracle, PostgreSQL)", "NoSQL (MongoDB, CosmosDB)", 
        "Snowflake", "Spark (PySpark)", "Hadoop", "Hive", "XML"
      ],
      colorClass: "from-blue-500 to-indigo-600"
    },
    {
      category: "Libraries & Frameworks",
      skills: [
        "PyTorch", "TensorFlow", "Keras", "Transformers", "XGBoost", 
        "Scikit-Learn", "SpaCy", "NLTK", "Gensim", "LangChain", 
        "LangGraph", "Langsmith", "Alteryx", "Seaborn"
      ],
      colorClass: "from-indigo-500 to-purple-600"
    },
    {
      category: "Cloud Platforms",
      skills: [
        "AWS (EC2, S3, Athena, Glue, Lambda, EventBridge, Redshift, Bedrock)", 
        "Azure (Data Factory, Synapse, CosmosDB, Data Explorer, Logic Apps, Storage)", 
        "GCP (Cloud Storage, BigQuery)"
      ],
      colorClass: "from-purple-500 to-pink-600"
    },
    {
      category: "Data Engineering & Pipelines",
      skills: [
        "ETL Development", "Data Warehousing", "API Integration", 
        "Delta Lake", "Data Lake Architecture", "dbt", "Apache Kafka", 
        "Airflow", "FastAPI"
      ],
      colorClass: "from-pink-500 to-red-600"
    },
    {
      category: "GenAI & LLM Systems",
      skills: [
        "Prompt Engineering", "LLMs (GPT, Claude, Mistral)", 
        "Retrieval-Augmented Generation (RAG)", "LlamaIndex", 
        "Vector Databases (FAISS, Pinecone)"
      ],
      colorClass: "from-red-500 to-orange-600"
    },
    {
      category: "Machine Learning & Analytics",
      skills: [
        "Regression", "Classification", "Clustering (K-Means, DBSCAN)", 
        "Time Series (ARIMA, Exponential Smoothing)", "CNNs", "RNNs", "LSTMs", 
        "A/B Testing", "Hypothesis Testing", "EDA"
      ],
      colorClass: "from-orange-500 to-yellow-600"
    },
    {
      category: "Tools & DevOps",
      skills: [
        "Git", "Docker", "Kubernetes", "MLflow", "Tableau", 
        "Power BI", "Excel (Advanced)", "Looker", "Power Automate", 
        "Power Apps", "CI/CD (GitHub Actions, Jenkins)", "Jira"
      ],
      colorClass: "from-teal-500 to-cyan-600"
    },
    {
      category: "Soft Skills",
      skills: [
        "Data-Driven Strategic Planning", "Analytical Market Research", 
        "Stakeholder Engagement", "Data Storytelling"
      ],
      colorClass: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <Card key={idx} className="overflow-hidden border-none shadow-lg bg-gradient-to-r from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900/80 hover:shadow-xl transition-all duration-300">
            <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${category.colorClass}`}></div>
            <CardHeader className="relative pb-2">
              <CardTitle className="text-lg">{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => {
                  // Determine badge color based on category
                  const badgeColorClass = idx % 8 === 0 ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700" :
                                         idx % 8 === 1 ? "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-700" :
                                         idx % 8 === 2 ? "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700" :
                                         idx % 8 === 3 ? "bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-700" :
                                         idx % 8 === 4 ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700" :
                                         idx % 8 === 5 ? "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700" :
                                         idx % 8 === 6 ? "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-700" :
                                                       "bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-700";
                  
                  return (
                    <Badge 
                      key={skillIdx} 
                      variant="secondary" 
                      className={`text-xs ${badgeColorClass}`}
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
