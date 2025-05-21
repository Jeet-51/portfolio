
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, Database, CloudCog, Workflow, Brain, 
  LineChart, Wrench, MessageSquareText 
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
      category: "Languages & Databases",
      skills: [
        "Python", "R", "Scala", "C++", "SAS", "CUDA", 
        "SQL (MySQL, Oracle, PostgreSQL)", "NoSQL (MongoDB, CosmosDB)", 
        "Snowflake", "Spark (PySpark)", "Hadoop", "Hive", "XML"
      ],
      colorClass: "from-blue-500 to-indigo-600",
      icon: <Code className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
    },
    {
      category: "Libraries & Frameworks",
      skills: [
        "PyTorch", "TensorFlow", "Keras", "Transformers", "XGBoost", 
        "Scikit-Learn", "SpaCy", "NLTK", "Gensim", "LangChain", 
        "LangGraph", "Langsmith", "Alteryx", "Seaborn"
      ],
      colorClass: "from-indigo-500 to-purple-600",
      icon: <Code className="w-8 h-8 text-indigo-500" strokeWidth={1.5} />
    },
    {
      category: "Cloud Platforms",
      skills: [
        "AWS (EC2, S3, Athena, Glue, Lambda, EventBridge, Redshift, Bedrock)", 
        "Azure (Data Factory, Synapse, CosmosDB, Data Explorer, Logic Apps, Storage)", 
        "GCP (Cloud Storage, BigQuery)"
      ],
      colorClass: "from-purple-500 to-pink-600",
      icon: <CloudCog className="w-8 h-8 text-purple-500" strokeWidth={1.5} />
    },
    {
      category: "Data Engineering & Pipelines",
      skills: [
        "ETL Development", "Data Warehousing", "API Integration", 
        "Delta Lake", "Data Lake Architecture", "dbt", "Apache Kafka", 
        "Airflow", "FastAPI"
      ],
      colorClass: "from-pink-500 to-red-600",
      icon: <Database className="w-8 h-8 text-pink-500" strokeWidth={1.5} />
    },
    {
      category: "GenAI & LLM Systems",
      skills: [
        "Prompt Engineering", "LLMs (GPT, Claude, Mistral)", 
        "Retrieval-Augmented Generation (RAG)", "LlamaIndex", 
        "Vector Databases (FAISS, Pinecone)"
      ],
      colorClass: "from-red-500 to-orange-600",
      icon: <Brain className="w-8 h-8 text-red-500" strokeWidth={1.5} />
    },
    {
      category: "Machine Learning & Analytics",
      skills: [
        "Regression", "Classification", "Clustering (K-Means, DBSCAN)", 
        "Time Series (ARIMA, Exponential Smoothing)", "CNNs", "RNNs", "LSTMs", 
        "A/B Testing", "Hypothesis Testing", "EDA"
      ],
      colorClass: "from-orange-500 to-yellow-600",
      icon: <LineChart className="w-8 h-8 text-orange-500" strokeWidth={1.5} />
    },
    {
      category: "Tools & DevOps",
      skills: [
        "Git", "Docker", "Kubernetes", "MLflow", "Tableau", 
        "Power BI", "Excel (Advanced)", "Looker", "Power Automate", 
        "Power Apps", "CI/CD (GitHub Actions, Jenkins)", "Jira"
      ],
      colorClass: "from-teal-500 to-cyan-600",
      icon: <Wrench className="w-8 h-8 text-teal-500" strokeWidth={1.5} />
    },
    {
      category: "Soft Skills",
      skills: [
        "Data-Driven Strategic Planning", "Analytical Market Research", 
        "Stakeholder Engagement", "Data Storytelling"
      ],
      colorClass: "from-cyan-500 to-blue-600",
      icon: <MessageSquareText className="w-8 h-8 text-cyan-500" strokeWidth={1.5} />
    }
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
          <Card key={idx} className="overflow-hidden border-none rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800/80 border border-slate-700/50">
            <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${category.colorClass}`}></div>
            <CardHeader className="relative pb-2 flex flex-row items-center">
              <div className="p-3 mr-4 rounded-xl bg-slate-800/80 border border-slate-700/50 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {category.icon}
              </div>
              <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors">{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIdx) => {
                  // Determine badge color based on category
                  const badgeColorClass = idx % 8 === 0 ? "bg-blue-900/20 border-blue-700/50 text-blue-300 hover:bg-blue-800/30" :
                                         idx % 8 === 1 ? "bg-indigo-900/20 border-indigo-700/50 text-indigo-300 hover:bg-indigo-800/30" :
                                         idx % 8 === 2 ? "bg-purple-900/20 border-purple-700/50 text-purple-300 hover:bg-purple-800/30" :
                                         idx % 8 === 3 ? "bg-pink-900/20 border-pink-700/50 text-pink-300 hover:bg-pink-800/30" :
                                         idx % 8 === 4 ? "bg-red-900/20 border-red-700/50 text-red-300 hover:bg-red-800/30" :
                                         idx % 8 === 5 ? "bg-orange-900/20 border-orange-700/50 text-orange-300 hover:bg-orange-800/30" :
                                         idx % 8 === 6 ? "bg-teal-900/20 border-teal-700/50 text-teal-300 hover:bg-teal-800/30" :
                                                       "bg-cyan-900/20 border-cyan-700/50 text-cyan-300 hover:bg-cyan-800/30";
                  
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
