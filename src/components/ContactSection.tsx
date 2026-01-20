
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass-card badge-glow">
          <span className="text-primary">Let's Connect</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Get In Touch
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          I'm always open to exploring opportunities in data science, AI engineering, or analytics-driven product development. 
          Feel free to reach out for collaborations, projects, or discussions around machine learning, GenAI, or data strategy.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="group glass-card border-0 overflow-hidden interactive-hover">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-primary/20 p-4 rounded-2xl text-primary shadow-[0_0_20px_hsl(175_85%_50%/0.3)] group-hover:shadow-[0_0_30px_hsl(175_85%_50%/0.5)] transition-all duration-300">
              <Mail className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <a href="mailto:jeetp5118@gmail.com" className="text-sm text-primary hover:text-primary/80 hover:underline transition-colors break-all">
                jeetp5118@gmail.com
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card className="group glass-card border-0 overflow-hidden interactive-hover">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-primary/20 p-4 rounded-2xl text-primary shadow-[0_0_20px_hsl(175_85%_50%/0.3)] group-hover:shadow-[0_0_30px_hsl(175_85%_50%/0.5)] transition-all duration-300">
              <Phone className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">Phone</h3>
              <a href="tel:9303335103" className="text-sm text-primary hover:text-primary/80 hover:underline transition-colors">
                (930) 333-5103
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card className="group glass-card border-0 overflow-hidden interactive-hover">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-primary/20 p-4 rounded-2xl text-primary shadow-[0_0_20px_hsl(175_85%_50%/0.3)] group-hover:shadow-[0_0_30px_hsl(175_85%_50%/0.5)] transition-all duration-300">
              <Linkedin className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/pateljeet22" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-primary hover:text-primary/80 hover:underline transition-colors break-all"
              >
                linkedin.com/in/pateljeet22
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card className="group glass-card border-0 overflow-hidden interactive-hover">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-primary/20 p-4 rounded-2xl text-primary shadow-[0_0_20px_hsl(175_85%_50%/0.3)] group-hover:shadow-[0_0_30px_hsl(175_85%_50%/0.5)] transition-all duration-300">
              <Github className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
              <a 
                href="https://github.com/Jeet-51" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-primary hover:text-primary/80 hover:underline transition-colors break-all"
              >
                github.com/Jeet-51
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactSection;
