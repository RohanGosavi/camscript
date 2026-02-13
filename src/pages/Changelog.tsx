import { Link } from "react-router-dom";

const entries = [
  {
    version: "2.4.0",
    date: "Feb 10, 2026",
    tag: "Latest",
    changes: [
      "Added real-time multi-speaker detection",
      "Improved transcription accuracy by 18%",
      "New dark mode theme for the editor",
      "Fixed audio sync issues on Windows",
    ],
  },
  {
    version: "2.3.0",
    date: "Jan 22, 2026",
    tag: null,
    changes: [
      "Introduced AI-powered auto-punctuation",
      "Added support for 12 new languages",
      "Performance improvements for long recordings",
      "Bug fixes and stability improvements",
    ],
  },
  {
    version: "2.2.0",
    date: "Dec 15, 2025",
    tag: null,
    changes: [
      "New collaborative editing features",
      "Export to SRT and VTT subtitle formats",
      "Customizable keyboard shortcuts",
      "Improved onboarding experience",
    ],
  },
  {
    version: "2.1.0",
    date: "Nov 8, 2025",
    tag: null,
    changes: [
      "Launched CamScript Pro tier",
      "Added cloud sync across devices",
      "Speaker labeling improvements",
      "Fixed memory leak on long sessions",
    ],
  },
];

const Changelog = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block">← Back to home</Link>
      <h1 className="text-4xl font-bold mb-2">Changelog</h1>
      <p className="text-muted-foreground mb-12">All the latest updates and improvements to CamScript.</p>

      <div className="space-y-0">
        {entries.map((entry, i) => (
          <div key={entry.version} className="relative pl-8 pb-10 border-l border-border last:pb-0">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-foreground border-2 border-background" />
            <div className="flex items-center gap-3 mb-3">
              <span className="font-semibold text-lg">v{entry.version}</span>
              {entry.tag && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary text-primary-foreground">{entry.tag}</span>
              )}
              <span className="text-sm text-muted-foreground">{entry.date}</span>
            </div>
            <ul className="space-y-1.5">
              {entry.changes.map((change, j) => (
                <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-foreground/40 mt-0.5">•</span>
                  {change}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Changelog;
