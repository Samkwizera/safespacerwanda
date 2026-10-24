import { Button, Container, Label } from "@/components/Button";

export default function NotFound() {
  return (
    <Container className="py-28 text-center sm:py-40">
      <Label>Error 404</Label>
      <h1 className="mt-5 text-5xl text-forest sm:text-7xl">
        This page <em className="text-sage">wandered off.</em>
      </h1>
      <p className="mx-auto mt-5 max-w-md text-lg text-ink-soft">It happens. Let&apos;s get you back somewhere familiar.</p>
      <div className="mt-9 flex justify-center"><Button href="/" arrow>Back home</Button></div>
    </Container>
  );
}
