"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/tw";
import { ArrowLeft, CornerDownRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { ComponentProps, Fragment, useState } from "react";

export const PARAGRAPH = `Xin chào! Hôm nay là một ngày tuyệt vời. Tôi rất vui được gặp bạn. 
Tôi tên là Nam. Tôi đến từ Hà Nội, Việt Nam. Tôi đang học tiếng Anh để giao tiếp tốt hơn.
Tôi thích đọc sách và nghe nhạc. Vào cuối tuần, tôi thường đi dạo trong công viên.
Tôi cũng thích nấu ăn và thử những món mới. Gia đình tôi có bốn người.
Bố tôi là bác sĩ. Mẹ tôi là giáo viên. Em gái tôi đang học cấp 2.
Chúng tôi sống trong một căn hộ nhỏ gần trung tâm thành phố. Khu phố của chúng tôi rất yên tĩnh.
Hàng xóm của chúng tôi rất thân thiện. Tôi thích học tiếng Anh online.
Giáo viên và bạn học đều rất nhiệt tình. Tôi hy vọng sẽ nói tiếng Anh lưu loát trong tương lai.
Mong rằng chúng ta sẽ trở thành bạn tốt. Cảm ơn bạn đã đọc về tôi.
Chúc bạn một ngày tốt lành.`;

const TRANSLATED_PARAGRAPH =
  "Hello, Today is a beautiful day. Nice to meet you. My name is Nam. I'm from Hanoi, Vietnam. I am studying English for better communication.";

export const EVALUATION = [
  // {
  //   sentence: "Hello, Today is a beautiful day.",
  //   issues: [
  //     {
  //       type: "Capitalization",
  //       detail: "‘Today’ should not be capitalized after a comma.",
  //       suggestion: "Hello, today is a beautiful day.",
  //     },
  //   ],
  // },
  // {
  //   sentence: "Nice to meet you.",
  //   issues: [],
  // },
  // {
  //   sentence: "My name is Nam.",
  //   issues: [],
  // },
  // {
  //   sentence: "I'm from Ha Noi, Viet Nam.",
  //   issues: [
  //     {
  //       type: "Spelling/Word Form",
  //       detail:
  //         "‘Ha Noi’ and ‘Viet Nam’ should use standard international spelling.",
  //       suggestion: "I'm from Hanoi, Vietnam.",
  //     },
  //   ],
  // },
  // {
  //   sentence: "I studying English for communication better.",
  //   issues: [
  //     {
  //       type: "Grammar",
  //       detail:
  //         "Verb form ‘studying’ is incorrect with subject ‘I’ without an auxiliary verb.",
  //       suggestion: "I am studying English for better communication.",
  //     },
  //     {
  //       type: "Word Order",
  //       detail: "‘For communication better’ is incorrect word order.",
  //       suggestion: "for better communication",
  //     },
  //   ],
  // },
  // {
  //   sentence: "I Like read book and listen music.",
  //   issues: [
  //     {
  //       type: "Capitalization",
  //       detail: "‘Like’ should not be capitalized mid-sentence.",
  //       suggestion: "I like...",
  //     },
  //     {
  //       type: "Grammar",
  //       detail: "Verb form is incorrect; should use gerunds after ‘like’.",
  //       suggestion: "I like reading books and listening to music.",
  //     },
  //     {
  //       type: "Article usage",
  //       detail:
  //         "Missing ‘to’ before ‘music’, and ‘book’ should be plural or have an article.",
  //       suggestion: "reading books and listening to music",
  //     },
  //   ],
  // },
  // {
  //   sentence: "At last week.",
  //   issues: [
  //     {
  //       type: "Grammar",
  //       detail: "Incorrect preposition ‘At’ for time expression.",
  //       suggestion: 'Last week" or "During the weekend',
  //     },
  //     {
  //       type: "Fragment",
  //       detail: "Incomplete sentence fragment.",
  //       suggestion: "Last week, I usually took a walk in the park.",
  //     },
  //   ],
  // },
  {
    sentence: "I usually  take a walk in the park.",
    issues: [
      {
        type: "Verb Tense",
        detail:
          "Tense inconsistency. ‘Usually’ suggests a present habit, but it follows ‘last week’.",
        suggestion:
          'I took a walk in the park." or "I usually take a walk in the park on weekends.',
      },
    ],
  },
];

export interface WritingPracticeProps extends ComponentProps<"div"> {}

const WritingPractice = ({ className, ...props }: WritingPracticeProps) => {
  const router = useRouter();

  const [currentSentence] = useState(5);

  const sentences = PARAGRAPH.split(".");
  const translatedSentences = TRANSLATED_PARAGRAPH.split(".");

  return (
    <div
      {...props}
      className={cn("grid grid-cols-[1fr_400px] gap-4", className)}
    >
      <div>
        <div className="flex items-center gap-4">
          <Button variant="secondary" onClick={() => router.back()}>
            <ArrowLeft className="size-4" />
          </Button>
          <h2 className="text-2xl font-bold">Chủ đề: Holiday Memories</h2>
        </div>

        <div>
          <p className="text-muted-foreground mt-4 text-lg font-medium">
            {sentences.map((sentence, index) => {
              const isTranslated = translatedSentences[index];
              return (
                <Fragment key={index}>
                  <span
                    className={cn(
                      currentSentence === index
                        ? "text-primary font-bold"
                        : currentSentence > index
                        ? "text-muted-foreground"
                        : "text-muted-foreground/50",
                      isTranslated ? "font-bold" : ""
                    )}
                  >
                    {translatedSentences[index] || sentence}
                  </span>
                  {index < sentences.length - 1 && (
                    <span className="text-muted-foreground/50">{"."}</span>
                  )}
                </Fragment>
              );
            })}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Textarea
            className="mt-4 !text-base min-h-[175px]"
            placeholder="Write your answer here..."
            rows={50}
          />

          <Button size="lg">
            <CornerDownRight className="size-4" />
            Kiểm tra thử
          </Button>
        </div>
      </div>

      <Card className="p-4">
        <CardHeader className="px-0">
          <CardTitle>Đánh giá</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 px-0">
          {EVALUATION.map((item, index) => (
            <div key={index} className="pb-4">
              <p className="font-medium">{item.sentence}</p>

              {item.issues.length > 0 ? (
                <div className="mt-2 flex flex-col gap-2">
                  {item.issues.map((issue, issueIndex) => (
                    <div
                      key={issueIndex}
                      className="rounded-lg bg-secondary/50 p-3"
                    >
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{issue.type}</Badge>
                        <p className="text-sm text-muted-foreground">
                          {issue.detail}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-primary">
                        Suggestion: {issue.suggestion}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-sm text-green-600">No issues found</p>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default WritingPractice;
