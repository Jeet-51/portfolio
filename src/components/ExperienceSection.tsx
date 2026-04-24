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
        if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.2) {
          newActiveIndex = idx;
        }
      });
      if (newActiveIndex !== activeIndex) setActiveIndex(newActiveIndex);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <div className="py-12 relative z-10" ref={containerRef}>
      <div className="space-y-4 mb-20">
        <p className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
          &gt;_ Career Path
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight text-foreground">
          Experience
        </h2>
      </div>

      {/* Glowing vertical line + items */}
      <div className="relative pl-8 md:pl-12">
        {/* Glowing line */}
        <div className="absolute left-2 md:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent">
          <div className="absolute inset-0 blur-sm bg-gradient-to-b from-transparent via-primary/60 to-transparent" />
        </div>

        <div className="space-y-16 pb-8">
          {experiences.map((exp, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={idx}
                className={`experience-item relative transition-all duration-700 ${
                  isActive ? "opacity-100" : "opacity-55"
                }`}
              >
                {/* Glowing dot on the line */}
                <div
                  className={`absolute -left-[26px] md:-left-[34px] top-3 w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                    isActive
                      ? "bg-primary shadow-[0_0_20px_hsl(var(--primary)),0_0_40px_hsl(var(--primary)/0.4)] scale-150"
                      : "bg-muted-foreground/40"
                  }`}
                />

                <div
                  className={`transition-all duration-500 ${
                    isActive ? "translate-x-1" : ""
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-3 mb-4">
                    <div>
                      <span className="inline-block text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
                        {exp.location}
                      </span>
                      <h3
                        className={`font-display text-2xl md:text-3xl font-light tracking-tight transition-colors duration-300 ${
                          isActive ? "text-foreground" : "text-foreground/80"
                        }`}
                      >
                        {exp.title}
                      </h3>
                      <p className="text-foreground/70 font-medium text-base md:text-lg mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-primary/90 whitespace-nowrap font-mono bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 self-start">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="text-muted-foreground space-y-3 mt-5 max-w-3xl">
                    {exp.descriptions.map((desc, i) => (
                      <p key={i} className="text-sm md:text-base leading-relaxed">
                        {desc}
                      </p>
                    ))}
                  </div>

                  {/* Tech */}
                  {exp.technologies?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-1 rounded-md bg-foreground/[0.04] text-muted-foreground border border-border"
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
    </div>
  );
};

export default ExperienceSection;
