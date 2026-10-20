import { images } from "@/content/images";
import { Button } from "../Button";
import { Photo } from "../Photo";
import { Container, SectionHeading } from "../Section";

const benefits = [
  { title: "Friendships", text: "Playing side by side makes it easier to talk, laugh and get to know people." },
  { title: "Confidence", text: "Small wins on the court add up to feeling more capable off it." },
  { title: "Healthy routines", text: "A regular game gives the week a rhythm and a reason to get outside." },
  { title: "Support", text: "Teammates notice when you're missing, and that matters." },
];

export function Sports() {
  return (
    <section aria-labelledby="sports-title" className="bg-mint py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading id="sports-title" title="More than a game. A way to connect." />
            <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-ink-soft">
              A pickup game of basketball can do something a lecture can&apos;t. It gets people moving, laughing and
              talking. Our approach uses accessible activities like basketball, football, walks and runs as a way in:
              no experience needed, just a willingness to show up.
            </p>
            <Photo slot={images.sports} className="mt-10 aspect-[16/11]" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>

          <div className="lg:col-span-6 lg:pt-2">
            <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title}>
                  <dt className="text-xl font-extrabold text-ink">{b.title}</dt>
                  <dd className="mt-1.5 text-[16px] leading-relaxed text-ink-soft">{b.text}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-12 rounded-2xl bg-white p-7 sm:p-8">
              <p className="text-2xl font-extrabold leading-snug text-ink">
                You don&apos;t need to be good at sport. You just need to want to be part of something.
              </p>
              <Button href="/get-involved#join" className="mt-6">Be Part of the Movement</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
