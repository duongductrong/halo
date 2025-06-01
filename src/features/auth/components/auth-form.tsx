"use client";

import AppLogo from "@/components/app-logo";
import GoogleIcon from "@/components/icons/google-icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/tw";
import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentProps } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useCheckAccount, useSignUpWithPassword } from "../api";
import { useSignInWithPassword } from "../api/sign-in-with-password";
import { AUTH_ERROR_CODES } from "../constants";
import { authFormSchema, AuthFormSchema } from "../schema";
import { AuthControls } from "./auth-controls";
import { AuthDivider } from "./auth-divider";
import { AuthFormFields } from "./auth-form-fields";
import { toast } from "sonner";

export interface AuthFormProps extends ComponentProps<"form"> {}

export const AuthForm = ({ className, ...props }: AuthFormProps) => {
  const router = useRouter();
  const form = useForm<AuthFormSchema>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      kindOf: "unknown",
    },
  });

  const { mutate: checkAccount, isPending: isCheckingAccount } =
    useCheckAccount({
      onSuccess({ data }) {
        form.setValue("kindOf", data.data ? "sign-in" : "sign-up");
      },
      onError() {
        form.setValue("kindOf", "sign-up");
      },
    });

  const { mutate: signInWithPassword, isPending: isSigningInWithPassword } =
    useSignInWithPassword({
      onSuccess() {
        router.push("/writing");
      },
      onError(error) {
        if (isAxiosError(error)) {
          const resp = error.response?.data;

          if (resp.metadata.code === AUTH_ERROR_CODES.INVALID_CREDENTIALS) {
            form.setError("email", {
              message: "Thông tin đăng nhập không hợp lệ.",
            });

            form.setValue("kindOf", "sign-up");
          }

          if (resp.metadata.code === AUTH_ERROR_CODES.EMAIL_NOT_CONFIRMED) {
            form.setError("email", {
              message: "Địa chỉ email chưa được xác thực.",
            });
          }
        }
      },
    });

  const { mutate: signUpWithPassword, isPending: isSigningUpWithPassword } =
    useSignUpWithPassword({
      onSuccess() {
        form.setValue("kindOf", "sign-in");

        toast.success(
          "Đã gửi yêu cầu xác thực đến email của bạn. Vui lòng tiến hành xác thực để đăng nhập."
        );
      },
    });
  const handleSubmit = form.handleSubmit((data) => {
    switch (data.kindOf) {
      case "unknown":
        checkAccount({ email: data.email });
        break;
      case "sign-in":
        signInWithPassword({
          email: data.email,
          password: data.password,
        });
        break;
      case "sign-up":
        signUpWithPassword({
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        });
        break;
    }
  });

  const isLoading =
    isCheckingAccount || isSigningUpWithPassword || isSigningInWithPassword;

  return (
    <FormProvider {...form}>
      <div className="max-w-[475px] w-full">
        <div className="flex items-center justify-center mb-8">
          <AppLogo />
        </div>

        <form
          {...props}
          className={cn("mx-auto flex flex-col gap-4 grow", className)}
          onSubmit={handleSubmit}
        >
          <AuthFormFields loading={isLoading} />

          <AuthControls isLoading={isLoading} />

          <AuthDivider className="my-4">Hoặc tiếp tục với</AuthDivider>

          <Button
            variant="outline"
            size="lg"
            type="button"
            disabled={isLoading}
          >
            <GoogleIcon className="size-4" />
            Tiếp tục với Google
          </Button>
        </form>
      </div>
    </FormProvider>
  );
};
