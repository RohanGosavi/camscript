import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Can I copy scripts from my iPhone?", a: "Yes! CamScript works seamlessly with Apple's Universal Clipboard. Write or edit your script in Notes, Google Docs, or any app on your iPhone — copy it, and paste directly into CamScript on your Mac. No cables, no file transfers." },
  { q: "Does it work with OBS, Zoom, and Google Meet?", a: "Absolutely. CamScript is invisible during screen sharing and screen recordings. Your viewers and call participants will never see the prompter — only you can." },
  { q: "Can I use it for YouTube videos?", a: "That's exactly what it's built for. Script your videos, read them naturally from the notch, and maintain perfect eye contact with the camera. No more memorizing lines or glancing at notes off-screen." },
  { q: "What if I lose my place?", a: "Hover over the prompter to pause auto-scrolling instantly. While paused, scroll manually with your trackpad or mouse to find your place. Move the cursor away and it resumes automatically." },
  { q: "Is this a one-time or monthly price?", a: "One-time. Pay $19 once and it's yours forever. No subscriptions, no recurring charges, no hidden fees." },
  { q: "Does it work with classic teleprompters?", a: "Yes. Use Floating Window mode to position CamScript's prompter anywhere — including behind a traditional beam splitter setup." },
  { q: "Will there be a Windows version?", a: "No. CamScript is built specifically for macOS, taking advantage of the MacBook notch and native system APIs like Universal Clipboard. There are no plans for a Windows version." },
];

const FAQSection = () => (
  <section className="py-20 md:py-28 px-6" id="faq">
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-smoke/70 uppercase tracking-widest mb-3">Questions</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently asked.</h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <AccordionTrigger className="px-6 py-5 text-[15px] font-semibold hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-smoke text-[15px] leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
