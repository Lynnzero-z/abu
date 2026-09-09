"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const destinations = ["/members", "/travel", "/games"];

export function LilyGate() {
  const router = useRouter();
  const [active, setActive] = useState(false);

  function enterRandomSection() {
    setActive(true);
    const next = destinations[Math.floor(Math.random() * destinations.length)];
    window.setTimeout(() => router.push(next), 720);
  }

  return (
    <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-md border border-white/70 bg-meadow">
      <div className="absolute inset-x-0 top-0 h-36 bg-mist" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-sage/35" />
      <div className="absolute bottom-10 left-[10%] h-28 w-16 rounded-full bg-butter/80" />
      <div className="absolute bottom-16 left-[27%] h-24 w-14 rounded-full bg-blush/80" />
      <div className="absolute bottom-8 left-[42%] h-32 w-16 rounded-full bg-paper/90" />
      <div className="absolute bottom-14 right-[35%] h-24 w-14 rounded-full bg-lilac/80" />
      <div className="absolute bottom-10 right-[20%] h-28 w-16 rounded-full bg-butter/70" />
      <div className="absolute bottom-16 right-[8%] h-24 w-14 rounded-full bg-paper/90" />

      <button
        type="button"
        onClick={enterRandomSection}
        className={`group absolute top-20 flex h-24 w-72 items-center justify-center rounded-[50%] bg-sage text-ink shadow-soft transition duration-500 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-butter ${
          active ? "rotate-6" : "rotate-0"
        }`}
        aria-label="点击荷叶进入随机军校栏目"
      >
        <span className="water-sheen h-14 w-32 rounded-[50%] transition group-hover:scale-105" />
      </button>

      <div
        className={`absolute inset-x-0 top-36 origin-top bg-mist/80 backdrop-blur-sm transition-all duration-700 ${
          active ? "h-full opacity-100" : "h-0 opacity-0"
        }`}
      />

      <div className="relative z-10 mt-32 max-w-2xl px-6 text-center">
        <p className="mb-4 text-sm font-semibold text-ink/65">线上秘密校园</p>
        <h1 className="text-5xl font-semibold leading-tight text-ink md:text-7xl">
          ABU 军校
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-ink/75 md:text-lg">
          七位好友共同建设的朋友纪念册，用来保存成员、旅行、美食、游戏和慢慢发生的共同回忆。
        </p>
      </div>
    </div>
  );
}
