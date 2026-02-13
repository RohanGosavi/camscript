import { Link } from "react-router-dom";

const Privacy = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block">← Back to home</Link>
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-muted-foreground mb-12">Last updated: February 1, 2026</p>

      <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
          <p>We collect information you provide directly, such as when you create an account, use our services, or contact support. This may include:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Name and email address</li>
            <li>Payment information (processed securely via third-party providers)</li>
            <li>Audio and video recordings you choose to transcribe</li>
            <li>Usage data and analytics</li>
            <li>Device information and IP address</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. Data Storage & Security</h2>
          <p>Your audio and video files are processed in real-time and are not stored on our servers beyond the active session unless you explicitly save them to your account. We use industry-standard encryption (AES-256) for data at rest and TLS 1.3 for data in transit.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Third-Party Services</h2>
          <p>We may share information with third-party service providers who assist us in operating our services, including payment processors, cloud hosting providers, and analytics services. These providers are contractually obligated to protect your information.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Access and receive a copy of your personal data</li>
            <li>Rectify or update your personal information</li>
            <li>Request deletion of your personal data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Cookies</h2>
          <p>We use essential cookies to maintain your session and preferences. Analytics cookies are optional and can be disabled through your browser settings. We do not use cookies for advertising purposes.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. Children's Privacy</h2>
          <p>CamScript is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact Us</h2>
          <p>For questions about this privacy policy, contact us at <span className="text-foreground">privacy@camscript.app</span>.</p>
        </section>
      </div>
    </div>
  </div>
);

export default Privacy;
