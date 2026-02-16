import { Video, Radio, Presentation, Mic, GraduationCap, Smartphone } from "lucide-react";

const useCases = [
  {
    icon: Video,
    title: "YouTube & Video Content",
    desc: "Script your videos, deliver polished takes, and maintain natural eye contact. No more forgetting your lines mid-sentence.",
  },
  {
    icon: Radio,
    title: "Live Streaming",
    desc: "Keep talking points visible during Twitch or YouTube Live sessions. Stay on topic without breaking flow or alt-tabbing.",
  },
  {
    icon: Presentation,
    title: "Client Calls & Pitches",
    desc: "Nail investor pitches, sales demos, and client presentations. Your key points stay right next to the camera.",
  },
  {
    icon: Mic,
    title: "Podcasting",
    desc: "Keep interview questions and talking points visible while recording. Never lose your train of thought mid-episode.",
  },
  {
    icon: GraduationCap,
    title: "Online Courses & Tutorials",
    desc: "Teach step-by-step without forgetting what comes next. Perfect for Udemy, Skillshare, or any educational content.",
  },
  {
    icon: Smartphone,
    title: "iPhone to Mac",
    desc: "Write your script in iPhone Notes or Google Docs, copy it, and it's instantly ready in CamScript on your Mac — thanks to Apple's Universal Clipboard.",
    highlight: true,
  },
];

const UseCasesSection = () => (
  <section className="py-20 md:py-28 px-6 bg-card" id="usecases">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-smoke/70 uppercase tracking-widest mb-3">Built for Creators</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          However you create,<br className="hidden sm:block" /> CamScript keeps up.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {useCases.map((uc, i) => {
          const Icon = uc.icon;
          return (
            <div
              key={i}
              className={`rounded-2xl p-7 transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${
                uc.highlight
                  ? "bg-primary text-primary-foreground"
                  : "bg-mist"
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 shadow-sm ${
                uc.highlight
                  ? "bg-white/20 border border-white/10"
                  : "bg-card border border-border"
              }`}>
                <Icon className={`w-5 h-5 ${uc.highlight ? "text-primary-foreground" : "text-foreground"}`} strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-bold mb-2">{uc.title}</h3>
              <p className={`leading-relaxed text-[15px] ${
                uc.highlight ? "text-primary-foreground/80" : "text-smoke"
              }`}>{uc.desc}</p>
              {uc.highlight && (
                <div className="mt-4 inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
                  <span className="text-xs font-semibold">Apple Ecosystem</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
