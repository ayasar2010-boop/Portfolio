import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden border-t border-[var(--border)] py-32 lg:py-48"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 blueprint-grid-sm opacity-[0.25]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in oklch, var(--accent) 35%, transparent), transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="label-chip">{t.contact.label}</div>

        <div className="mt-8 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          <div>
            <h2
              id="contact-title"
              className="font-display text-5xl font-light leading-[0.95] tracking-[-0.025em] sm:text-7xl lg:text-[6.5rem]"
            >
              {t.contact.heading}
            </h2>

            <p className="mt-10 max-w-lg border-l border-[var(--border)] pl-6 leading-relaxed text-[var(--muted-foreground)]">
              {t.contact.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="mailto:ayasar2010@gmail.com">
                  <Mail size={16} />
                  <span>{t.contact.sendButton}</span>
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href="https://www.linkedin.com/in/ali-ya%C5%9Far-erdo%C4%9Fan-0957ba228/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>
              </Button>
            </div>
          </div>

          {/* Info panel */}
          <aside className="flex flex-col gap-4">
            {t.contact.quickInfo.map((item) => (
              <div
                key={item.label}
                className="reg-marks flex items-baseline justify-between border border-[var(--border)] bg-[var(--surface)] px-6 py-5"
              >
                <span className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                  {item.label}
                </span>
                <span
                  className={`text-right font-display text-sm tracking-tight ${
                    item.label === 'Status' || item.label === 'Durum'
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--foreground)]'
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ))}
            <div className="mt-2 border-t border-[var(--border)] pt-4 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-[var(--muted-foreground)] tick-rule">
              <div className="pb-3">{t.contact.location}</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
