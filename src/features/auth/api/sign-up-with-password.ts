import { apiClient } from "@/lib/api";
import { JsonBuilderResponse } from "@/lib/next";
import { AxiosResponse } from "axios";
import { createMutation } from "react-query-kit";

export const SIGN_UP_WITH_PASSWORD_ENDPOINT = "/auth/sign-up/password";

export interface SignUpWithPasswordRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpWithPasswordResponse
  extends JsonBuilderResponse<boolean> {}

export const signUpWithPassword = async (
  request: SignUpWithPasswordRequest
): Promise<AxiosResponse<SignUpWithPasswordResponse>> => {
  const response = await apiClient.post(
    SIGN_UP_WITH_PASSWORD_ENDPOINT,
    request
  );

  return response;
};

export const useSignUpWithPassword = createMutation({
  mutationFn: signUpWithPassword,
});
