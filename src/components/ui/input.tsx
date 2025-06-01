import { cn } from "@/lib/tw";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

const inputVariants = cva(
  [
    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
    "dark:bg-input/30 border-input flex h-12 w-full min-w-0 rounded-md border-2 bg-transparent px-3 py-1",
    "text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-base",
    "file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base",
    "focus-visible:border-ring focus-visible:ring-ring/30 focus-visible:ring-[3px]",
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  ],
  {
    variants: {
      size: {
        default: "h-10",
        sm: "h-9",
        lg: "h-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export type InputProps = Omit<React.ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants>;

function Input({ className, type, size, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ className, size }))}
      {...props}
    />
  );
}

export { Input };
