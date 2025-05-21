
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
  const { toast } = useToast();

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    
    // Scroll to top when changing tabs on mobile
    if (isMobile) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">Jeet Patel</h1>
          
          <div className="flex items-center space-x-2">
            <a 
              href="mailto:jeetp5118@gmail.com" 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/pateljeet22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/Jeet-51" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <Button 
              variant="outline" 
              size="sm" 
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

      <main className="container mx-auto px-4 py-8">
        {/* Hero section only visible on desktop */}
        {!isMobile && <Hero />}

        {/* Main content with tabs */}
        <Tabs 
          defaultValue="about" 
          value={activeTab} 
          onValueChange={handleTabChange} 
          className="mt-8"
        >
          {/* Tabs navigation */}
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full max-w-3xl">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
          </div>

          {/* Tab contents */}
          <TabsContent value="about" className="space-y-8">
            {/* Hero section visible on mobile within About tab */}
            {isMobile && <Hero />}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed">
                      I’m a Data Scientist and AI Engineer with a strong foundation in machine learning, data engineering, and intelligent system design. 
                      I specialize in translating complex, high-volume datasets into actionable strategies—whether it’s forecasting Medicare billing behaviors, powering fraud detection systems, or building RAG-based chatbots. 
                    </p>
                    <p className="mt-4 text-lg leading-relaxed">
                      With a Master’s in Data Science from Indiana University and hands-on roles at Hyphenova Network, Project 990, and IU’s School of Public Health, I bring a mix of academic rigor and real-world execution. 
                      My work spans healthcare analytics, GenAI applications, recommender systems, and geospatial visualizations—always grounded in scalable infrastructure and model interpretability.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Core Expertise</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Code className="w-5 h-5 mt-0.5 text-blue-500" />
                      <div>
                        <h3 className="font-medium">Machine Learning</h3>
                        <p className="text-sm text-muted-foreground">Advanced ML models, deep learning, NLP, computer vision</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Database className="w-5 h-5 mt-0.5 text-blue-500" />
                      <div>
                        <h3 className="font-medium">Data Engineering</h3>
                        <p className="text-sm text-muted-foreground">ETL pipelines, data warehousing, cloud infrastructure</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 mt-0.5 text-blue-500" />
                      <div>
                        <h3 className="font-medium">GenAI & LLM Systems</h3>
                        <p className="text-sm text-muted-foreground">RAG architectures, embeddings, vector databases, LLM applications</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <SkillsSection />
          </TabsContent>
          
          <TabsContent value="experience">
            <ExperienceSection />
          </TabsContent>
          
          <TabsContent value="projects">
            <ProjectsSection />
          </TabsContent>
          
          <TabsContent value="education">
            <EducationSection />
          </TabsContent>
          
          <TabsContent value="publications">
            <PublicationsSection />
          </TabsContent>
          
          <TabsContent value="contact">
            <ContactSection />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Jeet Patel. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a 
              href="tel:9303335103" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
            <a 
              href="mailto:jeetp5118@gmail.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/pateljeet22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/Jeet-51" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
