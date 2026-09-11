import Link from "next/link";
import { FoodWall } from "@/components/FoodWall";
import { PageShell } from "@/components/PageShell";

export default function FoodPage() {
  return (
    <PageShell>
      <section className="page-intro">
        <p className="eyebrow">FOOD REVIEW · 实名品鉴</p>
        <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h1 className="page-title">美食打评</h1>
            <p className="page-description">
              “好美食”和“臭美食”分栏保存；可以属于一次旅行，也可以只是某天突然吃到的一口。
            </p>
          </div>
          <Link href="/travel" className="soft-link">查看旅游日志 →</Link>
        </div>
      </section>
      <FoodWall />
    </PageShell>
  );
}
