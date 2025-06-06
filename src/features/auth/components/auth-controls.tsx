import { Button } from "@/components/ui/button";
import { useWatch } from "react-hook-form";
import { useAuthFormContext } from "../hooks/use-auth-form";

export interface AuthControlsProps {
  isLoading: boolean;
}

export const AuthControls = ({ isLoading }: AuthControlsProps) => {
  const form = useAuthFormContext();

  const [kindOf] = useWatch({
    control: form.control,
    name: ["kindOf"],
  });

  return (
    <>
      <Button size="lg" type="submit" disabled={isLoading}>
        Tiếp tục
      </Button>
      {kindOf !== "unknown" && (
        <Button
          size="lg"
          type="button"
          variant="ghost"
          disabled={isLoading}
          onClick={() => form.setValue("kindOf", "unknown")}
        >
          Quay lại
        </Button>
      )}
    </>
  );
};
