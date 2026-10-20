import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description:
    "SafeSpace Rwanda is a youth initiative building community, belonging and mental wellbeing through sports, open conversations and shared experiences.",
  keywords: ["Rwanda", "youth", "mental wellness", "mental health", "community", "basketball", "Kigali", "belonging"],
  openGraph: { type: "website", siteName: site.name, locale: "en_RW", title: site.name, description: site.tagline },
  twitter: { card: "summary_large_image", title: site.name, description: site.tagline },
};

export const viewport: Viewport = { themeColor: "#FFFFFF" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={figtree.variable}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
