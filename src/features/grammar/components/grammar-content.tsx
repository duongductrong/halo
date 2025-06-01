import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { englishGrammars } from "@/constants/english";
import { urls } from "@/constants/urls";
import { cn } from "@/lib/tw";
import Link from "next/link";
import { ComponentProps } from "react";

export interface GrammarContentProps extends ComponentProps<"div"> {}

export const GrammarContent = ({
  className,
  ...props
}: GrammarContentProps) => {
  return (
    <div
      {...props}
      className={cn("grid grid-cols-1 md:grid-cols-2 gap-4", className)}
    >
      {englishGrammars.map((grammar) => (
        <Card
          key={grammar.id}
          className="cursor-pointer hover:bg-muted rounded-lg gap-0 h-full"
        >
          <CardContent className="flex flex-col gap-2 h-full">
            <h3 className="text-xl font-bold">{grammar.name}</h3>
            <p className="text-base text-muted-foreground">
              {grammar.description}
            </p>
            <div className="mt-auto">
              <Button asChild>
                <Link href={urls.grammar.detail.replace(":id", grammar.id)}>
                  Luyện tập
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
