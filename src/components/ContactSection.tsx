
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Get In Touch</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        I'm always open to discussing new projects, opportunities, or partnerships.
        Feel free to reach out through any of my contact information below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-full text-white">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <a href="mailto:jeetp5118@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                jeetp5118@gmail.com
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-full text-white">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <a href="tel:9303335103" className="text-blue-600 dark:text-blue-400 hover:underline">
                (930) 333-5103
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full text-white">
              <Linkedin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/pateljeet22" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                linkedin.com/in/pateljeet22
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full text-white">
              <Github className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium">GitHub</h3>
              <a 
                href="https://github.com/Jeet-51" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
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
