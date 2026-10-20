import type { Metadata, Viewport } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", weight: ["500", "600", "700", "800"] });
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description:
    "SafeSpace Rwanda is a youth initiative building community, belonging and mental wellbeing through sports, open conversations and shared experiences.",
  keywords: ["Rwanda", "youth", "mental wellness", "mental health", "community", "basketball", "Kigali", "belonging"],
  openGraph: { type: "website", siteName: site.name, locale: "en_RW", title: site.name, description: site.tagline },
  twitter: { card: "summary_large_image", title: site.name, description: site.tagline },
};

export const viewport: Viewport = { themeColor: "#173C35" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${dm.variable}`}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
