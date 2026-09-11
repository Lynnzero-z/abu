import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { members } from "@/data/members";

const entrances = [
  {
    href: "/members",
    number: "01",
    title: "七位成员",
    subtitle: "FOUNDERS",
    description: "查看七位创始人的照片、称号与角色档案。",
    color: "bg-[#f7e8bd]",
    mark: "七",
  },
  {
    href: "/travel",
    number: "02",
    title: "旅游日志",
    subtitle: "TRAVEL LOG",
    description: "旅行内容等真实记录到位后，再一篇篇放进来。",
    color: "bg-[#dcecf0]",
    mark: "行",
  },
  {
    href: "/food",
    number: "03",
    title: "美食打评",
    subtitle: "GOOD OR BAD",
    description: "好美食负责返场，臭美食负责留下证据。",
    color: "bg-[#efd8d1]",
    mark: "评",
  },
  {
    href: "/games",
    number: "04",
    title: "军校小游戏",
    subtitle: "PLAYGROUND",
    description: "先玩一个七人随机小互动，更多玩法以后慢慢长。",
    color: "bg-[#ded9ed]",
    mark: "玩",
  },
];

export default function CampusPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden rounded-[2rem] bg-paper px-6 py-10 shadow-soft md:px-10 md:py-14">
        <span className="absolute right-8 top-5 rotate-6 text-6xl text-sage/25">✦</span>
        <p className="eyebrow">CAMPUS MAP · 今日开放</p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h1 className="font-serif text-4xl font-semibold tracking-[-0.05em] text-ink md:text-6xl">
              想先去哪里？
            </h1>
            <p className="mt-4 max-w-xl leading-8 text-ink/65">
              这里不是严肃的校务系统，只是七个人随时可以回来的共同入口。
            </p>
          </div>
          <div className="flex -space-x-2" aria-label="七位成员">
            {members.map((member) => (
              <span
                key={member.slug}
                title={member.name}
                className="grid h-9 w-9 place-items-center rounded-full border-2 border-paper bg-sage text-xs font-semibold text-white"
              >
                {member.name.slice(0, 1)}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        {entrances.map((entrance, index) => (
          <Link
            key={entrance.href}
            href={entrance.href}
            className={`entrance-card group relative min-h-64 overflow-hidden rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft md:p-8 ${entrance.color}`}
          >
            <div className="flex items-start justify-between">
              <span className="rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-ink/55">
                {entrance.number}
              </span>
              <span className="grid h-14 w-14 rotate-3 place-items-center rounded-full border border-white/70 bg-white/35 font-serif text-2xl text-ink/70 transition group-hover:-rotate-6 group-hover:scale-105">
                {entrance.mark}
              </span>
            </div>
            <div className="mt-12">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-ink/45">
                {entrance.subtitle}
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold tracking-[-0.04em] text-ink">
                {entrance.title}
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-ink/65">
                {entrance.description}
              </p>
            </div>
            <span className="absolute bottom-7 right-7 text-xl text-ink/45 transition group-hover:translate-x-1">→</span>
            <span className={`tape absolute -left-8 top-1/2 h-5 w-24 ${index % 2 === 0 ? "rotate-[-18deg]" : "rotate-[14deg]"}`} />
          </Link>
        ))}
      </section>
    </PageShell>
  );
}
