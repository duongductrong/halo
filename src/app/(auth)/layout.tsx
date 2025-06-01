import { AuthLayout } from "@/features/auth/components/auth-layout";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const Layout = async ({ children }: Props) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/writing");
  }

  return <AuthLayout className="bg-background">{children}</AuthLayout>;
};

export default Layout;
