
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Linkedin, Github, Phone, User, Briefcase, Code, GraduationCap, BookOpen, MessageCircle } from "lucide-react";
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
    
    if (isMobile) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMobile && tabsRef.current) {
      const yOffset = -100;
      const element = tabsRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [activeTab, isMobile]);

  const isHeaderVisible = scrollPosition > 100;

  const tabs = [
    { value: "about", label: "About", icon: User },
    { value: "experience", label: "Experience", icon: Briefcase },
    { value: "projects", label: "Projects", icon: Code },
    { value: "education", label: "Education", icon: GraduationCap },
    { value: "publications", label: "Publications", icon: BookOpen },
    { value: "contact", label: "Contact", icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100">
      {/* Header/Navigation */}
      <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isHeaderVisible 
          ? 'glass-effect shadow-lg' 
          : 'bg-transparent backdrop-blur-none'
      }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className={`text-2xl font-bold gradient-text transition-all duration-500 ${
            isHeaderVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Jeet Patel
          </h1>
          
          <div className="flex items-center space-x-2">
            {[
              { href: "mailto:jeetp5118@gmail.com", icon: Mail, label: "Email" },
              { href: "https://linkedin.com/in/pateljeet22", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/Jeet-51", icon: Github, label: "GitHub" }
            ].map(({ href, icon: Icon, label }) => (
              <a 
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2.5 rounded-xl bg-white/80 border border-gray-200 text-gray-600 hover:text-violet-600 hover:border-violet-200 transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
            <a 
              href="https://drive.google.com/file/d/1DTSiTMMfJBxAKnztLxeMmhpEetEGvsiS/view?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block ml-3"
            >
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/80 border-violet-200 text-violet-700 hover:bg-violet-50 rounded-xl font-medium transition-all duration-300"
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
            className="section-container"
          >
            {/* Tabs navigation */}
            <div className="flex justify-center mb-16 animate-fadeIn">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full max-w-4xl glass-effect rounded-2xl p-2 h-auto">
                {tabs.map((tab, index) => {
                  const IconComponent = tab.icon;
                  return (
                    <TabsTrigger 
                      key={tab.value}
                      value={tab.value}
                      className={`tab-transition rounded-xl py-3 px-4 flex flex-col md:flex-row items-center gap-2 data-[state=active]:tab-active delay-${index * 100} hover:bg-white/50`}
                    >
                      <IconComponent size={18} />
                      <span className="text-xs md:text-sm font-medium">{tab.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {/* Tab contents */}
            <TabsContent value="about" className="space-y-12 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="glass-effect shadow-xl overflow-hidden animate-slideInUp card-hover rounded-3xl">
                    <CardContent className="p-10">
                      <h2 className="text-3xl font-bold mb-8 gradient-text flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-gradient-to-r from-violet-100 to-purple-100">
                          <User className="w-6 h-6 text-violet-600" />
                        </div>
                        About Me
                      </h2>
                      <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                        <p>
                          I'm a passionate Data Scientist and AI Engineer with expertise in transforming complex datasets into intelligent, scalable solutions. 
                          My work spans predictive analytics, fraud detection, and enterprise-scale knowledge systems powered by cutting-edge GenAI technologies.
                        </p>
                        <p>
                          With a Master's in Data Science from Indiana University and hands-on experience across healthcare, finance, and technology sectors, 
                          I bridge the gap between academic research and real-world applications. I specialize in building robust ML pipelines, 
                          implementing LLM-based systems, and creating data-driven insights that drive strategic business decisions.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="animate-slideInRight">
                  <Card className="glass-effect shadow-xl h-full overflow-hidden card-hover rounded-3xl">
                    <CardContent className="p-10">
                      <h2 className="text-3xl font-bold mb-8 gradient-text flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-100 to-teal-100">
                          <Code className="w-6 h-6 text-emerald-600" />
                        </div>
                        Expertise
                      </h2>
                      <div className="space-y-6">
                        {[
                          { title: "Machine Learning", desc: "Advanced ML models, deep learning, NLP", color: "from-violet-500 to-purple-500" },
                          { title: "Data Engineering", desc: "ETL pipelines, cloud infrastructure, big data", color: "from-emerald-500 to-teal-500" },
                          { title: "GenAI Systems", desc: "LLMs, RAG architectures, vector databases", color: "from-blue-500 to-indigo-500" }
                        ].map((item, index) => (
                          <div key={item.title} className={`p-6 rounded-2xl bg-gradient-to-r ${item.color} bg-opacity-10 border border-white/20 hover:bg-opacity-20 transition-all duration-300 delay-${index * 100}`}>
                            <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <SkillsSection />
            </TabsContent>
            
            <TabsContent value="experience" className="animate-fadeIn">
              <ExperienceSection />
            </TabsContent>
            
            <TabsContent value="projects" className="animate-fadeIn">
              <ProjectsSection />
            </TabsContent>
            
            <TabsContent value="education" className="animate-fadeIn">
              <EducationSection />
            </TabsContent>
            
            <TabsContent value="publications" className="animate-fadeIn">
              <PublicationsSection />
            </TabsContent>
            
            <TabsContent value="contact" className="animate-fadeIn">
              <ContactSection />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="glass-effect border-t border-white/20 py-12 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 mb-6">
            © {new Date().getFullYear()} Jeet Patel. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            {[
              { href: "tel:9303335103", icon: Phone, label: "Phone" },
              { href: "mailto:jeetp5118@gmail.com", icon: Mail, label: "Email" },
              { href: "https://linkedin.com/in/pateljeet22", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/Jeet-51", icon: Github, label: "GitHub" }
            ].map(({ href, icon: Icon, label }) => (
              <a 
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-full bg-white/80 border border-gray-200 text-gray-600 hover:text-violet-600 hover:border-violet-200 transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
