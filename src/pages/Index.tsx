
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Linkedin, Github, Phone, Briefcase, Book, Code, Award, Database, Star } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      {/* Header/Navigation */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isHeaderTransparent 
          ? 'bg-transparent backdrop-blur-none' 
          : 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className={`text-xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 text-transparent bg-clip-text transition-all duration-500 ${
            isHeaderTransparent ? 'opacity-0' : 'opacity-100'
          }`}>
            Jeet Patel
          </h1>
          
          <div className="flex items-center space-x-2">
            <a 
              href="mailto:jeetp5118@gmail.com" 
              className="p-2 rounded-full hover:bg-gray-800/70 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} className="hover:animate-pulse" />
            </a>
            <a 
              href="https://linkedin.com/in/pateljeet22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-800/70 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="hover:animate-pulse" />
            </a>
            <a 
              href="https://github.com/Jeet-51" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-800/70 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} className="hover:animate-pulse" />
            </a>
            <Button 
              variant="outline" 
              size="sm"
              className="border-cyan-700/50 text-cyan-400 hover:bg-cyan-900/20 hover:border-cyan-500/70 transition-all duration-300"
              onClick={() => {
                toast({
                  title: "Resume downloaded",
                  description: "Your resume has been downloaded successfully.",
                });
              }}
            >
              Download CV
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-0 md:px-4">
        {/* Hero section */}
        <Hero />

        {/* Main content with tabs */}
        <div ref={tabsRef} className="px-4">
          <Tabs 
            defaultValue="about" 
            value={activeTab} 
            onValueChange={handleTabChange} 
            className="mt-4 md:mt-8"
          >
            {/* Tabs navigation */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full max-w-3xl glass-card bg-gray-900/70 border border-gray-800/50">
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
                    className={`transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600/40 data-[state=active]:to-cyan-600/40 data-[state=active]:text-white data-[state=active]:shadow-lg delay-${index * 50}`}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Tab contents */}
            <TabsContent value="about" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-2">
                  <Card className="glass-card bg-gray-900/70 border-gray-800/50 shadow-xl overflow-hidden animate-slide-up">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-purple-600/10 blur-lg"></div>
                    <div className="relative p-6">
                      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">About Me</h2>
                      <p className="text-lg leading-relaxed text-gray-300">
                        I'm a Data Scientist and AI Engineer with a strong foundation in machine learning, data engineering, and intelligent system design. 
                        I specialize in translating complex, high-volume datasets into actionable strategies—whether it's forecasting Medicare billing behaviors, powering fraud detection systems, or building RAG-based chatbots. 
                      </p>
                      <p className="mt-4 text-lg leading-relaxed text-gray-300">
                        With a Master's in Data Science from Indiana University and hands-on roles at Hyphenova Network, Project 990, and IU's School of Public Health, I bring a mix of academic rigor and real-world execution. 
                        My work spans healthcare analytics, GenAI applications, recommender systems, and geospatial visualizations—always grounded in scalable infrastructure and model interpretability.
                      </p>
                    </div>
                  </Card>
                </div>
                <div className="animate-slide-right">
                  <Card className="glass-card bg-gray-900/70 border-gray-800/50 shadow-xl h-full overflow-hidden">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/10 via-blue-500/10 to-blue-600/10 blur-lg"></div>
                    <div className="relative p-6">
                      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">Core Expertise</h2>
                      <div className="space-y-5">
                        <div className="flex items-start space-x-3">
                          <Code className="w-5 h-5 mt-1 text-cyan-500" />
                          <div>
                            <h3 className="font-semibold text-white">Machine Learning</h3>
                            <p className="text-sm text-gray-300">Advanced ML models, deep learning, NLP, computer vision</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Database className="w-5 h-5 mt-1 text-cyan-500" />
                          <div>
                            <h3 className="font-semibold text-white">Data Engineering</h3>
                            <p className="text-sm text-gray-300">ETL pipelines, data warehousing, cloud infrastructure</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Star className="w-5 h-5 mt-1 text-cyan-500" />
                          <div>
                            <h3 className="font-semibold text-white">GenAI & LLM Systems</h3>
                            <p className="text-sm text-gray-300">RAG architectures, embeddings, vector databases</p>
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

      <footer className="bg-gray-900/80 border-t border-gray-800/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Jeet Patel. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a 
              href="tel:9303335103" 
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone size={18} className="hover:animate-bounce-subtle" />
            </a>
            <a 
              href="mailto:jeetp5118@gmail.com" 
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} className="hover:animate-bounce-subtle" />
            </a>
            <a 
              href="https://linkedin.com/in/pateljeet22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="hover:animate-bounce-subtle" />
            </a>
            <a 
              href="https://github.com/Jeet-51" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={18} className="hover:animate-bounce-subtle" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
