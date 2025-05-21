
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string[];
  tech: string[];
  imageUrl?: string;
  githubUrl?: string;
}

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      title: "ClaimGuard: Intelligent Healthcare Service Pattern Analysis",
      description: [
        "Designed a scalable ML pipeline to forecast Medicare billing behaviors using structured claim features and Bio_ClinicalBERT embeddings extracted from 9.7M HCPCS descriptions, achieving R² = 0.95.",
        "Integrated MLflow for experiment tracking and SHAP for model interpretability on 200K+ claims, enabling semantic service classification, drift detection, and retraining workflows with Delta Lake's versioned storage."
      ],
      tech: ["Delta Lake", "MLflow", "SHAP", "XGBoost", "PySpark", "Hugging Face Transformers"],
      imageUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3",
      githubUrl: "https://github.com/Jeet-51/ClaimGuard-Intelligent-Healthcare-Service-Pattern-Analysis"
    },
    {
      title: "FinanceFlow: Cloud-Enabled Analytics for Fraud Detection",
      description: [
        "Developed a real-time ETL pipeline using PySpark and AWS services, boosting fraud detection accuracy by 40% and enabling fast, transaction-level anomaly identification for ML-based risk models.",
        "Deployed interactive QuickSight dashboards delivering 40% faster insights into revenue trends, customer behavior, and fraud indicators, guiding strategic financial decisions."
      ],
      tech: ["AWS", "S3", "SageMaker", "Redshift", "QuickSight", "PySpark", "Machine Learning"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      githubUrl: "https://github.com/Jeet-51/FinanceFlow-Cloud-Enabled-Analytics-for-Fraud-Detection"
    },
    {
      title: "HRA Portal Usage Analytics and Dashboard Development",
      description: [
        "Analyzed 192K+ user interactions with Apache Spark and scikit-learn for feature extraction and forecasting, uncovering performance bottlenecks and engagement patterns.",
        "Built a Power BI dashboard to visualize bounce rates, retention, and visit flows across 2.5K+ page views, transforming raw usage data into actionable insights for portal optimization."
      ],
      tech: ["Apache Spark", "Power BI", "scikit-learn", "User Behavior Analytics"],
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      githubUrl: "https://github.iu.edu/patejeet/HRA-Portal-Usage-Analytics-and-Dashboard-Development"
    },
    {
      title: "DevPath Insight: ML-Driven Career Analytics on Stack Overflow Data",
      description: [
        "Constructed a scalable data pipeline using FastAPI and PostgreSQL to process 90K+ developer survey responses from Stack Overflow.",
        "Predicted career trajectories and identified skill gaps using LightGBM and vector similarity models, powering interactive visualizations and personalized analytics via Plotly."
      ],
      tech: ["FastAPI", "PostgreSQL", "LightGBM", "Plotly"],
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      githubUrl: "https://github.iu.edu/patejeet/DevPath-Insight-ML-Driven-Career-Analytics-on-Stack-Overflow-Data"
    },
    {
      title: "Learnera: Course Recommendation System for Academic Success",
      description: [
        "Built a course recommendation engine using TF-IDF vectorization and content-based filtering, achieving 90% accuracy in matching users with relevant academic content.",
        "Enhanced ranking algorithms by analyzing user interaction data, and deployed a user-friendly web interface, resulting in a 30% increase in engagement and 25% uplift in course conversions."
      ],
      tech: ["NLP", "TF-IDF", "Content-Based Filtering", "Web Development"],
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
      githubUrl: "https://github.com/Jeet-51/Learnera-A-Course-Recommendation-System"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="flex items-center gap-2 mb-10 animate-slide-up">
        <Code className="w-8 h-8 text-cyan-500" />
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card 
              className={`overflow-hidden h-full flex flex-col border-none shadow-xl transition-all duration-700 bg-gradient-to-b from-gray-800/70 to-gray-900/90 backdrop-blur-sm project-card
                ${hoveredIndex === index ? 'transform scale-[1.02]' : ''}`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute -inset-[10px] bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 opacity-0 blur-xl transition-opacity duration-1000 ${hoveredIndex === index ? 'opacity-70' : ''}`}></div>
              </div>
              
              {project.imageUrl && (
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className={`w-full h-full object-cover transition-all duration-1000 ${hoveredIndex === index ? 'scale-110 filter saturate-150' : 'scale-100 filter saturate-100'}`}
                  />
                </div>
              )}
              
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600"></div>
              
              <CardHeader className="relative">
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <ul className="space-y-2 list-disc list-inside text-gray-300">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className={`transition-all duration-500 delay-${idx * 100}`}>{desc}</li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="flex flex-col items-start gap-4 border-t border-gray-700/50 pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className={`text-xs bg-blue-900/30 text-blue-300 border border-blue-500/30 transition-all duration-300 delay-${idx * 50} hover:bg-blue-800/50`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-sm font-medium group-hover:animate-pulse-glow`}
                  >
                    <Github size={16} className={`transition-transform duration-500 ${hoveredIndex === index ? 'rotate-12' : ''}`} /> 
                    <span>View on GitHub</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
