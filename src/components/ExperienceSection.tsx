import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  descriptions: string[];
  technologies?: string[];
}

const ExperienceItem = ({ title, company, location, period, descriptions, technologies }: ExperienceItemProps) => (
  <div className="relative mb-8 pl-8 md:pl-12 group">
    {/* Timeline dot */}
    <div className="absolute left-0 top-2 h-4 w-4">
      <div className="h-4 w-4 rounded-full bg-[#50BFC3] group-hover:animate-pulse"></div>
      <div className="absolute -inset-1 rounded-full bg-[#50BFC3]/30 animate-pulse group-hover:animate-none"></div>
    </div>
    
    {/* Timeline line */}
    <div className="absolute left-2 top-6 bottom-[-32px] w-[1px] bg-gradient-to-b from-[#50BFC3] to-[#50BFC3]/20"></div>
    
    <Card className="border-none rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-[#1D3752]/80 backdrop-blur-sm hover:bg-[#214D72]/80 border border-[#2C7695]/50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2C7695] to-[#50BFC3] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <CardTitle className="text-xl text-white group-hover:text-[#50BFC3] transition-colors">{title}</CardTitle>
            <CardDescription className="text-base text-slate-300">{company} | {location}</CardDescription>
          </div>
          <span className="text-sm text-[#50BFC3]/80 mt-2 md:mt-0 px-3 py-1 rounded-full bg-[#2C7695]/20 border border-[#2C7695]/30 whitespace-nowrap">{period}</span>
        </div>
      </CardHeader>
      
      <CardContent className="pt-2 pb-4">
        <div className="text-slate-300">
          {descriptions.map((desc, index) => (
            <p key={index} className="text-sm md:text-base leading-relaxed mb-3">{desc}</p>
          ))}
        </div>
        
        {technologies && technologies.length > 0 && (
          <div className="mt-5 pt-3 border-t border-[#2C7695]/50">
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-[#214D72]/80 border-[#2C7695] text-[#50BFC3] hover:bg-[#214D72]/90 transition-colors">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "Project 990 Inc. (IU O'Neill School of Public & Environmental Affairs)",
      location: "Remote",
      period: "Jan 2025 - Present",
      descriptions: [
        "Built a multi-model pipeline on IU's HPC clusters using Mistral-7B for mission statement extraction and Gemma as a 'judge' model for automated quality validation, implementing JSON-based prompt engineering and Cross-Encoder scoring to achieve 98% accurate confidence-tier classification across 175K+ records.",
        "Developed and deployed a ranking model using PCA for dimensionality reduction and XGBoost (XGBRanker), achieving an NDCG score of 0.95 and streamlining stakeholder ranking with an automated scoring pipeline.",
        "Deployed an unsupervised RoBERTa-based NLP pipeline for gender classification on 350K+ nonprofit records, leveraging CUDA-enabled GPUs and HPC clusters for large-scale embedding generation, distributed training, and optimized inference to enhance model precision and accelerate data labeling automation."
      ],
      technologies: ["Mistral-7B", "Gemma", "XGBoost", "RoBERTa", "PCA", "CUDA", "HPC", "Prompt Engineering"]
    },
    {
      title: "Data Analytics Engineer",
      company: "Project 990 Inc. (IU O'Neill School of Public & Environmental Affairs)",
      location: "Remote",
      period: "May 2024 - Dec 2024",
      descriptions: [
        "Fixed organization and ZIP-level mismatches across 175K+ grantee financial records by engineering an Alteryx workflow with Python and Microsoft Excel, improving data accuracy by 65% and uncovering anomalies that enhanced fund reconciliation.",
        "Automated an ETL pipeline processing 1.5M IRS 990 grant records, reducing database update time by 71% (7 hours → 2 hours) through DataFrame pre-conversion and batch optimization, enabling faster UAT environment updates for downstream analytics.",
        "Developed a KPI-driven Tableau dashboard analyzing 1.5M+ philanthropic and financial records ingested through automated REST APIs with schema validation and incremental sync, helping stakeholders identify underfunded U.S. regions and optimize capital budget allocation.",
        "Designed graph-based data models in Neo4j and applied Louvain and Leiden algorithms to uncover 78 hidden funding networks, strengthening the project's knowledge graph infrastructure and community detection capabilities."
      ],
      technologies: ["Alteryx", "Python", "ETL", "Tableau", "REST APIs", "Neo4j", "Louvain", "Leiden"]
    },
    {
      title: "Associate Instructor",
      company: "Luddy School of Informatics, Computing, and Engineering",
      location: "Bloomington, Indiana",
      period: "Aug 2023 - May 2024",
      descriptions: [
        "As an Associate Instructor at Indiana University, I led instruction on data visualization using Python libraries like Matplotlib, Seaborn, and Plotly, emphasizing hands-on learning through live coding. I supported student projects involving D3.js and interactive dashboards, helping them build intuitive visuals and effectively communicate data-driven insights."
      ],
      technologies: ["Python", "Matplotlib", "Seaborn", "Plotly", "D3.js", "Data Visualization"]
    },
    {
      title: "Data Scientist Intern",
      company: "Hyphenova Network",
      location: "Los Angeles, California",
      period: "May 2023 - December 2023",
      descriptions: [
        "Hyphenova Network is a creator-tech platform leveraging AI to power intelligent experiences. As a Data Scientist, I built a RAG chatbot using FAISS/ChromaDB for contextual LLM responses, developed a BERT-based music classifier with 80% accuracy, optimized embedding pipelines for faster retrieval, and designed a serverless metadata system using DynamoDB and S3 to support 500K+ creator-brand interactions."
      ],
      technologies: ["RAG", "FAISS", "ChromaDB", "BERT", "LLMs", "DynamoDB", "S3", "Serverless"]
    },
    {
      title: "Data Analyst",
      company: "Indiana University School of Public Health",
      location: "Bloomington, Indiana",
      period: "May 2023 - September 2023",
      descriptions: [
        "At the Indiana University School of Public Health, I analyzed 50K+ DHS responses using Stata, reducing data inconsistencies by 30% and strengthening health policy insights. I implemented A/B testing to refine preprocessing for health indicators, boosting model accuracy by 15%, and built an ArcGIS dashboard that cut analysis time by 35% for regional health teams."
      ],
      technologies: ["Stata", "Statistical Analysis", "A/B Testing", "ArcGIS", "Dashboards"]
    },
    {
      title: "AI Research Engineer",
      company: "Dwarkadas J. Sanghvi College of Engineering",
      location: "Mumbai, India",
      period: "June 2022 - May 2023",
      descriptions: [
        "Built ML pipelines on Snowflake for fetal health prediction, applying SMOTE with Bayesian optimization to fix class imbalance.",
        "Achieved a 94% F1-score by validating resampling strategies through rigorous A/B testing on large clinical datasets.",
        "Streamlined slow EHR experimentation by integrating Azure Data Lake Analytics to eliminate processing bottlenecks.",
        "Increased cross-validation throughput by 40% by shifting experimentation to Azure Machine Learning pipelines."
      ],
      technologies: ["Snowflake", "SMOTE", "Bayesian Optimization", "Azure Data Lake", "Azure ML", "A/B Testing"]
    },
    {
      title: "Machine Learning Engineer",
      company: "Gustovalley Technovations",
      location: "Remote",
      period: "Feb 2022 - May 2022",
      descriptions: [
        "At Gustovalley Technovations, I built an LSTM-based deep learning model on 430K+ time series records for early AQI prediction, achieving an R² of 0.91. I improved precision by 25% using Bayesian tuning and feature selection, and deployed the ML pipeline on Azure ML with AKS for real-time inference, accelerating environmental insights by 30%."
      ],
      technologies: ["LSTM", "Deep Learning", "Time Series", "Azure ML", "AKS", "Bayesian Optimization"]
    },
    {
      title: "Software Engineer Intern",
      company: "Technocolabs Software",
      location: "Remote",
      period: "Jun 2021 - Aug 2021",
      descriptions: [
        "At Technocolabs Software, I implemented a PostgreSQL-based cost tracking system that reduced project expenses by 15%. I optimized MongoDB queries to improve app monitoring and boosted page load performance by 40%. Additionally, I developed RESTful APIs using Python and Flask to enable real-time analytics and speed up financial reporting by 40%."
      ],
      technologies: ["PostgreSQL", "MongoDB", "Python", "Flask", "RESTful APIs"]
    }
  ];

  return (
    <div className="py-6">
      <div className="flex items-center gap-2 mb-12">
        <div className="p-2 rounded-full bg-[#2C7695]/30 border border-[#2C7695]/30">
          <Briefcase className="w-6 h-6 text-[#50BFC3]" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-[#50BFC3] text-transparent bg-clip-text">Work Experience</h2>
      </div>
      
      <div className="space-y-12 relative pl-2">
        {experiences.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
