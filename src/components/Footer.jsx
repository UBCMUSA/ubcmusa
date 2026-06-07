import { Link } from "react-router-dom";
import { navSections } from "../data/navigation.js";
import Logo from "./Logo.jsx";

const SOCIAL = [
  {
    name: "Instagram",
    handle: "@ubcmusa",
    href: "https://instagram.com/ubcmusa",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "Music Undergraduate Students' Association",
    href: "https://linkedin.com/company/ubcmusa",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.84 0h4.37v1.92h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v7.46h-4.56v-6.62c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5V22H8.06V8z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "MUSA Community Group",
    href: "https://www.facebook.com/share/g/1BZEryRF8k/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
];

const ADDRESS = [
  "UBC School of Music",
  "6361 Memorial Rd, Vancouver, BC V6T 1Z2",
];

const OFFICES = [
  { label: "Office", value: "Room E106, Old Auditorium Annex" },
  { label: "President's Office", value: "Room 209, Old Auditorium" },
  { label: "Student Lounge", value: "Fourth Floor, UBC School of Music" },
];

export default function Footer() {
  return (
    <footer className="bg-steel text-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + address */}
          <div className="lg:col-span-4">
            <Link to="/" aria-label="MUSA home" className="inline-block">
              <Logo className="h-12 w-auto" />
            </Link>
            <div className="mt-6 space-y-1 text-sm text-ivory/80">
              {ADDRESS.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <dl className="mt-6 space-y-2 text-sm">
              {OFFICES.map((o) => (
                <div key={o.label}>
                  <dt className="text-xs uppercase tracking-[0.18em] text-gold-bright/90">
                    {o.label}
                  </dt>
                  <dd className="text-ivory/85">{o.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <div className="text-xs uppercase tracking-[0.18em] text-gold-bright/90">
                Connect
              </div>
              <ul className="mt-3 space-y-2">
                {SOCIAL.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group inline-flex items-center gap-3 text-sm text-ivory/85 hover:text-gold-bright"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition group-hover:border-gold-bright">
                        {s.icon}
                      </span>
                      <span>
                        <span className="font-medium">{s.name}</span>
                        <span className="ml-2 text-ivory/60">{s.handle}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sitemap */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5">
            {navSections.map((section) => (
              <div key={section.label}>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-bright">
                  {section.label}
                </div>
                <ul className="mt-4 space-y-2">
                  {section.children ? (
                    section.children.map((c) => (
                      <li key={c.to}>
                        <Link
                          to={c.to}
                          className="text-sm text-ivory/80 transition hover:text-gold-bright"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li>
                      <Link
                        to={section.to}
                        className="text-sm text-ivory/80 transition hover:text-gold-bright"
                      >
                        Visit {section.label}
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Music Undergraduate Students' Association · A
            constituency of the UBC Alma Mater Society
          </p>
          <p className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-gold-bright">
              Contact
            </Link>
            <span aria-hidden>·</span>
            <Link to="/about/what-is-musa" className="hover:text-gold-bright">
              About
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
