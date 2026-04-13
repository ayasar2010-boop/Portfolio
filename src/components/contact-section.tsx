import { ArrowUpRight, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { useState } from 'react';

export function ContactSection() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/mzdybeye', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

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

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="mt-10 space-y-4 max-w-lg">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--muted-foreground)] mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--muted-foreground)] mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
              </div>
              <div>
                <label className="block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--muted-foreground)] mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>
              <div className="flex items-center gap-4">
                <Button type="submit" size="lg" disabled={status === 'sending' || status === 'sent'}>
                  <Send size={16} />
                  <span>
                    {status === 'sending'
                      ? t.contact.form.sending
                      : status === 'sent'
                      ? t.contact.form.sent
                      : t.contact.sendButton}
                  </span>
                </Button>
                {status === 'error' && (
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-red-400">
                    {t.contact.form.error}
                  </span>
                )}
              </div>
            </form>

            <div className="mt-6">
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
