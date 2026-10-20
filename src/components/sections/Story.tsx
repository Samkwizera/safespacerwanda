import { images } from "@/content/images";
import { Button } from "../Button";
import { Photo } from "../Photo";
import { Container, SectionHeading } from "../Section";

export function Story({ cta = true }: { cta?: boolean }) {
  return (
    <section id="story" aria-labelledby="story-title" className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading id="story-title" title="We're creating the kind of space everyone deserves." />
          <div className="mt-7 max-w-[62ch] space-y-5 text-lg leading-relaxed text-ink-soft">
            <p className="text-ink">
              SafeSpace Rwanda started with a simple belief: mental well-being shouldn&apos;t only be supported in
              clinics and crisis moments. It should be part of everyday life, in the places where young people
              already connect, play and express themselves.
            </p>
            <p>
              Wellbeing grows through belonging. Through friends who notice when you&apos;re quiet. Through a game that
              gets you out of your head and into your body. Through a conversation where nobody judges you for being
              honest about how you feel.
            </p>
            <p>
              That&apos;s why we bring together sport, open conversation and community, so that more young people in
              Rwanda can feel seen, heard and supported, and know they are not alone.
            </p>
          </div>
          {cta && <Button href="/about" variant="secondary" className="mt-9">Read our story</Button>}
        </div>
        <Photo slot={images.story} className="aspect-[5/4] lg:col-span-5 lg:aspect-[4/5]" sizes="(min-width:1024px) 40vw, 100vw" />
      </Container>
    </section>
  );
}

export function Belief() {
  return (
    <section aria-label="What we believe" className="bg-sunsoft py-20 sm:py-28">
      <Container>
        <figure className="mx-auto max-w-4xl text-center">
          <blockquote className="text-[1.9rem] font-extrabold leading-[1.15] tracking-[-0.025em] text-ink sm:text-5xl">
            &ldquo;Sometimes, support starts with a conversation. Sometimes, it starts with showing up for a game.&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-lg font-semibold text-ink-soft">What we believe</figcaption>
        </figure>
      </Container>
    </section>
  );
}
