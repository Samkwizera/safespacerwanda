import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Privacy Policy", description: "How SafeSpace Rwanda collects, uses and protects your information." };

// Have this reviewed against Rwanda's Law No. 058/2021 on the protection of personal data and privacy before launch.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 2026">
      <p>
        Your trust matters to us. This policy explains, in plain language, what information SafeSpace Rwanda collects
        through this website, why, and what choices you have.
      </p>
      <h2>What we collect</h2>
      <ul>
        <li><strong>Community sign-ups:</strong> your name, email, age range, and optionally your general location and interests.</li>
        <li><strong>Volunteer applications:</strong> your name, email, age range, how you&apos;d like to help, and your availability.</li>
        <li><strong>Partner enquiries and contact messages:</strong> your name, email, organisation (if relevant), and your message.</li>
        <li><strong>Newsletter:</strong> your email address.</li>
      </ul>
      <p>
        We do <strong>not</strong> ask for health or medical information through our forms, and we ask that you don&apos;t
        include it. We record that you gave consent and when.
      </p>
      <h2>How we use it</h2>
      <ul>
        <li>To reply to you and keep you updated about activities you&apos;ve asked to hear about.</li>
        <li>To organise volunteering and partnerships.</li>
        <li>To send the newsletter, if you subscribed. Every email includes a way to unsubscribe.</li>
      </ul>
      <p>We don&apos;t sell your information or share it with advertisers.</p>
      <h2>How we protect it</h2>
      <p>
        Form submissions are processed on our server and stored in a private database that is not publicly accessible.
        Only a small number of authorised team members can view them. We keep information only as long as we need it for
        the purposes above.
      </p>
      <h2>Young people</h2>
      <p>
        Our community is for young people. If you are under 18, please check with a parent or guardian before signing
        up for activities.
      </p>
      <h2>Your choices</h2>
      <p>
        You can ask to see, correct or delete your information at any time by emailing{" "}
        <a href={`mailto:${site.email}`} className="font-semibold">{site.email}</a>.
      </p>
      <h2>Changes</h2>
      <p>If we update this policy, we&apos;ll change the date at the top of this page.</p>
    </LegalPage>
  );
}
