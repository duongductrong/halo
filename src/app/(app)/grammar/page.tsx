import { GrammarContent, GrammarHeader } from "@/features/grammar";

type Props = {};

const Page = ({}: Props) => {
  return (
    <section className="flex flex-col gap-4">
      <GrammarHeader />
      <GrammarContent />
    </section>
  );
};

export default Page;
