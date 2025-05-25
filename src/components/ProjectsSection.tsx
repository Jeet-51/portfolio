
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Github, ExternalLink, Sparkles } from "lucide-react";

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
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2030&ixlib=rb-4.0.3",
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
    <div className="section-container">
      <div className="text-center mb-16 animate-slideInUp">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-gradient-to-r from-violet-100 to-purple-100">
            <Code className="w-8 h-8 text-violet-600" />
          </div>
          <h2 className="text-4xl font-bold gradient-text">
            Featured Projects
          </h2>
          <Sparkles className="w-8 h-8 text-purple-500" />
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Showcasing innovative solutions that blend cutting-edge technology with real-world impact
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card 
              className={`project-card h-full flex flex-col glass-effect rounded-3xl border-0 shadow-xl overflow-hidden
                ${hoveredIndex === index ? 'scale-105' : ''}`}
            >
              {project.imageUrl && (
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className={`w-full h-full object-cover transition-all duration-700 ${hoveredIndex === index ? 'scale-110 brightness-110' : 'scale-100'}`}
                    loading="lazy"
                  />
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-500 to-purple-500"></div>
                </div>
              )}
              
              <CardHeader className="relative pb-4">
                <CardTitle className="text-xl font-bold text-gray-800 leading-tight">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow pb-6">
                <div className="space-y-4 text-gray-600">
                  {project.description.map((desc, idx) => (
                    <p key={idx} className="leading-relaxed">{desc}</p>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col items-start gap-6 border-t border-gray-100 pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className={`text-xs bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 border border-violet-200 hover:from-violet-100 hover:to-purple-100 transition-all duration-300 delay-${idx * 50} rounded-full px-3 py-1`}
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
                    className="flex items-center gap-2 text-violet-600 hover:text-purple-600 transition-all duration-300 font-medium group"
                  >
                    <Github size={18} className={`transition-transform duration-300 ${hoveredIndex === index ? 'rotate-12' : ''}`} /> 
                    <span>View on GitHub</span>
                    <ExternalLink size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
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
