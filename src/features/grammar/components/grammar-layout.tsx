import AppContent, { AppContentProps } from "@/components/app-content";
import { cn } from "@/lib/tw";

export interface GrammarLayoutProps extends AppContentProps {}

export const GrammarLayout = ({
  className,
  children,
  ...props
}: GrammarLayoutProps) => {
  return (
    <AppContent className={cn("py-8 px-4", className)} {...props}>
      {children}
    </AppContent>
  );
};
