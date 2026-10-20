import { CalendarHeart, HandHeart, Sparkles, Users } from "lucide-react";
import { images } from "@/content/images";
import { Button } from "../Button";
import { Photo } from "../Photo";
import { Reveal } from "../Reveal";
import { Container, Eyebrow } from "../Section";

const benefits = [
  { icon: Users, title: "Friendships", text: "Playing side by side makes it easier to talk, laugh and get to know people." },
  { icon: Sparkles, title: "Confidence", text: "Small wins on the court add up to feeling more capable off it." },
  { icon: CalendarHeart, title: "Healthy routines", text: "A regular game gives the week a rhythm and a reason to get outside." },
  { icon: HandHeart, title: "Support", text: "Teammates notice when you're missing, and that matters." },
];

export function Sports() {
  return (
    <section aria-labelledby="sports-title" className="relative overflow-hidden bg-sage-soft/60 py-20 sm:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Sports &amp; mental wellness</Eyebrow>
              <h2 id="sports-title" className="mt-5 text-5xl font-extrabold leading-[1] text-forest sm:text-6xl lg:text-7xl">
                More than a game.
                <span className="block text-forest/55">A way to connect.</span>
              </h2>
            </Reveal>
            <Photo slot={images.sports} parallax className="mt-10 aspect-[4/3] lg:aspect-[16/11]" sizes="(min-width:1024px) 58vw, 100vw" />
          </div>

          <div className="flex flex-col gap-5 lg:col-span-5 lg:pt-40">
            <Reveal className="rounded-[2rem] bg-white p-7 sm:p-8">
              <p className="text-lg leading-relaxed text-charcoal">
                A pickup game of basketball can do something a lecture can&apos;t. It gets people moving, laughing and
                talking. Our approach uses accessible activities like basketball, football, walks and runs as a way in:
                no experience needed, just a willingness to show up.
              </p>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {benefits.map((b, i) => (
                <Reveal as="li" key={b.title} delay={i * 0.07} className="h-full rounded-[1.75rem] bg-cream p-6 transition hover:bg-white">
                    <b.icon className="h-6 w-6 text-forest" aria-hidden />
                    <h3 className="mt-4 text-lg font-bold text-forest">{b.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{b.text}</p>
                  </Reveal>
              ))}
            </ul>
            <Reveal className="rounded-[2rem] bg-forest p-7 text-cream sm:p-8">
              <p className="font-display text-2xl font-bold leading-snug">
                You don&apos;t need to be good at sport. You just need to want to be part of something.
              </p>
              <Button href="/get-involved#join" variant="peach" className="mt-6">Be Part of the Movement</Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
