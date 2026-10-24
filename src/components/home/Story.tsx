import { Container, Label } from "../Button";
import { Photo } from "../Photo";
import { reveal } from "@/lib/reveal";
import { images } from "@/content/images";

const principles = ["People before labels.", "Listening with respect.", "Connection through shared experiences."];

export function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="bg-sage-mist py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div className="relative pb-16 sm:pb-20" {...reveal()}>
          <Photo slot={images.story} className="aspect-[4/5] w-[88%]" sizes="(min-width: 1024px) 480px, 88vw" />
          <Photo slot={images.storySmall} className="absolute right-0 bottom-0 aspect-square w-[42%] border-[6px] border-sage-mist" sizes="240px" />
        </div>

        <div className="lg:pt-10" {...reveal(150)}>
          <Label>Our story</Label>
          <h2 id="story-title" className="mt-5 text-5xl text-forest sm:text-6xl">
            It starts with feeling you <em className="font-light text-sage">belong.</em>
          </h2>
          <div className="mt-8 max-w-lg space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              SafeSpace Rwanda was founded by Samuel Kwizera Ihimbazwe, out of a simple belief: that sport has a rare
              power to bring young people together.
            </p>
            <p>
              On the court, people show up as themselves. That shared ground makes it easier to start the conversations
              that matter—about how we&apos;re really doing, and how we can look out for each other.
            </p>
          </div>

          <ul className="mt-12 border-t border-line">
            {principles.map((p, i) => (
              <li key={p} className="flex items-baseline gap-6 border-b border-line py-5">
                <span className="label text-terracotta">0{i + 1}</span>
                <span className="font-serif text-2xl text-forest">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
