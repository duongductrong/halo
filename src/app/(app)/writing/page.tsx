"use client";

import { WritingSectionList } from "@/features/writing/widgets/writing-section-list";

const WritingPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Thực hành viết</h2>
      <WritingSectionList />
    </div>
  );
};

export default WritingPage;
