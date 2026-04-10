import { Activity, Cpu, Radar, Settings } from 'lucide-react';
import vlfDetector from '@/assets/images/vlf-detector.jpg';

const HIGHLIGHTS = [
  {
    code: 'TX',
    icon: Cpu,
    title: 'Power Electronics',
    description:
      'Custom H-Bridge transmitter for maximum EM field penetration.',
  },
  {
    code: 'AFE',
    icon: Activity,
    title: 'Analog Front-End',
    description:
      'High-gain chain with Sallen-Key active filters, multi-stage noise reduction.',
  },
  {
    code: 'DSP',
    icon: Settings,
    title: 'Digital Signal Processing',
    description:
      'Real-time phase analysis on STM32 for ferrous / non-ferrous discrimination.',
  },
  {
    code: 'GND',
    icon: Radar,
    title: 'Ground Balance',
    description:
      'Adaptive algorithms that filter soil mineralization artifacts.',
  },
] as const;

function SignalWave() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 60"
      className="h-14 w-full text-[var(--accent)]"
      preserveAspectRatio="none"
    >
      <path
        d="M0 30 Q 20 5, 40 30 T 80 30 T 120 30 T 160 30 T 200 30 T 240 30 T 280 30 T 320 30 T 360 30 T 400 30"
        stroke="currentColor"
        strokeWidth="1.25"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M0 30 Q 10 10, 20 30 T 40 30 T 60 30 T 80 30 T 100 30 T 120 30 T 140 30 T 160 30 T 180 30 T 200 30 T 220 30 T 240 30 T 260 30 T 280 30 T 300 30 T 320 30 T 340 30 T 360 30 T 380 30 T 400 30"
        stroke="currentColor"
        strokeWidth="0.75"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

export function OngoingSection() {
  return (
    <section
      id="ongoing"
      aria-labelledby="ongoing-title"
      className="relative overflow-hidden py-32 lg:py-48"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 blueprint-grid-sm opacity-[0.25]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in oklch, var(--accent) 40%, transparent), transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left — editorial copy */}
          <div>
            <div className="flex items-center gap-3">
              <div className="label-chip">§ 03 / In Development</div>
              <span className="flex items-center gap-2 border border-[var(--signal)] px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--signal)]">
                <span className="live-dot" aria-hidden /> Live Telemetry
              </span>
            </div>

            <h2
              id="ongoing-title"
              className="mt-6 font-display text-5xl font-light leading-[0.95] tracking-[-0.025em] sm:text-6xl lg:text-[5.25rem]"
            >
              VLF Metal <br />
              <span className="italic text-[var(--accent)]">Detection</span> System
            </h2>

            <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              Advanced Analog Signal Conditioning · Target Discrimination
            </p>

            <p className="mt-8 max-w-xl border-l border-[var(--border)] pl-6 leading-relaxed text-[var(--muted-foreground)]">
              An ongoing R&amp;D project building a high-performance Very Low
              Frequency metal detector. Goal: extreme detection depth and
              precise target identification in highly mineralized soil, via
              layered analog and digital processing.
            </p>

            {/* Milestone */}
            <div className="mt-10 border border-[var(--border)] bg-[var(--surface)] p-5">
              <div className="label-chip mb-2">Current Milestone</div>
              <p className="text-sm leading-relaxed text-[var(--foreground)]">
                Optimizing BMS for extended field use. Fine-tuning ADC
                sampling rate for higher resolution on weak return signals.
              </p>
              <div className="mt-4">
                <SignalWave />
                <div className="mt-2 flex justify-between font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                  <span>f = 18.75 kHz</span>
                  <span>SNR ↑</span>
                  <span>Δϕ live</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — image + highlights */}
          <div className="space-y-6">
            <div className="reg-marks relative aspect-[4/3] w-full overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
              <img
                src={vlfDetector}
                alt="VLF Metal Detection System — PCB and electronics"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--foreground)]">
                <span className="text-[var(--accent)]">›</span> STM32 ·
                Custom Power Electronics · LVGL GUI
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <article
                  key={h.code}
                  className="reg-marks group flex flex-col gap-3 border border-[var(--border)] bg-[var(--surface-raised)] p-5 transition-colors hover:border-[var(--accent)]"
                >
                  <header className="flex items-center justify-between">
                    <h.icon
                      size={22}
                      strokeWidth={1.25}
                      className="text-[var(--accent)]"
                    />
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                      {h.code}
                    </span>
                  </header>
                  <h3 className="text-sm font-semibold text-[var(--foreground)]">
                    {h.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[var(--muted-foreground)]">
                    {h.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
