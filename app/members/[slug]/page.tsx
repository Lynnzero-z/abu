import Link from "next/link";
import { notFound } from "next/navigation";
import { MemberPortrait } from "@/components/MemberPortrait";
import { PageShell } from "@/components/PageShell";
import { getMemberBySlug, members } from "@/data/members";

export function generateStaticParams() {
  return members.map((member) => ({ slug: member.slug }));
}

export default async function MemberDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) notFound();

  const index = members.findIndex((item) => item.slug === member.slug);
  const previous = members[(index - 1 + members.length) % members.length];
  const next = members[(index + 1) % members.length];

  return (
    <PageShell>
      <div className="flex items-center justify-between py-2 text-sm font-semibold text-ink/55">
        <Link href="/members" className="soft-link">← 返回七位成员</Link>
        <span>{String(index + 1).padStart(2, "0")} / 07</span>
      </div>

      <section className="mt-5 grid gap-6 md:grid-cols-[minmax(0,430px)_1fr] md:items-start">
        <div className="group rotate-[-1deg]"><MemberPortrait member={member} /></div>
        <div className="relative overflow-hidden rounded-[2rem] bg-paper p-7 shadow-soft md:p-10">
          <span className="absolute -right-5 -top-12 font-serif text-[11rem] leading-none text-sage/10">{index + 1}</span>
          <p className="eyebrow relative">FOUNDER FILE</p>
          <h1 className="relative mt-3 font-serif text-5xl font-semibold tracking-[-0.05em] text-ink">{member.name}</h1>
          <p className="relative mt-3 text-lg font-semibold text-sage">{member.title}</p>
          <dl className="relative mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-meadow/70 p-4">
              <dt className="text-xs font-semibold tracking-[0.16em] text-ink/45">基础标签</dt>
              <dd className="mt-2 leading-7 text-ink/75">{member.specialty}</dd>
            </div>
            <div className="rounded-2xl bg-mist/65 p-4">
              <dt className="text-xs font-semibold tracking-[0.16em] text-ink/45">档案称号</dt>
              <dd className="mt-2 leading-7 text-ink/75">{member.alias}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs font-semibold tracking-[0.16em] text-ink/45">角色介绍</dt>
              <dd className="mt-3 text-base leading-8 text-ink/70">{member.profile}</dd>
            </div>
          </dl>
          {member.notes.length > 0 ? (
            <div className="relative mt-7 rotate-[-1deg] rounded-2xl border border-sage/25 bg-[#f7e8bd]/70 p-4">
              <p className="text-xs font-semibold tracking-[0.16em] text-ink/45">档案备注</p>
              {member.notes.map((note) => <p key={note} className="mt-2 leading-7 text-ink/70">{note}</p>)}
            </div>
          ) : null}
        </div>
      </section>

      <nav className="mt-7 grid gap-3 sm:grid-cols-2" aria-label="切换成员">
        <Link href={`/members/${previous.slug}`} className="rounded-2xl bg-paper px-5 py-4 text-sm text-ink/60 transition hover:-translate-y-0.5 hover:shadow-soft">← 上一位 · {previous.name}</Link>
        <Link href={`/members/${next.slug}`} className="rounded-2xl bg-paper px-5 py-4 text-right text-sm text-ink/60 transition hover:-translate-y-0.5 hover:shadow-soft">下一位 · {next.name} →</Link>
      </nav>
    </PageShell>
  );
}
