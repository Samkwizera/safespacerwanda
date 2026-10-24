import Link from "next/link";
import { nav, site } from "@/content/site";
import { Container } from "./Button";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const socials = site.social.filter((s) => s.href);
  return (
    <footer className="border-t border-line pt-16 pb-10">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark className="text-3xl" />
            <p className="mt-4 max-w-sm text-ink-soft">
              A community initiative supporting young people&apos;s mental wellbeing through sports, connection and open conversations.
            </p>
          </div>
          <div>
            <h2 className="label font-sans text-ink-soft">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-forest hover:underline">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="label font-sans text-ink-soft">Connect</h2>
            <ul className="mt-4 space-y-2.5">
              {site.email ? (
                <li><a href={`mailto:${site.email}`} className="text-forest hover:underline">{site.email}</a></li>
              ) : (
                <li className="text-ink-soft">Email address coming soon</li>
              )}
              {socials.length ? (
                socials.map((s) => (
                  <li key={s.label}><a href={s.href} className="text-forest hover:underline" target="_blank" rel="noreferrer">{s.label}</a></li>
                ))
              ) : (
                <li className="text-ink-soft">Social channels coming soon</li>
              )}
            </ul>
          </div>
        </div>

        <p className="mt-14 rounded-2xl bg-sage-mist px-5 py-4 text-sm text-ink-soft">
          SafeSpace Rwanda is a community initiative and does not provide emergency or clinical mental health care.
        </p>

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 text-sm text-ink-soft sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-forest">Privacy</Link>
            <Link href="/terms" className="hover:text-forest">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
