import { Link } from "react-router-dom";

const License = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block">← Back to home</Link>
      <h1 className="text-4xl font-bold mb-2">License Agreement</h1>
      <p className="text-muted-foreground mb-12">Last updated: February 1, 2026</p>

      <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Grant of License</h2>
          <p>CamScript grants you a non-exclusive, non-transferable, revocable license to use the software application ("Software") subject to the terms and conditions of this agreement. You may install and use the Software on devices you own or control for personal or commercial use.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Restrictions</h2>
          <p>You may not:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Copy, modify, or distribute the Software without prior written consent</li>
            <li>Reverse engineer, decompile, or disassemble the Software</li>
            <li>Rent, lease, or lend the Software to third parties</li>
            <li>Use the Software for any unlawful purpose</li>
            <li>Remove or alter any proprietary notices or labels</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. Intellectual Property</h2>
          <p>The Software and all copies thereof are proprietary to CamScript and title, ownership rights, and intellectual property rights in the Software shall remain with CamScript. The Software is protected by copyright and other intellectual property laws.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Subscription & Payment</h2>
          <p>Certain features of the Software require a paid subscription. By purchasing a subscription, you agree to the pricing terms displayed at the time of purchase. Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current billing period.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Disclaimer of Warranties</h2>
          <p>THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
          <p>IN NO EVENT SHALL CAMSCRIPT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SOFTWARE, REGARDLESS OF THE CAUSE OF ACTION OR THE THEORY OF LIABILITY.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. Termination</h2>
          <p>This license is effective until terminated. CamScript may terminate this license at any time if you fail to comply with any term of this agreement. Upon termination, you must destroy all copies of the Software in your possession.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact</h2>
          <p>If you have any questions about this license agreement, please contact us at <span className="text-foreground">legal@camscript.app</span>.</p>
        </section>
      </div>
    </div>
  </div>
);

export default License;
