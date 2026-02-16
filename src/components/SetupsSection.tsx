const MiniScrollText = ({ speed = "animate-scroll-text" }: { speed?: string }) => (
  <div className={`${speed} text-center w-full`}>
    <p className="text-[3.5px] text-white/85 leading-snug mb-1">Hey everyone, welcome back to my channel</p>
    <p className="text-[3.5px] text-white/85 leading-snug mb-1">Today we're diving into something exciting</p>
    <p className="text-[3.5px] text-white/85 leading-snug mb-1">Let me show you step by step</p>
    <p className="text-[3.5px] text-white/85 leading-snug mb-1">Hey everyone, welcome back to my channel</p>
    <p className="text-[3.5px] text-white/85 leading-snug mb-1">Today we're diving into something exciting</p>
    <p className="text-[3.5px] text-white/85 leading-snug mb-1">Let me show you step by step</p>
  </div>
);

const SetupsSection = () => (
  <section className="py-20 md:py-28 px-6" id="setups">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-smoke/70 uppercase tracking-widest mb-3">Flexible Modes</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Different setups, same confidence.</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {/* Notch Prompter */}
        <div className="bg-card rounded-3xl border border-border p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <div className="mb-8">
            <div className="bg-mist rounded-2xl overflow-hidden flex justify-center items-start h-56 relative">
              <div className="w-[85%] mt-6">
                <div className="rounded-t-lg p-[3px]" style={{ background: 'linear-gradient(to bottom, #333, #1c1c1e)' }}>
                  <div className="rounded-t-[5px] overflow-hidden relative" style={{ aspectRatio: '16/10', background: '#0f0f18' }}>
                    <div className="h-4 flex items-center px-2 relative" style={{ background: '#2c2c31' }}>
                      <div className="flex gap-[3px]">
                        <div className="w-[5px] h-[5px] rounded-full bg-[#ff5f57]/70" />
                        <div className="w-[5px] h-[5px] rounded-full bg-[#febc2e]/70" />
                        <div className="w-[5px] h-[5px] rounded-full bg-[#28c840]/70" />
                      </div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[22%] h-4 bg-black flex items-center justify-center">
                        <div className="w-[3px] h-[3px] rounded-full bg-[#2a2a3a] border border-[#333]" />
                      </div>
                    </div>
                    {/* Prompter */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-[22%] bg-black rounded-b-[8px] overflow-hidden z-10" style={{ top: 16, height: 44 }}>
                      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-black to-transparent z-10" />
                      <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-black to-transparent z-10" />
                      <div className="h-full flex items-center overflow-hidden px-1">
                        <MiniScrollText />
                      </div>
                    </div>
                    {/* Desktop */}
                    <div className="h-full" style={{ background: 'linear-gradient(to bottom right, #1a1a30, #2a1a3a, #1a2a3a)' }}>
                      <div className="p-3 pt-10 grid grid-cols-3 gap-1.5 opacity-20">
                        <div className="bg-white/10 rounded h-5" />
                        <div className="bg-white/10 rounded h-5 col-span-2" />
                        <div className="bg-white/10 rounded h-4 col-span-2" />
                        <div className="bg-white/10 rounded h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-1.5 rounded-b mx-[12%]" style={{ background: 'linear-gradient(to bottom, #1c1c1e, #2a2a2c)' }} />
              </div>
              <div className="absolute bottom-4 right-6">
                <div className="flex items-center gap-1.5 bg-card rounded-full px-2.5 py-1 shadow-md">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
                  <span className="text-[8px] font-semibold">CamScript</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h3 className="text-xl font-bold">Notch Prompter</h3>
          </div>
          <p className="text-smoke leading-relaxed">Sits right by your camera, tucked into the notch. Your audience won't notice — but you'll never lose your place.</p>
        </div>

        {/* Floating Window */}
        <div className="bg-card rounded-3xl border border-border p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <div className="mb-8">
            <div className="bg-mist rounded-2xl overflow-hidden flex justify-center items-start h-56 relative">
              <div className="w-[85%] mt-6">
                <div className="rounded-t-lg p-[3px]" style={{ background: 'linear-gradient(to bottom, #333, #1c1c1e)' }}>
                  <div className="rounded-t-[5px] overflow-hidden relative" style={{ aspectRatio: '16/10', background: '#0f0f18' }}>
                    <div className="h-4 flex items-center px-2" style={{ background: '#2c2c31' }}>
                      <div className="flex gap-[3px]">
                        <div className="w-[5px] h-[5px] rounded-full bg-[#ff5f57]/70" />
                        <div className="w-[5px] h-[5px] rounded-full bg-[#febc2e]/70" />
                        <div className="w-[5px] h-[5px] rounded-full bg-[#28c840]/70" />
                      </div>
                    </div>
                    <div className="h-full relative" style={{ background: 'linear-gradient(to bottom right, #1a2030, #101820)' }}>
                      <div className="bg-[#1e2838] rounded-md h-full p-1.5 m-2 mt-0">
                        <div className="bg-white/5 rounded h-2 w-1/2 mb-1" />
                        <div className="bg-white/5 rounded h-full" />
                      </div>
                      {/* Floating window */}
                      <div className="absolute top-5 right-3 w-[72px] bg-black rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.6)] overflow-hidden animate-float" style={{ height: 88 }}>
                        <div className="flex items-center justify-between px-1.5 pt-1">
                          <div className="w-3 h-3 rounded-full bg-white/[0.08] flex items-center justify-center">
                            <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" opacity="0.5"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                          </div>
                          <div className="w-3 h-3 rounded-full bg-white/[0.08] flex items-center justify-center">
                            <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" opacity="0.5"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/></svg>
                          </div>
                        </div>
                        <div className="px-1.5 overflow-hidden relative" style={{ height: 68 }}>
                          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-black to-transparent z-10" />
                          <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-black to-transparent z-10" />
                          <MiniScrollText speed="animate-scroll-text-slow" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-1.5 rounded-b mx-[12%]" style={{ background: 'linear-gradient(to bottom, #1c1c1e, #2a2a2c)' }} />
              </div>
              <div className="absolute bottom-4 right-6">
                <div className="flex items-center gap-1.5 bg-card rounded-full px-2.5 py-1 shadow-md">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/></svg>
                  <span className="text-[8px] font-semibold">Drag anywhere</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m15 7-3 3-3-3"/></svg>
            </div>
            <h3 className="text-xl font-bold">Floating Window</h3>
          </div>
          <p className="text-smoke leading-relaxed">Place it anywhere on screen, resize freely. Perfect for external monitors or classic teleprompter setups.</p>
        </div>

        {/* iPhone to Mac */}
        <div className="bg-card rounded-3xl border border-border p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <div className="mb-8">
            <div className="bg-mist rounded-2xl overflow-hidden flex justify-center items-center h-56 relative">
              <div className="flex items-center gap-4">
                {/* iPhone */}
                <div className="w-[60px] rounded-xl p-[2px] relative" style={{ background: 'linear-gradient(to bottom, #333, #1c1c1e)' }}>
                  <div className="rounded-[10px] overflow-hidden relative" style={{ aspectRatio: '9/19', background: '#0f0f18' }}>
                    {/* Dynamic Island */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[45%] h-[5px] bg-black rounded-full z-10" />
                    {/* Notes app */}
                    <div className="p-1.5 pt-3">
                      <div className="bg-white/10 rounded-sm h-1.5 w-3/4 mb-1" />
                      <div className="bg-white/10 rounded-sm h-1 w-full mb-0.5" />
                      <div className="bg-white/10 rounded-sm h-1 w-full mb-0.5" />
                      <div className="bg-white/10 rounded-sm h-1 w-2/3 mb-2" />
                      <div className="bg-blue-500/30 rounded-sm h-1 w-full mb-0.5" />
                      <div className="bg-blue-500/30 rounded-sm h-1 w-4/5" />
                    </div>
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[30%] h-[2px] bg-white/20 rounded-full" />
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-smoke/60">
                    <path d="M5 12h14" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                  <span className="text-[7px] text-smoke/50 font-medium">Copy &amp; Paste</span>
                </div>

                {/* MacBook mini */}
                <div className="w-[80px]">
                  <div className="rounded-t-md p-[2px]" style={{ background: 'linear-gradient(to bottom, #333, #1c1c1e)' }}>
                    <div className="rounded-t-[3px] overflow-hidden relative" style={{ aspectRatio: '16/10', background: '#0f0f18' }}>
                      <div className="h-2.5 flex items-center px-1 relative" style={{ background: '#2c2c31' }}>
                        <div className="flex gap-[2px]">
                          <div className="w-[3px] h-[3px] rounded-full bg-[#ff5f57]/70" />
                          <div className="w-[3px] h-[3px] rounded-full bg-[#febc2e]/70" />
                          <div className="w-[3px] h-[3px] rounded-full bg-[#28c840]/70" />
                        </div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[20%] h-2.5 bg-black" />
                      </div>
                      <div className="p-1">
                        <div className="bg-white/10 rounded-sm h-1 w-full mb-0.5" />
                        <div className="bg-white/10 rounded-sm h-1 w-full mb-0.5" />
                        <div className="bg-white/10 rounded-sm h-1 w-3/4" />
                      </div>
                    </div>
                  </div>
                  <div className="h-1 rounded-b mx-[10%]" style={{ background: 'linear-gradient(to bottom, #1c1c1e, #2a2a2c)' }} />
                </div>
              </div>
              <div className="absolute bottom-4 right-6">
                <div className="flex items-center gap-1.5 bg-card rounded-full px-2.5 py-1 shadow-md">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/></svg>
                  <span className="text-[8px] font-semibold">Universal Clipboard</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            </div>
            <h3 className="text-xl font-bold">iPhone to Mac</h3>
          </div>
          <p className="text-smoke leading-relaxed">Write your script on iPhone, copy it, and it's instantly ready in CamScript — thanks to Apple's Universal Clipboard.</p>
        </div>
      </div>
    </div>
  </section>
);

export default SetupsSection;
