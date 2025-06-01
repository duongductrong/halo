import { useFormContext as useFormContextHook } from "react-hook-form";
import { AuthFormSchema } from "../schema";

export const useAuthFormContext = () => {
  return useFormContextHook<AuthFormSchema>();
};
