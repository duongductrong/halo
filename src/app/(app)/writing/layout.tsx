import WritingLayout from "@/features/writing/widgets/writing-layout";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const Layout = ({ children }: Props) => {
  return <WritingLayout>{children}</WritingLayout>;
};

export default Layout;
