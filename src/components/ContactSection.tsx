import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const contacts = [
    { icon: Mail, label: "Email", value: "jeetp5118@gmail.com", href: "mailto:jeetp5118@gmail.com" },
    { icon: Phone, label: "Phone", value: "(930) 333-5103", href: "tel:9303335103" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/pateljeet22", href: "https://linkedin.com/in/pateljeet22", external: true },
    { icon: Github, label: "GitHub", value: "github.com/Jeet-51", href: "https://github.com/Jeet-51", external: true },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 mb-12">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Let's Connect</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          I'm always open to exploring opportunities in data science, AI engineering, or analytics-driven product development. 
          Feel free to reach out for collaborations, projects, or discussions around machine learning, GenAI, or data strategy.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {contacts.map(({ icon: Icon, label, value, href, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 p-5 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors"
          >
            <Icon className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">{label}</p>
              <p className="text-sm text-muted-foreground break-all">{value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
