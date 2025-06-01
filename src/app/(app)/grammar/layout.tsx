import { GrammarLayout } from "@/features/grammar";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const Layout = ({ children }: Props) => {
  return <GrammarLayout>{children}</GrammarLayout>;
};

export default Layout;
