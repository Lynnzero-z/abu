import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/members", label: "军校创始人" },
  { href: "/travel", label: "旅游日志" },
  { href: "/games", label: "军校小游戏" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5">
      <Link href="/" className="text-lg font-semibold tracking-normal text-ink">
        ABU 军校
      </Link>
      <nav className="flex flex-wrap items-center justify-end gap-2 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-2 text-ink/75 transition hover:bg-paper hover:text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
