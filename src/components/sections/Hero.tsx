import Image from "next/image";
import Link from "next/link";
import { images, type ImageSlot } from "@/content/images";
import { NewsletterForm } from "../forms/Newsletter";
import { Container } from "../Section";
import { SharedSpace } from "../Shapes";

const doors = [
  { href: "/get-involved#join", label: "Join the community" },
  { href: "/get-involved#volunteer", label: "Volunteer" },
  { href: "/get-involved#partner", label: "Partner with us" },
];

export function Hero() {
  const photo: ImageSlot = images.hero;
  return (
    <section aria-labelledby="hero-title" className="overflow-hidden bg-sky">
      <Container className="grid items-center gap-10 pb-16 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-20">
        <div className="settle lg:col-span-7">
          <h1 id="hero-title" className="text-[2.9rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink sm:text-7xl lg:text-[5rem]">
            You deserve a space where you belong.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            At SafeSpace Rwanda, we&apos;re building a community where young people can connect, move, talk, and grow
            together. Because mental well-being starts with feeling seen, heard, and supported.
          </p>

          <div className="mt-8 max-w-xl">
            <p className="text-[15px] font-bold text-ink">Be the first to hear when our first gatherings happen.</p>
            <NewsletterForm cta="Keep me posted" className="mt-3" />
          </div>

          <nav aria-label="Ways to get involved" className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px]">
            <span className="text-ink-soft">Or:</span>
            {doors.map((d) => (
              <Link key={d.href} href={d.href} className="font-bold text-blue underline decoration-blue/30 hover:decoration-blue">
                {d.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="settle relative lg:col-span-5 [animation-delay:120ms]">
          {photo.src ? (
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image src={photo.src} alt={photo.alt} fill priority sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </div>
          ) : (
            <div role="img" aria-label="A circle and a capsule overlapping: two people, one shared space">
              <SharedSpace breathe className="mx-auto w-full max-w-[34rem]" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
