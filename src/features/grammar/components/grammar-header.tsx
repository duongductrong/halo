import { cn } from "@/lib/tw";
import { ComponentProps } from "react";

export interface GrammarHeaderProps extends ComponentProps<"h2"> {}

export const GrammarHeader = ({
  className,
  children,
  ...props
}: GrammarHeaderProps) => {
  return (
    <h2 className={cn("text-title font-bold", className)} {...props}>
      {children}
    </h2>
  );
};
