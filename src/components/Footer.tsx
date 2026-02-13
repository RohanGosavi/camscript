import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Contact", to: "/contact" },
  { label: "Changelog", to: "/changelog" },
  { label: "License", to: "/license" },
  { label: "Privacy", to: "/privacy" },
];

const Footer = () => (
  <footer className="py-10 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#333" stroke="#555" strokeWidth="1"/>
          <circle cx="12" cy="8" r="3" fill="#555" stroke="#666" strokeWidth="0.5"/>
          <line x1="7" y1="14" x2="17" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
          <line x1="8" y1="17" x2="15" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        </svg>
        <span className="text-sm text-smoke">© 2026 CamScript. All rights reserved.</span>
      </div>
      <div className="flex items-center gap-6">
        {footerLinks.map(link => (
          <Link key={link.label} to={link.to} className="text-sm text-smoke hover:text-foreground transition-colors">{link.label}</Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
