import { englishGrammars } from "@/constants/english";

type Props = {};

const Page = ({}: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold px-4">Luyện ngữ pháp</h2>

      {englishGrammars.map((grammar) => (
        <div
          key={grammar.id}
          className="mb-2 cursor-pointer hover:bg-muted p-4 rounded-md"
        >
          <h3 className="text-xl font-bold">{grammar.name}</h3>
          <p className="text-base text-muted-foreground">
            {grammar.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Page;
