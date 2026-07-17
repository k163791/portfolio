import clsx from 'clsx';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  className,
}: SectionProps) => {
  return (
    <section className={clsx('py-20 md:py-28', className)}>{children}</section>
  );
};
