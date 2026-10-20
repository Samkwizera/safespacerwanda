import { Button } from "@/components/Button";
import { Container } from "@/components/Section";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pb-28 pt-44">
      <div aria-hidden className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 animate-float-slow rounded-full bg-peach/70 blur-3xl" />
      <Container className="relative text-center">
        <p className="font-display text-8xl font-extrabold text-sage">404</p>
        <h1 className="mt-4 text-4xl font-extrabold text-forest sm:text-5xl">This page wandered off.</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">It happens. Let&apos;s get you back somewhere familiar.</p>
        <div className="mt-8 flex justify-center"><Button href="/">Back home</Button></div>
      </Container>
    </section>
  );
}
