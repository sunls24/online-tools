import "./globals.css";
import type { Metadata, Viewport } from "next";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "在线工具箱",
    template: "%s - 在线工具箱",
  },
  description:
    "一款简洁高效的在线工具箱｜Base64 编解码、URL 编解码、JSON 格式化工具",
  appleWebApp: {
    title: "在线工具箱",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9F9F9" },
    { media: "(prefers-color-scheme: dark)", color: "#141619" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <link rel="manifest" href="/manifest.json"></link>
      </head>
      <body className="mx-auto flex w-11/12 max-w-3xl flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
