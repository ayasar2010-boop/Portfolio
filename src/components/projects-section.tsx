import { ProjectCard, type ProjectCardProps } from '@/components/project-card';
import sacstor from '@/assets/images/sacstor.jpg';
import reactionWheel from '@/assets/images/reaction-wheel.jpg';
import pentrix from '@/assets/images/pentrix.jpg';

const PROJECTS: ProjectCardProps[] = [
  {
    code: 'MSN.01',
    title: 'SACSTOR',
    subtitle: '3-Axis Satellite Control & Stabilization Testbed',
    image: sacstor,
    overview:
      'High-performance experimental unit for validating complex control theories and real-time telemetry. Custom multi-layer PCB paired with a browser-native control infrastructure — no desktop tooling required.',
    capabilities: [
      'Quad-BLDC synchronized PWM via ESCON drivers',
      '9-axis orientation tracking via BNO055 IMU',
      'Integrated web interface accessible over WiFi',
      'Real-time STL viewer with dynamic telemetry graphs',
      'OTA firmware flashing to ATmega2560 with verification',
    ],
    focus: [
      'Dual-processor bridge: ESP32 ↔ ATmega2560 for isolated control and telemetry',
      'Plug-and-play research environment, zero external software',
      'Optimized PCB layout for power integrity and EMI reduction',
    ],
    tags: ['ESP32', 'ATmega2560', 'PID', 'BNO055', 'BLDC', 'Web UI'],
  },
  {
    code: 'MSN.02',
    title: 'Reaction Wheel',
    subtitle: '1-Axis Attitude Control Testbed',
    image: reactionWheel,
    overview:
      'High-precision setup for validating 1-axis stabilization algorithms, mimicking satellite attitude control. Specialized testbed for PID tuning and orientation stability analysis.',
    capabilities: [
      'Custom PCB with ATmega2560 core + ATmega16U2 USB bridge',
      'Zero-footprint web dashboard hosted on ESP32',
      'Real-time STL-based 3D viewer mirroring physical orientation',
      'OTA firmware flash + bidirectional WiFi-UART terminal',
      'Benchmarks PID against Fuzzy Logic controllers',
    ],
    focus: [
      'Multi-layer PCB integrating BNO055 IMU and hall-effect sensors',
      'Dual-MCU architecture: ESP32 telemetry, ATmega2560 control loop',
      'End-to-end ownership: PCB, firmware, electrical integration',
    ],
    tags: ['ATmega2560', 'ESP32', 'IMU', 'PID', 'Fuzzy Logic'],
  },
  {
    code: 'MSN.03',
    title: 'Pentrix',
    subtitle: 'Multi-Protocol Wireless Research Platform',
    image: pentrix,
    overview:
      'Handheld wireless research instrument — a high-performance adaptation of the T-Embed architecture, re-engineered to cover a broader band for frequency analysis, signal emulation, and hardware security research.',
    capabilities: [
      'CC1101 (Sub-GHz) + PN532 (NFC/RFID) + nRF24L01+ (2.4GHz)',
      'Custom multi-layer PCB with ESP32-S3 core',
      'Coverage across Sub-1GHz, 2.4GHz, and 13.56MHz NFC',
      'Dedicated power regulation & battery management',
      'Custom firmware for simultaneous interface multiplexing',
    ],
    focus: [
      'RF signal integrity — minimized EMI between dense wireless modules',
      'Dual-core ESP32-S3 for real-time signal processing and UI',
      'Transformed dev kit into professional research instrument',
    ],
    tags: ['ESP32-S3', 'CC1101', 'PN532', 'nRF24L01+', 'RF', 'BMS'],
  },
];

export function ProjectsSection() {
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
            <div className="label-chip">§ 02 / Selected Missions</div>
            <h2
              id="projects-title"
              className="mt-6 font-display text-5xl font-light leading-[0.95] tracking-[-0.025em] sm:text-6xl lg:text-[5.5rem]"
            >
              Missions <span className="italic text-[var(--accent)]">flown</span>.
            </h2>
          </div>
          <p className="max-w-md self-end border-l border-[var(--border)] pl-6 text-[var(--muted-foreground)]">
            A selection of completed embedded systems — hardware, firmware,
            and telemetry, from schematic to field deployment.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.code} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
