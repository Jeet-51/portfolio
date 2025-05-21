
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
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      githubUrl: "https://github.com/Jeet-51/ClaimGuard-Intelligent-Healthcare-Service-Pattern-Analysis"
    },
    {
      title: "FinanceFlow: Cloud-Enabled Analytics for Fraud Detection",
      description: [
        "Developed a real-time ETL pipeline using PySpark and AWS services, boosting fraud detection accuracy by 40% and enabling fast, transaction-level anomaly identification for ML-based risk models.",
        "Deployed interactive QuickSight dashboards delivering 40% faster insights into revenue trends, customer behavior, and fraud indicators, guiding strategic financial decisions."
      ],
      tech: ["AWS", "S3", "SageMaker", "Redshift", "QuickSight", "PySpark", "Machine Learning"],
      imageUrl: "https://images.unsplash.com/photo-1494607239400-ff147086c950?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3",
      githubUrl: "https://github.com/Jeet-51/FinanceFlow-Cloud-Enabled-Analytics-for-Fraud-Detection"
    },
    {
      title: "HRA Portal Usage Analytics and Dashboard Development",
      description: [
        "Analyzed 192K+ user interactions with Apache Spark and scikit-learn for feature extraction and forecasting, uncovering performance bottlenecks and engagement patterns.",
        "Built a Power BI dashboard to visualize bounce rates, retention, and visit flows across 2.5K+ page views, transforming raw usage data into actionable insights for portal optimization."
      ],
      tech: ["Apache Spark", "Power BI", "scikit-learn", "User Behavior Analytics"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      githubUrl: "https://github.iu.edu/patejeet/HRA-Portal-Usage-Analytics-and-Dashboard-Development"
    },
    {
      title: "DevPath Insight: ML-Driven Career Analytics on Stack Overflow Data",
      description: [
        "Constructed a scalable data pipeline using FastAPI and PostgreSQL to process 90K+ developer survey responses from Stack Overflow.",
        "Predicted career trajectories and identified skill gaps using LightGBM and vector similarity models, powering interactive visualizations and personalized analytics via Plotly."
      ],
      tech: ["FastAPI", "PostgreSQL", "LightGBM", "Plotly"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
      githubUrl: "https://github.iu.edu/patejeet/DevPath-Insight-ML-Driven-Career-Analytics-on-Stack-Overflow-Data"
    },
    {
      title: "Learnera: Course Recommendation System for Academic Success",
      description: [
        "Built a course recommendation engine using TF-IDF vectorization and content-based filtering, achieving 90% accuracy in matching users with relevant academic content.",
        "Enhanced ranking algorithms by analyzing user interaction data, and deployed a user-friendly web interface, resulting in a 30% increase in engagement and 25% uplift in course conversions."
      ],
      tech: ["NLP", "TF-IDF", "Content-Based Filtering", "Web Development"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
      githubUrl: "https://github.com/Jeet-51/Learnera-A-Course-Recommendation-System"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="flex items-center gap-2 mb-10 animate-slide-up">
        <Code className="w-8 h-8 text-[#50BFC3]" />
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-[#50BFC3] text-transparent bg-clip-text">
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
              className={`overflow-hidden h-full flex flex-col border-none shadow-xl transition-all duration-700 bg-gradient-to-b from-[#1D3752]/90 to-[#214D72]/90 backdrop-blur-sm project-card
                ${hoveredIndex === index ? 'transform scale-[1.02]' : ''}`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute -inset-[10px] bg-gradient-to-r from-[#2C7695]/20 via-[#50BFC3]/20 to-[#F7C232]/20 opacity-0 blur-xl transition-opacity duration-1000 ${hoveredIndex === index ? 'opacity-70' : ''}`}></div>
              </div>
              
              {project.imageUrl && (
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D3752] via-transparent to-transparent z-10"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className={`w-full h-full object-cover object-center transition-all duration-1000 ${hoveredIndex === index ? 'scale-110 filter brightness-110' : 'scale-100'}`}
                  />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2C7695] to-[#50BFC3]"></div>
                </div>
              )}
              
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#50BFC3] to-[#2C7695]"></div>
              
              <CardHeader className="relative">
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="space-y-3 text-gray-300">
                  {project.description.map((desc, idx) => (
                    <p key={idx} className={`transition-all duration-500 delay-${idx * 100}`}>{desc}</p>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col items-start gap-4 border-t border-[#2C7695]/50 pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className={`text-xs bg-[#214D72]/70 text-[#50BFC3] border border-[#2C7695]/50 transition-all duration-300 delay-${idx * 50} hover:bg-[#214D72]`}
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
                    className={`flex items-center gap-1 text-[#50BFC3] hover:text-[#F7C232] transition-all duration-300 text-sm font-medium`}
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
