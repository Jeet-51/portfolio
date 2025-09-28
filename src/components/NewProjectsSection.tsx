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
    <section className="py-24 px-4 bg-gradient-to-b from-background to-neutral-50 dark:to-neutral-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Code2 className="w-4 h-4" />
            Featured Work
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
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm
                ${hoveredIndex === index ? 'scale-[1.02] shadow-2xl' : ''}`}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
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
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Key Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-card-foreground flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs px-2 py-1 bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-4 border-t border-border/50">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full group/btn"
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
          <Button size="lg" asChild>
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