"use client";

import {
  GrammarExerciseDocument,
  GrammarExerciseInstruction,
  GrammarHeader,
} from "@/features/grammar";

type Props = {
  params: {
    id: string;
  };
};

const Page = ({}: Props) => {
  return (
    <section className="grid grid-cols-[1fr_450px] gap-4">
      <GrammarHeader className="col-span-full">Present Simple</GrammarHeader>

      <GrammarExerciseDocument className="h-[calc(100vh-120px)] overflow-auto" />

      <GrammarExerciseInstruction />
    </section>
  );
};

export default Page;
