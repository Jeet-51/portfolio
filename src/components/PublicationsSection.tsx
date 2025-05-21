
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, FileText } from "lucide-react";

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
      link: "https://example.com/publication1"
    },
    {
      title: "Learnera: A Course Recommendation System",
      journal: "Techno Journal IETE-SF, DJ Spark 2022–23",
      date: "March 2023",
      description: "This research tackles the overwhelming choice in online education by creating an intelligent recommendation system that connects students with the most relevant courses. Powered by advanced machine learning algorithms, the system personalizes recommendations based on each student's unique academic background, goals, and learning preferences. By combining collaborative, content-based, and hybrid filtering, this solution empowers students to make informed choices, boosting their learning outcomes and driving academic success.",
      keywords: ["Python", "Pytorch", "NLP", "Machine Learning", "TF-IDF", "A/B Testing", "Web Development", "Recommendations"],
      link: "https://example.com/publication2"
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <FileText className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold tracking-tight">Publications</h2>
      </div>

      <div className="space-y-6">
        {publications.map((pub, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <CardTitle className="text-xl">{pub.title}</CardTitle>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{pub.date}</span>
              </div>
              <CardDescription className="text-base">{pub.journal}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{pub.description}</p>
              
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Keywords:</h4>
                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((keyword, idx) => (
                    <Badge key={idx} variant="outline">
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
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium underline underline-offset-4"
                >
                  Read Publication
                </a>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold tracking-tight">Honors & Awards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Graduate Merit Scholarship</CardTitle>
              <CardDescription>Indiana University, Bloomington</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Awarded for academic excellence in the Data Science program.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Best Research Paper Award</CardTitle>
              <CardDescription>International Conference on ML Applications</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Recognized for innovative healthcare predictive modeling research.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PublicationsSection;
