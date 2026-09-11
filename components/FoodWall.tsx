"use client";

import { useState } from "react";

type Tab = "good" | "bad";

const tabs: { id: Tab; label: string; count: number }[] = [
  { id: "good", label: "好美食", count: 0 },
  { id: "bad", label: "臭美食", count: 0 },
];

export function FoodWall() {
  const [active, setActive] = useState<Tab>("good");
  const good = active === "good";

  return (
    <section className="mt-7">
      <div className="inline-flex rounded-full bg-paper p-1 shadow-sm" role="tablist" aria-label="美食分类">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            onClick={() => setActive(tab.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${active === tab.id ? "bg-ink text-paper" : "text-ink/55 hover:text-ink"}`}
          >
            {tab.label} <span className="ml-1 opacity-60">{tab.count}</span>
          </button>
        ))}
      </div>

      <div className={`relative mt-5 overflow-hidden rounded-[2rem] border border-white/70 p-7 shadow-soft md:p-10 ${good ? "bg-[#f7e8bd]" : "bg-[#efd8d1]"}`}>
        <span className="absolute -right-8 -top-10 text-[10rem] font-semibold leading-none text-white/25">
          {good ? "好" : "臭"}
        </span>
        <p className="eyebrow relative">{good ? "值得再次点单" : "需要郑重避雷"}</p>
        <h2 className="relative mt-3 font-serif text-3xl font-semibold text-ink">
          {good ? "好美食席位空着" : "臭美食档案空着"}
        </h2>
        <p className="relative mt-4 max-w-xl leading-7 text-ink/65">
          还没有收到真实评价。以后每条记录可以放菜名、地点、照片、七人评分和一句短评；在那之前，空白比编故事更体面。
        </p>
        <div className="relative mt-7 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {["名称", "地点 / 旅行", "七人评分", "真实短评"].map((field) => (
            <span key={field} className="rounded-2xl border border-white/80 bg-white/35 px-4 py-4 font-medium text-ink/60">
              {field}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
