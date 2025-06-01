import { apiClient } from "@/lib/api";
import { JsonBuilderResponse } from "@/lib/next";
import { AxiosResponse } from "axios";
import { createMutation } from "react-query-kit";

export const CHECK_ACCOUNT_ENDPOINT = "/auth/check-account";

export interface CheckAccountRequest {
  email: string;
}

export interface CheckAccountResponse extends JsonBuilderResponse<boolean> {}

export const checkAccount = async (
  request: CheckAccountRequest
): Promise<AxiosResponse<CheckAccountResponse>> => {
  const response = await apiClient.post(CHECK_ACCOUNT_ENDPOINT, request);

  return response;
};

export const useCheckAccount = createMutation({
  mutationFn: checkAccount,
});
