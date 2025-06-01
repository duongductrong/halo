import { jsonBuilder } from "@/lib/next";
import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

export async function POST(request: Request) {
  const [supabase, body] = await Promise.all([createClient(), request.json()]);

  const { email, password, confirmPassword } = bodySchema.parse(body);

  if (password !== confirmPassword) {
    return jsonBuilder(
      {
        data: false,
        message: "Mật khẩu không khớp",
      },
      { status: 400 }
    );
  }

  const { error, data } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return jsonBuilder(
      { data: false, message: error.message, metadata: error },
      { status: 400 }
    );
  }

  return jsonBuilder({ data: data, message: "Đăng ký thành công" });
}
