import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export const involveOptions = [
  { id: "join", title: "Join the Community", style: "bg-blue text-white", sub: "text-white/85",
    text: "Meet like-minded young people and discover opportunities to connect." },
  { id: "volunteer", title: "Become a Volunteer", style: "bg-sun text-ink", sub: "text-ink/75",
    text: "Help organise activities, support awareness initiatives, and build stronger communities." },
  { id: "partner", title: "Partner With Us", style: "bg-ink text-white on-dark", sub: "text-[#c9cee6]",
    text: "Collaborate with SafeSpace Rwanda to create meaningful opportunities for young people." },
];

/** The three ways in. Each panel is one link. */
export function InvolveCards({ samePage = false }: { samePage?: boolean }) {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {involveOptions.map((o) => (
        <li key={o.id} className={cn("group relative flex flex-col rounded-3xl p-7 transition-transform duration-150 ease-out active:scale-[.99] sm:p-8 md:min-h-64", o.style)}>
          <h3 className="text-[1.7rem] font-extrabold leading-tight">{o.title}</h3>
          <p className={cn("mt-3 leading-relaxed", o.sub)}>{o.text}</p>
          <Link href={samePage ? `#${o.id}-form` : `/get-involved#${o.id}`} className="mt-auto inline-flex items-center gap-1.5 pt-8 font-bold after:absolute after:inset-0 after:rounded-3xl">
            Get started <span className="sr-only">: {o.title}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out [@media(hover:hover)]:group-hover:translate-x-1" aria-hidden />
          </Link>
        </li>
      ))}
    </ul>
  );
}
