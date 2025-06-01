import { cn } from "@/lib/tw";
import { ComponentProps } from "react";

export interface AppContentProps extends ComponentProps<"div"> {}

const AppContent = ({ children, className, ...props }: AppContentProps) => {
  return (
    <div {...props} className={cn("max-w-6xl w-full mx-auto", className)}>
      {children}
    </div>
  );
};

export default AppContent;
