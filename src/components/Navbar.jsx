import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navSections } from "../data/navigation.js";
import Logo from "./Logo.jsx";

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenIndex(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const handleEnter = (i) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(i);
  };

  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenIndex(null), 120);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-steel text-ivory transition-shadow ${
        scrolled ? "shadow-[0_4px_20px_rgba(91,121,184,0.35)]" : ""
      }`}
      onMouseLeave={handleLeave}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="MUSA home">
          <Logo className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {navSections.map((section, i) => {
            const hasChildren = !!section.children;
            const isOpen = openIndex === i;
            const isActive = section.to
              ? location.pathname === section.to
              : section.children?.some((c) => location.pathname === c.to);

            if (!hasChildren) {
              return (
                <NavLink
                  key={section.label}
                  to={section.to}
                  className={({ isActive: a }) =>
                    `ml-2 inline-flex items-center rounded-full border border-ivory/40 px-4 py-1.5 text-sm font-medium tracking-wide transition-colors hover:border-gold-bright hover:text-gold-bright ${
                      a ? "border-gold-bright text-gold-bright" : "text-ivory"
                    }`
                  }
                >
                  {section.label}
                </NavLink>
              );
            }

            return (
              <div
                key={section.label}
                className="relative"
                onMouseEnter={() => handleEnter(i)}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:text-gold-bright ${
                    isActive || isOpen ? "text-gold-bright" : "text-ivory"
                  }`}
                >
                  {section.label}
                  <svg
                    className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M2.5 4.5 L6 8 L9.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Per-section dropdown */}
                <div
                  className={`absolute left-0 top-full pt-2 ${
                    isOpen ? "" : "pointer-events-none"
                  }`}
                >
                  <div
                    className={`min-w-[230px] origin-top overflow-hidden rounded-lg border border-white/10 bg-steel shadow-xl transition duration-150 ease-out ${
                      isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    }`}
                    style={{ transformOrigin: "top" }}
                  >
                    <ul className="py-2">
                      {section.children.map((child) => (
                        <li key={child.to}>
                          <Link
                            to={child.to}
                            className="group flex items-center justify-between gap-3 px-4 py-2 text-sm text-ivory transition-colors hover:bg-white/5 hover:text-gold-bright"
                          >
                            <span>{child.label}</span>
                            <span
                              aria-hidden
                              className="translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                            >
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ivory hover:bg-white/10 lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
            {mobileOpen ? (
              <path d="M6 6 L18 18 M18 6 L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7 H20 M4 12 H20 M4 17 H20" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div className="border-t border-white/10 bg-steel">
            <div className="space-y-1 px-4 py-4">
              {navSections.map((section) => (
                <MobileSection key={section.label} section={section} />
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileSection({ section }) {
  const [open, setOpen] = useState(false);
  if (!section.children) {
    return (
      <NavLink
        to={section.to}
        className={({ isActive }) =>
          `block rounded-md px-3 py-2 text-sm font-medium ${
            isActive ? "bg-white/10 text-gold-bright" : "text-ivory hover:bg-white/5"
          }`
        }
      >
        {section.label}
      </NavLink>
    );
  }
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-ivory hover:bg-white/5"
      >
        {section.label}
        <svg
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M2.5 4.5 L6 8 L9.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul className="mt-1 space-y-1 border-l border-white/10 pl-3">
          {section.children.map((child) => (
            <li key={child.to}>
              <Link
                to={child.to}
                className="block rounded-md px-3 py-2 text-sm text-ivory/90 hover:bg-white/5 hover:text-gold-bright"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
