import Link from "next/link";
import { MemberPortrait } from "@/components/MemberPortrait";
import { PageShell } from "@/components/PageShell";
import { members } from "@/data/members";

export default function MembersPage() {
  return (
    <PageShell>
      <section className="page-intro">
        <p className="eyebrow">THE FOUNDERS · 全员到齐</p>
        <h1 className="page-title mt-4">七位军校创始人</h1>
        <p className="page-description">
          七种脾气，七份档案，还有同一片互联网自留地。点击照片查看每个人的正式——或者不太正式——介绍。
        </p>
      </section>

      <section className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <Link
            key={member.slug}
            href={`/members/${member.slug}`}
            className={`member-card group rounded-[1.5rem] bg-paper p-3 shadow-soft transition duration-300 hover:-translate-y-1 ${index % 3 === 1 ? "lg:translate-y-7 lg:hover:translate-y-5" : ""}`}
          >
            <MemberPortrait member={member} size="small" />
            <div className="px-2 pb-3 pt-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-ink/45">
                  FOUNDER {String(index + 1).padStart(2, "0")}
                </p>
                <span className="text-ink/35 transition group-hover:translate-x-1">→</span>
              </div>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-ink">{member.name}</h2>
              <p className="mt-1 text-sm font-medium text-sage">{member.title}</p>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-ink/60">{member.profile}</p>
            </div>
          </Link>
        ))}
      </section>
      <div className="h-6 lg:h-12" />
    </PageShell>
  );
}
