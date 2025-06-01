import AppContent from "@/components/app-content";
import { PropsWithChildren } from "react";

export interface WritingLayoutProps extends PropsWithChildren {}

export const WritingLayout = ({ children }: WritingLayoutProps) => {
  return <AppContent className="py-8 px-4">{children}</AppContent>;
};
