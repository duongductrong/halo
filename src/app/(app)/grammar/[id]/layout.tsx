import { GrammarLayout } from "@/features/grammar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <GrammarLayout fluid>{children}</GrammarLayout>;
};

export default Layout;
