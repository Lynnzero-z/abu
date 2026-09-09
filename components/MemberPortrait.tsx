import Image from "next/image";
import type { Member } from "@/data/members";

export function MemberPortrait({
  member,
  size = "large",
}: {
  member: Member;
  size?: "small" | "large";
}) {
  const dimensions = size === "large" ? "h-72" : "h-48";

  if (!member.image) {
    return (
      <div
        className={`${dimensions} flex w-full items-center justify-center rounded-md border border-dashed border-sage/70 bg-paper text-center text-4xl font-semibold text-sage`}
        aria-label={`${member.name} 的照片占位`}
      >
        {member.name.slice(0, 1)}
      </div>
    );
  }

  return (
    <div className={`polaroid rounded-md p-3 ${dimensions}`}>
      <div className="relative h-full overflow-hidden rounded bg-mist">
        <Image
          src={member.image}
          alt={`${member.name} 的档案照片`}
          fill
          sizes={size === "large" ? "(min-width: 768px) 420px, 100vw" : "280px"}
          className="object-cover"
        />
      </div>
    </div>
  );
}
