import { Button, Container } from "../Button";
import { reveal } from "@/lib/reveal";

/** Simple leaf outline used as a quiet botanical texture. */
function Leaf({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 200 320" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M100 310 C 20 230, 10 110, 100 10 C 190 110, 180 230, 100 310 Z" />
      <path d="M100 310 V 30" />
      {[60, 100, 140, 180, 220, 260].map((y) => (
        <g key={y}>
          <path d={`M100 ${y + 20} Q 70 ${y}, 45 ${y - 15}`} />
          <path d={`M100 ${y + 20} Q 130 ${y}, 155 ${y - 15}`} />
        </g>
      ))}
    </svg>
  );
}

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="pb-24 sm:pb-32">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] bg-forest px-6 py-20 text-center sm:px-12 sm:py-28" {...reveal()}>
          <Leaf className="absolute -top-10 -left-8 w-48 rotate-[-25deg] text-ivory/10 sm:w-64" />
          <Leaf className="absolute -right-10 -bottom-16 w-56 rotate-[155deg] text-ivory/10 sm:w-72" />
          <h2 id="cta-title" className="relative mx-auto max-w-3xl text-5xl text-ivory sm:text-7xl">
            You deserve a place to <em className="font-light text-terracotta-pale">belong.</em>
          </h2>
          <p className="relative mx-auto mt-6 max-w-lg text-lg text-ivory/75">
            Be part of a community making room for connection, movement, and meaningful conversations.
          </p>
          <Button href="#get-involved" variant="light" arrow className="relative mt-10">Get Involved</Button>
        </div>
      </Container>
    </section>
  );
}
