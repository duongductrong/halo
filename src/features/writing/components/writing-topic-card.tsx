import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EnglishLevel, englishLevelDescription } from "@/constants/english";
import { cn } from "@/lib/tw";
import { ComponentProps } from "react";

export interface WritingTopicCardProps extends ComponentProps<"div"> {
  title: string;
  description: string;
  levels: EnglishLevel[];
  disabled?: boolean;
}

export const WritingTopicCard = ({
  description,
  title,
  className,
  levels,
  disabled = false,
  ...props
}: WritingTopicCardProps) => {
  return (
    <Card
      {...props}
      aria-disabled={disabled}
      className={cn(
        "cursor-pointer hover:bg-secondary",
        disabled && "cursor-not-allowed aria-disabled:opacity-50",
        className
      )}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <p>{title}</p>

          <div className="flex gap-2">
            {levels.map((level) => (
              <Badge key={level} variant="outline">
                {englishLevelDescription[level]}
              </Badge>
            ))}
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
