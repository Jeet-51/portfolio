import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Github, ExternalLink, TrendingUp, Users, Zap } from "lucide-react";

interface Project {
  title: string;
  description: string;
  outcomes: string[];
  tech: string[];
  imageUrl: string;
  githubUrl: string;
  category: string;
}

const NewProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      title: "Backend – Customer Subscription & Gifting Platform",
      description: "A production-grade backend system supporting subscription purchases, gifting, renewals, and cancellations, with a strong focus on correctness, idempotency, and low-latency performance.",
      outcomes: [
        "Designed idempotent APIs to prevent duplicate charges and ensure transactional safety",
        "Achieved sub-125ms P95 latency under load with high request concurrency",
        "Maintained less than 1% error rates across critical payment workflows"
      ],
      tech: ["Go", "PostgreSQL", "Redis", "REST APIs", "Docker"],
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=400",
      githubUrl: "https://github.com/Jeet-51",
      category: "Backend"
    },
    {
      title: "LLM Inference Service with Caching and Rate Limiting",
      description: "A production-grade GPU-backed LLM inference service designed for low-latency, high-concurrency workloads, with built-in caching, rate limiting, and observability to support reliable AI serving at scale.",
      outcomes: [
        "Reduced inference latency from ~850ms to ~180ms through quantization and optimized batching",
        "Supported 100+ concurrent requests with stable performance on GPU infrastructure",
        "Improved system reliability and visibility with real-time GPU and inference monitoring"
      ],
      tech: ["FastAPI", "Python", "vLLM", "Mistral-7B (AWQ)", "Redis", "Docker", "Prometheus", "CUDA"],
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800&h=400",
      githubUrl: "https://github.com/Jeet-51",
      category: "AI Infrastructure"
    },
    {
      title: "PitchPal – AI Agent for Startup Pitch Evaluation",
      description: "AI-powered startup evaluation platform using LangChain ReAct agents and OpenAI for automated pitch analysis.",
      outcomes: [
        "Processed 100+ pitch evaluations with 5-dimension scoring",
        "Accelerated due diligence processes by 60%",
        "Enabled YC startups and VC firms automation"
      ],
      tech: ["LangChain", "OpenAI GPT-4", "Pydantic", "Streamlit", "FastAPI", "Plotly"],
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=400",
      githubUrl: "https://github.com/Jeet-51/PitchPal-AI-Agent-for-Startup-Pitch-Evaluation",
      category: "GenAI"
    },
    {
      title: "EPA Greenhouse Gas Emissions Dashboard",
      description: "Production-style analytics stack with dbt models on Snowflake transforming EPA GHG data into actionable insights.",
      outcomes: [
        "Reduced Tableau latency through star-schema optimization",
        "Cut analysis time by 40% with advanced techniques",
        "Enabled self-serve state and sector-level analysis"
      ],
      tech: ["Tableau", "dbt", "Snowflake", "SQL", "Python"],
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=800&h=400",
      githubUrl: "https://github.com/Jeet-51/EPA-Greenhouse-Gas-GHG-Emissions-Dashboard",
      category: "Analytics"
    },
    {
      title: "ClaimGuard: Healthcare Pattern Analysis",
      description: "Scalable ML pipeline forecasting Medicare billing behaviors using Bio_ClinicalBERT embeddings.",
      outcomes: [
        "Achieved R² = 0.95 prediction accuracy",
        "Processed 200K+ claims with semantic classification",
        "Implemented MLflow tracking and SHAP interpretability"
      ],
      tech: ["Delta Lake", "MLflow", "SHAP", "XGBoost", "PySpark", "Transformers"],
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=400",
      githubUrl: "https://github.com/Jeet-51/ClaimGuard-Intelligent-Healthcare-Service-Pattern-Analysis",
      category: "ML Engineering"
    },
    {
      title: "FinanceFlow: Cloud Analytics Platform",
      description: "Real-time ETL pipeline using PySpark and AWS services for enhanced fraud detection.",
      outcomes: [
        "Boosted fraud detection accuracy by 40%",
        "Delivered 40% faster insights via QuickSight",
        "Enabled real-time transaction anomaly identification"
      ],
      tech: ["AWS", "S3", "SageMaker", "Redshift", "QuickSight", "PySpark"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400",
      githubUrl: "https://github.com/Jeet-51/FinanceFlow-Cloud-Enabled-Analytics-for-Fraud-Detection",
      category: "Data Engineering"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass-card badge-glow">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-primary">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Projects & Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing impactful AI and data science projects that solve real-world problems 
            with measurable business outcomes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group h-full overflow-hidden border-0 glass-card transition-all duration-500
                ${hoveredIndex === index ? 'scale-[1.02] shadow-[0_0_40px_hsl(175_85%_50%/0.15)]' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground shadow-[0_0_10px_hsl(175_85%_50%/0.5)]">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Outcomes */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-card-foreground flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary cyan-glow" />
                    Key Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 shadow-[0_0_6px_hsl(175_85%_50%/0.8)]"></div>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-card-foreground flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary cyan-glow" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs px-2 py-1 bg-muted/30 border-border/50 text-muted-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-4 border-t border-border/30">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full group/btn border-border/50 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
                  asChild
                >
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    View on GitHub
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating on similar projects?
          </p>
          <Button size="lg" className="btn-premium text-primary-foreground" asChild>
            <a href="mailto:jeetp5118@gmail.com" className="inline-flex items-center gap-2">
              <Users className="w-5 h-5" />
              Let's Work Together
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewProjectsSection;
