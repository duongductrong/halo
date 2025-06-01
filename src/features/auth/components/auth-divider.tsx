import { cn } from "@/lib/tw";
import { ComponentProps } from "react";

export interface AuthDividerProps extends ComponentProps<"div"> {}

export const AuthDivider = ({
  className,
  children,
  ...props
}: AuthDividerProps) => {
  return (
    <div {...props} className={cn("relative", className)}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-background px-2 text-muted-foreground">
          {children}
        </span>
      </div>
    </div>
  );
};
