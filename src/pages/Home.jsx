import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionEyebrow from "../components/SectionEyebrow.jsx";
import { EVENTS as UPCOMING_EVENTS } from "../data/events.js";

const PILLARS = [
  { title: "Academic", to: "/resources/academic", icon: "academic" },
  { title: "Personal", to: "/resources/personal", icon: "personal" },
  { title: "Professional", to: "/resources/professional", icon: "professional" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <GetInvolvedSection />
      <UpcomingEventsSection />
      <PillarsSection />
      <AboutUsBand />
    </>
  );
}

/* ────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* UBC Symphony Orchestra on the Chan Centre stage, choirs behind */}
        <img
          src="/images/optimized/hero-orchestra.jpg"
          alt="UBC Symphony Orchestra performing in the Chan Centre with the choirs in the background"
          className="h-full w-full object-cover"
        />
        {/* Brand-blue wash for text contrast */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(78,104,160,0.78) 0%, rgba(78,104,160,0.58) 45%, rgba(48,64,100,0.88) 100%)",
          }}
        />
        {/* Dark film concentrated behind the heading for legibility */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(900px 520px at 50% 46%, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.26) 58%, rgba(0,0,0,0.12) 100%)",
          }}
        />
        {/* Subtle warm stage glow */}
        <div
          className="absolute inset-0 opacity-[0.18] mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(700px 420px at 50% 30%, #F7CB47 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6 lg:px-8">
        <div className="text-[13px] font-semibold uppercase tracking-[0.42em] text-gold-bright">
          UBC Music Undergraduate Students' Association
        </div>
        <h1 className="mt-8 font-heavy font-bold text-[2.75rem] leading-[1.05] text-white sm:text-[4.25rem] lg:text-[5.5rem]">
          Welcome to MUSA
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium text-ivory/90 sm:text-xl">
          The official student government, constituency council, and community
          backbone for over 400 musicians at the UBC School of Music.
        </p>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */

function GetInvolvedSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionEyebrow center>Get Involved</SectionEyebrow>
            <p className="mt-6 text-base leading-relaxed text-gray-700">
              Join MUSA under the right role for you! Under MUSA's Restructuring
              Plan many new positions have been introduced, increasing MUSA's
              capacity for excellence while providing more student opportunities.
              The majority of our positions are open to ALL UBC Undergraduate
              Students, providing valuable skills and experience to all students,
              sharing a common interest of Music.
            </p>
            <div className="mt-8">
              <Link
                to="/get-involved/join"
                className="inline-flex items-center gap-2 rounded-md bg-steel px-5 py-3 text-sm font-semibold text-white transition hover:bg-steel-dark"
              >
                Learn More
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-sm transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl">
            <img
              src="/images/ubc-opera-ball.jpg"
              alt="MUSA students gathered at a social event"
              className="h-full max-h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function UpcomingEventsSection() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const count = UPCOMING_EVENTS.length;
  const ev = UPCOMING_EVENTS[index];

  const go = (d) => {
    setDir(d);
    setIndex((i) => (i + d + count) % count);
  };
  const jump = (i) => {
    if (i === index) return;
    setDir(i > index ? 1 : -1);
    setIndex(i);
  };

  const animIn = dir === 1 ? "animate-carousel-right" : "animate-carousel-left";

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionEyebrow center>Upcoming Events</SectionEyebrow>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Right: event details */}
          <div className="order-2">
            <div key={`txt-${index}`} className={animIn}>
              <div className="text-sm font-semibold uppercase tracking-wider text-steel">
                {ev.date} · {ev.location}
              </div>
              <h3 className="mt-3 font-display text-4xl text-steel sm:text-5xl">
                {ev.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-700">
                {ev.blurb}
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/events/calendar"
                className="inline-flex items-center gap-2 rounded-md bg-steel px-5 py-3 text-sm font-semibold text-white transition hover:bg-steel-dark"
              >
                View Calendar →
              </Link>
            </div>

            {/* Carousel controls */}
            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous event"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-steel/30 text-steel transition hover:border-steel hover:bg-steel hover:text-white active:scale-90"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next event"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-steel/30 text-steel transition hover:border-steel hover:bg-steel hover:text-white active:scale-90"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="ml-2 flex items-center gap-2">
                {UPCOMING_EVENTS.map((e, i) => (
                  <button
                    key={e.title}
                    type="button"
                    onClick={() => jump(i)}
                    aria-label={`Go to ${e.title}`}
                    aria-current={i === index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? "w-7 bg-steel" : "w-2 bg-steel/25 hover:bg-steel/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Left: large event image — click to open details */}
          <div className="order-1">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              aria-label={`View details for ${ev.title}`}
              className="group relative block w-full overflow-hidden rounded-2xl text-left shadow-lg transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-2xl"
            >
              <img
                key={`img-${index}`}
                src={ev.image}
                alt={ev.title}
                className={`h-[300px] w-full object-cover sm:h-[380px] lg:h-[460px] ${animIn}`}
              />
              {/* gradient + caption */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent" />
              <div
                key={`cap-${index}`}
                className={`pointer-events-none absolute bottom-0 left-0 right-0 p-6 ${animIn}`}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-bright">
                  {ev.date}
                </div>
                <div className="mt-1 font-display text-2xl text-white">{ev.title}</div>
              </div>
              {/* hover hint */}
              <span className="pointer-events-none absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-steel opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                View details
                <span aria-hidden>→</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <EventModal event={ev} onClose={() => setModalOpen(false)} />
      )}
    </section>
  );
}

function EventModal({ event, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={event.title}
    >
      {/* backdrop */}
      <div
        className="animate-overlay-in absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* card */}
      <div className="animate-modal-in relative z-10 max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-steel shadow transition hover:bg-white active:scale-90"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <div className="max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img
              src={event.image}
              alt={event.title}
              className="h-56 w-full object-cover sm:h-72"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/65 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-bright">
                {event.date} · {event.time}
              </div>
              <h3 className="mt-2 font-display text-3xl text-white sm:text-4xl">
                {event.title}
              </h3>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <dl className="grid grid-cols-1 gap-4 border-b border-gray-200 pb-6 sm:grid-cols-3">
              <EventMeta label="Date" value={event.date} />
              <EventMeta label="Time" value={event.time} />
              <EventMeta label="Location" value={event.location} />
            </dl>
            <p className="mt-6 text-base leading-relaxed text-gray-700">
              {event.details}
            </p>
            <div className="mt-8">
              <Link
                to="/events/calendar"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-md bg-steel px-5 py-3 text-sm font-semibold text-white transition hover:bg-steel-dark"
              >
                View Calendar →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventMeta({ label, value }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-gray-700">{value}</dd>
    </div>
  );
}

function PillarsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionEyebrow center>Pillars of Commitment</SectionEyebrow>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className="group flex flex-col items-center justify-center gap-5 rounded-xl border border-gray-200 bg-white px-8 py-12 text-center transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-steel hover:bg-steel hover:shadow-2xl"
            >
              <span className="text-steel transition-colors duration-300 group-hover:text-white">
                <PillarIcon name={p.icon} />
              </span>
              <h3 className="font-display text-3xl text-steel transition-colors duration-300 group-hover:text-white">
                {p.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutUsBand() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <SectionEyebrow center>About Us</SectionEyebrow>
        <p className="mt-8 text-base leading-relaxed text-gray-700">
          The Music Undergraduate Students' Association (MUSA) is the official
          student government and community backbone for over 400 musicians at the
          UBC School of Music. Guided by our core pillars of academic advocacy,
          student well-being, and professional development, MUSA supports our
          members through specialized initiatives, resources, and programming that
          host collaborative mixers, wellness events, masterclasses, and student
          showcases. We strive to cultivate a supportive and inclusive family where
          young artists and scholars feel empowered to achieve creative excellence,
          build lasting connections, and navigate their own unique journeys both
          within the music landscape and across the broader UBC community.
        </p>
        <div className="mt-10">
          <Link
            to="/about/what-is-musa"
            className="inline-flex items-center gap-2 rounded-md bg-steel px-5 py-3 text-sm font-semibold text-white transition hover:bg-steel-dark"
          >
            Learn more
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */

function PillarIcon({ name }) {
  const common = {
    className: "h-12 w-12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "academic":
      return (
        <svg {...common}>
          <path d="M12 4 L22 9 L12 14 L2 9 Z" />
          <path d="M6 11v5c0 1.4 2.7 3 6 3s6-1.6 6-3v-5" />
          <path d="M22 9v5" />
        </svg>
      );
    case "personal":
      return (
        <svg {...common}>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
    case "professional":
      return (
        <svg {...common}>
          <rect x="3" y="7.5" width="18" height="12" rx="2" />
          <path d="M8.5 7.5V6c0-1 .5-1.5 1.5-1.5h4c1 0 1.5.5 1.5 1.5v1.5" />
          <path d="M3 12.5h18" />
        </svg>
      );
    default:
      return null;
  }
}

/* SectionEyebrow is now shared from ../components/SectionEyebrow.jsx */
