
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
  <Card className="mb-6">
    <CardHeader>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-base font-medium">{company} | {location}</CardDescription>
        </div>
        <span className="text-sm text-muted-foreground mt-2 md:mt-0">{period}</span>
      </div>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
        {descriptions.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      
      {technologies && technologies.length > 0 && (
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="bg-blue-50 dark:bg-blue-900/20">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </CardContent>
  </Card>
);

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Scientist",
      company: "Project 990 (IU Smart Charity)",
      location: "Bloomington, Indiana",
      period: "March 2024 - Present",
      descriptions: [
        "Deployed RoBERTa model with Alteryx preprocessing on 350K+ nonprofit records to classify gender, boosting labeling efficiency by 40% and accelerating campaign targeting insights.",
        "Engineered batch pipelines using Mistral-7B LLM and prompt chaining to classify 175K+ mission statements into multi-tier nonprofit categories, streamlining stakeholder decision-making and automating manual workflows.",
        "Boosted ETL efficiency by 35% by migrating transformations from Pandas to SQL, improving query performance, and enabling faster updates to a normalized schema for 1.5M+ philanthropic records.",
        "Applied Louvain and Leiden algorithms in Neo4j to discover 78 latent nonprofit funding networks, enriching the knowledge graph and guiding executive funding strategies."
      ],
      technologies: ["RoBERTa", "Alteryx", "Mistral-7B", "Prompt Engineering", "SQL", "Neo4j", "ETL"]
    },
    {
      title: "Associate Instructor",
      company: "Luddy School of Informatics, Computing, and Engineering",
      location: "Bloomington, Indiana",
      period: "Aug 2023 - May 2024",
      descriptions: [
        "Facilitated instruction on data visualization concepts using Python libraries such as Matplotlib, Seaborn, and Plotly, reinforcing practical skill development through live coding sessions.",
        "Supported student projects involving D3.js and interactive dashboards, strengthening their ability to design intuitive, user-driven data visuals.",
        "Empowered students to transform analytical findings into compelling visual stories, sharpening their data communication and storytelling capabilities."
      ],
      technologies: ["Python", "Matplotlib", "Seaborn", "Plotly", "D3.js", "Data Visualization"]
    },
    {
      title: "Data Scientist Intern",
      company: "Hyphenova Network",
      location: "Los Angeles, California",
      period: "May 2023 - December 2023",
      descriptions: [
        "Built a Retrieval-Augmented Generation (RAG) chatbot using FAISS/ChromaDB for vector search, enabling context-aware LLM responses across large-scale document repositories.",
        "Developed a BERT-based music classification model with 80% accuracy by integrating multimodal audio-text embeddings, powering personalized content tagging and recommendations.",
        "Designed optimized indexing and chunking pipelines for document embeddings, enhancing retrieval speed and precision in AI-powered search applications.",
        "Engineered a scalable, serverless metadata infrastructure using DynamoDB and S3 for 500K+ creator-brand interactions, improving query performance for AI workflows."
      ],
      technologies: ["RAG", "FAISS", "ChromaDB", "BERT", "LLMs", "DynamoDB", "S3", "Serverless"]
    },
    {
      title: "Data Analyst",
      company: "Indiana University School of Public Health",
      location: "Bloomington, Indiana",
      period: "May 2023 - September 2023",
      descriptions: [
        "Performed regression-based statistical analysis on 50,000+ DHS responses in Stata, reducing inconsistencies by 30% and enhancing the credibility of health policy insights.",
        "Executed A/B testing frameworks to refine preprocessing strategies for health indicators, improving data model accuracy by 15% and supporting evidence-based regional interventions.",
        "Designed an interactive ArcGIS dashboard for multi-region health teams, reducing analysis time by 35% and accelerating timely responses for vulnerable populations."
      ],
      technologies: ["Stata", "Statistical Analysis", "A/B Testing", "ArcGIS", "Dashboards"]
    },
    {
      title: "AI Research Engineer",
      company: "Dwarkadas J. Sanghvi College of Engineering",
      location: "Mumbai, India",
      period: "June 2022 - May 2023",
      descriptions: [
        "Engineered advanced resampling techniques using SMOTE and ADASYN for 800+ imbalanced healthcare records, improving class representation for downstream modeling.",
        "Attained 94% predictive accuracy on rebalanced datasets using Random Forest and ensemble learning, strengthening diagnostic decision support.",
        "Authored and published peer-reviewed research in Design Engineering (Scopus-indexed), contributing to academic discourse on imbalanced classification in medical AI."
      ],
      technologies: ["SMOTE", "ADASYN", "Random Forest", "Ensemble Learning", "Research"]
    },
    {
      title: "Machine Learning Engineer",
      company: "Gustovalley Technovations",
      location: "Remote",
      period: "Feb 2022 - May 2022",
      descriptions: [
        "Constructed an LSTM-based deep learning model on 430K+ time series entries for early AQI prediction, achieving an R² score of 0.91.",
        "Enhanced model precision by 25% through Bayesian hyperparameter tuning and targeted feature selection, lowering RMSE from 0.24 to 0.18.",
        "Integrated ML pipelines into Azure ML with AKS deployment, enabling real-time inference and accelerating delivery of environmental insights by 30%."
      ],
      technologies: ["LSTM", "Deep Learning", "Time Series", "Azure ML", "AKS", "Bayesian Optimization"]
    },
    {
      title: "Software Engineer Intern",
      company: "Technocolabs Software",
      location: "Remote",
      period: "Jun 2021 - Aug 2021",
      descriptions: [
        "Implemented a cost tracking system using PostgreSQL, driving a 15% reduction in project expenses through improved financial oversight.",
        "Optimized MongoDB queries for application monitoring, resulting in a 40% boost in page load performance and user experience.",
        "Delivered RESTful APIs with Python and Flask to support real-time analytics, enhancing data accessibility and accelerating financial reporting by 40%."
      ],
      technologies: ["PostgreSQL", "MongoDB", "Python", "Flask", "RESTful APIs"]
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
      </div>
      
      <div className="space-y-1">
        {experiences.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
