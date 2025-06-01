import { apiClient } from "@/lib/api";
import { JsonBuilderResponse } from "@/lib/next";
import { User } from "@supabase/supabase-js";
import { AxiosResponse } from "axios";
import { createMutation } from "react-query-kit";

export const SIGN_IN_WITH_PASSWORD_ENDPOINT = "/auth/sign-in/password";

export interface SignInWithPasswordRequest {
  email: string;
  password: string;
}

export interface SignInWithPasswordResponse extends JsonBuilderResponse<User> {}

export const signInWithPassword = async (
  request: SignInWithPasswordRequest
): Promise<AxiosResponse<SignInWithPasswordResponse>> => {
  const response = await apiClient.post<SignInWithPasswordResponse>(
    SIGN_IN_WITH_PASSWORD_ENDPOINT,
    request
  );

  return response;
};

export const useSignInWithPassword = createMutation({
  mutationFn: signInWithPassword,
});
