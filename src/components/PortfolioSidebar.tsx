import { useState, useEffect } from "react";
import { Home, Briefcase, FolderOpen, Wrench, Mail, Github, Linkedin, Moon, Sun, Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioSidebar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["home", "experience", "education", "projects", "skills", "contact"];
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 32;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  const getImagePath = () => {
    const imagePath = "/lovable-uploads/24ebecb7-c38b-42f7-b4e0-d93e922d9064.png";
    if (process.env.NODE_ENV === 'production' && window.location.hostname.includes('github.io')) {
      return '/portfolio' + imagePath;
    }
    return imagePath;
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "skills", label: "Skills", icon: Wrench },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Profile image */}
      <div className="p-6 pb-4">
        <div className="w-28 h-28 rounded-2xl overflow-hidden border border-border/60 shadow-lg shadow-primary/5 mx-auto lg:mx-0">
          <img
            src={getImagePath()}
            alt="Jeet Patel"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary/10 text-foreground border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-primary" : ""}`} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom: social + dark mode */}
      <div className="p-4 mt-auto border-t border-border/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Jeet-51"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://linkedin.com/in/pateljeet22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href="mailto:jeetp5118@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="h-8 w-8 rounded-lg"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14 bg-background/90 backdrop-blur-xl border-b border-border/50 flex items-center justify-between px-4">
        <button onClick={() => scrollToSection("home")} className="text-lg font-bold gradient-text">
          JP
        </button>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile sidebar overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
          <div className="fixed top-14 left-0 bottom-0 w-64 bg-background border-r border-border/50 animate-slide-in-left">
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-56 bg-background/50 backdrop-blur-sm border-r border-border/40 z-40 flex-col">
        {sidebarContent}
      </aside>
    </>
  );
};

export default PortfolioSidebar;
