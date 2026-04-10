import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { Navigation } from '@/components/navigation';
import { OngoingSection } from '@/components/ongoing-section';
import { ProjectsSection } from '@/components/projects-section';
import { ThemeProvider } from '@/components/theme-provider';

export default function App() {
  return (
    <ThemeProvider>
      <Navigation />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <OngoingSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
