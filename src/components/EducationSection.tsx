
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
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Big Data Systems",
        "Applied Statistics",
        "Data Visualization"
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
        "Operating Systems",
        "Artificial Intelligence",
        "Computer Vision",
        "Signal Processing"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <School className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold tracking-tight">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>
              <CardHeader className="relative">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <CardTitle className="text-xl">{edu.school}</CardTitle>
                    <CardDescription className="text-base font-medium">{edu.degree}</CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">{edu.location}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <span className="text-sm text-muted-foreground block">{edu.period}</span>
                    <Badge className="mt-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">GPA: {edu.gpa}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="text-sm font-semibold mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, idx) => (
                    <Badge key={idx} variant="outline" className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700">
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
