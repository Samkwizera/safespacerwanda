import type { ReactNode } from "react";
import { Container, Label } from "./Button";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <Container className="max-w-[760px] py-20 sm:py-28">
      <Label>Last updated · {updated}</Label>
      <h1 className="mt-5 text-5xl text-forest sm:text-6xl">{title}</h1>
      <div className="prose-legal mt-12 text-[17px] text-ink-soft">{children}</div>
    </Container>
  );
}
