import AppContent from "@/components/app-content";
import { PropsWithChildren } from "react";

export interface GrammarLayoutProps extends PropsWithChildren {}

export const GrammarLayout = ({ children }: GrammarLayoutProps) => {
  return <AppContent className="py-8 px-4">{children}</AppContent>;
};
