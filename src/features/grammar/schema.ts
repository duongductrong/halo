import { z } from "zod";
import { grammarExerciseType, grammarType } from "./constants";

export const grammarTypeSchema = z.enum(
  Object.values(grammarType) as [string, ...string[]]
);

export const grammarExerciseTypeSchema = z.enum(
  Object.values(grammarExerciseType) as [string, ...string[]]
);

export const grammarSchema = z.object({
  type: grammarTypeSchema,
  id: z.string(),
  name: z.string(),
  description: z.string(),
  exercises: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      type: grammarExerciseTypeSchema,
    })
  ),
});

export type Grammar = z.infer<typeof grammarSchema>;
