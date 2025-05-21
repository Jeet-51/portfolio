
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center py-10">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-4xl md:text-6xl text-white font-bold">
            JP
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">Jeet Patel</h1>
        <h2 className="text-xl md:text-2xl mt-2 text-gray-600 dark:text-gray-300">
          Data Scientist & AI Engineer
        </h2>
        
        <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
          <Badge variant="outline" className="px-2 py-1 text-sm">
            Machine Learning
          </Badge>
          <Badge variant="outline" className="px-2 py-1 text-sm">
            Data Engineering
          </Badge>
          <Badge variant="outline" className="px-2 py-1 text-sm">
            LLM Systems
          </Badge>
          <Badge variant="outline" className="px-2 py-1 text-sm">
            ML Engineering
          </Badge>
        </div>
        
        <p className="mt-4 max-w-lg text-gray-600 dark:text-gray-300">
          Building intelligent data-driven solutions with expertise in GenAI, machine learning, 
          and scalable data architectures.
        </p>
        
        <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
          <Button className="flex items-center gap-2">
            <Mail size={16} /> Contact Me
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Phone size={16} /> (930) 333-5103
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
