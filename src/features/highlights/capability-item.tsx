import { CheckCircle2 } from 'lucide-react';

interface CapabilityItemProps {
  children: React.ReactNode;
}

export const CapabilityItem: React.FC<CapabilityItemProps> = ({
  children,
}: CapabilityItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 size={20} className="text-primary" />

      <span className="text-text-muted">{children}</span>
    </div>
  );
};
