import { useEffect, useRef, useState } from "react";

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

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.experience-item');
      let newActiveIndex = activeIndex;
      
      items.forEach((item, idx) => {
        const rect = item.getBoundingClientRect();
        // Highlight if the item is in the top/middle of the screen
        if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.2) {
          newActiveIndex = idx;
        }
      });
      
      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <div className="py-12 relative z-10" ref={containerRef}>
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
          <span className="text-primary font-mono text-xl">&gt;_</span> 
          System.Experience
        </h2>
      </div>
      
      <div className="relative border-l border-white/10 ml-3 md:ml-4 space-y-12 pb-12">
        {experiences.map((exp, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div 
              key={idx} 
              className={`experience-item relative pl-8 md:pl-12 transition-all duration-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.98]'}`}
            >
              {/* Glowing Dot */}
              <div className={`absolute -left-[5px] top-4 w-2.5 h-2.5 rounded-full transition-all duration-500 ${isActive ? 'bg-primary shadow-[0_0_15px_hsl(var(--primary))] scale-150' : 'bg-white/20'}`} />
              
              <div className={`glass-card rounded-xl p-6 md:p-8 transition-all duration-500 ${isActive ? 'border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.1)] translate-x-2 bg-white/[0.05]' : 'border-white/5 hover:border-white/10'}`}>
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-3 mb-4">
                  <div>
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${isActive ? 'text-primary' : 'text-foreground'}`}>
                      {exp.title}
                    </h3>
                    <p className="text-foreground/80 font-medium text-lg mt-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                      {exp.location}
                    </p>
                  </div>
                  <span className="text-sm text-primary/90 whitespace-nowrap font-mono bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                    {exp.period}
                  </span>
                </div>
                
                <div className="text-muted-foreground/90 space-y-3 mt-6">
                  {exp.descriptions.map((desc, index) => (
                    <p key={index} className="text-sm md:text-base leading-relaxed">{desc}</p>
                  ))}
                </div>
                
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.technologies.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className={`text-xs font-mono px-2.5 py-1 rounded transition-all duration-300 ${isActive ? 'bg-primary/10 border border-primary/30 text-primary shadow-[0_0_10px_hsl(var(--primary)/0.2)]' : 'bg-white/5 border border-white/10 text-muted-foreground'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceSection;