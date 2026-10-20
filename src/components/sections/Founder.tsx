import { images } from "@/content/images";
import { Photo } from "../Photo";
import { Container } from "../Section";

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
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Photo slot={images.founder} className="aspect-[4/5] lg:col-span-5" sizes="(min-width:1024px) 40vw, 100vw" />
        <div className="lg:col-span-7">
          <h2 id="founder-title" className="text-[2rem] font-extrabold leading-[1.1] text-ink sm:text-[2.6rem]">{founder.name}</h2>
          <p className="mt-2 font-semibold text-ink-soft">{founder.role}</p>
          {founder.quote && (
            <blockquote className="mt-8 text-2xl font-bold leading-snug text-ink">&ldquo;{founder.quote}&rdquo;</blockquote>
          )}
          {hasBio ? (
            <div className="mt-6 max-w-[62ch] space-y-4 text-lg leading-relaxed text-ink-soft">
              {founder.bio.map((p) => <p key={p}>{p}</p>)}
            </div>
          ) : (
            <p className="mt-8 rounded-2xl bg-mist p-6 text-ink-soft">
              The founder&apos;s story is coming soon, told in Samuel&apos;s own words.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
