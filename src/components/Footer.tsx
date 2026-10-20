import Link from "next/link";
import { Mail } from "lucide-react";
import { Instagram, Linkedin } from "@/components/BrandIcons";
import { nav, site } from "@/content/site";
import { Logo } from "./Logo";
import { Container } from "./Section";

const community = [
  { href: "/community", label: "Events" },
  { href: "/get-involved#volunteer", label: "Volunteer" },
  { href: "/get-involved#partner", label: "Partner with us" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark relative overflow-hidden rounded-t-[3rem] bg-forest text-sage-soft">
      <div aria-hidden className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-sage/10" />
      <Container className="relative pb-10 pt-20">
        <p className="max-w-4xl font-display text-4xl font-extrabold leading-[1.05] text-cream sm:text-6xl">
          Creating space. <span className="text-peach">Building belonging.</span>
        </p>

        <div className="mt-16 grid gap-12 border-t border-white/10 pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-5 max-w-sm leading-relaxed">
              A youth-led initiative in Rwanda helping young people connect, move, talk and grow together, because
              wellbeing starts with feeling seen, heard and supported.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={site.social.instagram} aria-label="Instagram (link coming soon)" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-peach hover:text-forest">
                <Instagram className="h-5 w-5" aria-hidden />
              </a>
              <a href={site.social.linkedin} aria-label="LinkedIn (link coming soon)" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-peach hover:text-forest">
                <Linkedin className="h-5 w-5" aria-hidden />
              </a>
              <a href={`mailto:${site.email}`} aria-label="Email us" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-peach hover:text-forest">
                <Mail className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-[.16em] text-peach">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}><Link href={n.href} className="transition hover:text-cream">{n.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-[.16em] text-peach">Community</h2>
            <ul className="mt-4 space-y-2.5">
              {community.map((n) => (
                <li key={n.href}><Link href={n.href} className="transition hover:text-cream">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-[.16em] text-peach">Say hello</h2>
            <a href={`mailto:${site.email}`} className="mt-4 block break-all transition hover:text-cream">{site.email}</a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} SafeSpace Rwanda. Community and educational support, not a clinical or crisis service.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cream">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cream">Terms of Use</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
