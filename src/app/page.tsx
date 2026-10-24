import { Hero } from "@/components/home/Hero";
import { Values } from "@/components/home/Values";
import { Approach } from "@/components/home/Approach";
import { Story } from "@/components/home/Story";
import { Activities } from "@/components/home/Activities";
import { Involve } from "@/components/home/Involve";
import { Contact } from "@/components/home/Contact";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Approach />
      <Story />
      <Activities />
      <Involve />
      <Contact />
      <FinalCta />
    </>
  );
}
