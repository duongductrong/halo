import { cn } from "@/lib/tw";
import { ComponentProps } from "react";

export interface ExerciseSectionProps extends ComponentProps<"section"> {
  label: string;
  description: string;
}

export const ExerciseSection = ({
  className,
  children,
  label,
  description,
  ...props
}: ExerciseSectionProps) => {
  return (
    <section {...props} className={cn(className)}>
      <h3 className="text-lg font-bold mb-1">{label}</h3>
      <p className="text-base text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-col gap-2">{children}</div>
    </section>
  );
};
