import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "張智森 — IT 系統工程師 ／ 營業專員",
  description:
    "張智森的個人履歷網站。結合 IT 基礎與商業流程優化能力的應屆畢業生，擅長跨部門溝通與資料處理自動化。",
  keywords: ["IT系統工程師", "營業專員", "應屆畢業生", "張智森", "履歷"],
  openGraph: {
    title: "張智森 — 個人履歷",
    description: "結合 IT 基礎與商業流程優化能力的應屆畢業生",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
