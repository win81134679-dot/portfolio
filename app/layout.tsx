import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "張智森 — 行政人員 ／ 營業專員",
  description:
    "張智森的個人履歷網站。具備跨部門行政協調與 IT 設備支援經驗，歷經半導體、物流與教育三大產業實務歷練。",
  keywords: ["行政人員", "營業專員", "應屆畢業生", "張智森", "履歷"],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "張智森 — 個人履歷",
    description: "結合 IT 基礎與商業流程優化能力的應屆畢業生",
    type: "website",
    url: "https://portfolio-pearl-three-41.vercel.app",
    images: [
      {
        url: "https://portfolio-pearl-three-41.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "張智森 — 個人履歷",
      },
    ],
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
