import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {}

export const Badge: React.FC<BadgeProps> = ({
  className,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={clsx(
        'border-border bg-surface text-text-muted hover:border-primary hover:text-text inline-flex items-center rounded-full border px-4 py-2 text-sm transition-colors',
        className
      )}
      {...props}
    />
  );
};
