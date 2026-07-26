import { Button } from '../../components/ui/button';

export const HeroActions: React.FC = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button>View Projects</Button>
      <Button variant="secondary">Download Resume</Button>
    </div>
  );
};
