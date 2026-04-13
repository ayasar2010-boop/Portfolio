import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { Navigation } from '@/components/navigation';
import { OngoingSection } from '@/components/ongoing-section';
import { ProjectsSection } from '@/components/projects-section';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/hooks/use-language';
import { GridSignal } from '@/components/grid-signal';

export default function App() {
  return (
    <LanguageProvider>
    <ThemeProvider>
      <GridSignal />
      <Navigation />
      <main className="relative z-[1]">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <OngoingSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
    </LanguageProvider>
  );
}
