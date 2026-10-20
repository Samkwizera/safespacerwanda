import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { Container } from "./Section";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={`Last updated: ${updated}`} />
      <Container className="max-w-3xl pb-28">
        <div className="prose-safe rounded-[2.5rem] bg-white p-7 text-[17px] text-charcoal ring-1 ring-forest/5 sm:p-12">{children}</div>
      </Container>
    </>
  );
}
