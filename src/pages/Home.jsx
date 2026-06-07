import { Link } from "react-router-dom";

const UPCOMING_EVENTS = [
  { date: "Sep 12", title: "Welcome Back BBQ", location: "Old Auditorium Lawn", tag: "Social" },
  { date: "Oct 04", title: "Wellness Week Kickoff", location: "School of Music Atrium", tag: "Wellness" },
  { date: "Oct 22", title: "Resume + Headshot Workshop", location: "Room 113", tag: "Professional" },
];

const PILLARS = [
  { title: "Academic", to: "/resources/academic" },
  { title: "Personal", to: "/resources/personal" },
  { title: "Professional", to: "/resources/professional" },
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
          src="/images/ubc-symphony-orchestra-2.jpg"
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
        {/* Subtle warm stage glow */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-screen"
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

          <div className="group overflow-hidden rounded-2xl shadow-sm">
            <img
              src="/images/ubc-opera-ball.jpg"
              alt="MUSA students gathered at a social event"
              className="h-full max-h-[420px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function UpcomingEventsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionEyebrow center>Upcoming Events</SectionEyebrow>
            <p className="mt-6 text-base leading-relaxed text-gray-700">
              From flagship social traditions and wellness weeks to professional
              development workshops — MUSA hosts events throughout the academic
              year that enrich the undergraduate experience and bring the School
              of Music community together.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/events/calendar"
                className="inline-flex items-center gap-2 rounded-md bg-steel px-5 py-3 text-sm font-semibold text-white transition hover:bg-steel-dark"
              >
                Calendar →
              </Link>
              <Link
                to="/events/details"
                className="inline-flex items-center gap-2 rounded-md border border-steel/40 px-5 py-3 text-sm font-semibold text-steel transition hover:border-steel hover:bg-steel/5"
              >
                Event Details
              </Link>
            </div>
          </div>

          <ul className="space-y-4">
            {UPCOMING_EVENTS.map((ev) => (
              <li
                key={ev.title}
                className="group flex items-center gap-5 rounded-xl border border-gray-200 bg-white p-5 transition hover:border-steel/40 hover:shadow-md"
              >
                <div className="flex w-16 flex-col items-center rounded-lg bg-steel py-2 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/75">
                    {ev.date.split(" ")[0]}
                  </span>
                  <span className="font-display text-2xl">{ev.date.split(" ")[1]}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-xl text-steel">{ev.title}</h3>
                    <span className="rounded-full bg-steel/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-steel">
                      {ev.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{ev.location}</p>
                </div>
                <span
                  aria-hidden
                  className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-steel"
                >
                  →
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
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
              className="group flex items-center justify-center rounded-xl border border-gray-200 bg-white px-8 py-14 text-center transition duration-300 ease-out hover:-translate-y-1 hover:border-steel hover:bg-steel hover:shadow-xl"
            >
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

function SectionEyebrow({ children, center = false }) {
  return (
    <div
      className={`inline-flex items-center gap-3 font-semibold uppercase tracking-[0.24em] text-steel ${
        center ? "text-base" : "text-xs"
      }`}
    >
      <span className="h-px w-8 bg-steel" />
      {children}
      {center && <span className="h-px w-8 bg-steel" />}
    </div>
  );
}
