import Link from "next/link";
import { ArrowUpRight, Handshake, HeartHandshake, UsersRound } from "lucide-react";
import { cn } from "@/lib/cn";
import { Reveal } from "../Reveal";

export const involveOptions = [
  { id: "join", title: "Join the Community", icon: UsersRound, style: "bg-forest text-cream", sub: "text-sage-soft",
    text: "Meet like-minded young people and discover opportunities to connect." },
  { id: "volunteer", title: "Become a Volunteer", icon: HeartHandshake, style: "bg-peach text-forest", sub: "text-forest/75",
    text: "Help organise activities, support awareness initiatives, and build stronger communities." },
  { id: "partner", title: "Partner With Us", icon: Handshake, style: "bg-sage text-forest", sub: "text-forest/75",
    text: "Collaborate with SafeSpace Rwanda to create meaningful opportunities for young people." },
];

export function InvolveCards({ samePage = false }: { samePage?: boolean }) {
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {involveOptions.map((o, i) => (
        <Reveal as="li" key={o.id} delay={i * 0.08} className={cn("group relative flex h-full min-h-80 flex-col overflow-hidden rounded-[2.25rem] p-8 transition-all duration-500 hover:-translate-y-2", o.style)}>
            <div aria-hidden className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-150" />
            <o.icon className="relative h-9 w-9" aria-hidden />
            <h3 className="relative mt-auto pt-16 text-3xl font-extrabold">{o.title}</h3>
            <p className={cn("relative mt-3 leading-relaxed", o.sub)}>{o.text}</p>
            <Link href={samePage ? `#${o.id}-form` : `/get-involved#${o.id}`} className="relative mt-6 inline-flex items-center gap-1.5 font-semibold after:absolute after:inset-[-999px]">
              Get started <span className="sr-only">: {o.title}</span>
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </Reveal>
      ))}
    </ul>
  );
}
