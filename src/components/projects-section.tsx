import { ProjectCard, type ProjectCardProps } from '@/components/project-card';
import sacstor from '@/assets/images/sacstor.jpg';
import sacstorControlBoard from '@/assets/images/sacstor-control-board.jpg';
import reactionWheel from '@/assets/images/reaction-wheel.jpg';
import pentrix from '@/assets/images/pentrix.jpg';
import { useLanguage } from '@/hooks/use-language';

const STATIC = [
  {
    code: 'MSN.01',
    title: 'SACSTOR',
    image: sacstor,
    secondaryImage: sacstorControlBoard,
    tags: ['ESP32', 'ATmega2560', 'PID', 'BNO055', 'BLDC', 'Web UI'] as const,
    link: 'https://www.spacrol.com/',
  },
  {
    code: 'MSN.02',
    title: 'Custom Control Board',
    image: reactionWheel,
    tags: ['ATmega2560', 'ESP32', 'IMU', 'PID', 'Fuzzy Logic'] as const,
    link: 'https://www.spacrol.com/',
  },
  {
    code: 'MSN.03',
    title: 'Pentrix',
    image: pentrix,
    tags: ['ESP32-S3', 'CC1101', 'PN532', 'nRF24L01+', 'RF', 'BMS'] as const,
    link: 'https://sxs.academy/urun/pentrix-v2/',
  },
] as const;

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects: ProjectCardProps[] = STATIC.map((s, i) => ({
    ...s,
    tags: [...s.tags],
    subtitle: t.projects.items[i].subtitle,
    overview: t.projects.items[i].overview,
    capabilities: t.projects.items[i].capabilities,
    focus: t.projects.items[i].focus,
    ui: t.projects.ui,
  }));

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative overflow-hidden border-y border-[var(--border)] bg-[color-mix(in_oklch,var(--surface)_60%,var(--background))] py-32 lg:py-48"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 blueprint-grid-sm opacity-[0.2]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <header className="mb-16 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <div className="label-chip">{t.projects.label}</div>
            <h2
              id="projects-title"
              className="mt-6 font-display text-5xl font-light leading-[0.95] tracking-[-0.025em] sm:text-6xl lg:text-[5.5rem]"
            >
              {t.projects.heading.replace('.', '')} <span className="italic text-[var(--accent)]">.</span>
            </h2>
          </div>
          <p className="max-w-md self-end border-l border-[var(--border)] pl-6 text-[var(--muted-foreground)]">
            {t.projects.description}
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.code} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
