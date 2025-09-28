import { lazy, Suspense } from "react";
import DarkModeToggle from "@/components/DarkModeToggle";
import NewHero from "@/components/NewHero";
import NewProjectsSection from "@/components/NewProjectsSection";
import SectionDivider from "@/components/SectionDivider";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load sections for better performance
const LazyExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const LazyEducationSection = lazy(() => import("@/components/EducationSection"));
const LazySkillsSection = lazy(() => import("@/components/SkillsSection"));
const LazyContactSection = lazy(() => import("@/components/ContactSection"));

const LoadingSkeleton = () => (
  <div className="space-y-4 p-8">
    <Skeleton className="h-8 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Dark Mode Toggle */}
      <DarkModeToggle />
      
      {/* Hero Section */}
      <NewHero />
      
      {/* Projects Section */}
      <NewProjectsSection />
      
      {/* Section Divider */}
      <SectionDivider />
      
      {/* Experience Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Professional Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Work Experience
            </h2>
          </div>
          
          <Suspense fallback={<LoadingSkeleton />}>
            <LazyExperienceSection />
          </Suspense>
        </div>
      </section>
      
      {/* Skills & Contact Sections */}
      <SectionDivider />
      
      <section className="py-24 px-4 bg-gradient-to-b from-background to-neutral-50 dark:to-neutral-900">
        <div className="container mx-auto max-w-7xl">
          <Suspense fallback={<LoadingSkeleton />}>
            <LazySkillsSection />
          </Suspense>
        </div>
      </section>
      
      <SectionDivider />
      
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <Suspense fallback={<LoadingSkeleton />}>
            <LazyContactSection />
          </Suspense>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-neutral-900 dark:bg-neutral-950 text-neutral-300 py-12 border-t border-border">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jeet Patel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;