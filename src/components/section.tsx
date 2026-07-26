import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  ...props
}: SectionProps) => {
  return (
    <section className={clsx('py-20 md:py-20', className)} {...props}>
      {children}
    </section>
  );
};
