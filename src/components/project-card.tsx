import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface ProjectCardProps {
  code: string;
  title: string;
  subtitle: string;
  image: string;
  overview: string;
  capabilities: readonly string[];
  focus: readonly string[];
  tags: readonly string[];
}

export function ProjectCard({
  code,
  title,
  subtitle,
  image,
  overview,
  capabilities,
  focus,
  tags,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <article className="reg-marks group flex h-full flex-col border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--accent)]">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[var(--border)]">
        <img
          src={image}
          alt={`${title} — ${subtitle}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent" />
        <span className="absolute left-4 top-4 bg-[var(--background)]/80 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--accent)] backdrop-blur">
          {code}
        </span>
      </div>

      {/* Header */}
      <header className="flex flex-col gap-2 border-b border-dashed border-[var(--border)] p-6 pb-5">
        <h3 className="font-display text-2xl leading-tight tracking-tight text-[var(--foreground)]">
          {title}
        </h3>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
          {subtitle}
        </p>
      </header>

      {/* Overview */}
      <div className="flex flex-1 flex-col gap-5 p-6 pt-5">
        <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
          {overview}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-4 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted-foreground)] transition-colors hover:text-[var(--accent)]"
        >
          <span>{open ? 'Collapse datasheet' : 'Expand datasheet'}</span>
          <ChevronDown
            size={14}
            className={cn(
              'transition-transform duration-300',
              open && 'rotate-180',
            )}
          />
        </button>

        {open && (
          <div className="space-y-5 border-t border-[var(--border)] pt-5">
            <div>
              <div className="label-chip mb-3">Capabilities</div>
              <ul className="space-y-2 text-xs leading-relaxed text-[var(--muted-foreground)]">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex gap-3">
                    <span className="mt-2 h-px w-3 shrink-0 bg-[var(--accent)]" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="label-chip mb-3">Engineering Focus</div>
              <ul className="space-y-2 text-xs leading-relaxed text-[var(--muted-foreground)]">
                {focus.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-2 h-px w-3 shrink-0 bg-[var(--accent)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
