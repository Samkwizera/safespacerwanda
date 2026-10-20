import type { Metadata } from "next";
import { Lightbulb } from "lucide-react";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Section";
import { Newsletter } from "@/components/forms/Newsletter";
import { Community } from "@/components/sections/Community";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Community & Events",
  description: "Sports meetups, wellness conversations, volunteer opportunities and youth-led activities from SafeSpace Rwanda.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title={<>Show up. <span className="text-forest/55">We&apos;ll save you a spot.</span></>}
        intro="This is where you'll find upcoming games, conversations and gatherings. Everyone is welcome, whether it's your first time or your fiftieth."
      >
        <Photo slot={images.community} parallax className="mt-14 aspect-[16/10] sm:aspect-[21/9]" priority />
      </PageHero>
      <Community />
      <section className="pb-8">
        <Container>
          <Reveal className="grid gap-6 rounded-[2.5rem] bg-sage-soft p-8 sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-forest text-cream"><Lightbulb className="h-6 w-6" aria-hidden /></span>
            <div>
              <h2 className="text-2xl font-extrabold text-forest sm:text-3xl">Have an idea for an activity?</h2>
              <p className="mt-2 text-lg text-muted">Youth-led means you. Tell us what you&apos;d love to see happen in your community.</p>
            </div>
            <Button href="/contact">Share your idea</Button>
          </Reveal>
        </Container>
      </section>
      <Newsletter />
    </>
  );
}
