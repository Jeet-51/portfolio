
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Circle } from "lucide-react";

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
      <div className="h-4 w-4 rounded-full bg-blue-500 group-hover:animate-pulse"></div>
      <div className="absolute -inset-1 rounded-full bg-blue-400/30 animate-pulse group-hover:animate-none"></div>
    </div>
    
    {/* Timeline line */}
    <div className="absolute left-2 top-6 bottom-[-32px] w-[1px] bg-gradient-to-b from-blue-500 to-blue-500/20"></div>
    
    <Card className="border-none rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800/80 border border-slate-700/50 group-hover:border-blue-500/30 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">{title}</CardTitle>
            <CardDescription className="text-base text-slate-300">{company} | {location}</CardDescription>
          </div>
          <span className="text-sm text-cyan-300/80 mt-2 md:mt-0 px-3 py-1 rounded-full bg-cyan-900/20 border border-cyan-800/30 whitespace-nowrap">{period}</span>
        </div>
      </CardHeader>
      
      <CardContent className="pt-2 pb-4">
        <ul className="space-y-3 list-disc list-outside text-slate-300 pl-5">
          {descriptions.map((desc, index) => (
            <li key={index} className="text-sm md:text-base leading-relaxed">{desc}</li>
          ))}
        </ul>
        
        {technologies && technologies.length > 0 && (
          <div className="mt-5 pt-3 border-t border-slate-700/50">
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-slate-800/80 border-slate-700 text-cyan-300 hover:bg-slate-700/80 transition-colors">
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
      title: "Data Scientist",
      company: "Project 990 (IU Smart Charity)",
      location: "Bloomington, Indiana",
      period: "March 2024 - Present",
      descriptions: [
        "Project 990 is a data-driven initiative under IU Smart Charity focused on nonprofit analytics and campaign optimization. I contributed by deploying a RoBERTa model with Alteryx to classify gender across 350K+ records, boosting labeling efficiency by 40%. I also engineered LLM-based pipelines using Mistral-7B to categorize 175K+ mission statements, streamlined ETL workflows by transitioning from Pandas to SQL for 1.5M+ records, and applied graph algorithms in Neo4j to uncover 78 hidden funding networks."
      ],
      technologies: ["RoBERTa", "Alteryx", "Mistral-7B", "Prompt Engineering", "SQL", "Neo4j", "ETL"]
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
        "At Dwarkadas J. Sanghvi College of Engineering, I applied SMOTE and ADASYN to rebalance 800+ imbalanced healthcare records, achieving 94% accuracy with Random Forest and ensemble models. This work strengthened diagnostic decision support and was published in the Scopus-indexed journal Design Engineering, contributing to research in medical AI."
      ],
      technologies: ["SMOTE", "ADASYN", "Random Forest", "Ensemble Learning", "Research"]
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
        <div className="p-2 rounded-full bg-blue-900/30 border border-blue-700/30">
          <Briefcase className="w-6 h-6 text-blue-400" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-300 text-transparent bg-clip-text">Work Experience</h2>
      </div>
      
      <div className="space-y-0 relative pl-2">
        {experiences.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
