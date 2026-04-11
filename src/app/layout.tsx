import type { Metadata } from "next";
import "./globals.css";
import { CursorTrail } from "@/components/cursor-trail";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "TM Engineering College, Dhaka",
  description:
    "Official portal for TM Engineering College, Dhaka with admission, academic programs, notice board and important links.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <CursorTrail />
        <div className="site-frame">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
