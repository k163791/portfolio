import { Card } from '../../components/ui/card';

interface HighlightCardProps {
  value: string;
  label: string;
}

export const HighlightCard: React.FC<HighlightCardProps> = ({
  value,
  label,
}: HighlightCardProps) => {
  return (
    <Card className="text-center">
      <p className="text-primary text-5xl font-bold">{value}</p>
      <p className="text-text-muted mt-3">{label}</p>
    </Card>
  );
};
