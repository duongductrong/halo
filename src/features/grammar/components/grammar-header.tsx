import { cn } from "@/lib/tw";
import { ComponentProps } from "react";

export interface GrammarHeaderProps
  extends Omit<ComponentProps<"h2">, "children"> {}

export const GrammarHeader = ({ className, ...props }: GrammarHeaderProps) => {
  return (
    <h2 className={cn("text-2xl font-bold", className)} {...props}>
      Luyện ngữ pháp
    </h2>
  );
};
