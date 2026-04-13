import { CircuitBoard, Code2, Gauge, Waves } from 'lucide-react';
import oscilloscope from '@/assets/images/oscilloscope.jpg';
import { useLanguage } from '@/hooks/use-language';

const ICONS = [CircuitBoard, Gauge, Waves, Code2] as const;
const CODES = ['EXP.01', 'EXP.02', 'EXP.03', 'EXP.04'] as const;

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden py-32 lg:py-48"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 blueprint-grid-sm opacity-[0.25]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="space-y-16 lg:space-y-20">

          {/* Top row: editorial text + oscilloscope photo */}
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: text */}
            <div>
              <div className="label-chip">{t.about.label}</div>
              <h2
                id="about-title"
                className="mt-6 font-display text-5xl font-light leading-[0.95] tracking-[-0.025em] sm:text-6xl lg:text-[5.5rem]"
              >
                {t.about.headingA}
                <span className="italic text-[var(--accent)]">{t.about.headingB}</span>
                {t.about.headingC && (
                  <>
                    <br />
                    <span className="italic">{t.about.headingC}</span>
                  </>
                )}
              </h2>

              <div className="mt-10 space-y-5 border-l border-[var(--border)] pl-6 text-[var(--muted-foreground)]">
                <p className="leading-relaxed">{t.about.p1}</p>
                <p className="leading-relaxed">{t.about.p2}</p>
                <div className="pt-4 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--foreground)]">
                  {t.about.location}
                </div>
              </div>
            </div>

            {/* Right: oscilloscope photo */}
            <div className="reg-marks relative h-full min-h-[280px] overflow-hidden border border-[var(--border)] lg:min-h-0 lg:self-stretch">
              <img
                src={oscilloscope}
                alt="Signal analysis on oscilloscope"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover grayscale-[20%] contrast-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--background)]/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                {t.about.imageCaption}
              </span>
            </div>
          </div>

          {/* Bottom: expertise cards full width */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.expertise.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <article
                  key={CODES[i]}
                  className="reg-marks group relative flex flex-col gap-4 border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]"
                >
                  <header className="flex items-start justify-between gap-3">
                    <Icon
                      size={28}
                      strokeWidth={1.25}
                      className="text-[var(--accent)] transition-transform group-hover:scale-110"
                    />
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                      {CODES[i]}
                    </span>
                  </header>
                  <h3 className="font-display text-xl leading-snug tracking-tight text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
