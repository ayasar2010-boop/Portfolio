import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/theme-provider';

const NAV_ITEMS = [
  { num: '01', label: 'About', href: '#about' },
  { num: '02', label: 'Missions', href: '#projects' },
  { num: '03', label: 'Live', href: '#ongoing' },
  { num: '04', label: 'Contact', href: '#contact' },
] as const;

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[color-mix(in_oklch,var(--background)_80%,transparent)] backdrop-blur-xl border-b border-[var(--border)]'
          : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12"
      >
        <button
          type="button"
          onClick={() => go('#hero')}
          className="group flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[var(--foreground)]"
          aria-label="Return to top"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center border border-[var(--border-strong)] transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
            <span aria-hidden>AYE</span>
          </span>
          <span className="hidden text-[var(--muted-foreground)] sm:inline">
            <span className="text-[var(--accent)]">/</span> Erdoğan, A.Y.
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => go(item.href)}
              className="group flex items-center gap-2 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              <span className="text-[var(--accent)]">§{item.num}</span>
              <span>{item.label}</span>
            </button>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="ml-2 flex h-9 w-9 items-center justify-center border border-[var(--border)] text-[var(--muted-foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center border border-[var(--border)] text-[var(--muted-foreground)]"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center border border-[var(--border)] text-[var(--foreground)]"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] md:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => go(item.href)}
                className="flex items-center gap-3 border-b border-[var(--border)] py-4 text-left font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-foreground)] last:border-b-0"
              >
                <span className="text-[var(--accent)]">§{item.num}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
