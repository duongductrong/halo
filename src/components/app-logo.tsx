import { cn } from "@/lib/tw";
import { ComponentProps } from "react";
import SmileIcon from "./icons/smile-icon";

export type AppLogoProps = ComponentProps<"div">;

const AppLogo = ({ className, ...props }: AppLogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <span className="text-2xl font-extrabold text-primary">Hola</span>
      <SmileIcon />
    </div>
  );
};

export default AppLogo;
