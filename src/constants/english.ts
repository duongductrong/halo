export const englishLevel = {
  a1: "a1",
  a2: "a2",
  b1: "b1",
  b2: "b2",
  c1: "c1",
  c2: "c2",
} as const;

export const englishLevelDescription = {
  [englishLevel.a1]: "A1 (Beginner)",
  [englishLevel.a2]: "A2 (Elementary)",
  [englishLevel.b1]: "B1 (Intermediate)",
  [englishLevel.b2]: "B2 (Upper Intermediate)",
  [englishLevel.c1]: "C1 (Advanced)",
  [englishLevel.c2]: "C2 (Proficient)",
} as const;

export const englishLevels = [
  {
    id: englishLevel.a1,
    name: englishLevelDescription[englishLevel.a1],
    description:
      "Can understand and use familiar everyday expressions and very basic phrases to describe themselves and others.",
  },
  {
    id: englishLevel.a2,
    name: englishLevelDescription[englishLevel.a2],
    description:
      "Can interact in simple situations, even though they may find it difficult to understand new topics.",
  },
  {
    id: englishLevel.b1,
    name: englishLevelDescription[englishLevel.b1],
    description:
      "Can deal with most situations encountered in travel and can produce simple connected text on familiar topics.",
  },
  {
    id: englishLevel.b2,
    name: englishLevelDescription[englishLevel.b2],
    description:
      "Can communicate with a good level of fluency and spontaneity in most everyday situations.",
  },
  {
    id: englishLevel.c1,
    name: englishLevelDescription[englishLevel.c1],
    description:
      "Can understand a wide range of challenging, longer texts and recognize subtle differences in meaning.",
  },
  {
    id: englishLevel.c2,
    name: englishLevelDescription[englishLevel.c2],
    description: "Can understand virtually all written and spoken language.",
  },
];

export const englishGrammarType = {
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

export const englishGrammars: EnglishGrammar[] = [
  {
    id: englishGrammarType.presentSimple,
    name: "Thì hiện tại đơn - Present Simple Tense",
    description:
      "Used for habits, repeated actions, permanent states, and general truths.",
  },
  {
    id: englishGrammarType.presentContinuous,
    name: "Thì hiện tại tiếp diễn - Present Continuous Tense",
    description:
      "Used for actions happening now or around now, and for future arrangements.",
  },
  {
    id: englishGrammarType.presentPerfect,
    name: "Thì hiện tại hoàn thành - Present Perfect Tense",
    description:
      "Used for past actions with present results, and for experiences up to now.",
  },
  {
    id: englishGrammarType.presentPerfectContinuous,
    name: "Thì hiện tại hoàn thành tiếp diễn - Present Perfect Continuous Tense",
    description:
      "Used for ongoing actions that started in the past and continue to the present.",
  },
  {
    id: englishGrammarType.pastSimple,
    name: "Thì quá khứ đơn - Past Simple Tense",
    description:
      "Used for completed actions in the past, often with a specific time.",
  },
  {
    id: englishGrammarType.pastContinuous,
    name: "Thì quá khứ tiếp diễn - Past Continuous Tense",
    description: "Used for actions in progress at a specific time in the past.",
  },
  {
    id: englishGrammarType.pastPerfect,
    name: "Thì quá khứ hoàn thành - Past Perfect Tense",
    description:
      "Used for actions completed before another past action or time.",
  },
  {
    id: englishGrammarType.pastPerfectContinuous,
    name: "Thì quá khứ hoàn thành tiếp diễn - Past Perfect Continuous Tense",
    description:
      "Used for ongoing actions that continued up to a specific time in the past.",
  },
  {
    id: englishGrammarType.futureSimple,
    name: "Thì tương lai đơn - Future Simple Tense",
    description:
      "Used for predictions, decisions made at the moment of speaking, and promises.",
  },
  {
    id: englishGrammarType.futureContinuous,
    name: "Thì tương lai tiếp diễn - Future Continuous Tense",
    description:
      "Used for actions that will be in progress at a specific time in the future.",
  },
  {
    id: englishGrammarType.futurePerfect,
    name: "Thì tương lai hoàn thành - Future Perfect Tense",
    description:
      "Used for actions that will be completed before a specific time in the future.",
  },
  {
    id: englishGrammarType.futurePerfectContinuous,
    name: "Thì tương lai hoàn thành tiếp diễn - Future Perfect Continuous Tense",
    description:
      "Used for ongoing actions that will continue up to a specific time in the future.",
  },
];

export type EnglishGrammar = {
  id: string;
  name: string;
  description: string;
};

export type EnglishGrammarType =
  (typeof englishGrammarType)[keyof typeof englishGrammarType];

export type EnglishLevel = (typeof englishLevel)[keyof typeof englishLevel];
