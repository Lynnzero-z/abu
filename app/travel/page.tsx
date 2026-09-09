import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { travels } from "@/data/travels";

const reservedFields = [
  "地点",
  "时间",
  "同行成员",
  "故事",
  "照片",
  "美食打评",
  "好美食 / 臭美食",
];

export default function TravelPage() {
  return (
    <PageShell>
      <section className="py-8">
        <p className="text-sm font-semibold text-ink/60">共同出发的地方</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink md:text-5xl">
          旅游日志
        </h1>
        <p className="mt-4 max-w-2xl leading-8 text-ink/75">
          第一阶段只建立内容框架，不编造尚未提供的旅行记录。
        </p>
      </section>

      {travels.length === 0 ? (
        <section className="rounded-md bg-paper p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-ink">旅行记录待加入</h2>
          <p className="mt-3 leading-7 text-ink/70">
            后续每篇旅游日志会按统一结构整理，方便逐步加入真实照片、故事和美食评价。
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {reservedFields.map((field) => (
              <div
                key={field}
                className="rounded-md border border-sage/35 bg-meadow px-4 py-3 text-sm font-semibold text-ink/75"
              >
                {field}
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="grid gap-5 md:grid-cols-2">
          {travels.map((travel) => (
            <Link
              key={travel.slug}
              href={`/travel/${travel.slug}`}
              className="rounded-md bg-paper p-5 shadow-soft"
            >
              <p className="text-sm text-ink/60">{travel.time}</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink">
                {travel.place}
              </h2>
              <p className="mt-3 text-sm leading-6 text-ink/70">
                {travel.story}
              </p>
            </Link>
          ))}
        </section>
      )}
    </PageShell>
  );
}
