import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Contact = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link
        to="/"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
      >
        ← Back to home
      </Link>
      <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
      <p className="text-muted-foreground mb-12">
        Have a question or feedback? We'd love to hear from you.
      </p>

      <div className="grid sm:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-muted-foreground mt-1"
            />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground">
                rohangosavi555@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-muted-foreground mt-1"
            />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-sm text-muted-foreground">Pune, In</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-muted-foreground mt-1"
            />
            {/* <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
            </div> */}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Send a Message</h2>
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <textarea
            placeholder="Your message"
            rows={4}
            className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
          <button className="w-full rounded-lg bg-primary text-primary-foreground py-2.5 text-sm font-medium hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </div>
      </div>

      <div className="border-t border-border pt-8">
        <p className="text-sm text-muted-foreground mb-4">Find us on socials</p>
        <div className="flex gap-4">
          {[faTwitter, faGithub, faDiscord].map((icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
