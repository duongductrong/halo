"use client";

import { cn } from "@/lib/tw";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppLogo from "./app-logo";
import {
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

const menuItems = [
  {
    label: "Học viết",
    icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg",
    to: "/writing",
    disabled: true,
  },
  {
    label: "Ngữ pháp",
    icon: "https://cdn-icons-png.flaticon.com/512/12899/12899528.png",
    to: "/grammar",
    disabled: false,
  },
  {
    label: "Từ vựng",
    icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/5187f6694476a769d4a4e28149867e3e.svg",
    to: "/vocabulary",
    disabled: true,
  },
  {
    label: "Bảng xếp hạng",
    icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg",
    to: "/leaderboard",
    disabled: true,
  },
  {
    label: "Nhiệm vụ",
    icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg",
    to: "/missions",
    disabled: true,
  },
];

export const AppNavMain = () => {
  const pathname = usePathname();

  const isActive = (path: string) => new RegExp(path).test(pathname);

  return (
    <SidebarGroup className="px-4">
      <SidebarMenu className="gap-2">
        {menuItems.map((menu) => (
          <SidebarMenuItem key={menu.label}>
            <SidebarMenuButton
              isActive={isActive(menu.to)}
              aria-disabled={menu.disabled}
              className={cn(
                "border-2 border-transparent h-14 cursor-pointer gap-7 text-muted-foreground hover:text-muted-foreground active:text-primary active:bg-primary/10 rounded-lg",
                "data-[active=true]:border-primary data-[active=true]:bg-primary/15 data-[active=true]:text-primary",
                "aria-disabled:opacity-50 aria-disabled:cursor-not-allowed"
              )}
              asChild
            >
              <Link href={menu.to}>
                <Image
                  src={menu.icon}
                  width={36}
                  height={36}
                  alt={menu.label}
                />
                <span className="text-lg font-bold uppercase font-barlow-condensed">
                  {menu.label}
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export const AppNavLogo = () => {
  return (
    <SidebarHeader className="flex flex-row items-center gap-2 px-6 py-4 mt-4 font-barlow tracking-wider">
      {/* <svg
        width="24"
        height="24"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-7"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.0466 6.94893C13.3117 9.29263 11.9407 11.5036 9.77965 12.217C7.61864 12.9304 5.27705 11.945 4.20028 9.86925C2.36426 9.94784 0.697059 8.81691 0.0387687 7.07711C-0.0267444 6.90353 -0.00848092 6.70772 0.0878964 6.55036C0.18427 6.39301 0.347113 6.29312 0.525933 6.28172L2.97479 6.1241L2.36683 4.1153C2.20624 3.58462 2.31187 3.00517 2.64807 2.57221C2.9843 2.13929 3.50638 1.91044 4.03845 1.96284C5.3688 2.09486 6.25227 2.08953 6.68881 1.94681C7.12538 1.80412 7.8397 1.2886 8.83174 0.400302C9.23787 0.0372337 9.79183 -0.0892375 10.3062 0.0636745C10.8205 0.21659 11.2265 0.62843 11.3867 1.15988L11.9885 3.15066L14.0486 1.83545C14.2014 1.73779 14.3898 1.7222 14.5553 1.79349C14.7209 1.86478 14.8436 2.01437 14.8854 2.19585C15.2995 4.00108 14.5701 5.90973 13.0466 6.94893ZM6.78062 13.4458L5.66296 12.8897C5.27193 12.7038 4.80975 12.8793 4.62506 13.2839C4.44038 13.6884 4.60164 14.1721 4.98719 14.37L6.10549 14.9258C6.49649 15.1118 6.95874 14.9363 7.14342 14.5317C7.32811 14.1271 7.16682 13.6434 6.78126 13.4455L6.78062 13.4458ZM14.5831 9.99967C14.4017 9.89254 14.1868 9.86501 13.9858 9.92321C13.7848 9.98137 13.6143 10.1205 13.5118 10.3097L12.9021 11.4326C12.7025 11.8245 12.8383 12.3104 13.2087 12.529C13.579 12.7475 14.0494 12.6194 14.2701 12.24L14.8793 11.117C15.0938 10.723 14.9612 10.2228 14.5831 9.99967H14.5831Z"
          fill="#58CC02"
        />
      </svg> */}
      <AppLogo />
    </SidebarHeader>
  );
};
