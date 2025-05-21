
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { School } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const education = [
    {
      school: "Indiana University, Bloomington",
      degree: "Master of Science in Data Science",
      location: "Indiana, United States",
      period: "August 2023 - May 2025",
      gpa: "3.8/4.0",
      courses: [
        "Applied Machine Learning",
        "Big Data Applications",
        "Data Mining",
        "Information Visualization",
        "Image Processing for Medical Application", 
        "Scientific Visualization",
        "Applied Database Technology"
      ]
    },
    {
      school: "Dwarkadas J. Sanghvi College of Engineering",
      degree: "Bachelor of Technology in Electronics and Telecommunication Engineering",
      location: "Maharashtra, India",
      period: "August 2019 - June 2023",
      gpa: "3.7/4.0",
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Artificial Intelligence and Machine Learning",
        "Computer Vision",
        "Signal Processing"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 rounded-full bg-blue-900/30 border border-blue-700/30">
            <School className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg rounded-2xl bg-slate-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-slate-700/50 hover:border-blue-500/30">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>
              <CardHeader className="relative">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <CardTitle className="text-xl text-white">{edu.school}</CardTitle>
                    <CardDescription className="text-base font-medium text-slate-300">{edu.degree}</CardDescription>
                    <p className="text-sm text-slate-400 mt-1">{edu.location}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <span className="text-sm text-cyan-300/80 block px-3 py-1 rounded-full bg-cyan-900/20 border border-cyan-800/30">{edu.period}</span>
                    <Badge className="mt-2 bg-blue-900/40 text-blue-300 border border-blue-700/30">GPA: {edu.gpa}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="text-sm font-semibold mb-3 text-slate-300">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, idx) => (
                    <Badge key={idx} variant="outline" className="bg-slate-800/80 border-slate-700 text-cyan-300 hover:bg-slate-700/80 transition-colors">
                      {course}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
