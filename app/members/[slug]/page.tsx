import Link from "next/link";
import { notFound } from "next/navigation";
import { MemberPortrait } from "@/components/MemberPortrait";
import { PageShell } from "@/components/PageShell";
import { getMemberBySlug, members } from "@/data/members";

export function generateStaticParams() {
  return members.map((member) => ({ slug: member.slug }));
}

export default async function MemberDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  return (
    <PageShell>
      <Link href="/members" className="text-sm font-semibold text-ink/65">
        返回军校创始人
      </Link>

      <section className="mt-6 grid gap-8 md:grid-cols-[420px_1fr] md:items-start">
        <MemberPortrait member={member} />
        <div className="rounded-md bg-paper p-6 shadow-soft">
          <p className="text-sm font-semibold text-ink/60">{member.title}</p>
          <h1 className="mt-3 text-4xl font-semibold text-ink">
            {member.name}
          </h1>
          <dl className="mt-6 grid gap-4 text-sm">
            <div>
              <dt className="font-semibold text-ink">档案称号</dt>
              <dd className="mt-1 leading-7 text-ink/75">{member.alias}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">基础标签</dt>
              <dd className="mt-1 leading-7 text-ink/75">{member.specialty}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">角色介绍</dt>
              <dd className="mt-1 leading-7 text-ink/75">{member.profile}</dd>
            </div>
          </dl>

          {member.notes.length > 0 ? (
            <div className="mt-6 rounded-md border border-sage/40 bg-meadow p-4">
              <h2 className="text-sm font-semibold text-ink">档案备注</h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-ink/75">
                {member.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </PageShell>
  );
}
