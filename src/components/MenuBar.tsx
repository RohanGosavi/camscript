import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faBluetooth } from "@fortawesome/free-brands-svg-icons";
import { faWifi, faMagnifyingGlass, faSliders, faBars } from "@fortawesome/free-solid-svg-icons";

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
      {/* CamScript Notch */}
      <div
        className="menu-bar-transition hidden md:block fixed top-0 left-1/2 z-[60]"
        style={{ transform: `translateX(-50%) ${hidden ? "translateY(-100%)" : "translateY(0)"}` }}
      >
        <div
          className="bg-black w-[200px] rounded-b-[16px] flex flex-col items-center overflow-hidden"
          style={{ height: 70 }}
        >
          <div
            className="w-[10px] h-[10px] rounded-full flex-shrink-0 border border-[#333] mt-2"
            style={{ background: "radial-gradient(circle at 35% 35%, #3a3a4a, #111)" }}
          >
            <div
              className="w-[4px] h-[4px] rounded-full mt-[1.5px] ml-[2px]"
              style={{ background: "rgba(100,130,220,0.35)" }}
            />
          </div>
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
            <FontAwesomeIcon icon={faApple} className="text-white/85 text-[14px]" />
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
            <FontAwesomeIcon icon={faBluetooth} className="text-white/60 text-[11px]" />
          </div>
          {/* Wi-Fi */}
          <div className="hidden md:flex items-center justify-center w-6 h-6 rounded hover:bg-white/10 transition-colors">
            <FontAwesomeIcon icon={faWifi} className="text-white/60 text-[11px]" />
          </div>
          {/* Search */}
          <div className="hidden md:flex items-center justify-center w-6 h-6 rounded hover:bg-white/10 transition-colors">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white/60 text-[11px]" />
          </div>
          {/* Control Center */}
          <div className="hidden md:flex items-center justify-center w-6 h-6 rounded hover:bg-white/10 transition-colors">
            <FontAwesomeIcon icon={faSliders} className="text-white/60 text-[11px]" />
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
            <FontAwesomeIcon icon={faBars} className="text-white/70 text-[13px]" />
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
