import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABU 军校",
  description: "七位好友共同建设的浅绿青春童话式朋友纪念册。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
