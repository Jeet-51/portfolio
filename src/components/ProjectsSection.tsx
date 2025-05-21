
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

interface Project {
  title: string;
  description: string[];
  tech: string[];
  imageUrl?: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "ClaimGuard: Intelligent Healthcare Service Pattern Analysis",
      description: [
        "Designed a scalable ML pipeline to forecast Medicare billing behaviors using structured claim features and Bio_ClinicalBERT embeddings extracted from 9.7M HCPCS descriptions, achieving R² = 0.95.",
        "Integrated MLflow for experiment tracking and SHAP for model interpretability on 200K+ claims, enabling semantic service classification, drift detection, and retraining workflows with Delta Lake's versioned storage."
      ],
      tech: ["Delta Lake", "MLflow", "SHAP", "XGBoost", "PySpark", "Hugging Face Transformers"],
      imageUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "FinanceFlow: Cloud-Enabled Analytics for Fraud Detection",
      description: [
        "Developed a real-time ETL pipeline using PySpark and AWS services, boosting fraud detection accuracy by 40% and enabling fast, transaction-level anomaly identification for ML-based risk models.",
        "Deployed interactive QuickSight dashboards delivering 40% faster insights into revenue trends, customer behavior, and fraud indicators, guiding strategic financial decisions."
      ],
      tech: ["AWS", "S3", "SageMaker", "Redshift", "QuickSight", "PySpark", "Machine Learning"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "HRA Portal Usage Analytics and Dashboard Development",
      description: [
        "Analyzed 192K+ user interactions with Apache Spark and scikit-learn for feature extraction and forecasting, uncovering performance bottlenecks and engagement patterns.",
        "Built a Power BI dashboard to visualize bounce rates, retention, and visit flows across 2.5K+ page views, transforming raw usage data into actionable insights for portal optimization."
      ],
      tech: ["Apache Spark", "Power BI", "scikit-learn", "User Behavior Analytics"],
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "DevPath Insight: ML-Driven Career Analytics on Stack Overflow Data",
      description: [
        "Constructed a scalable data pipeline using FastAPI and PostgreSQL to process 90K+ developer survey responses from Stack Overflow.",
        "Predicted career trajectories and identified skill gaps using LightGBM and vector similarity models, powering interactive visualizations and personalized analytics via Plotly."
      ],
      tech: ["FastAPI", "PostgreSQL", "LightGBM", "Plotly"],
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Learnera: Course Recommendation System for Academic Success",
      description: [
        "Built a course recommendation engine using TF-IDF vectorization and content-based filtering, achieving 90% accuracy in matching users with relevant academic content.",
        "Enhanced ranking algorithms by analyzing user interaction data, and deployed a user-friendly web interface, resulting in a 30% increase in engagement and 25% uplift in course conversions."
      ],
      tech: ["NLP", "TF-IDF", "Content-Based Filtering", "Web Development"],
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Code className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden h-full flex flex-col">
            {project.imageUrl && (
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                {project.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
              {project.tech.map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
