import { Button, Container, Label } from "../Button";
import { reveal } from "@/lib/reveal";
import { cn } from "@/lib/cn";

const paths = [
  {
    n: "01",
    title: "Join as a participant",
    text: "Come along, play, talk and meet people who care about the same things you do. No experience needed—just you.",
    cta: "I'd like to join",
    tone: "bg-ivory-soft",
  },
  {
    n: "02",
    title: "Volunteer your time or skills",
    text: "Help shape welcoming activities, from organising meetups to supporting conversations and community outreach.",
    cta: "I'd like to volunteer",
    tone: "bg-terracotta-pale",
  },
  {
    n: "03",
    title: "Partner with SafeSpace Rwanda",
    text: "Organisations, schools and venues who share our values can help create more room for young people to thrive.",
    cta: "Let's talk partnership",
    tone: "bg-sage-pale",
  },
];

export function Involve() {
  return (
    <section id="get-involved" aria-labelledby="involve-title" className="pb-24 sm:pb-32">
      <Container>
        <div className="max-w-2xl" {...reveal()}>
          <Label>Get involved</Label>
          <h2 id="involve-title" className="mt-5 text-5xl text-forest sm:text-6xl">
            There&apos;s a place for <em className="font-light text-sage">you</em> here.
          </h2>
        </div>
        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {paths.map((p, i) => (
            <li
              key={p.n}
              className={cn("flex flex-col rounded-[28px] p-7 transition-transform duration-500 ease-out hover:-translate-y-1 sm:p-8", p.tone)}
              {...reveal(i * 100)}
            >
              <span className="label text-terracotta">{p.n}</span>
              <h3 className="mt-10 text-3xl text-forest">{p.title}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-ink-soft">{p.text}</p>
              <Button href="#contact" arrow className="mt-8 self-start">{p.cta}</Button>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
