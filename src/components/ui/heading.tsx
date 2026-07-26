import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const headingVariants = cva(['text-white capitalize font-semibold'], {
  variants: {
    variant: {
      1: 'text-lg',
      2: 'text-2xl',
      3: 'text-3xl',
      4: 'text-4xl',
    },
  },
  defaultVariants: {
    variant: 1,
  },
});

interface HeadingProps extends VariantProps<typeof headingVariants> {
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  variant,
  children,
}: HeadingProps) => {
  return <p className={clsx(headingVariants({ variant }))}>{children}</p>;
};
