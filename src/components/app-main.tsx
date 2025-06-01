import React from "react";
import { SidebarInset } from "./ui/sidebar";

export interface AppMainProps {
  children: React.ReactNode;
}

export const AppMain = ({ children }: AppMainProps) => {
  return <SidebarInset>{children}</SidebarInset>;
};
