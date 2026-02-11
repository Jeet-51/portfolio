interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  descriptions: string[];
  technologies?: string[];
}

const ExperienceItem = ({ title, company, location, period, descriptions, technologies }: ExperienceItemProps) => (
  <div className="relative pl-8 pb-10 last:pb-0 group">
    {/* Timeline line */}
    <div className="absolute left-[7px] top-3 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent group-last:hidden"></div>
    {/* Timeline dot */}
    <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-primary/50 bg-background group-hover:border-primary group-hover:shadow-[0_0_8px_hsl(215_80%_55%/0.3)] transition-all duration-300"></div>
    
    <div className="glass-card rounded-xl p-6 hover:border-primary/20 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-primary/80 font-medium">{company}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
        <span className="text-sm text-muted-foreground whitespace-nowrap font-mono">{period}</span>
      </div>
      
      <div className="text-muted-foreground">
        {descriptions.map((desc, index) => (
          <p key={index} className="text-sm leading-relaxed mb-2">{desc}</p>
        ))}
      </div>
      
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-0.5 bg-primary/10 border border-primary/20 rounded text-primary/80"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
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
    <div className="py-8">
      <h2 className="text-2xl font-bold tracking-tight mb-10 text-foreground">
        Work Experience
      </h2>
      
      <div>
        {experiences.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
