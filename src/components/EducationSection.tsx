import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      school: "Indiana University, Bloomington",
      degree: "Master of Science in Data Science",
      location: "Indiana, United States",
      period: "August 2023 - May 2025",
      gpa: "3.8/4.0",
      logoUrl: `${import.meta.env.BASE_URL}images/iu-logo.svg`,
      logoBg: "bg-red-950/40",
      accentColor: "from-red-500 to-red-700",
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
      logoUrl: `${import.meta.env.BASE_URL}images/djsce-logo.png`,
      logoBg: "bg-blue-950/40",
      accentColor: "from-blue-500 to-indigo-600",
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
      <div className="flex items-center gap-2 mb-8">
        <div className="p-2 rounded-full bg-primary/10 border border-primary/20">
          <GraduationCap className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight gradient-text">Education</h2>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="group relative glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.1)]"
          >
            {/* Accent bar */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${edu.accentColor} opacity-60 group-hover:opacity-100 transition-opacity`} />

            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                <div className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl ${edu.logoBg} border border-white/10 flex items-center justify-center p-3 self-start`}>
                  <img
                    src={edu.logoUrl}
                    alt={`${edu.school} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow space-y-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {edu.school}
                      </h3>
                      <p className="text-base font-medium text-muted-foreground mt-1">
                        {edu.degree}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <Badge className="bg-primary/10 text-primary border-primary/20 font-mono text-xs">
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary/60" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary/60" />
                      {edu.period}
                    </span>
                  </div>

                  {/* Courses */}
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">Relevant Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-foreground/70 group-hover:border-primary/20 group-hover:text-primary/80 transition-all duration-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
