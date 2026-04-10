import { CircuitBoard, Code2, Gauge, Waves } from 'lucide-react';

const EXPERTISE = [
  {
    code: 'EXP.01',
    icon: CircuitBoard,
    title: 'Multi-Architecture Firmware',
    description:
      'Deep firmware work across 8-bit AVR through 32-bit ARM Cortex-M. Bare-metal, RTOS, bootloaders, OTA.',
  },
  {
    code: 'EXP.02',
    icon: Gauge,
    title: 'High-Precision Control',
    description:
      'PID, fuzzy-logic, and state-space controllers validated on physical testbeds with real sensor noise.',
  },
  {
    code: 'EXP.03',
    icon: Waves,
    title: 'Analog Front-End Design',
    description:
      'High-gain signal chains, Sallen-Key filters, multi-stage noise reduction for VLF and precision sensing.',
  },
  {
    code: 'EXP.04',
    icon: Code2,
    title: 'Full-Stack Integration',
    description:
      'Telemetry dashboards, web-based control UIs, wireless firmware deployment, 3D orientation viewers.',
  },
] as const;

export function AboutSection() {
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
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Editorial column */}
          <div>
            <div className="label-chip">§ 01 / Dossier</div>
            <h2
              id="about-title"
              className="mt-6 font-display text-5xl font-light leading-[0.95] tracking-[-0.025em] sm:text-6xl lg:text-[5.5rem]"
            >
              Bridging{' '}
              <span className="italic text-[var(--accent)]">theory</span>
              <br /> and{' '}
              <span className="italic">hardware</span>.
            </h2>

            <div className="mt-10 max-w-md space-y-5 border-l border-[var(--border)] pl-6 text-[var(--muted-foreground)]">
              <p className="leading-relaxed">
                I design embedded systems where control theory meets the messy
                reality of sensor noise, EMI, and thermal drift. Satellite
                attitude hardware, reaction wheels, precision instrument
                front-ends.
              </p>
              <p className="leading-relaxed">
                Full lifecycle ownership: circuit simulation, multi-layer PCB
                layout, firmware, telemetry, and the web dashboards that make
                it all observable from a browser.
              </p>
              <div className="pt-4 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--foreground)]">
                <span className="text-[var(--accent)]">→</span> Based in
                İstanbul · Working globally
              </div>
            </div>
          </div>

          {/* Expertise datasheet */}
          <div className="grid gap-4 sm:grid-cols-2">
            {EXPERTISE.map((item) => (
              <article
                key={item.code}
                className="reg-marks group relative flex flex-col gap-4 border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]"
              >
                <header className="flex items-start justify-between gap-3">
                  <item.icon
                    size={28}
                    strokeWidth={1.25}
                    className="text-[var(--accent)] transition-transform group-hover:scale-110"
                  />
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                    {item.code}
                  </span>
                </header>
                <h3 className="font-display text-xl leading-snug tracking-tight text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
