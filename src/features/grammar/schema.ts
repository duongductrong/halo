import { z } from "zod";
import { grammarExerciseType, grammarType } from "./constants";

export const grammarTypeSchema = z.enum(
  Object.values(grammarType) as [string, ...string[]]
);

export const grammarExerciseTypeSchema = z.enum(
  Object.values(grammarExerciseType) as [string, ...string[]]
);

export const grammarExerciseSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  type: grammarExerciseTypeSchema,
  group: z.union([
    z.literal("affirmative"),
    z.literal("negative"),
    z.literal("question"),
    z.literal("yes-no"),
    z.literal("practice"),
  ]),
});

export const grammarSchema = z.object({
  type: grammarTypeSchema,
  id: z.string(),
  name: z.string(),
  description: z.string(),
  exercises: z.array(grammarExerciseSchema),
});

export type Grammar = z.infer<typeof grammarSchema>;
export type GrammarExercise = z.infer<typeof grammarExerciseSchema>;
