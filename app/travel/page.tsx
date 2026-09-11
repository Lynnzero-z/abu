import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { travels } from "@/data/travels";

const reservedFields = ["地点与时间", "同行成员", "真实故事", "照片", "好美食", "臭美食"];

export default function TravelPage() {
  return (
    <PageShell>
      <section className="page-intro">
        <p className="eyebrow">TRAVEL LOG · 共同出发</p>
        <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h1 className="page-title">旅游日志</h1>
            <p className="page-description">
              用真实照片、真实故事和真实味觉记录七个人去过的地方。第一批旅行内容还未提供，所以这里先把空相册擦干净等着。
            </p>
          </div>
          <Link href="/food" className="soft-link">去美食打评分栏 →</Link>
        </div>
      </section>

      {travels.length === 0 ? (
        <section className="relative mt-7 overflow-hidden rounded-[2rem] bg-paper p-7 shadow-soft md:p-10">
          <div className="absolute right-7 top-5 rotate-6 rounded bg-butter/65 px-5 py-2 text-xs font-semibold tracking-[0.14em] text-ink/55">待第一次出发</div>
          <div className="grid gap-8 md:grid-cols-[1.05fr_.95fr] md:items-end">
            <div>
              <div className="travel-placeholder relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-mist">
                <span className="absolute left-[17%] top-[22%] h-3 w-3 rounded-full bg-white/80" />
                <span className="absolute bottom-8 left-8 text-6xl text-white/60">⌁</span>
                <p className="absolute inset-x-0 bottom-7 text-center text-xs font-semibold tracking-[0.2em] text-ink/45">PHOTO GOES HERE</p>
              </div>
            </div>
            <div>
              <p className="eyebrow">EMPTY, ON PURPOSE</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-ink">还没有旅行记录</h2>
              <p className="mt-4 leading-7 text-ink/65">
                结构已经准备好，但不会用示例城市、虚构日期或 AI 故事来冒充你们的回忆。等真实素材到位，这里会自然长成时间线。
              </p>
              <div className="mt-6 grid grid-cols-2 gap-2">
                {reservedFields.map((field) => (
                  <span key={field} className="rounded-xl border border-sage/25 bg-meadow/70 px-3 py-3 text-sm font-medium text-ink/60">{field}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="mt-7 grid gap-5 md:grid-cols-2">
          {travels.map((travel) => (
            <Link key={travel.slug} href={`/travel/${travel.slug}`} className="rounded-[1.5rem] bg-paper p-5 shadow-soft transition hover:-translate-y-1">
              <p className="eyebrow">{travel.time}</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-ink">{travel.place}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">{travel.story}</p>
            </Link>
          ))}
        </section>
      )}
    </PageShell>
  );
}
