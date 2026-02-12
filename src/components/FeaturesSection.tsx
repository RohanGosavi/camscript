import { Eye, EyeOff, Target, AppWindow, Pause, SlidersHorizontal, Type, Lock, FileEdit } from "lucide-react";

const features = [
  {
    icon: EyeOff,
    title: "Invisible to your audience",
    desc: "When screen sharing, only you see the prompter. Your viewers see your presentation, not your script.",
    wide: true,
    graphic: "screenshare",
  },
  {
    icon: Target,
    title: "Right at your camera",
    desc: "Content sits directly below the camera. Your gaze stays natural — no awkward glancing.",
  },
  {
    icon: AppWindow,
    title: "Floating window",
    desc: "Switch to a floating window. Drag it anywhere on any display.",
  },
  {
    icon: Pause,
    title: "Pause instantly",
    desc: "Hover to pause. Gather your thoughts, then continue seamlessly.",
  },
  {
    icon: SlidersHorizontal,
    title: "Control the pace",
    desc: "Scroll manually or adjust auto-scroll speed. Your prompter adapts to your rhythm.",
  },
  {
    icon: Type,
    title: "Fully customizable",
    desc: "Adjust window size, text size, and speed. Make it work your way.",
  },
  {
    icon: Lock,
    title: "Your content stays private",
    desc: "Everything runs locally on your Mac. No cloud, no accounts, no analytics. Your scripts never leave your device.",
    wide: true,
    graphic: "privacy",
  },
  {
    icon: FileEdit,
    title: "Built-in editor",
    desc: "Write and polish scripts right in CamScript. No need for another app.",
  },
];

const ScreenShareGraphic = () => (
  <div className="hidden md:flex items-center justify-center p-6 bg-gradient-to-br from-mist to-secondary w-56 flex-shrink-0">
    <div className="relative">
      <div className="w-36 h-24 bg-card rounded-lg shadow-md border border-border p-2 relative">
        <div className="text-[6px] text-smoke/60 font-bold mb-1.5">What they see</div>
        <div className="space-y-1">
          <div className="bg-secondary rounded h-2 w-full" />
          <div className="bg-secondary rounded h-2 w-3/4" />
          <div className="bg-secondary rounded h-6 w-full" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" fill="none" stroke="white" strokeWidth="3"/></svg>
        </div>
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[6px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">No prompter visible</div>
    </div>
  </div>
);

const PrivacyGraphic = () => (
  <div className="hidden md:flex items-center justify-center p-6 bg-gradient-to-br from-mist to-secondary w-56 flex-shrink-0">
    <div className="text-center">
      <div className="w-14 h-14 bg-card rounded-2xl border border-border shadow-sm flex items-center justify-center mx-auto mb-2">
        <Lock className="w-6 h-6 text-foreground" strokeWidth={1.5} />
      </div>
      <div className="flex items-center justify-center gap-1">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
        <span className="text-[8px] font-semibold">100% Local</span>
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        <div className="relative opacity-30">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[18px] h-[1px] bg-red-400 rotate-45" />
          </div>
        </div>
        <span className="text-[7px] text-smoke/50">No cloud needed</span>
      </div>
    </div>
  </div>
);

const FeaturesSection = () => (
  <section className="py-20 md:py-28 px-6 bg-card" id="features">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-smoke/70 uppercase tracking-widest mb-3">Why CamScript</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Present naturally, without<br className="hidden sm:block" /> distractions.</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          const isWide = f.wide;
          return (
            <div
              key={i}
              className={`bg-mist rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${isWide ? 'sm:col-span-2 lg:col-span-2' : ''}`}
            >
              {isWide ? (
                <div className="flex flex-col md:flex-row">
                  <div className="p-7 md:p-8 flex-1">
                    <div className="w-11 h-11 bg-card rounded-xl border border-border flex items-center justify-center mb-5 shadow-sm">
                      <Icon className="w-5 h-5 text-foreground" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                    <p className="text-smoke leading-relaxed text-[15px]">{f.desc}</p>
                  </div>
                  {f.graphic === "screenshare" && <ScreenShareGraphic />}
                  {f.graphic === "privacy" && <PrivacyGraphic />}
                </div>
              ) : (
                <div className="p-7">
                  <div className="w-11 h-11 bg-card rounded-xl border border-border flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-5 h-5 text-foreground" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                  <p className="text-smoke leading-relaxed text-[15px]">{f.desc}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
