import Link from "next/link";
import { MemberPortrait } from "@/components/MemberPortrait";
import { PageShell } from "@/components/PageShell";
import { members } from "@/data/members";

export default function MembersPage() {
  return (
    <PageShell>
      <section className="py-8">
        <p className="text-sm font-semibold text-ink/60">七位创始人</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink md:text-5xl">
          军校创始人
        </h1>
        <p className="mt-4 max-w-2xl leading-8 text-ink/75">
          这里整理角色档案中的基础介绍。照片归属不明确的成员暂时使用占位，等后续确认后再替换。
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <Link
            key={member.slug}
            href={`/members/${member.slug}`}
            className="rounded-md bg-paper p-4 shadow-soft transition hover:-translate-y-1"
          >
            <MemberPortrait member={member} size="small" />
            <div className="pt-4">
              <p className="text-sm text-ink/60">{member.title}</p>
              <h2 className="mt-1 text-2xl font-semibold text-ink">
                {member.name}
              </h2>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink/70">
                {member.profile}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </PageShell>
  );
}
