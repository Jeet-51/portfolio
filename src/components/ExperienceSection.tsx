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
      title: "AI Software Engineer",
      company: "Project 990 Inc. (IU O'Neill School of Public & Environmental Affairs)",
      location: "Remote",
      period: "May 2024 - Present",
      descriptions: [
        "I build and operate production AI systems that power nonprofit and public-sector data analysis at scale. My work spans large-scale model serving and GPU-based inference pipelines, where I own the backend infrastructure supporting over 175K nonprofit records. I've developed LLM-powered systems including Text-to-SQL interfaces and NLP pipelines that transform unstructured data into actionable insights. This includes multi-model architectures using Mistral-7B for mission extraction and Gemma as a quality validation layer, along with RoBERTa-based classification pipelines running on HPC clusters. The systems I've built enable automated decision-making for stakeholders, streamlining grant analysis, funding network discovery, and organizational ranking through reliable, scalable ML solutions."
      ],
      technologies: ["Mistral-7B", "Gemma", "XGBoost", "RoBERTa", "CUDA", "HPC", "Neo4j", "Text-to-SQL", "Prompt Engineering"]
    },
    {
      title: "Associate Instructor",
      company: "Luddy School of Informatics, Computing, and Engineering",
      location: "Bloomington, Indiana",
      period: "Aug 2024 - May 2025",
      descriptions: [
        "As an Associate Instructor at Indiana University, I led instruction on data visualization using Python libraries like Matplotlib, Seaborn, and Plotly, emphasizing hands-on learning through live coding. I supported student projects involving D3.js and interactive dashboards, helping them build intuitive visuals and effectively communicate data-driven insights."
      ],
      technologies: ["Python", "Matplotlib", "Seaborn", "Plotly", "D3.js", "Data Visualization"]
    },
    {
      title: "AI Engineer Intern",
      company: "Hyphenova Network",
      location: "Los Angeles, California",
      period: "May 2024 - December 2024",
      descriptions: [
        "At Hyphenova Network, I worked on applied AI systems and model serving pipelines that powered a creator-tech platform at scale. I focused on inference optimization, MLOps practices, and reliability improvements to ensure consistent performance under production loads. I built backend services designed for high-concurrency workflows, supporting real-time AI-driven features across the platform. My contributions included shipping AI agents and ML-powered features into production, from RAG-based chatbots to BERT classifiers for content analysis. These systems supported over 50K campaigns and facilitated more than 500K creator-brand interactions, directly impacting platform engagement and automation capabilities."
      ],
      technologies: ["RAG", "FAISS", "ChromaDB", "BERT", "LLMs", "DynamoDB", "S3", "MLOps", "Serverless"]
    },
    {
      title: "Data Analyst",
      company: "Indiana University School of Public Health",
      location: "Bloomington, Indiana",
      period: "May 2024 - September 2024",
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
        "I led end-to-end ML experimentation on clinical and EHR datasets, focusing on fetal health prediction using structured medical data. My work involved building distributed data processing and experimentation workflows on cloud infrastructure, enabling faster iteration and reproducibility. I implemented rigorous model evaluation and validation pipelines, applying techniques like SMOTE with Bayesian optimization to address class imbalance and achieve a 94% F1-score. By migrating experimentation to Azure Machine Learning pipelines and integrating Azure Data Lake Analytics, I eliminated processing bottlenecks and increased cross-validation throughput by 40%. This role emphasized research rigor, reproducibility, and building scalable ML systems that could handle real-world clinical data challenges."
      ],
      technologies: ["Snowflake", "SMOTE", "Bayesian Optimization", "Azure Data Lake", "Azure ML", "A/B Testing"]
    },
    {
      title: "Machine Learning Engineer Intern",
      company: "Gustovalley Technovations",
      location: "Remote",
      period: "Feb 2022 - May 2022",
      descriptions: [
        "Hands-on machine learning experimentation in a fast-paced environment. I focused on data preprocessing, modeling, and evaluation for time series forecasting, gaining early exposure to production-oriented ML workflows including model deployment and real-time inference pipelines."
      ],
      technologies: ["LSTM", "Deep Learning", "Time Series", "Azure ML", "AKS", "Bayesian Optimization"]
    },
    {
      title: "Software Engineer Intern",
      company: "Technocolabs Software",
      location: "Remote",
      period: "Jun 2021 - Aug 2021",
      descriptions: [
        "I worked on backend engineering for data-driven web applications, focusing on building reliable systems that powered real-time analytics. My responsibilities included developing RESTful APIs using Python and Flask, integrating with PostgreSQL and MongoDB databases to support cost tracking and application monitoring features. I optimized database queries and system performance, reducing page load times by 40% and improving overall application responsiveness. I also contributed to real-time dashboards and analytics systems that enabled faster financial reporting and helped reduce project expenses by 15% through better visibility into operational costs."
      ],
      technologies: ["PostgreSQL", "MongoDB", "Python", "Flask", "RESTful APIs", "Real-time Analytics"]
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
