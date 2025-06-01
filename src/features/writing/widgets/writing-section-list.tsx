import { cn } from "@/lib/tw";
import { useRouter } from "next/navigation";
import { ComponentProps } from "react";
import { WritingSectionCard } from "../components/writing-section-card";

export interface WritingSectionListProps extends ComponentProps<"div"> {}

export const WritingSectionList = ({
  className,
  ...props
}: WritingSectionListProps) => {
  const router = useRouter();

  return (
    <main {...props} className={cn("flex flex-col gap-4", className)}>
      <WritingSectionCard
        title="Phần 1. Làm quen với cách viết cơ bản"
        description="Viết câu đơn giản, giới thiệu bản thân, gia đình, sở thích."
        state="inprogress"
        onContinue={() => {
          router.push("/writing/1");
        }}
      />
      <WritingSectionCard
        title="Phần 2. Viết các đoạn văn ngắn theo chủ đề quen thuộc"
        description="Viết các đoạn văn ngắn về chủ đề quen thuộc như gia đình, sở thích, và cuộc sống hàng ngày."
        state="unlocked"
      />
      <WritingSectionCard
        title="Phần 3. Viết đoạn văn có lý do và ý kiến cá nhân"
        description="Món ăn yêu thích, nơi ở lý tưởng, công việc mơ ước"
        state="locked"
      />
      <WritingSectionCard
        title="Phần 4. Phát triển đoạn văn với cấu trúc rõ ràng"
        description="Lợi ích của thể thao, internet, du lịch"
        state="locked"
      />
      <WritingSectionCard
        title="Phần 5. Viết luận văn ngắn với lập luận và phản biện"
        description="Giáo dục trực tuyến vs truyền thống, sống ở thành phố hay nông thôn"
        state="locked"
      />
      <WritingSectionCard
        title="Phần 6. Văn hóa và truyền thống"
        description="Phân tích ảnh hưởng của công nghệ đối với văn hóa và truyền thống"
        state="locked"
      />
      <WritingSectionCard
        title="Phần 7. Môi trường và xã hội"
        description="Đề xuất giải pháp cho một vấn đề môi trường hoặc xã hội cụ thể"
        state="locked"
      />
      <WritingSectionCard
        title="Phần 8. Tương lai và mục tiêu"
        description="Viết một bài luận về tầm nhìn của bạn cho tương lai trong 10 năm tới"
        state="locked"
      />
      <WritingSectionCard
        title="Viết với AI"
        description="Thực hành viết với sự hỗ trợ của AI, nhận phản hồi chi tiết và gợi ý cải thiện"
        state="unlocked"
      />
    </main>
  );
};
