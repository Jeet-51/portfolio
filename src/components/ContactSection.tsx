
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text flex items-center gap-3">
        <div className="p-2 rounded-full bg-blue-900/30 border border-blue-700/30">
          <Mail className="w-5 h-5 text-blue-400" />
        </div>
        Get In Touch
      </h2>
      <p className="text-gray-300 dark:text-gray-300 mb-6">
        I’m always open to exploring opportunities in data science, AI engineering, or analytics-driven product development. 
        Feel free to reach out for collaborations, projects, or discussions around machine learning, GenAI, or data strategy.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="overflow-hidden border-none shadow-lg rounded-2xl bg-slate-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-slate-700/50 hover:border-blue-500/30">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-full text-white">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium text-white">Email</h3>
              <a href="mailto:jeetp5118@gmail.com" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                jeetp5118@gmail.com
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-none shadow-lg rounded-2xl bg-slate-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-slate-700/50 hover:border-indigo-500/30">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 p-3 rounded-full text-white">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium text-white">Phone</h3>
              <a href="tel:9303335103" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                (930) 333-5103
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-none shadow-lg rounded-2xl bg-slate-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-slate-700/50 hover:border-purple-500/30">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-3 rounded-full text-white">
              <Linkedin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium text-white">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/pateljeet22" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
              >
                linkedin.com/in/pateljeet22
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-none shadow-lg rounded-2xl bg-slate-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/30">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-400 p-3 rounded-full text-white">
              <Github className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium text-white">GitHub</h3>
              <a 
                href="https://github.com/Jeet-51" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
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
