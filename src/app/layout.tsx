import type { Metadata, Viewport } from "next";
import { Figtree, Newsreader } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/Reveal";
import { site } from "@/content/site";
import "./globals.css";

const body = Figtree({ subsets: ["latin"], variable: "--font-body" });
const display = Newsreader({ subsets: ["latin"], variable: "--font-display", style: ["normal", "italic"], weight: ["300", "400"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  keywords: ["Rwanda", "youth", "mental wellbeing", "community", "basketball", "Kigali", "belonging"],
  openGraph: { type: "website", siteName: site.name, locale: "en_RW", title: site.name, description: site.tagline },
  twitter: { card: "summary_large_image", title: site.name, description: site.tagline },
};

export const viewport: Viewport = { themeColor: "#1C3023" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <head>
        {/* Enables scroll reveals only when JS runs, so content never hides without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-ivory">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
