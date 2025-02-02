'use client';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'h-auto min-h-14 w-full max-w-[353px] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 text-lg font-bold',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary border',
        cta: 'bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-[52px] group drop-shadow-[0_34px_65px_rgba(21,31,48,0.38)]',
        menuItem:
          'bg-accent text-accent-foreground rounded-none text-xs text-center text-wrap font-bold uppercase w-full min-h-[38px]',
        subMenuItem:
          'bg-white hover:bg-[#E9F1FF] text-accent-foreground rounded-none text-xs text-left justify-start font-bold uppercase min-w-[102px] relative',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary hover:text-accent text-base font-semibold justify-start w-fit group',
        circle:
          'rounded-full bg-primary-foreground text-primary hover:bg-accent hover:text-accent-foreground text-center',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        menuItem: 'h-[54px] py-1 px-4',
        subMenuItem: 'py-3.5 px-4 w-full h-auto min-h-10',
        circle: 'w-[169px] h-[169px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
