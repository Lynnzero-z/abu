import { SiteHeader } from "./SiteHeader";

export function PageShell({
  children,
  home = false,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main
        className={`mx-auto w-full max-w-6xl px-4 pb-16 md:px-6 ${home ? "pb-5" : ""}`}
      >
        {children}
      </main>
    </div>
  );
}
