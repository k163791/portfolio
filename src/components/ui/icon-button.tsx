import { Button } from './button';

type IconButtonProps = {
  icon: React.ReactNode;
  onClick: () => void;
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  ...props
}: IconButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-10 w-10 rounded-full p-0"
      {...props}
    >
      {icon}
    </Button>
  );
};
