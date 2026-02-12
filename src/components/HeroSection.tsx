const ScrollingText = ({ speed = "animate-scroll-text" }: {speed?: string;}) =>
<div className={speed}>
    <p className="text-[7px] text-white/90 leading-[1.6] mb-2 font-medium">Welcome everyone. Today I want to walk you through our latest product updates.</p>
    <p className="text-[7px] text-white/90 leading-[1.6] mb-2 font-medium">We've been working hard on features you requested, and I'm thrilled to share what's next.</p>
    <p className="text-[7px] text-white/90 leading-[1.6] mb-2 font-medium">Let me start with the improvements we made to the dashboard experience.</p>
    <p className="text-[7px] text-white/90 leading-[1.6] mb-2 font-medium">Welcome everyone. Today I want to walk you through our latest product updates.</p>
    <p className="text-[7px] text-white/90 leading-[1.6] mb-2 font-medium">We've been working hard on features you requested, and I'm thrilled to share what's next.</p>
    <p className="text-[7px] text-white/90 leading-[1.6] mb-2 font-medium">Let me start with the improvements we made to the dashboard experience.</p>
  </div>;


const HeroSection = () => {
  return (
    <section className="pt-16 pb-12 md:pt-28 md:pb-20 px-6" id="hero">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="animate-fade-in">
          



        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] mb-6 animate-fade-in" style={{ animationDelay: '0.12s', animationFillMode: 'both' }}>
          Meet CamScript —<br />
          <span className="text-smoke">Your discreet notch prompter.</span>
        </h1>

        <p className="text-lg md:text-xl text-smoke max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.24s', animationFillMode: 'both' }}>
          A smart prompter that lives in your Mac's notch — right next to the camera, so your eye contact feels natural.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5 animate-fade-in" style={{ animationDelay: '0.36s', animationFillMode: 'both' }}>
          <a href="#pricing" className="bg-primary hover:bg-ash text-primary-foreground font-semibold text-base px-8 py-3.5 rounded-2xl transition-all shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15">
            $19 — One-time Purchase
          </a>
          <a href="#pricing" className="text-smoke hover:text-foreground font-medium text-base transition-colors underline underline-offset-4 decoration-border hover:decoration-muted-foreground">
            Start Free Trial
          </a>
        </div>
        <p className="text-xs text-muted-foreground mb-14 animate-fade-in" style={{ animationDelay: '0.36s', animationFillMode: 'both' }}>Requires macOS 14.7 or later.</p>

        {/* MacBook Mockup */}
        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.48s', animationFillMode: 'both' }}>
          <div className="rounded-t-2xl rounded-b-sm p-2 pb-1.5 relative shadow-[0_20px_80px_-20px_rgba(0,0,0,0.45)]" style={{ background: 'linear-gradient(180deg, #3a3a3c 0%, #1c1c1e 6%, #1c1c1e 94%, #0a0a0a 100%)' }}>
            <div className="rounded-[10px] overflow-hidden relative" style={{ aspectRatio: '16/10', background: '#000' }}>
              {/* macOS Menu Bar inside screen */}
              <div className="h-[28px] flex items-center px-4 relative z-10" style={{ background: 'linear-gradient(to bottom, #38383d, #2c2c31)' }}>
                <svg width="12" height="14" viewBox="0 0 14 17" fill="white" opacity="0.7" className="mr-4">
                  <path d="M13.1 12.6c-.3.7-.7 1.3-1.1 1.8-.6.8-1.1 1.3-1.5 1.6-.6.5-1.3.7-2 .7-.5 0-1.1-.1-1.8-.4-.7-.3-1.3-.4-1.8-.4s-1.1.1-1.8.4c-.7.3-1.2.4-1.6.4-.7 0-1.4-.3-2-.8C.9 15.3.4 14.7 0 14c-.4-.8-.8-1.6-1-2.6s-.4-1.9-.4-2.8c0-1 .2-1.9.7-2.7.3-.6.8-1.1 1.4-1.5.6-.4 1.2-.6 1.9-.6.5 0 1.2.2 2 .5.8.3 1.3.5 1.5.5.2 0 .7-.2 1.6-.6.8-.3 1.5-.5 2.1-.4 1.5.1 2.7.7 3.4 1.9-1.4.8-2 2-2 3.5 0 1.2.4 2.1 1.3 2.9.4.4.8.7 1.3.9l-.3.9zM10 .3c0 .9-.3 1.8-1 2.6-.8.9-1.7 1.5-2.8 1.4 0-.1 0-.2 0-.3 0-.9.4-1.8 1-2.5.3-.4.8-.7 1.3-1C9 .2 9.5.1 10 0c0 .1 0 .2 0 .3z" transform="translate(1,0)" />
                </svg>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-white/60 font-medium">Finder</span>
                  <span className="text-[10px] text-white/50">File</span>
                  <span className="text-[10px] text-white/50">Edit</span>
                  <span className="text-[10px] text-white/50">View</span>
                </div>
                <div className="ml-auto flex items-center gap-3">
                  <span className="text-[10px] text-white/50">Wi-Fi</span>
                  <span className="text-[10px] text-white/60 font-medium">3:42 PM</span>
                </div>
                {/* Physical Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[25%] h-[28px] bg-black z-20 flex items-center justify-center">
                  <div className="w-[6px] h-[6px] rounded-full border border-[#2a2a3a]" style={{ background: 'radial-gradient(circle at 40% 40%, #3a3a4a, #1a1a2a)' }}>
                    <div className="absolute top-[1px] left-[1.5px] w-[2px] h-[2px] rounded-full" style={{ background: 'rgba(100,130,220,0.3)' }} />
                  </div>
                </div>
              </div>

              {/* CamScript Prompter */}
              <div className="absolute left-1/2 -translate-x-1/2 bg-black rounded-b-[14px] overflow-hidden z-[15]" style={{ top: 28, width: '25%', height: 72 }}>
                <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-black to-transparent z-[2] pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black to-transparent z-[2] pointer-events-none" />
                <div className="h-full flex items-center justify-center overflow-hidden px-2">
                  <ScrollingText />
                </div>
              </div>

              {/* Zoom-like video call */}
              <div className="relative h-full" style={{ paddingTop: 28, background: '#1a1a20' }}>
                <div className="mx-6 mt-4 mb-3 rounded-xl overflow-hidden relative" style={{ height: '55%', background: 'linear-gradient(to bottom right, #2a3040, #1e2530)' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #4a5568, #2d3748)' }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" opacity="0.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                      </div>
                      <span className="text-[8px] text-white/40 font-medium">You</span>
                    </div>
                  </div>
                  {/* Controls */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="white" opacity="0.6"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /></svg>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.6"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
                    </div>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(234,67,53,0.8)' }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.9"><line x1="1" y1="1" x2="23" y2="23" /></svg>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.6"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                    </div>
                  </div>
                  <div className="absolute top-2 left-3 bg-black/30 backdrop-blur-sm rounded px-2 py-0.5">
                    <span className="text-[7px] text-white/70 font-medium">You (presenting)</span>
                  </div>
                </div>
                {/* Participant thumbnails */}
                <div className="mx-6 flex gap-2">
                  {[
                  { initials: 'JD', name: 'John D.', from: '#2d3a4a', to: '#1e2832', bg: '#4a6080' },
                  { initials: 'SK', name: 'Sarah K.', from: '#3a2d4a', to: '#281e32', bg: '#6a4a80' },
                  { initials: 'MR', name: 'Mike R.', from: '#2d4a3a', to: '#1e3228', bg: '#4a8060' },
                  { initials: '+4', name: '', from: '#4a3a2d', to: '#32281e', bg: '#80604a' }].
                  map((p, i) =>
                  <div key={i} className="flex-1 h-12 rounded-lg flex items-center justify-center relative" style={{ background: `linear-gradient(to bottom right, ${p.from}, ${p.to})` }}>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: p.bg }}>
                        <span className="text-[6px] text-white/70 font-bold">{p.initials}</span>
                      </div>
                      {p.name && <span className="absolute bottom-1 left-2 text-[5px] text-white/40">{p.name}</span>}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Chin */}
          <div className="h-3 rounded-b-lg mx-[10%]" style={{ background: 'linear-gradient(to bottom, #1c1c1e, #2a2a2c)' }} />
          {/* Hinge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[18%] h-2 rounded-b-md" style={{ background: 'linear-gradient(to bottom, #2a2a2c, #1a1a1c)' }} />
        </div>
      </div>
    </section>);

};

export default HeroSection;