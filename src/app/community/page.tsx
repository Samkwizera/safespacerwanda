import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
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
        tone="blush"
        title="Show up. We'll save you a spot."
        intro="This is where you'll find upcoming games, conversations and gatherings. Everyone is welcome, whether it's your first time or your fiftieth."
      >
        <Photo slot={images.community} className="mt-12 aspect-[16/10] bg-white/60 sm:aspect-[21/9]" priority />
      </PageHero>
      <Community />
      <section>
        <Container>
          <div className="flex flex-col gap-6 rounded-3xl bg-sunsoft p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">Have an idea for an activity?</h2>
              <p className="mt-2 max-w-xl text-lg text-ink-soft">Youth-led means you. Tell us what you&apos;d love to see happen in your community.</p>
            </div>
            <Button href="/contact" className="self-start lg:self-auto">Share your idea</Button>
          </div>
        </Container>
      </section>
      <Newsletter />
    </>
  );
}
