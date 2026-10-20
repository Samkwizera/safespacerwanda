import { images } from "@/content/images";
import { Button } from "../Button";
import { Photo } from "../Photo";
import { Reveal } from "../Reveal";
import { Container, SectionHeading } from "../Section";

export function Story({ cta = true }: { cta?: boolean }) {
  return (
    <section id="story" aria-label="Our story" className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative order-2 lg:order-1 lg:col-span-5">
          <Photo slot={images.story} parallax className="aspect-[5/6]" sizes="(min-width:1024px) 40vw, 100vw" />
          <div aria-hidden className="absolute -right-5 -top-5 h-24 w-24 animate-float-slow rounded-[2rem] bg-sage" />
        </div>
        <div className="order-1 lg:order-2 lg:col-span-7">
          <SectionHeading eyebrow="Our story" title="We're creating the kind of space everyone deserves." />
          <Reveal delay={0.1} className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal">
            <p>
              SafeSpace Rwanda started with a simple belief: mental well-being shouldn&apos;t only be supported in
              clinics and crisis moments. It should be part of everyday life, in the places where young people
              already connect, play and express themselves.
            </p>
            <p>
              Wellbeing grows through belonging. Through friends who notice when you&apos;re quiet. Through a game that
              gets you out of your head and into your body. Through a conversation where nobody judges you for being
              honest about how you feel.
            </p>
            <p className="text-muted">
              That&apos;s why we bring together sport, open conversation and community, so that more young people in
              Rwanda can feel seen, heard and supported, and know they are not alone.
            </p>
          </Reveal>
          {cta && (
            <Reveal delay={0.2} className="mt-9">
              <Button href="/about" variant="secondary">Read our story</Button>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}

export function Belief() {
  return (
    <section aria-label="Our belief" className="py-10">
      <Container>
        <Reveal className="on-dark relative overflow-hidden rounded-[3rem] bg-forest px-6 py-16 text-center sm:px-16 sm:py-24">
          <div aria-hidden className="absolute -left-16 -top-16 h-56 w-56 animate-float-slow rounded-full bg-sage/20" />
          <div aria-hidden className="absolute -bottom-20 -right-10 h-64 w-64 animate-float rounded-full bg-peach/25" />
          <p className="relative text-sm font-semibold uppercase tracking-[.2em] text-peach">What we believe</p>
          <blockquote className="relative mx-auto mt-6 max-w-4xl font-display text-3xl font-extrabold leading-[1.15] text-cream sm:text-5xl">
            &ldquo;Sometimes, support starts with a conversation.{" "}
            <span className="text-sage">Sometimes, it starts with showing up for a game.&rdquo;</span>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
