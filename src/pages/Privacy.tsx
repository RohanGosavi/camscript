import { Link } from "react-router-dom";

const Privacy = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block">&larr; Back to home</Link>
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-muted-foreground mb-12">Last updated: February 1, 2026</p>

      <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Our Privacy Commitment</h2>
          <p>CamScript is designed with privacy at its core. The app runs entirely on your Mac — your scripts, settings, and data never leave your device. We do not collect, store, or transmit your content.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
          <p>We collect minimal information only when you interact with us directly:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Email address (only if you contact support or purchase)</li>
            <li>Payment information (processed securely via third-party payment providers — we never see or store card details)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. What We Don't Collect</h2>
          <p>CamScript does not collect:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Your scripts or text content</li>
            <li>Screen recordings or camera data</li>
            <li>Usage analytics or telemetry</li>
            <li>Device identifiers or IP addresses</li>
            <li>Clipboard data (Universal Clipboard stays between your Apple devices)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Storage</h2>
          <p>All your scripts and preferences are stored locally on your Mac. There is no cloud component, no account system, and no server-side storage. If you delete the app, all associated data is removed from your device.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Third-Party Services</h2>
          <p>We use a third-party payment processor to handle purchases. They are contractually obligated to protect your information and only use it to process your transaction.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Cookies</h2>
          <p>The CamScript website may use essential cookies for basic functionality. We do not use advertising or tracking cookies.</p>
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
