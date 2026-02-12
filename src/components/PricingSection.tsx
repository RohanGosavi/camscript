import { Check } from "lucide-react";

const benefits = [
  "No subscriptions, ever",
  "Lifetime access & updates",
  "100% private — runs locally",
  "Notch + Floating modes",
];

const PricingSection = () => (
  <section className="py-20 md:py-28 px-6 bg-card" id="pricing">
    <div className="max-w-lg mx-auto text-center">
      <p className="text-sm font-semibold text-smoke/70 uppercase tracking-widest mb-3">Pricing</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple, fair, one-time.</h2>
      <p className="text-smoke mb-12">No subscriptions. No hidden fees. Pay once, own it forever.</p>

      <div className="relative">
        {/* Glow border */}
        <div className="absolute -inset-px rounded-3xl" style={{ background: 'linear-gradient(135deg, #e0e0e0, #f0f0f0, #e0e0e0)' }} />
        <div className="bg-card rounded-3xl border border-border p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, hsl(var(--border)), hsl(var(--muted-foreground) / 0.3), hsl(var(--border)))' }} />
          <div className="mb-8">
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl md:text-6xl font-extrabold">$19</span>
            </div>
            <p className="text-smoke text-sm">One-time payment</p>
          </div>

          <ul className="space-y-4 mb-10 text-left max-w-xs mx-auto">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                </div>
                <span className="text-[15px]">{b}</span>
              </li>
            ))}
          </ul>

          <a href="#" className="block bg-primary hover:bg-ash text-primary-foreground font-semibold text-base px-8 py-4 rounded-2xl transition-all shadow-lg shadow-black/10 hover:shadow-xl mb-3">
            Purchase CamScript
          </a>
          <a href="#" className="text-smoke hover:text-foreground text-sm font-medium transition-colors underline underline-offset-4 decoration-border">
            or start a free trial
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
