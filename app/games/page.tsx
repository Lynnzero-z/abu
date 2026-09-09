import { PageShell } from "@/components/PageShell";
import { games } from "@/data/games";

export default function GamesPage() {
  return (
    <PageShell>
      <section className="py-8">
        <p className="text-sm font-semibold text-ink/60">有一点淘气</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink md:text-5xl">
          军校小游戏
        </h1>
        <p className="mt-4 max-w-2xl leading-8 text-ink/75">
          第一阶段只建立入口。具体游戏规则、玩法和数据会在后续确认后再开发。
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {games.map((game) => (
          <div key={game.slug} className="rounded-md bg-paper p-6 shadow-soft">
            <p className="text-sm font-semibold text-sage">Coming Soon</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink">
              {game.name}
            </h2>
            <p className="mt-3 leading-7 text-ink/70">{game.summary}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
