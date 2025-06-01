import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { englishGrammars } from "@/constants/english";
import { urls } from "@/constants/urls";
import Link from "next/link";

type Props = {};

const Page = ({}: Props) => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold px-4">Luyện ngữ pháp</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {englishGrammars.map((grammar) => (
          <Card
            key={grammar.id}
            className="cursor-pointer hover:bg-muted rounded-lg gap-0 h-full"
          >
            <CardContent className="flex flex-col gap-2 h-full">
              <h3 className="text-xl font-bold">{grammar.name}</h3>
              <p className="text-base text-muted-foreground">
                {grammar.description}
              </p>
              <div className="mt-auto">
                <Button asChild>
                  <Link href={urls.grammar.detail.replace(":id", grammar.id)}>
                    Luyện tập
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Page;
