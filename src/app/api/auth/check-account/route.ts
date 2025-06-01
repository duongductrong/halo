import { db } from "@/db";
import { profileTable } from "@/db/schema";
import { jsonBuilder } from "@/lib/next";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { email } = bodySchema.parse(body);

  const profile = await db.query.profileTable.findFirst({
    where: eq(profileTable.email, email),
  });

  const hasAccount = !!profile;

  return jsonBuilder({
    data: hasAccount,
    message: hasAccount ? "Tài khoản đã tồn tại" : "Không tìm thấy tài khoản",
    metadata: {
      email,
      profile,
    },
  });
}
