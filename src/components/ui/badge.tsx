import type * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 border px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-[var(--border)] bg-[var(--surface-raised)] text-[var(--muted-foreground)]',
        accent:
          'border-[var(--accent)] bg-transparent text-[var(--accent)]',
        signal:
          'border-[var(--signal)] bg-transparent text-[var(--signal)]',
        solid:
          'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-foreground)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}

export { Badge, badgeVariants };
