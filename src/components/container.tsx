import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}: ContainerProps) => {
  return (
    <div className={clsx('mx-auto w-full max-w-7xl px-6 lg:px-8', className)}>
      {children}
    </div>
  );
};
