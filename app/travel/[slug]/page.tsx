import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { getTravelBySlug, travels } from "@/data/travels";

export function generateStaticParams() {
  return travels.map((travel) => ({ slug: travel.slug }));
}

export default async function TravelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const travel = getTravelBySlug(slug);

  if (!travel) {
    notFound();
  }

  return (
    <PageShell>
      <Link href="/travel" className="text-sm font-semibold text-ink/65">
        返回旅游日志
      </Link>

      <article className="mt-6 rounded-md bg-paper p-6 shadow-soft">
        <p className="text-sm text-ink/60">{travel.time}</p>
        <h1 className="mt-2 text-4xl font-semibold text-ink">{travel.place}</h1>
        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-ink">同行成员</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              {travel.companions.map((member) => member.name).join("、")}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink">故事</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">{travel.story}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink">照片</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              照片区域已预留。
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink">美食打评</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              好美食和臭美食区域已预留。
            </p>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
