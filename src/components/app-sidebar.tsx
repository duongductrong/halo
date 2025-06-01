 

import { AppNavLogo, AppNavMain } from "./app-navs";
import { Sidebar } from "./ui/sidebar";

export interface AppSidebarProps {}

export const AppSidebar = ({}: AppSidebarProps) => {
  return (
    <Sidebar collapsible="icon" className="border-r border-border h-dvh">
      <AppNavLogo />
      <AppNavMain />
    </Sidebar>
  );
};
