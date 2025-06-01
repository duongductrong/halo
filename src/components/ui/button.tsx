import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/tw";

const buttonVariants = cva(
  [
    "font-barlow",
    "font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
    "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-floating-primary active:shadow-sinking-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-floating-secondary active:shadow-sinking-secondary",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: [
          "border border-secondary-accent text-muted-foreground bg-background",
          "hover:bg-accent hover:text-accent-foreground dark:bg-input/30",
          "dark:border-input dark:hover:bg-input/50",
          "shadow-floating-outline active:shadow-sinking-outline",
        ],
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 pb-3 active:pb-2 has-[>svg]:px-3",
        sm: "h-9 rounded-md gap-1.5 px-3 pb-3 active:pb-2 has-[>svg]:px-2.5",
        lg: "h-12 rounded-md px-6 py-3 pb-4 active:pb-3 has-[>svg]:px-4 text-base",
        icon: "size-9",
      },
      rounded: {
        default: "rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
