"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const friends = [
  { left: "8%", bottom: "13%", color: "var(--butter)", delay: "0s" },
  { left: "20%", bottom: "9%", color: "var(--blush)", delay: "-.7s" },
  { left: "32%", bottom: "16%", color: "#fff8e8", delay: "-1.1s" },
  { left: "58%", bottom: "11%", color: "var(--lilac)", delay: "-.3s" },
  { left: "69%", bottom: "17%", color: "var(--butter)", delay: "-1.4s" },
  { left: "80%", bottom: "9%", color: "#fff8e8", delay: "-.9s" },
  { left: "89%", bottom: "15%", color: "var(--blush)", delay: "-.1s" },
];

export function LilyGate() {
  const router = useRouter();
  const [active, setActive] = useState(false);

  function enterCampus() {
    if (active) return;
    setActive(true);
    window.setTimeout(() => router.push("/campus"), 1050);
  }

  return (
    <section className="lily-scene relative isolate min-h-[calc(100svh-92px)] overflow-hidden rounded-[2rem] border border-white/80 shadow-soft">
      <div className="absolute inset-x-0 top-0 h-[58%] bg-[linear-gradient(180deg,#dff2f2_0%,#eaf6ed_82%,transparent_100%)]" />
      <div className="sun-glow absolute -right-16 -top-24 h-80 w-80 rounded-full" />
      <div className="cloud cloud-one" />
      <div className="cloud cloud-two" />

      <div className="absolute inset-x-0 bottom-0 h-[48%] rounded-t-[45%] bg-[linear-gradient(180deg,#dcebc5_0%,#bfd99d_100%)]" />
      <div className="absolute inset-x-0 bottom-[7%] h-px bg-ink/10" />

      <div className="absolute inset-x-0 top-10 z-10 px-6 text-center md:top-14">
        <p className="scrap-label inline-flex rotate-[-2deg] items-center gap-2 rounded-full bg-paper/90 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-ink/65 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-sage" />
          七个人的线上秘密校园
        </p>
        <h1 className="mt-5 font-serif text-5xl font-semibold tracking-[-0.06em] text-ink md:text-7xl">
          ABU 军校
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-ink/65 md:text-base">
          青春不是整齐的队列，是七个人一起跑过草地时，谁也没落下。
        </p>
      </div>

      <div className="absolute left-1/2 top-[42%] z-20 -translate-x-1/2 -translate-y-1/2">
        <button
          type="button"
          onClick={enterCampus}
          disabled={active}
          className={`lily-button group relative block h-36 w-60 rounded-[50%] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/90 md:h-44 md:w-80 ${active ? "is-pouring" : ""}`}
          aria-label="点击荷叶，进入军校选择页"
        >
          <span className="lily-leaf absolute inset-0 rounded-[50%]" />
          <span className="lily-notch absolute right-[48%] top-0 h-[48%] w-1 origin-bottom rotate-[24deg] bg-[#dff0c5]" />
          <span className="leaf-vein absolute left-1/2 top-1/2 h-px w-[42%] origin-left -rotate-[18deg] bg-white/35" />
          <span className="water-pool absolute left-[31%] top-[24%] h-[42%] w-[44%] rounded-[50%]" />
          <span className="absolute inset-0 flex items-center justify-center pt-1 text-sm font-semibold tracking-[0.12em] text-white/95 drop-shadow-sm transition group-hover:scale-105">
            {active ? "正在入校" : "轻点荷叶"}
          </span>
        </button>
        <p className={`mt-5 text-center text-xs font-medium tracking-[0.2em] text-ink/55 transition ${active ? "opacity-0" : "opacity-100"}`}>
          CLICK TO ENTER
        </p>
      </div>

      <div aria-hidden="true" className={`water-curtain absolute inset-0 z-40 ${active ? "is-active" : ""}`}>
        <span className="water-drop drop-one" />
        <span className="water-drop drop-two" />
        <span className="water-drop drop-three" />
        <p className="absolute inset-x-0 top-1/2 text-center text-sm font-semibold tracking-[0.28em] text-ink/60">
          WELCOME BACK
        </p>
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[33%]">
        {friends.map((friend, index) => (
          <span
            key={index}
            className="friend-mark absolute h-24 w-7 rounded-[60%_45%_42%_55%] border border-ink/10 shadow-sm md:h-32 md:w-9"
            style={{
              left: friend.left,
              bottom: friend.bottom,
              background: friend.color,
              animationDelay: friend.delay,
            }}
          >
            <span className="absolute -left-2 top-4 h-12 w-1 origin-top rotate-[26deg] rounded-full bg-ink/25" />
            <span className="absolute -right-2 top-5 h-11 w-1 origin-top -rotate-[28deg] rounded-full bg-ink/25" />
          </span>
        ))}
      </div>

      <div className="absolute bottom-5 left-6 z-10 rotate-[-3deg] rounded bg-paper/75 px-3 py-2 text-[11px] font-medium text-ink/55 backdrop-blur-sm">
        EST. BY SEVEN FRIENDS
      </div>
      <div className="absolute bottom-6 right-7 z-10 text-3xl text-white/70">✦</div>
    </section>
  );
}
