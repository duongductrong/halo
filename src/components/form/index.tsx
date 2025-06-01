import { createField } from "hookform-field";
import dynamic from "next/dynamic";

const LazyInput = dynamic(() =>
  import("@/components/ui/input").then((mod) => mod.Input)
);

export const FieldItem = createField(
  {
    text: LazyInput,
  },
  {
    classNames: {
      label: "text-base font-medium mb-1 block text-muted-foreground",
      input: "text-base font-medium",
      message: "text-sm text-destructive",
    },
  }
);
