"use client";

import { useState } from "react";
import type { Member } from "@/data/members";

export function TodayCaptain({ members }: { members: Pick<Member, "name" | "title">[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [rolling, setRolling] = useState(false);

  function draw() {
    if (rolling) return;
    setRolling(true);
    setSelected(null);
    window.setTimeout(() => {
      setSelected(Math.floor(Math.random() * members.length));
      setRolling(false);
    }, 650);
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#f7e8bd] p-7 shadow-soft md:p-9">
      <span className="absolute -right-6 -top-12 font-serif text-[11rem] leading-none text-white/30">7</span>
      <p className="eyebrow relative">AVAILABLE NOW</p>
      <h2 className="relative mt-3 font-serif text-3xl font-semibold text-ink">今天谁先出发？</h2>
      <p className="relative mt-3 max-w-lg text-sm leading-7 text-ink/65">
        从七位成员中随机抽出一位“今日先行官”。结果只负责逗你笑，不负责排班，千万别拿它当人事系统。
      </p>

      <div className="relative mt-7 flex min-h-32 flex-col items-start justify-between gap-5 rounded-3xl border border-white/80 bg-white/35 p-5 sm:flex-row sm:items-center">
        <div aria-live="polite">
          <p className="text-xs font-semibold tracking-[0.18em] text-ink/45">TODAY&apos;S PICK</p>
          {selected === null ? (
            <p className="mt-2 text-xl font-semibold text-ink/55">{rolling ? "七人正在互相谦让……" : "等待抽取"}</p>
          ) : (
            <div className="mt-2">
              <p className="font-serif text-3xl font-semibold text-ink">{members[selected].name}</p>
              <p className="mt-1 text-sm text-ink/60">{members[selected].title}</p>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={draw}
          disabled={rolling}
          className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
        >
          {selected === null ? "随机抽一位" : "再抽一次"}
        </button>
      </div>
    </div>
  );
}
