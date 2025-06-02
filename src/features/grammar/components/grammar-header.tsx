import { Button } from "@/components/ui/button";
import { urls } from "@/constants/urls";
import { cn } from "@/lib/tw";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { ComponentProps } from "react";

export interface GrammarHeaderProps extends ComponentProps<"h2"> {}

export const GrammarHeader = ({
  className,
  children,
  ...props
}: GrammarHeaderProps) => {
  return (
    <h2 className={cn("text-title font-bold", className)} {...props}>
      <Button variant="ghost" size="icon" asChild>
        <Link href={urls.grammar.index}>
          <ChevronLeftIcon className="size-4" />
        </Link>
      </Button>

      {children}
    </h2>
  );
};
