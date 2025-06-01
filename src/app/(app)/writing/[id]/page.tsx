"use client";

import { Button } from "@/components/ui/button";
import { WritingTopicList } from "@/features/writing";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {};

const WritingSectionPage = ({}: Props) => {
  const router = useRouter();

  return (
    <main className="flex flex-col gap-4">
      <div className="flex items-center items-center gap-4">
        <Button variant="secondary" onClick={() => router.back()}>
          <ArrowLeft className="size-4" />
        </Button>
        <h2 className="text-2xl font-bold">
          Phần 1: Làm quen với cách viết cơ bản
        </h2>
      </div>
      <WritingTopicList />
    </main>
  );
};

export default WritingSectionPage;
