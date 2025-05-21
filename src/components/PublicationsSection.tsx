
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

interface Publication {
  title: string;
  journal: string;
  date: string;
  description: string;
  keywords: string[];
  link?: string;
}

const PublicationsSection = () => {
  const publications: Publication[] = [
    {
      title: "Prediction System Design for Monitoring the Health of Developing Infants from Cardiotocography Using Statistical Machine Learning",
      journal: "Design Engineering, Scopus International Journal, Volume 2021, Issue 07",
      date: "July 2021",
      description: "This research introduces a machine learning-based prediction system designed to assist healthcare providers in monitoring the health of developing infants. By analyzing cardiotocographic data, the system can automatically classify fetal health as normal, suspicious, or pathological, achieving a high accuracy rate of 94% using the Random Forest algorithm. This approach supports physicians by reducing diagnostic errors and improving early detection of potential complications in late-stage pregnancies. The study demonstrates the system's effectiveness in handling real-time variability in medical data, offering a powerful tool for better prenatal care.",
      keywords: ["Machine Learning", "Classification", "Random Forest", "Imbalanced Data", "Cardiotocography", "Medical"],
      link: "https://www.researchgate.net/publication/390732367_Prediction_System_design_for_monitoring_the_health_of_developing_infants_from_cardiotocography_using_Statistical_Machine_Learning"
    },
    {
      title: "Learnera: A Course Recommendation System",
      journal: "Techno Journal IETE-SF, DJ Spark 2022–23",
      date: "March 2023",
      description: "This research tackles the overwhelming choice in online education by creating an intelligent recommendation system that connects students with the most relevant courses. Powered by advanced machine learning algorithms, the system personalizes recommendations based on each student's unique academic background, goals, and learning preferences. By combining collaborative, content-based, and hybrid filtering, this solution empowers students to make informed choices, boosting their learning outcomes and driving academic success.",
      keywords: ["Python", "Pytorch", "NLP", "Machine Learning", "TF-IDF", "A/B Testing", "Web Development", "Recommendations"],
      link: "https://technojournal.djsceietesf.com/dj-spark"
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-full bg-blue-900/30 border border-blue-700/30">
          <FileText className="w-6 h-6 text-blue-400" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">Publications</h2>
      </div>

      <div className="space-y-6">
        {publications.map((pub, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-lg rounded-2xl bg-slate-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-slate-700/50 hover:border-blue-500/30">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-indigo-600"></div>
            <CardHeader className="relative">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <CardTitle className="text-xl text-white">{pub.title}</CardTitle>
                <span className="text-sm text-cyan-300/80 whitespace-nowrap px-3 py-1 rounded-full bg-cyan-900/20 border border-cyan-800/30">{pub.date}</span>
              </div>
              <CardDescription className="text-base text-slate-300">{pub.journal}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">{pub.description}</p>
              
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-3 text-slate-300">Keywords:</h4>
                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((keyword, idx) => (
                    <Badge key={idx} variant="outline" className="bg-slate-800/80 border-slate-700 text-cyan-300 hover:bg-slate-700/80 transition-colors">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            {pub.link && (
              <CardFooter>
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium underline underline-offset-4"
                >
                  Read Publication
                </a>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PublicationsSection;
