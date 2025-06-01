import React from "react";
import { SidebarProvider } from "./ui/sidebar";

export interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};

export default AppLayout;
