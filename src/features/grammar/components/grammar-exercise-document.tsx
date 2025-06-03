import { cn } from "@/lib/tw";
import { ComponentProps, useMemo } from "react";
import { ExerciseFillInBlank } from "./exercise-fill-in-blank";
import { ExerciseSection } from "./exercise-section";

export interface GrammarExerciseDocumentProps extends ComponentProps<"main"> {}

export const GrammarExerciseDocument = ({
  className,
  ...props
}: GrammarExerciseDocumentProps) => {
  const documentExercises = useMemo(
    () => [
      {
        id: "1",
        name: "Affirmative Sentences",
        description: "Practice forming affirmative sentences in present simple",
        type: "fill-in-the-blank",
        group: "affirmative",
        questions: [
          {
            question: "He <input0> (play) basketball every weekend.",
            answer: {
              input0: "plays",
            },
          },
          {
            question: "They <input0> (live) in New York.",
            answer: {
              input0: "live",
            },
          },
          {
            question: "John <input0> (study) English twice a week.",
            answer: {
              input0: "studies",
            },
          },
          {
            question: "The dog <input0> (sleep) in the garden.",
            answer: {
              input0: "sleeps",
            },
          },
          {
            question: "My sister <input0> (teach) math at school.",
            answer: {
              input0: "teaches",
            },
          },
        ],
      },
      {
        id: "2",
        name: "Negative Sentences",
        description: "Practice forming negative sentences in present simple",
        type: "fill-in-the-blank",
        group: "negative",
        questions: [
          {
            question: "He <input0> (not play) tennis.",
            answer: {
              input0: "doesn't play",
            },
          },
          {
            question: "They <input0> (not study) English.",
            answer: {
              input0: "don't study",
            },
          },
          {
            question: "John <input0> (not like) chocolate.",
            answer: {
              input0: "doesn't like",
            },
          },
          {
            question: "The dog <input0> (not sleep) in the garden.",
            answer: {
              input0: "doesn't sleep",
            },
          },
          {
            question: "My sister <input0> (not teach) math at school.",
            answer: {
              input0: "doesn't teach",
            },
          },
          {
            question: "He <input0> (not like) coffee.",
            answer: {
              input0: "doesn't like",
            },
          },
        ],
      },
      {
        id: "3",
        name: "Yes/No Questions",
        description: "Practice forming yes/no questions in present simple",
        type: "fill-in-the-blank",
        group: "yes-no",
        questions: [
          {
            question: "<input1> she <input2> (work) here?",
            answer: {
              input1: "Does",
              input2: "work",
            },
          },
          {
            question: "<input1> they <input2> (live) in London?",
            answer: {
              input1: "Do",
              input2: "live",
            },
          },
        ],
      },
      {
        id: "4",
        name: "Wh-Questions",
        description: "Practice forming wh-questions in present simple",
        type: "fill-in-the-blank",
        group: "question",
        questions: [
          {
            question: "<input0> does she live? (ask about place)",
            answer: {
              input0: "Where",
            },
          },
          {
            question: "<input0> do you go to school? (ask about time)",
            answer: {
              input0: "When",
            },
          },
        ],
      },
      {
        id: "5",
        name: "Practice",
        description: "Mixed practice of present simple tense",
        type: "fill-in-the-blank",
        group: "mixed",
        questions: [
          {
            question: "Sarah <input0> (go) to the gym every morning.",
            answer: {
              input0: "goes",
            },
          },
          {
            question: "My parents <input0> (not watch) TV in the evening.",
            answer: {
              input0: "don't watch",
            },
          },
          {
            question: "<input0> your brother <input1> (speak) French?",
            answer: {
              input0: "Does",
              input1: "speak",
            },
          },
          {
            question:
              "<input0> <input1> they <input2> (live)? They live in Paris.",
            answer: {
              input0: "Where",
              input1: "do",
              input2: "live",
            },
          },
          {
            question:
              "Tom <input0> (work) as a doctor, but his sister <input1> (not work) in healthcare.",
            answer: {
              input0: "works",
              input1: "doesn't work",
            },
          },
          {
            question:
              "<input0> <input1> she <input2> (start) work? She starts at 9 AM.",
            answer: {
              input0: "When",
              input1: "does",
              input2: "start",
            },
          },
          {
            question: "<input0> you <input1> (want) to learn Spanish?",
            answer: {
              input0: "Do",
              input1: "want",
            },
          },
          {
            question:
              "<input0> <input1> Peter <input2> (eat) for breakfast? He eats cereal.",
            answer: {
              input0: "What",
              input1: "does",
              input2: "eat",
            },
          },
        ],
      },
    ],
    []
  );

  return (
    <main {...props} className={cn("flex flex-col gap-6", className)}>
      {documentExercises.map((exercise) => {
        return (
          <ExerciseSection key={exercise.id} label={exercise.name}>
            {exercise.questions.map((question) => {
              return (
                <ExerciseFillInBlank
                  key={question.question}
                  question={question.question}
                  answer={question.answer as Record<string, string>}
                />
              );
            })}
          </ExerciseSection>
        );
      })}
    </main>
  );
};
