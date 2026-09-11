"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/campus", label: "选择页" },
  { href: "/members", label: "七位成员" },
  { href: "/travel", label: "旅游日志" },
  { href: "/food", label: "美食打评" },
  { href: "/games", label: "小游戏" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-6">
      <Link href="/" className="group flex shrink-0 items-center gap-2 text-base font-semibold tracking-[-0.02em] text-ink">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-sage text-xs text-white transition group-hover:-rotate-6">ABU</span>
        <span className="hidden sm:inline">军校</span>
      </Link>
      <nav aria-label="主导航" className="no-scrollbar flex items-center gap-1 overflow-x-auto text-sm">
        {navItems.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-full px-3 py-2 transition ${active ? "bg-ink text-paper" : "text-ink/65 hover:bg-paper hover:text-ink"}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
