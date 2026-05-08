import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comet - Official Online Store",
  description: "Comet official store clone page built for reverse-engineering practice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
