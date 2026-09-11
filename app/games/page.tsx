import { PageShell } from "@/components/PageShell";
import { TodayCaptain } from "@/components/TodayCaptain";
import { members } from "@/data/members";

export default function GamesPage() {
  return (
    <PageShell>
      <section className="page-intro">
        <p className="eyebrow">PLAYGROUND · 有一点淘气</p>
        <h1 className="page-title mt-4">军校小游戏</h1>
        <p className="page-description">
          第一版先放一个无需账号、随点随玩的七人小互动。后续规则没定的游戏只留位置，不抢跑。
        </p>
      </section>

      <section className="mt-7 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
        <TodayCaptain members={members} />
        <div className="rounded-[2rem] border border-dashed border-sage/45 bg-paper/55 p-7 md:p-9">
          <p className="eyebrow">NEXT GAME</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink">下一格，等你们决定</h2>
          <p className="mt-4 text-sm leading-7 text-ink/60">
            可以是旅行默契题、七人梗图配对，也可以是彻底不讲道理的抽签器。具体玩法确认后再开发。
          </p>
          <div className="mt-8 grid aspect-video place-items-center rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_30%,#ffffff_0_5%,transparent_6%),linear-gradient(135deg,#ddeff0,#edf4e3)] text-5xl text-white/75">?</div>
        </div>
      </section>
    </PageShell>
  );
}
