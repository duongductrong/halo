import { cn } from "@/lib/tw";
import { ComponentProps } from "react";

export interface AppContentProps extends ComponentProps<"div"> {
  fluid?: boolean;
}

const AppContent = ({
  children,
  className,
  fluid,
  ...props
}: AppContentProps) => {
  return (
    <div
      {...props}
      className={cn(
        "max-w-6xl w-full mx-auto",
        fluid && "max-w-full w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default AppContent;
