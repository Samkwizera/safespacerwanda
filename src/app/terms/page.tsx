import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Terms of Use", description: "The terms for using the SafeSpace Rwanda website." };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="October 2026">
      <p>By using this website, you agree to these terms. They&apos;re here to keep the space safe and honest for everyone.</p>
      <h2>Not a clinical or crisis service</h2>
      <p>
        SafeSpace Rwanda provides community and educational content. Nothing on this site is medical advice, diagnosis or
        treatment, and it does not replace qualified mental health professionals. We cannot respond to emergencies. If you
        or someone else is in immediate danger, contact local emergency services or go to your nearest hospital or health
        centre.
      </p>
      <h2>Using the site respectfully</h2>
      <ul>
        <li>Be kind. Don&apos;t submit anything abusive, hateful or misleading.</li>
        <li>Don&apos;t try to disrupt the site, its forms, or other people&apos;s use of it.</li>
        <li>Only submit information about yourself, not other people.</li>
      </ul>
      <h2>Our content</h2>
      <p>
        Text, design and graphics on this site belong to SafeSpace Rwanda unless stated otherwise. You&apos;re welcome to share
        links to our resources.
      </p>
      <h2>Links to other sites</h2>
      <p>We may link to other websites. We aren&apos;t responsible for their content or privacy practices.</p>
      <h2>Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <a href={`mailto:${site.email}`} className="font-semibold">{site.email}</a>.
      </p>
    </LegalPage>
  );
}
