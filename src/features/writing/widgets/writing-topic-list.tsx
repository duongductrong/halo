"use client";

import { englishLevel } from "@/constants/english";
import { cn } from "@/lib/tw";
import { useRouter } from "next/navigation";
import { ComponentProps } from "react";
import { WritingTopicCard } from "../components/writing-topic-card";

export interface WritingTopicListProps extends ComponentProps<"div"> {}

export const WritingTopicList = ({
  className,
  ...props
}: WritingTopicListProps) => {
  const router = useRouter();

  return (
    <main {...props} className={cn("flex flex-col gap-4", className)}>
      <WritingTopicCard
        title="Say Hello"
        description="Write a short greeting to someone you know"
        levels={[englishLevel.a1]}
        onClick={() => {
          router.push("/writing/1/practice");
        }}
      />
      <WritingTopicCard
        title="Holiday Memories"
        description="Share your favorite holiday experience and what makes it special to you"
        levels={[englishLevel.a1]}
      />
      <WritingTopicCard
        title="Dream Vacation"
        description="Describe your ideal vacation destination and what you would do there"
        levels={[englishLevel.a2]}
      />
      <WritingTopicCard
        title="Family Traditions"
        description="Write about an important family tradition and why it matters to you"
        levels={[englishLevel.b1]}
      />
      <WritingTopicCard
        title="Childhood Adventures"
        description="Recall a memorable adventure or experience from your childhood"
        levels={[englishLevel.b2]}
      />
    </main>
  );
};
