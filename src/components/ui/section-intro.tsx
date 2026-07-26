import clsx from 'clsx';

interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  description: string;
  centered?: boolean;
}

export const SectionIntro: React.FC<SectionIntroProps> = ({
  eyebrow,
  title,
  description,
  centered,
}: SectionIntroProps) => {
  return (
    <div className={clsx('max-w-3xl', centered && 'mx-auto text-center')}>
      {eyebrow && (
        <p className="text-primary mb-3 text-sm font-semibold tracking-[0.2em] uppercase">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>

      {description && (
        <p className="text-text-muted mt-6 text-lg leading-8">{description}</p>
      )}
    </div>
  );
};
