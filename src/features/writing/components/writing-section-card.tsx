import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/tw";
import { LockIcon, PlayIcon, UnlockIcon } from "lucide-react";
import { ComponentProps } from "react";

export interface WritingSectionCardProps extends ComponentProps<"div"> {
  title: string;
  description: string;
  state?: "unlocked" | "completed" | "inprogress" | "locked";

  onStart?: () => void;
  onContinue?: () => void;
  onUnlock?: () => void;
  onLock?: () => void;
}

export const WritingSectionCard = ({
  description,
  title,
  className,
  state = "locked",
  onStart,
  onContinue,
  onUnlock,
  // onLock,
  ...props
}: WritingSectionCardProps) => {
  const isLocked = state === "locked";

  return (
    <Card
      {...props}
      aria-disabled={state === "locked"}
      className={cn(
        "cursor-pointer hover:bg-secondary",
        state === "locked" && "cursor-not-allowed aria-disabled:grayscale-100",
        className
      )}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <p className="flex items-center gap-1">
            {isLocked ? <LockIcon className="size-4 mr-1" /> : null}
            {title}
          </p>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          {state === "unlocked" ? (
            <Button onClick={onStart}>
              <UnlockIcon className="size-4" />
              Bắt đầu
            </Button>
          ) : null}

          {state === "inprogress" ? (
            <Button onClick={onContinue}>
              <PlayIcon className="size-4" />
              Tiếp tục
            </Button>
          ) : null}

          {state === "locked" ? (
            <Button variant="secondary" onClick={onUnlock}>
              <LockIcon className="size-4" />
              Mở khóa
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
};
