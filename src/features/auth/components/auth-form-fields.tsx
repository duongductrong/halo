import { FieldItem } from "@/components/form";
import { useWatch } from "react-hook-form";
import { useFormContext } from "../hooks/use-form";

export interface AuthFormFieldsProps {
  loading?: boolean;
}

export const AuthFormFields = ({ loading }: AuthFormFieldsProps) => {
  const form = useFormContext();

  const [kindOf] = useWatch({
    control: form.control,
    name: ["kindOf"],
  });

  return (
    <>
      <FieldItem
        component="text"
        size="lg"
        name="email"
        label="Email"
        placeholder="Vui lòng nhập địa chỉ email"
        type="email"
        disabled={loading || kindOf !== "unknown"}
      />

      {kindOf === "sign-in" && (
        <>
          <FieldItem
            component="text"
            size="lg"
            type="password"
            name="password"
            label="Mật khẩu"
            placeholder="Vui lòng nhập mật khẩu"
            disabled={loading}
          />
        </>
      )}

      {kindOf === "sign-up" && (
        <>
          <FieldItem
            component="text"
            size="lg"
            name="password"
            type="password"
            label="Mật khẩu"
            placeholder="Vui lòng nhập mật khẩu"
            disabled={loading}
          />
          <FieldItem
            component="text"
            size="lg"
            name="confirmPassword"
            type="password"
            label="Xác nhận mật khẩu"
            placeholder="Vui lòng nhập lại mật khẩu"
            disabled={loading}
          />
        </>
      )}
    </>
  );
};
