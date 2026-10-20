import { Quote } from "lucide-react";
import { images } from "@/content/images";
import { Photo } from "../Photo";
import { Reveal } from "../Reveal";
import { Container, Eyebrow } from "../Section";

/**
 * Founder profile. Edit `founder` below. Bio fields are left as clearly
 * marked placeholders so nothing is invented on Samuel's behalf.
 */
export const founder = {
  name: "Samuel Kwizera Ihimbazwe",
  role: "Founder, SafeSpace Rwanda",
  quote: "", // e.g. a sentence in Samuel's own words about why SafeSpace exists
  bio: [] as string[], // add one or more paragraphs
};

export function Founder() {
  const hasBio = founder.bio.length > 0;
  return (
    <section aria-labelledby="founder-title" className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <div aria-hidden className="absolute -left-6 -top-6 h-32 w-32 animate-float rounded-full bg-peach" />
            <Photo slot={images.founder} className="relative aspect-[4/5]" sizes="(min-width:1024px) 40vw, 100vw" />
          </div>
          <Reveal className="lg:col-span-7">
            <Eyebrow>Founder&apos;s story</Eyebrow>
            <h2 id="founder-title" className="mt-5 text-4xl font-extrabold text-forest sm:text-5xl">{founder.name}</h2>
            <p className="mt-2 font-medium text-muted">{founder.role}</p>
            {founder.quote && (
              <blockquote className="mt-8 border-l-4 border-peach pl-6 font-display text-2xl font-semibold leading-snug text-forest">
                <Quote className="mb-2 h-6 w-6 text-peach-deep" aria-hidden />
                {founder.quote}
              </blockquote>
            )}
            {hasBio ? (
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal">
                {founder.bio.map((p) => <p key={p}>{p}</p>)}
              </div>
            ) : (
              <p className="mt-8 rounded-3xl border-2 border-dashed border-forest/20 p-6 text-muted">
                The founder&apos;s story is coming soon, told in Samuel&apos;s own words.
              </p>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
