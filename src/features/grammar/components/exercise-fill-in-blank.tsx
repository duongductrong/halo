// Pattern:
// Question: She <input> (work) at a hospital.
// Answer: She works at a hospital.
// Question: He <input> (play) tennis.
// Answer: He plays tennis.

"use client";

import { useMemo, useState } from "react";

export interface ExerciseFillInBlankProps {
  question: string;
  answer: Record<string, string>;
}
export const ExerciseFillInBlank = ({
  question,
  answer = {},
}: ExerciseFillInBlankProps) => {
  const [value, setValue] = useState<Record<string, string>>({});

  const sentence = useMemo(() => {
    const inputRegex = /\<(input)(\d{0,100})?\>/g;
    const questionWords = question.split(" ");

    return questionWords.map((word, i) => {
      const wordMatch = word.match(inputRegex);
      if (wordMatch?.length) {
        const field = wordMatch[0].replace("<", "").replace(">", "");
        return (
          <input
            key={i}
            data-field={field}
            data-valid={answer[field] === value[field]}
            type="text"
            value={value[field] || ""}
            onChange={(e) =>
              setValue((previousValue) => ({
                ...previousValue,
                [field]: e.target.value,
              }))
            }
            className="min-w-[50px] font-bold focus:outline-none bg-background/50 border-b border-dashed border-border text-center data-[valid=true]:text-green-500"
          />
        );
      }
      return (
        <span key={i} className="mr-2">
          {word}
        </span>
      );
    });
  }, [question, value, answer]);

  return <p className="block gap-2">{sentence}</p>;
};
