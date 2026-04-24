import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const PillNavbar = () => {
  const [active, setActive] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    // Default to dark mode
    const useDark = saved ? saved === "dark" : true;
    setIsDark(useDark);
    if (useDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  useEffect(() => {
    const onScroll = () => {
      let current = "home";
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop pill */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex">
        <div className="pill-nav rounded-full px-2 py-2 flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-foreground bg-foreground/[0.08]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-0 rounded-full ring-1 ring-primary/40 shadow-[0_0_18px_-4px_hsl(var(--primary)/0.6)] pointer-events-none" />
                )}
              </button>
            );
          })}
          <div className="w-px h-5 bg-border mx-1" />
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/[0.06] transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile bar */}
      <nav className="fixed top-3 left-3 right-3 z-50 md:hidden">
        <div className="pill-nav rounded-2xl px-3 py-2 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="text-sm font-display font-semibold gradient-text px-2"
          >
            JP
          </button>
          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/[0.06]"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/[0.06]"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="pill-nav rounded-2xl mt-2 p-2 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-4 py-3 text-sm rounded-xl transition-colors ${
                  active === item.id
                    ? "text-foreground bg-foreground/[0.08]"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default PillNavbar;
