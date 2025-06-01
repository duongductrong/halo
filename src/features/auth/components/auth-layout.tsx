import { cn } from "@/lib/tw";
import { ComponentProps } from "react";

export interface AuthLayoutProps extends ComponentProps<"section"> {}

export const AuthLayout = ({ className, ...props }: AuthLayoutProps) => {
  return (
    <section
      {...props}
      className={cn("flex h-dvh w-full items-center justify-center", className)}
    />
  );
};
