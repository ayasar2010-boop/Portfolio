import { useLanguage } from '@/hooks/use-language';

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-6 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-[var(--muted-foreground)] sm:flex-row sm:items-center lg:px-12">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center border border-[var(--border-strong)] text-[var(--foreground)]">
            AYE
          </span>
          <span>Ali Yaşar Erdoğan · {year}</span>
        </div>
        <div className="flex items-center gap-6">
          <span>EOM</span>
          <span className="flex items-center gap-2">
            <span className="live-dot" aria-hidden />
            {t.footer.signal}
          </span>
        </div>
      </div>
    </footer>
  );
}
