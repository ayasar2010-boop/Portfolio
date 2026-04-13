import { ArrowDown, Crosshair } from 'lucide-react';
import profileImage from '@/assets/images/workbench.jpg';
import { useParallax } from '@/hooks/use-parallax';
import { useLanguage } from '@/hooks/use-language';

const HERO_FIRST = 'ALİ YAŞAR';
const HERO_LAST = 'ERDOĞAN';

function SplitLine({
  text,
  delayBase,
}: {
  text: string;
  delayBase: number;
}) {
  return (
    <span aria-hidden className="inline-flex">
      {text.split('').map((ch, i) => (
        <span
          key={`${text}-${i}`}
          className="inline-block opacity-0"
          style={{
            animation: `reveal 0.9s cubic-bezier(0.2,0.7,0.2,1) forwards`,
            animationDelay: `${delayBase + i * 0.035}s`,
          }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const scrollY = useParallax();
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 lg:pt-32"
    >
      {/* Blueprint grid layer — parallax */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 blueprint-grid"
        style={{ transform: `translate3d(0, ${scrollY * 0.18}px, 0)` }}
      />
      {/* Sub-grid dust */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 blueprint-grid-sm opacity-[0.35]"
      />
      {/* Warm accent halo, top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in oklch, var(--accent) 40%, transparent), transparent 70%)',
          transform: `translate3d(0, ${scrollY * -0.1}px, 0)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        {/* Top meta bar */}
        <div
          className="mb-12 flex items-center justify-between border-b border-[var(--border)] pb-4 tick-rule"
          style={{ opacity: 0, animation: 'reveal 0.9s ease-out 0.1s forwards' }}
        >
          <div className="label-chip">
            <span>{t.hero.meta}</span>
          </div>
          <div className="hidden items-center gap-6 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted-foreground)] sm:flex">
            <span>N 39°55′</span>
            <span>E 32°51′</span>
            <span className="flex items-center gap-2">
              <span className="live-dot" aria-hidden /> {t.hero.online}
            </span>
          </div>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Left — editorial name block */}
          <div>
            <h1
              id="hero-title"
              className="font-display text-[clamp(2.6rem,7.5vw,7rem)] font-light leading-[0.88] tracking-[-0.035em] text-[var(--foreground)]"
            >
              <span className="block">
                <SplitLine text={HERO_FIRST} delayBase={0.25} />
              </span>
              <span className="mt-2 flex items-baseline gap-6">
                <span className="text-[var(--accent)] italic">
                  <SplitLine text={HERO_LAST} delayBase={0.55} />
                </span>
              </span>
            </h1>

            <div
              className="mt-10 max-w-xl border-l border-[var(--accent)] pl-6"
              style={{
                opacity: 0,
                animation: 'reveal 0.9s ease-out 1.2s forwards',
              }}
            >
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                {t.hero.role}
              </p>
              <p className="mt-4 text-balance text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
                {t.hero.description}
              </p>
            </div>

            {/* Skill rail */}
            <div
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--border)] pt-6 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[var(--muted-foreground)]"
              style={{
                opacity: 0,
                animation: 'reveal 0.9s ease-out 1.4s forwards',
              }}
            >
              {['STM32', 'ESP32', 'AVR', 'PCB', 'Control Theory', 'RF'].map((s, i) => (
                <span key={s} className="inline-flex items-center gap-2">
                  <span className="text-[var(--accent)]">{String(i + 1).padStart(2, '0')}</span>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right — profile datasheet */}
          <aside
            className="relative mt-4 lg:mt-16"
            style={{
              opacity: 0,
              animation: 'reveal 1s ease-out 0.8s forwards',
            }}
          >
            <div className="reg-marks relative aspect-[4/5] w-full max-w-sm border border-[var(--border)] bg-[var(--surface)] p-3">
              <img
                src={profileImage}
                alt="Ali Yaşar Erdoğan at the workbench"
                width={480}
                height={600}
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover grayscale-[15%] contrast-[1.05]"
              />
              <div className="pointer-events-none absolute inset-3 border border-[var(--accent)]/20" />
              <Crosshair
                className="pointer-events-none absolute right-5 top-5 text-[var(--accent)]"
                size={14}
              />
            </div>

            {/* Data chips */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="data-chip">
                <span>{t.hero.chips.base}</span>
                <span>Ankara, TR</span>
              </div>
              <div className="data-chip">
                <span>{t.hero.chips.role}</span>
                <span>{t.hero.chips.roleValue}</span>
              </div>
              <div className="data-chip">
                <span>{t.hero.chips.status}</span>
                <span className="text-[var(--accent)]">{t.hero.chips.statusValue}</span>
              </div>
              <div className="data-chip">
                <span>{t.hero.chips.stack}</span>
                <span>HW · FW · PCB</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex items-center gap-4 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
          <ArrowDown className="animate-bounce text-[var(--accent)]" size={14} />
          <span>{t.hero.scroll}</span>
          <div className="h-px flex-1 bg-[var(--border)] tick-rule" />
        </div>
      </div>
    </section>
  );
}
