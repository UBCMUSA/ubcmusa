import PageStub from "../components/PageStub.jsx";
import SectionEyebrow from "../components/SectionEyebrow.jsx";

const CONTACTS = [
  {
    name: "Rosie Lin",
    role: "Vice-President External",
    email: "musa.vpexternal@gmail.com",
  },
  {
    name: "Millen Sandhu",
    role: "President",
    email: "ubcmusa.president@gmail.com",
  },
];

const WAYS = [
  {
    icon: <CalendarIcon />,
    title: "Event Sponsorship",
    desc: "Put your name behind a MUSA tradition. From our Welcome Back BBQ to our annual Spring Formal Gala, event sponsors get visibility with hundreds of students and guests in attendance.",
  },
  {
    icon: <NoteIcon />,
    title: "Recital & Scholarship Fund Support",
    desc: "Help cover the real costs of a music education — recital hall fees, professional recordings, and summer training opportunities that students can't always afford on their own.",
  },
  {
    icon: <LandmarkIcon />,
    title: "Legacy & Endowment Partnerships",
    desc: "For organizations and individuals looking to make a lasting impact, we offer named scholarship funds and endowment opportunities that support MUSA students for years to come.",
  },
  {
    icon: <GiftIcon />,
    title: "In-Kind & Community Partnerships",
    desc: "Not every partnership is financial. We welcome venue donations, equipment, professional services, and community collaborations that support our programming.",
  },
];

export default function Sponsors() {
  return (
    <PageStub
      wide
      eyebrow="Partner with MUSA"
      title="Sponsors"
      description="Our partners power the programming that supports over 400 UBC musicians. Get in touch to explore sponsorship and collaboration opportunities."
    >
      <article className="space-y-16">
        {/* 1 — Why Partner With Us */}
        <section>
          <div className="text-center">
            <SectionEyebrow center>Why Partner With Us</SectionEyebrow>
          </div>
          <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <p className="text-base leading-relaxed text-gray-700">
                MUSA is the official student government for over 400 musicians at the
                UBC School of Music. A partnership with MUSA puts your organization in
                front of a highly engaged campus community — our members, faculty
                leadership, and the broader audiences who attend the School of Music's
                recitals, formals, and showcases throughout the year.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                When you support MUSA, you're not just sponsoring an event — you're
                investing directly in student wellness, academic support, and the next
                generation of Vancouver's musicians.
              </p>
            </div>
            <div className="h-64 overflow-hidden rounded-2xl shadow-sm ring-1 ring-steel/10 lg:h-auto">
              <img
                src="/images/optimized/sponsors-1.jpg"
                alt="MUSA students and community"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 2 — Ways to Partner */}
        <section>
          <div className="text-center">
            <SectionEyebrow center>Ways to Partner</SectionEyebrow>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-700">
              Every partnership with MUSA can be tailored to your goals and budget.
              Here are the main ways organizations support our students:
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {WAYS.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-steel/40 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-steel/10 text-steel">
                  {w.icon}
                </div>
                <h3 className="mt-4 font-display text-xl text-steel">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3 — Performance Bookings */}
        <section>
          <div className="flex flex-col gap-5 rounded-2xl border border-steel/15 bg-steel/5 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-steel ring-1 ring-steel/15">
              <MicIcon />
            </div>
            <div>
              <h3 className="font-display text-xl text-steel">Performance Bookings</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Looking to hire student performers for a private event? MUSA can help
                connect your organization with talented student chamber ensembles and
                solo performers for corporate functions, receptions, and private
                events.
              </p>
            </div>
          </div>
        </section>

        {/* 4 — Get in Touch */}
        <section>
          <div className="text-center">
            <SectionEyebrow center>Let's Build Something Together</SectionEyebrow>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-700">
              Every partnership is different, and we'd love to talk through what makes
              sense for your organization. Reach out directly to discuss a custom
              sponsorship plan:
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {CONTACTS.map((c) => (
              <div
                key={c.email}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center sm:text-left"
              >
                <div className="font-display text-xl text-steel">{c.name}</div>
                <div className="mt-0.5 text-sm font-medium text-gray-600">{c.role}</div>
                <a
                  href={`mailto:${c.email}`}
                  className="mt-2 inline-block text-sm font-medium text-logo hover:text-steel"
                >
                  {c.email}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="mailto:musa.vpexternal@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-steel px-6 py-3 text-sm font-semibold text-white transition hover:bg-steel-dark"
            >
              Email Our Sponsorship Team →
            </a>
          </div>
        </section>
      </article>
    </PageStub>
  );
}

/* ── Icons ─────────────────────────────────────────────────── */

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" strokeLinecap="round" />
    </svg>
  );
}

function NoteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M9 18V5l11-2v13" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="17" cy="16" r="3" />
    </svg>
  );
}

function LandmarkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 20h16M5 20V10m4 10V10m6 10V10m4 10V10M3.5 10l8.5-5.5L20.5 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 11h16v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM3.5 7.5h17V11h-17zM12 7.5V20" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 7.5C12 7.5 11 3.5 8.5 3.5A2 2 0 0 0 8.5 7.5zM12 7.5C12 7.5 13 3.5 15.5 3.5A2 2 0 0 1 15.5 7.5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M8.5 21h7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
