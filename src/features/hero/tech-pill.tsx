type TechPillProps = {
  label: string;
};

export const TechPill: React.FC<TechPillProps> = ({ label }: TechPillProps) => {
  return (
    <span className="border-border bg-surface text-text-muted hover:border-primary hover:text-text rounded-full border px-4 py-2 text-sm transition-colors">
      {label}
    </span>
  );
};
