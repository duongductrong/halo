import { jsonBuilder } from "@/lib/next";
import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request: Request) {
  const supabase = await createClient();

  const { email, password } = schema.parse(await request.json());

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return jsonBuilder(
      {
        data: null,
        message: error.message,
        metadata: error,
      },
      {
        status: 400,
      }
    );
  }

  return jsonBuilder({
    data: data.user,
    message: "Đăng nhập thành công",
  });
}
