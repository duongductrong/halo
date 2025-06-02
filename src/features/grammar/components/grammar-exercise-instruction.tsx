import { cn } from "@/lib/tw";
import Image from "next/image";
import { ComponentProps } from "react";

export interface GrammarExerciseInstructionProps
  extends ComponentProps<"div"> {}

export const GrammarExerciseInstruction = ({
  className,
  ...props
}: GrammarExerciseInstructionProps) => {
  return (
    <aside
      {...props}
      className={cn(
        "px-4 self-start sticky top-4 h-[calc(100vh-120px)] overflow-auto",
        className
      )}
    >
      <div className="space-y-6">
        <div>
          <Image
            width={400}
            height={400}
            src="https://media.zim.vn/62d6724aba64fe001f1cc632/thi.webp"
            alt="Present Simple Tense Structure"
            className="w-full"
          />
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-lg mb-4">Công thức</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="border p-3 bg-muted">Loại câu</th>
                    <th className="border p-3 bg-muted">Cấu trúc</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Khẳng định</td>
                    <td className="border p-3">S + V(s/es)</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Phủ định</td>
                    <td className="border p-3">S + do/does not + V</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Nghi vấn/Câu hỏi Yes/No</td>
                    <td className="border p-3">Do/Does + S + V?</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Nghi vấn/Câu hỏi thông tin</td>
                    <td className="border p-3">Từ hỏi + do/does + S + V?</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Ví dụ</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="border p-3 bg-muted">Loại câu</th>
                    <th className="border p-3 bg-muted">Ví dụ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Khẳng định</td>
                    <td className="border p-3">
                      She walks to school every day.
                      <br />
                      <span className="text-muted-foreground">
                        (Cô ấy đi bộ đến trường mỗi ngày.)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">Phủ định</td>
                    <td className="border p-3">
                      He does not like chocolate.
                      <br />
                      <span className="text-muted-foreground">
                        (Anh ấy không thích sô cô la.)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">Nghi vấn/Câu hỏi Yes/No</td>
                    <td className="border p-3">
                      Do they play football?
                      <br />
                      <span className="text-muted-foreground">
                        (Họ có chơi bóng đá không?)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">Nghi vấn/Câu hỏi thông tin</td>
                    <td className="border p-3">
                      What does he eat for breakfast?
                      <br />
                      <span className="text-muted-foreground">
                        (Anh ấy ăn gì vào bữa sáng?)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
