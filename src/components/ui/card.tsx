import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={clsx(
        'border-border bg-card shadow-card rounded-2xl border p-8',
        className
      )}
      {...props}
    />
  );
};
