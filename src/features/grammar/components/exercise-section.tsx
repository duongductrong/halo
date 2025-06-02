import { cn } from "@/lib/tw";
import { ComponentProps } from "react";

export interface ExerciseSectionProps extends ComponentProps<"section"> {
  label: string;
}

export const ExerciseSection = ({
  className,
  children,
  label,
  ...props
}: ExerciseSectionProps) => {
  return (
    <section {...props} className={cn(className)}>
      <h3 className="text-lg font-bold mb-4">{label}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </section>
  );
};
