import AppLayout from "@/components/app-layout";
import { AppMain } from "@/components/app-main";
import { AppSidebar } from "@/components/app-sidebar";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const Layout = async ({ children }: Props) => {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user || error) {
    return redirect("/sign-in");
  }

  console.log(user);

  return (
    <AppLayout>
      <AppSidebar />
      <AppMain>{children}</AppMain>
    </AppLayout>
  );
};

export default Layout;
