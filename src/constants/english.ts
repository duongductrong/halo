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

export type EnglishLevel = (typeof englishLevel)[keyof typeof englishLevel];
