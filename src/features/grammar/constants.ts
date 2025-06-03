export const grammarType = {
  presentSimple: "present-simple",
  presentContinuous: "present-continuous",
  presentPerfect: "present-perfect",
  presentPerfectContinuous: "present-perfect-continuous",
  pastSimple: "past-simple",
  pastContinuous: "past-continuous",
  pastPerfect: "past-perfect",
  pastPerfectContinuous: "past-perfect-continuous",
  futureSimple: "future-simple",
  futureContinuous: "future-continuous",
  futurePerfect: "future-perfect",
  futurePerfectContinuous: "future-perfect-continuous",
} as const;

export const grammarExerciseType = {
  fillInTheBlank: "fill-in-the-blank",
} as const;

export type GrammarType = (typeof grammarType)[keyof typeof grammarType];
export type GrammarExerciseType =
  (typeof grammarExerciseType)[keyof typeof grammarExerciseType];
