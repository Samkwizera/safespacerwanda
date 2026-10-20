import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { Container } from "./Section";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero tone="mist" title={title} intro={`Last updated: ${updated}`} />
      <Container narrow className="py-14 sm:py-20">
        <div className="prose-safe text-[17px] text-ink-soft">{children}</div>
      </Container>
    </>
  );
}
