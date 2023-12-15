import "./globals.css";
import type { Metadata, Viewport } from "next";
import React from "react";
import Header from "@/app/components/header";

export const metadata: Metadata = {
  title: "在线工具箱",
  description: "简洁高效的多功能在线工具箱",
  keywords: ["在线工具箱", "base64", "编解码"],
  appleWebApp: {
    title: "在线工具箱",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#F9F9F9",
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
      <body className="mx-auto flex w-11/12 max-w-3xl flex-col gap-5 py-5">
        <Header />
        {children}
      </body>
    </html>
  );
}
