
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
          Let's Connect
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
        <Card className="group overflow-hidden border shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-gradient-to-br from-primary to-primary/70 p-4 rounded-2xl text-primary-foreground shadow-lg group-hover:scale-110 transition-transform duration-300">
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
        
        <Card className="group overflow-hidden border shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-gradient-to-br from-accent to-accent/70 p-4 rounded-2xl text-accent-foreground shadow-lg group-hover:scale-110 transition-transform duration-300">
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
        
        <Card className="group overflow-hidden border shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
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
        
        <Card className="group overflow-hidden border shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
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
