import { cn } from "@/lib/tw";
import { ComponentProps } from "react";
import { ExerciseFillInBlank } from "./exercise-fill-in-blank";
import { ExerciseSection } from "./exercise-section";

export interface GrammarExerciseDocumentProps extends ComponentProps<"main"> {}

export const GrammarExerciseDocument = ({
  className,
  ...props
}: GrammarExerciseDocumentProps) => {
  return (
    <main {...props} className={cn("flex flex-col gap-6", className)}>
      <ExerciseSection label="Exercise 1: Affirmative Sentences">
        <ExerciseFillInBlank
          question="He <input0> (play) basketball every weekend."
          answer={{
            input0: "plays",
          }}
        />
        <ExerciseFillInBlank
          question="They <input0> (live) in New York."
          answer={{
            input0: "live",
          }}
        />
        <ExerciseFillInBlank
          question="John <input0> (study) English twice a week."
          answer={{
            input0: "studies",
          }}
        />
        <ExerciseFillInBlank
          question="The dog <input0> (sleep) in the garden."
          answer={{
            input0: "sleeps",
          }}
        />
        <ExerciseFillInBlank
          question="My sister <input0> (teach) math at school."
          answer={{
            input0: "teaches",
          }}
        />
      </ExerciseSection>

      <ExerciseSection label="Exercise 2: Negative Sentences">
        <ExerciseFillInBlank
          question="He <input0> (not play) tennis."
          answer={{
            input0: "doesn't play",
          }}
        />
        <ExerciseFillInBlank
          question="They <input0> (not study) English."
          answer={{
            input0: "don't study",
          }}
        />
        <ExerciseFillInBlank
          question="John <input0> (not like) chocolate."
          answer={{
            input0: "doesn't like",
          }}
        />
        <ExerciseFillInBlank
          question="The dog <input0> (not sleep) in the garden."
          answer={{
            input0: "doesn't sleep",
          }}
        />
        <ExerciseFillInBlank
          question="My sister <input0> (not teach) math at school."
          answer={{
            input0: "doesn't teach",
          }}
        />
        <ExerciseFillInBlank
          question="He <input0> (not like) coffee."
          answer={{
            input0: "doesn't like",
          }}
        />
      </ExerciseSection>

      <ExerciseSection label="Exercise 3: Yes/No Questions">
        <ExerciseFillInBlank
          question="<input1> she <input2> (work) here?"
          answer={{
            input1: "Does",
            input2: "work",
          }}
        />
        <ExerciseFillInBlank
          question="<input1> they <input2> (live) in London?"
          answer={{
            input1: "Do",
            input2: "live",
          }}
        />
      </ExerciseSection>

      <ExerciseSection label="Exercise 4: Wh-Questions">
        <ExerciseFillInBlank
          question="<input0> does she live? (ask about place)"
          answer={{
            input0: "Where",
          }}
        />
        <ExerciseFillInBlank
          question="<input0> do you go to school? (ask about time)"
          answer={{
            input0: "When",
          }}
        />
      </ExerciseSection>

      <ExerciseSection label="Exercise 5: Mixed Practice">
        <ExerciseFillInBlank
          question="Sarah <input0> (go) to the gym every morning."
          answer={{
            input0: "goes",
          }}
        />
        <ExerciseFillInBlank
          question="My parents <input0> (not watch) TV in the evening."
          answer={{
            input0: "don't watch",
          }}
        />
        <ExerciseFillInBlank
          question="<input0> your brother <input1> (speak) French?"
          answer={{
            input0: "Does",
            input1: "speak",
          }}
        />
        <ExerciseFillInBlank
          question="<input0> <input1> they <input2> (live)? They live in Paris."
          answer={{
            input0: "Where",
            input1: "do",
            input2: "live",
          }}
        />
        <ExerciseFillInBlank
          question="Tom <input0> (work) as a doctor, but his sister <input1> (not work) in healthcare."
          answer={{
            input0: "works",
            input1: "doesn't work",
          }}
        />
        <ExerciseFillInBlank
          question="<input0> <input1> she <input2> (start) work? She starts at 9 AM."
          answer={{
            input0: "When",
            input1: "does",
            input2: "start",
          }}
        />
        <ExerciseFillInBlank
          question="<input0> you <input1> (want) to learn Spanish?"
          answer={{
            input0: "Do",
            input1: "want",
          }}
        />
        <ExerciseFillInBlank
          question="<input0> <input1> Peter <input2> (eat) for breakfast? He eats cereal."
          answer={{
            input0: "What",
            input1: "does",
            input2: "eat",
          }}
        />
      </ExerciseSection>

      <ExerciseSection label="Exercise 6: Paragraph">
        <ExerciseFillInBlank
          question="Sarah <input0> (go) to the gym every morning. My parents <input1> (not watch) TV in the evening. <input2> your brother <input3> (speak) French? He <input4> (speak) English and French. John <input5> (work) at a hospital. They <input6> (not live) in London. <input7> Mary <input8> (study) at university? She <input9> (study) medicine. We <input10> (play) tennis on weekends. <input11> Tom <input12> (like) coffee? He <input13> (prefer) tea. The shop <input14> (open) at 8 AM. My sister <input15> (not drive) to work. <input16> the children <input17> (do) their homework? They <input18> (finish) it after dinner. The sun <input19> (rise) in the east. <input20> you <input21> (need) help? I <input22> (want) to learn Japanese. The train <input23> (arrive) at 9 PM. The birds <input24> (sing) in the morning."
          answer={{
            input0: "goes",
            input1: "don't watch",
            input2: "Does",
            input3: "speak",
            input4: "speaks",
            input5: "works",
            input6: "don't live",
            input7: "Does",
            input8: "study",
            input9: "studies",
            input10: "play",
            input11: "Does",
            input12: "like",
            input13: "prefers",
            input14: "opens",
            input15: "doesn't drive",
            input16: "Do",
            input17: "do",
            input18: "finish",
            input19: "rises",
            input20: "Do",
            input21: "need",
            input22: "want",
            input23: "arrives",
            input24: "sing",
          }}
        />
      </ExerciseSection>
    </main>
  );
};
