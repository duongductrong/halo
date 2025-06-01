import SmileIcon from "@/components/icons/smile-icon";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export interface WelcomeMessageProps {
  name: string;
}

export const WelcomeMessage = ({ name }: WelcomeMessageProps) => {
  return (
    <main className="w-full h-dvh p-6 flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <SmileIcon className="size-12" />
        <p className="flex items-center">
          Xin chào
          <b className="ml-1">{name}</b>
        </p>
        <p className="text-base font-semibold">Hãy cùng mình học tiếng Anh nhé!</p>

        <div className="flex mt-4 gap-4 items-center flex-col sm:flex-row">
          <Button className="rounded-lg">
            Học ngay! <ArrowRight />
          </Button>
        </div>
      </div>
    </main>
  );
};
