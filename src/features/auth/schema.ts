import { z } from "zod";

export const unknownSchema = z.object({
  kindOf: z.literal("unknown"),
  email: z.string().email(),
});

export const signInSchema = z.object({
  kindOf: z.literal("sign-in"),
  email: z.string().email(),
  password: z.string().min(8),
});

export const signUpSchema = z.object({
  kindOf: z.literal("sign-up"),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

export const authFormSchema = z
  .discriminatedUnion("kindOf", [unknownSchema, signInSchema, signUpSchema])
  .superRefine((values, ctx) => {
    switch (values.kindOf) {
      case "sign-in":
        break;
      case "sign-up":
        if (values.confirmPassword !== values.password) {
          ctx.addIssue({
            code: "custom",
            message: "Passwords do not match",
          });
        }
        break;
    }
  });

export type UnknownFormSchema = z.infer<typeof unknownSchema>;
export type SignUpFormSchema = z.infer<typeof signInSchema>;
export type SignInFormSchema = z.infer<typeof signUpSchema>;
export type AuthFormSchema = z.infer<typeof authFormSchema>;
