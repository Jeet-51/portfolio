import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Linkedin, Github, Phone, Briefcase, Book, Code, Award, Database, Star, Brain } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import PublicationsSection from "@/components/PublicationsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("about");
  const [scrollPosition, setScrollPosition] = useState(0);
  const { toast } = useToast();
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    
    // Scroll to top when changing tabs on mobile
    if (isMobile) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handle scroll for header transparency effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll into view when tabs change
  useEffect(() => {
    if (!isMobile && tabsRef.current) {
      const yOffset = -100; // Offset to account for sticky header
      const element = tabsRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [activeTab, isMobile]);

  const isHeaderTransparent = scrollPosition < 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-950 to-gray-950 text-gray-100">
      {/* Header/Navigation */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isHeaderTransparent 
          ? 'bg-transparent backdrop-blur-none' 
          : 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800/50'
      }`}>
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className={`text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text transition-all duration-500 ${
            isHeaderTransparent ? 'opacity-0' : 'opacity-100'
          }`}>
            Jeet Patel
          </h1>
          
          <div className="flex items-center space-x-3">
            <a 
              href="mailto:jeetp5118@gmail.com" 
              className="p-2.5 rounded-lg hover:bg-slate-800/70 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} className="hover:animate-pulse" />
            </a>
            <a 
              href="https://linkedin.com/in/pateljeet22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg hover:bg-slate-800/70 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="hover:animate-pulse" />
            </a>
            <a 
              href="https://github.com/Jeet-51" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg hover:bg-slate-800/70 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} className="hover:animate-pulse" />
            </a>
            <a 
              href="https://drive.google.com/file/d/1DTSiTMMfJBxAKnztLxeMmhpEetEGvsiS/view?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="outline" 
                size="sm"
                className="ml-2 border-cyan-700/50 text-cyan-400 bg-cyan-900/10 hover:bg-cyan-900/20 hover:border-cyan-500/70 transition-all duration-300 rounded-lg"
              >
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-0 md:px-6">
        {/* Hero section */}
        <Hero />

        {/* Main content with tabs */}
        <div ref={tabsRef} className="px-6">
          <Tabs 
            defaultValue="about" 
            value={activeTab} 
            onValueChange={handleTabChange} 
            className="mt-8 md:mt-12"
          >
            {/* Tabs navigation */}
            <div className="flex justify-center mb-10 animate-fade-in">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full max-w-3xl glass-card bg-slate-900/70 border border-slate-800/50 rounded-2xl p-1">
                {[
                  { value: "about", label: "About" },
                  { value: "experience", label: "Experience" },
                  { value: "projects", label: "Projects" },
                  { value: "education", label: "Education" },
                  { value: "publications", label: "Publications" },
                  { value: "contact", label: "Contact" }
                ].map((tab, index) => (
                  <TabsTrigger 
                    key={tab.value}
                    value={tab.value}
                    className={`transition-all duration-300 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600/40 data-[state=active]:to-cyan-600/40 data-[state=active]:text-white data-[state=active]:shadow-lg delay-${index * 50}`}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Tab contents */}
            <TabsContent value="about" className="space-y-10 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-2">
                  <Card className="glass-card bg-slate-900/70 border-slate-800/50 shadow-xl overflow-hidden animate-slide-up rounded-2xl hover:shadow-2xl transition-all duration-300">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-purple-600/10 blur-lg"></div>
                    <div className="relative p-8">
                      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text flex items-center gap-3">
                        <div className="p-2 rounded-full bg-blue-900/30 border border-blue-700/30">
                          <Database className="w-5 h-5 text-blue-400" />
                        </div>
                        About Me
                      </h2>
                      <p className="text-lg leading-relaxed text-slate-300">
                        I'm a Data Scientist and AI Engineer with a solid foundation in machine learning, data engineering, and intelligent system design. 
                        I specialize in turning complex, high-volume datasets into scalable and actionable solutions, whether it's predicting Medicare billing behaviors, detecting financial fraud, or building RAG-powered chatbots for enterprise-scale knowledge retrieval. 
                      </p>
                      <p className="mt-4 text-lg leading-relaxed text-slate-300">
                        With a Master’s in Data Science from Indiana University and hands-on experience at Hyphenova Network, Project 990, and the IU School of Public Health, I blend academic rigor with real-world problem-solving. 
                        My work spans GenAI applications, healthcare analytics, recommendation engines, and geospatial dashboards, built on robust infrastructure with a focus on interpretability and performance.
                         </p>
                    </div>
                  </Card>
                </div>
                <div className="animate-slide-right">
                  <Card className="glass-card bg-slate-900/70 border-slate-800/50 shadow-xl h-full overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-300">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/10 via-blue-500/10 to-blue-600/10 blur-lg"></div>
                    <div className="relative p-8">
                      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 text-transparent bg-clip-text flex items-center gap-3">
                        <div className="p-2 rounded-full bg-cyan-900/30 border border-cyan-700/30">
                          <Star className="w-5 h-5 text-cyan-400" />
                        </div>
                        Core Expertise
                      </h2>
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/80 transition-colors">
                          <Code className="w-6 h-6 mt-1 text-cyan-500" />
                          <div>
                            <h3 className="font-semibold text-white">Machine Learning</h3>
                            <p className="text-sm text-slate-300">Advanced ML models, deep learning, NLP, computer vision</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/80 transition-colors">
                          <Database className="w-6 h-6 mt-1 text-cyan-500" />
                          <div>
                            <h3 className="font-semibold text-white">Data Engineering</h3>
                            <p className="text-sm text-slate-300">ETL pipelines, data warehousing, cloud infrastructure</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/80 transition-colors">
                          <Brain className="w-6 h-6 mt-1 text-cyan-500" />
                          <div>
                            <h3 className="font-semibold text-white">GenAI & LLM Systems</h3>
                            <p className="text-sm text-slate-300">RAG architectures, embeddings, vector databases</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              <SkillsSection />
            </TabsContent>
            
            <TabsContent value="experience" className="animate-fade-in">
              <ExperienceSection />
            </TabsContent>
            
            <TabsContent value="projects" className="animate-fade-in">
              <ProjectsSection />
            </TabsContent>
            
            <TabsContent value="education" className="animate-fade-in">
              <EducationSection />
            </TabsContent>
            
            <TabsContent value="publications" className="animate-fade-in">
              <PublicationsSection />
            </TabsContent>
            
            <TabsContent value="contact" className="animate-fade-in">
              <ContactSection />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="bg-slate-950/90 border-t border-slate-800/50 py-10 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Jeet Patel. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            <a 
              href="tel:9303335103" 
              className="p-2.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/70 transition-all duration-300"
              aria-label="Phone"
            >
              <Phone size={20} className="hover:animate-bounce-subtle" />
            </a>
            <a 
              href="mailto:jeetp5118@gmail.com" 
              className="p-2.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/70 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} className="hover:animate-bounce-subtle" />
            </a>
            <a 
              href="https://linkedin.com/in/pateljeet22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/70 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="hover:animate-bounce-subtle" />
            </a>
            <a 
              href="https://github.com/Jeet-51" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/70 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} className="hover:animate-bounce-subtle" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
