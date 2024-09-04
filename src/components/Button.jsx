import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../utils';

const buttonVariants = cva(
  'rounded-full px-6 duration-200 text-[13px] font-bold',
  {
    variants: {
      variant: {
        primary: 'text-white bg-main-purple hover:bg-main-purple-hover',
        secondary: 'text-main-purple bg-main-purple/10 hover:bg-main-purple/25',
        destructive: 'text-white bg-red hover:bg-red-hover',
        ghost: 'text-lines bg-transparent hover:text-black focus:outline-none',
      },
      size: {
        sm: 'h-10',
        lg: 'h-12',
      },
      isFullWidth: {
        true: 'w-full',
      },
      isBorderStraight: {
        true: 'border border-main-purple rounded-l-none',
      },
      isDisabled: {
        true: 'cursor-not-allowed opacity-25 hover:bg-main-purple',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'lg',
    },
  },
);

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean
// }

// const Button =
//   React.forwardRef <
//   (({ className, variant, size, ...props }, ref) => {
//     const Comp = "button";
//     return (
//       <Comp
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref}
//         {...props}
//       />
//     );
//   });
// Button.displayName = "Button";

const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      isDisabled,
      isFullWidth,
      isBorderStraight,
      ...props
    },
    ref,
  ) => {
    const Comp = 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            isDisabled,
            isFullWidth,
            isBorderStraight,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
