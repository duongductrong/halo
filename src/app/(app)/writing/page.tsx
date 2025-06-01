"use client";

import { WritingSectionList } from "@/features/writing";

const WritingPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-title">Thực hành viết</h2>
      <WritingSectionList />
    </div>
  );
};

export default WritingPage;
