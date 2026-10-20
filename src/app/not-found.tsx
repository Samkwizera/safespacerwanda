import { Button } from "@/components/Button";
import { Container } from "@/components/Section";
import { SharedSpace } from "@/components/Shapes";

export default function NotFound() {
  return (
    <section className="bg-sky pb-24 pt-16 sm:pt-24">
      <Container className="text-center">
        <SharedSpace className="mx-auto w-48" />
        <h1 className="mt-8 text-4xl font-extrabold text-ink sm:text-5xl">This page wandered off.</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-ink-soft">It happens. Let&apos;s get you back somewhere familiar.</p>
        <div className="mt-8 flex justify-center"><Button href="/">Back home</Button></div>
        <p className="mt-6 text-sm font-semibold text-ink-soft">Error 404: page not found</p>
      </Container>
    </section>
  );
}
