import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";
import { EducationSection } from "@/components/education-section";
import { ExperiencesSection } from "@/components/experiences-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";

export function Home() {
  return (
    <main className="space-y-20 sm:space-y-40 mb-8">
      <HeroSection />
      <ExperiencesSection />
      <ProjectsSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
