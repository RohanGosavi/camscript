import { useState, useEffect, useCallback } from "react";

const AppleLogo = () => (
  <svg width="14" height="17" viewBox="0 0 14 17" fill="white" opacity="0.85">
    <path
      d="M13.1 12.6c-.3.7-.7 1.3-1.1 1.8-.6.8-1.1 1.3-1.5 1.6-.6.5-1.3.7-2 .7-.5 0-1.1-.1-1.8-.4-.7-.3-1.3-.4-1.8-.4s-1.1.1-1.8.4c-.7.3-1.2.4-1.6.4-.7 0-1.4-.3-2-.8C.9 15.3.4 14.7 0 14c-.4-.8-.8-1.6-1-2.6s-.4-1.9-.4-2.8c0-1 .2-1.9.7-2.7.3-.6.8-1.1 1.4-1.5.6-.4 1.2-.6 1.9-.6.5 0 1.2.2 2 .5.8.3 1.3.5 1.5.5.2 0 .7-.2 1.6-.6.8-.3 1.5-.5 2.1-.4 1.5.1 2.7.7 3.4 1.9-1.4.8-2 2-2 3.5 0 1.2.4 2.1 1.3 2.9.4.4.8.7 1.3.9l-.3.9zM10 .3c0 .9-.3 1.8-1 2.6-.8.9-1.7 1.5-2.8 1.4 0-.1 0-.2 0-.3 0-.9.4-1.8 1-2.5.3-.4.8-.7 1.3-1C9 .2 9.5.1 10 0c0 .1 0 .2 0 .3z"
      transform="translate(1,0)"
    />
  </svg>
);

const MenuBar = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState("");

  const updateClock = useCallback(() => {
    const now = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    setTime(
      `${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]} ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`,
    );
  }, []);

  useEffect(() => {
    updateClock();
    const interval = setInterval(updateClock, 30000);
    return () => clearInterval(interval);
  }, [updateClock]);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const s = window.pageYOffset;
      setHidden(s > 100 && s > lastScroll);
      lastScroll = s;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 36, behavior: "smooth" });
  };

  const navItems = [
    { label: "Features", id: "features" },
    { label: "Setups", id: "setups" },
    { label: "FAQ", id: "faq" },
    { label: "Pricing", id: "pricing" },
  ];

  return (
    <>
      <nav
        className={`menu-bar-transition fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 md:px-4 ${hidden ? "menu-bar-hidden" : ""}`}
        style={{
          height: 28,
          background: "rgba(0,0,0,0.95)",
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
        }}
      >
        <div className="flex items-center gap-0">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center justify-center px-2 py-0.5 rounded hover:bg-white/10 transition-colors"
          >
            <AppleLogo />
          </button>
          <button
            onClick={() => scrollTo("hero")}
            className="text-white/90 text-[13px] font-bold px-2 py-0.5 rounded hover:bg-white/10 transition-colors"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif" }}
          >
            CamScript
          </button>
          <div className="hidden md:flex items-center gap-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white/80 hover:bg-white/10 text-[13px] font-normal px-2 py-0.5 rounded transition-colors"
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* CamScript Notch */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 z-[60]">
          <div
            className="bg-black w-[200px] rounded-b-[16px] flex flex-col items-center overflow-hidden"
            style={{ height: 58 }}
          >
            {/* Camera dot */}
            <div
              className="w-[10px] h-[10px] rounded-full flex-shrink-0 border border-[#333] mt-2"
              style={{ background: "radial-gradient(circle at 35% 35%, #3a3a4a, #111)" }}
            >
              <div
                className="w-[4px] h-[4px] rounded-full mt-[1.5px] ml-[2px]"
                style={{ background: "rgba(100,130,220,0.35)" }}
              />
            </div>
            {/* Scrolling prompter text below camera */}
            <div className="w-full overflow-hidden flex-1 relative px-3 mt-1">
              <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-black to-transparent z-10" />
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-b from-black to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-t from-black to-transparent z-10" />
              <div className="animate-scroll-text">
                <p className="text-[8px] text-white/70 font-medium leading-[1.5] text-center">
                  Welcome everyone. Today I want to walk you through our latest updates.
                </p>
                <p className="text-[8px] text-white/70 font-medium leading-[1.5] text-center">
                  We've been working hard on features you requested.
                </p>
                <p className="text-[8px] text-white/70 font-medium leading-[1.5] text-center">
                  Let me show you what's new in CamScript.
                </p>
                <p className="text-[8px] text-white/70 font-medium leading-[1.5] text-center">
                  Welcome everyone. Today I want to walk you through our latest updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-0">
          <button
            onClick={() => scrollTo("pricing")}
            className="hidden sm:flex items-center text-white/70 hover:bg-white/10 text-[13px] font-normal px-2 py-0.5 rounded transition-colors"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" }}
          >
            Download
          </button>
          {/* Bluetooth */}
          <div className="hidden md:flex items-center justify-center w-6 h-6 rounded hover:bg-white/10 transition-colors">
            <svg
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
              stroke="white"
              strokeWidth="1.2"
              opacity="0.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 3.5L8.5 9.5L5 12.5V1.5L8.5 4.5L1 10.5" />
            </svg>
          </div>
          {/* Wi-Fi */}
          <div className="hidden md:flex items-center justify-center w-6 h-6 rounded hover:bg-white/10 transition-colors">
            <svg
              width="14"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              stroke="white"
              strokeWidth="1.3"
              opacity="0.6"
              strokeLinecap="round"
            >
              <path d="M1 3.5C3.8 1.2 6.8 0 8 0s4.2 1.2 7 3.5" />
              <path d="M3.5 6.3C5.2 4.8 6.6 4 8 4s2.8.8 4.5 2.3" />
              <path d="M5.8 9C6.6 8.2 7.3 7.7 8 7.7s1.4.5 2.2 1.3" />
              <circle cx="8" cy="11" r="1" fill="white" opacity="0.6" />
            </svg>
          </div>
          {/* Search */}
          <div className="hidden md:flex items-center justify-center w-6 h-6 rounded hover:bg-white/10 transition-colors">
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              opacity="0.6"
              strokeLinecap="round"
            >
              <circle cx="6.5" cy="6.5" r="4.5" />
              <line x1="10" y1="10" x2="14" y2="14" />
            </svg>
          </div>
          {/* Control Center */}
          <div className="hidden md:flex items-center justify-center w-6 h-6 rounded hover:bg-white/10 transition-colors">
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              stroke="white"
              strokeWidth="1.3"
              opacity="0.6"
              strokeLinecap="round"
            >
              <line x1="2" y1="4" x2="14" y2="4" />
              <line x1="2" y1="8" x2="14" y2="8" />
              <line x1="2" y1="12" x2="14" y2="12" />
              <circle cx="10" cy="4" r="1.5" fill="white" opacity="0.6" />
              <circle cx="5" cy="8" r="1.5" fill="white" opacity="0.6" />
              <circle cx="11" cy="12" r="1.5" fill="white" opacity="0.6" />
            </svg>
          </div>
          <span
            className="hidden md:inline text-white/70 text-[13px] font-normal pl-1.5"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" }}
          >
            {time}
          </span>
          <button
            className="md:hidden flex items-center justify-center w-7 h-7 rounded hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              opacity="0.7"
              strokeLinecap="round"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <div
        className={`fixed top-7 left-0 right-0 z-40 py-3 px-5 md:hidden transition-transform duration-300 ${mobileOpen ? "translate-y-0" : "-translate-y-full"}`}
        style={{ background: "rgba(30,30,30,0.95)", backdropFilter: "blur(20px)" }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="block w-full text-left text-white/70 hover:text-white text-[13px] py-2"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default MenuBar;
