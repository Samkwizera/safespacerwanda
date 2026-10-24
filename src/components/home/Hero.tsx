import { Button, Container, Label } from "../Button";
import { Photo } from "../Photo";
import { reveal } from "@/lib/reveal";
import { images } from "@/content/images";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-14 pb-16 sm:pt-20 lg:pt-24 lg:pb-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div {...reveal()}>
          <Label>Sports. Connection. Wellbeing.</Label>
          <h1 id="hero-title" className="mt-6 text-[3.1rem] leading-[0.98] text-forest sm:text-7xl lg:text-[5.4rem]">
            A safe space to connect, play, and <em className="font-light text-sage">grow.</em>
          </h1>
          <p className="mt-7 max-w-[30rem] text-lg leading-relaxed text-ink-soft">
            SafeSpace Rwanda brings young people together through sports and honest conversations—creating room for
            friendship, self-expression, and better mental wellbeing.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#contact" arrow>Join the Community</Button>
            <Button href="#story" variant="ghost">Discover Our Story</Button>
          </div>
        </div>

        <div className="relative" {...reveal(150)}>
          <Photo slot={images.hero} priority className="aspect-[4/5] w-full sm:aspect-[5/5.4]" sizes="(min-width: 1024px) 560px, 100vw" />
          <figure className="absolute -bottom-6 left-4 max-w-[17rem] rounded-3xl bg-ivory-soft p-5 shadow-[0_20px_50px_-25px_rgba(28,48,35,0.5)] sm:left-[-2rem] sm:p-6">
            <figcaption className="label text-[0.62rem] text-terracotta">Rooted in community</figcaption>
            <blockquote className="mt-3 font-serif text-[1.55rem] leading-tight text-forest">
              Connection starts with showing up.
            </blockquote>
          </figure>
        </div>
      </Container>
    </section>
  );
}
