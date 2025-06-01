import { GrammarLayout } from "@/features/grammar/widgets/grammar-layout";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const Layout = ({ children }: Props) => {
  return <GrammarLayout>{children}</GrammarLayout>;
};

export default Layout;
