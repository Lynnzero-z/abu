import Link from "next/link";
import { LilyGate } from "@/components/LilyGate";
import { PageShell } from "@/components/PageShell";

const sections = [
  {
    href: "/members",
    title: "军校创始人",
    description: "查看七位成员的角色档案和基础介绍。",
  },
  {
    href: "/travel",
    title: "旅游日志",
    description: "预留地点、时间、同行成员、故事、照片和美食打评结构。",
  },
  {
    href: "/games",
    title: "军校小游戏",
    description: "小游戏入口先占位，后续再逐步开发具体内容。",
  },
];

export default function Home() {
  return (
    <PageShell>
      <LilyGate />
      <section className="grid gap-4 py-10 md:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="hand-drawn rounded-md bg-paper p-5 transition hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              {section.description}
            </p>
          </Link>
        ))}
      </section>
    </PageShell>
  );
}
