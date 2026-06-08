import { useState, useEffect } from "react";
import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";

const EXECS = [
  {
    role: "President",
    name: "Millen Sandhu",
    meta: [
      "4th-year BMus Undergraduate Student",
      "Tenor, UBC Opera",
      "Councillor, AMS",
      "HR Committee Chair, AMS",
    ],
    email: "ubcmusa.president@gmail.com",
    instagram: "millensandhu.musapresident",
    linkedin: "https://www.linkedin.com/in/millen-sandhu/",
    photo: "/images/optimized/millen-headshot.jpg",
    bio: [
      "Millen Sandhu is a tenor studying opera performance at the UBC School of Music, serving as the President of the Music Undergraduate Students' Association (MUSA) and an AMS Councillor. Millen was born and raised here in Vancouver. In his role as president, Millen is focused on building strong, long-term support systems for music students, whether that is academically, financially, or socially. Through his work with MUSA and his seat on the AMS Council, he aims to advocate for an excellent academic experience while creating more opportunities for music students to collaborate with other faculties across campus.",
      "As a classical singer himself, Millen knows firsthand the intense discipline, long hours, and dedication required to pursue a music degree. His daily experience in the practice rooms and rehearsal halls gives him a genuine understanding of the unique challenges performance students face, which directly guides his approach to student leadership. He has recently performed the lead role in Leonard Bernstein's Candide, and other roles in Street Scene and Die Zauberflöte, he also has a deep love for German Lied. Outside of music and student government, Millen loves to stay active and unwind by travelling, hiking, playing board games, and hanging out with friends.",
    ],
  },
  {
    role: "Vice-President Administration",
    name: "Almira Miao",
    meta: ["2nd-year BMus Undergraduate Student", "Flute Performance"],
    email: "ubc.musa@gmail.com",
    instagram: "almiramiaoyf",
    photo: "/images/optimized/almira-headshot.jpg",
    bio: [
      "I am a Bachelor of Music student studying flute at the University of British Columbia. In high school, I was involved in the music council, where I helped organize events and initiatives that brought students together. I really enjoyed working with others in that setting and became more interested in creating opportunities for students.",
      "As I begin my first year with MUSA, I am excited to connect with students across the School of Music and contribute to initiatives that support student life. I look forward to working with an incredible team to strengthen our community, advocate for students, and help create a welcoming and engaging environment in the Faculty of Music.",
    ],
  },
  {
    role: "Vice-President Finance",
    name: "Aleksandra Van-Looy",
    meta: ["2nd-year BMus Undergraduate Student", "Soprano, UBC Opera"],
    email: "musa.vpfinance@gmail.com",
    instagram: "_sashavl",
    photo: "/images/optimized/sasha-headshot.jpg",
    bio: [
      "My name is Aleksandra Van Looy, though most people know me as Sasha. I am from Burnaby, British Columbia, and I am proud to serve as MUSA's Vice-President of Finance this year.",
      "My previous experience includes managing ticket sales and supporting marketing initiatives in my high school theatre department. Alongside these experiences, I found that I really enjoyed statistics in high school, inspiring me to learn more about finance and accounting, leading me to pursue opportunities that combine analytical thinking with leadership.",
      "As Vice-President of Finance, I am excited to help strengthen MUSA's financial position through sponsorship opportunities, fundraising initiatives, and responsible financial planning. I am also looking forward to expanding my knowledge of bookkeeping and financial management through this role.",
      "I feel fortunate to be part of such a dedicated and hardworking executive team, and I look forward to helping create meaningful opportunities and more support for students throughout the year.",
    ],
  },
  {
    role: "Vice-President Internal",
    name: "Zaiden Grayda-Reyes",
    meta: ["3rd-year BMus Undergraduate Student", "Flute Performance"],
    email: "ubcmusa.vpinternal@gmail.com",
    instagram: "zaii.dn3",
    photo: "/images/optimized/zaiden-headshot.jpg",
    bio: [
      "I am a third-year flute student and am entering my third year with MUSA. Over the past two years, my involvement with the association has given me the opportunity to connect with students across the School of Music, contribute to initiatives that support student life, and help strengthen our sense of community. Through these experiences, I have developed a strong appreciation for the role MUSA plays in representing and supporting music students. As Vice-President Internal, I am excited to continue building meaningful relationships within our community while working alongside an incredible team to bring new ideas and initiatives to life.",
    ],
  },
  {
    role: "Vice-President External",
    name: "Rosie Lin",
    meta: ["2nd-year BMus Undergraduate Student", "Piano Performance"],
    email: "musa.vpexternal@gmail.com",
    instagram: "ii.mrosie",
    photo: "/images/optimized/rosie-headshot.jpg",
    bio: [
      "I am a second-year student in Piano Performance, and this is my first year with MUSA. I'm very excited to be on this team as Vice-President External and am looking forward to supporting our student body wholeheartedly.",
      "I love meeting new people and building genuine relationships, and I see this role as an opportunity to do exactly that. I believe that the impact of what we do here extends far beyond the stage, and will contribute to developing the rising musicians here at UBC.",
      "I'm also passionate about community, which is something I've carried with me through various volunteer and leadership experiences over the years. During high school, I consistently took initiative to be involved with my community— including founding a nonprofit organization and volunteering for the Peace Arch Hospital Foundation's Youth in Action team, organizing fundraisers and city-wide events to support local healthcare initiatives. I plan to bring this passion and enthusiasm to this role, working with a genuine desire to make a difference. I'm so excited to work alongside such a talented and driven group of people, and I can't wait to see what we build together.",
    ],
  },
  {
    role: "Vice-President Student Resource",
    name: "TBD",
    meta: ["Position currently open"],
    email: "ubcmusa.vpstudentresource@gmail.com",
    photo: null,
    bio: [
      "This position is currently open. If you are interested in joining the MUSA executive team, please reach out. We welcome candidates across the School of Music who are passionate about advocacy and student well-being.",
    ],
  },
];

const [PRESIDENT, VP_ADMIN, VP_FINANCE, VP_INTERNAL, VP_EXTERNAL, VP_STUDENT] = EXECS;

// Organizational structure (placeholders use { role } only).
const GROUPS = [
  {
    label: "Direct Reports & Independent Officers",
    members: [{ role: "Chief of Staff" }, { role: "Governance Commissioner" }],
  },
  {
    label: "Executive Portfolios",
    members: [
      { ...VP_ADMIN, reports: [{ role: "Administrative Coordinator" }] },
      { ...VP_FINANCE, reports: [{ role: "Financial Coordinator" }] },
      {
        ...VP_INTERNAL,
        reports: [{ role: "Marketing Director" }, { role: "Creative Director" }],
      },
      {
        ...VP_EXTERNAL,
        reports: [
          { role: "Community Engagement Director" },
          { role: "Sponsorship Director" },
        ],
      },
      { ...VP_STUDENT, reports: [{ role: "Lounge Manager" }] },
    ],
  },
  {
    label: "Elected Cohort Representatives",
    members: [
      { role: "1st Year Representative" },
      { role: "2nd Year Representative" },
      { role: "3rd Year Representative" },
      { role: "4th Year Representative" },
    ],
  },
];

export default function WhoWeAre() {
  const [selected, setSelected] = useState(null);
  const open = (p) => setSelected(p);

  return (
    <PageStub
      wide
      eyebrow="About Us"
      title="Who We Are"
      description="Behind every event, advocacy campaign, and student resource is a team of elected and hired undergraduate student leaders dedicated to making your experience at the UBC School of Music the best it can be. The MUSA Executive and Council are composed of peers from diverse musical disciplines—including performance, composition, education, and musicology—who balance their own rigorous hours in the practice rooms with a shared commitment to serving our community."
    >
      <div className="mx-auto max-w-3xl space-y-5 text-center">
        <p className="text-base leading-relaxed text-gray-700">
          As your student representatives, we manage the day-to-day operations of
          the society, represent your voice to faculty leadership, and work to
          ensure you have a safe, vibrant, and enriching university experience.
        </p>
        <p className="text-base leading-relaxed text-gray-700">
          Get to know the team leading your constituency this year, explore our
          unique portfolios, and feel free to reach out to any of us directly or
          find us around the School of Music or the Old Auditorium. We are always
          here to chat, listen, and support you on your journey.
        </p>
      </div>

      <div className="mt-16 text-center">
        <SectionEyebrow center>Meet Your Team</SectionEyebrow>
      </div>

      {/* Mobile: vertical indented tree */}
      <div className="mx-auto mt-12 max-w-2xl lg:hidden">
        <OrgCard person={PRESIDENT} onClick={open} />
        <Branch>
          {GROUPS.map((g) => (
            <Twig key={g.label}>
              <GroupLabel>{g.label}</GroupLabel>
              <Branch>
                {g.members.map((m) => (
                  <Twig key={m.role}>
                    <OrgCard person={m} onClick={open} />
                    {m.reports && (
                      <Branch>
                        {m.reports.map((r) => (
                          <Twig key={r.role}>
                            <OrgCard person={r} onClick={open} />
                          </Twig>
                        ))}
                      </Branch>
                    )}
                  </Twig>
                ))}
              </Branch>
            </Twig>
          ))}
        </Branch>
      </div>

      {/* Desktop: top-down horizontal org chart */}
      <div className="mt-12 hidden overflow-x-auto pb-4 lg:block">
        <div className="mx-auto flex w-max min-w-full flex-col items-center px-4">
          <ChartCard person={PRESIDENT} onClick={open} />

          {GROUPS.map((g) => (
            <div key={g.label} className="flex flex-col items-center">
              <ChartLine />
              <GroupChip>{g.label}</GroupChip>
              <ChartLine />
              <ul className="flex justify-center">
                {g.members.map((m) => (
                  <li key={m.role} className={CHART_LI}>
                    <ChartCard person={m} onClick={open} />
                    {m.reports && (
                      <>
                        <ChartLine />
                        <ul className="flex justify-center">
                          {m.reports.map((r) => (
                            <li key={r.role} className={CHART_LI}>
                              <ChartCard person={r} onClick={open} small />
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {selected && <ExecModal exec={selected} onClose={() => setSelected(null)} />}
    </PageStub>
  );
}

/* ── Horizontal chart primitives (desktop) ─────────────────── */

// Connector classes for a child cell: up-line (before) + horizontal bar (after,
// trimmed on first/last, hidden for only-child).
const CHART_LI =
  "relative flex flex-col items-center px-3 pt-6 before:absolute before:left-1/2 before:top-0 before:h-6 before:w-px before:-translate-x-1/2 before:bg-gray-300 before:content-[''] after:absolute after:left-0 after:right-0 after:top-0 after:border-t after:border-gray-300 after:content-[''] first:after:left-1/2 last:after:right-1/2 only:after:hidden";

function ChartLine() {
  return <div className="h-6 w-px bg-gray-300" />;
}

function GroupChip({ children }) {
  return (
    <div className="rounded-full border border-gray-200 bg-steel/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-steel/70">
      {children}
    </div>
  );
}

function ChartCard({ person, onClick, small = false }) {
  const clickable = Array.isArray(person.bio);
  const display = person.name && person.name !== "TBD" ? person.name : "TBD";
  const w = small ? "w-32" : "w-36";
  const av = small ? "h-11 w-11" : "h-14 w-14";

  const inner = (
    <>
      <div className={`${av} overflow-hidden rounded-lg bg-steel/5 ring-1 ring-steel/10`}>
        {person.photo ? (
          <img
            src={person.photo}
            alt={person.name}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <Placeholder />
        )}
      </div>
      <div className="mt-2">
        <div className="font-display text-sm leading-tight text-steel">{display}</div>
        <div className="mt-0.5 text-[11px] font-medium leading-tight text-gray-600">
          {person.role}
        </div>
      </div>
    </>
  );

  const base = `group flex ${w} flex-col items-center rounded-xl border border-gray-200 bg-white p-3 text-center`;
  if (!clickable) {
    return <div className={`${base} opacity-90`}>{inner}</div>;
  }
  return (
    <button
      type="button"
      onClick={() => onClick(person)}
      aria-label={`Read bio for ${display}`}
      className={`${base} cursor-pointer transition hover:-translate-y-0.5 hover:border-steel/40 hover:shadow-md`}
    >
      {inner}
    </button>
  );
}

/* ── Tree primitives ───────────────────────────────────────── */

function Branch({ children }) {
  // mt creates a gap below the parent card; the before bridges that gap so the
  // vertical line still connects up to the parent.
  return (
    <ul className="relative ml-5 mt-5 space-y-0 pl-10 before:absolute before:-top-5 before:left-0 before:h-5 before:w-px before:bg-gray-300 before:content-['']">
      {children}
    </ul>
  );
}

function Twig({ children }) {
  // before = horizontal stub to the node; after = vertical line (full height
  // for siblings, trimmed at the last child so it ends at its stub).
  return (
    <li className="relative pb-8 before:absolute before:-left-10 before:top-11 before:h-px before:w-10 before:bg-gray-300 before:content-[''] after:absolute after:-left-10 after:top-0 after:h-full after:w-px after:bg-gray-300 after:content-[''] last:after:h-11">
      {children}
    </li>
  );
}

function GroupLabel({ children }) {
  return (
    <div className="flex min-h-[5.5rem] items-center text-xs font-semibold uppercase tracking-[0.18em] text-steel/70">
      {children}
    </div>
  );
}

function OrgCard({ person, onClick }) {
  const clickable = Array.isArray(person.bio);
  const display = person.name && person.name !== "TBD" ? person.name : "TBD";
  const common =
    "group inline-flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-3 text-left";

  const inner = (
    <>
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-steel/5 ring-1 ring-steel/10">
        {person.photo ? (
          <img
            src={person.photo}
            alt={person.name}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <Placeholder />
        )}
      </div>
      <div className="min-w-0">
        <div className="font-display text-xl leading-tight text-steel">{display}</div>
        <div className="truncate text-sm font-medium text-gray-600">{person.role}</div>
      </div>
    </>
  );

  if (!clickable) {
    return <div className={`${common} opacity-90`}>{inner}</div>;
  }
  return (
    <button
      type="button"
      onClick={() => onClick(person)}
      aria-label={`Read bio for ${display}`}
      className={`${common} cursor-pointer transition hover:-translate-y-0.5 hover:border-steel/40 hover:shadow-md`}
    >
      {inner}
    </button>
  );
}

function Placeholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-steel/10 text-steel/50">
      <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="12" cy="8.5" r="3.75" />
        <path d="M4.5 20c1.3-3.8 4.2-5.5 7.5-5.5s6.2 1.7 7.5 5.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* ── Bio modal ─────────────────────────────────────────────── */

function ExecModal({ exec, onClose }) {
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
      aria-label={exec.name}
    >
      <div
        className="animate-overlay-in absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="animate-modal-in relative z-10 max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-steel shadow transition hover:bg-white active:scale-90"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <div className="max-h-[90vh] overflow-y-auto p-7 pt-16 sm:p-9 sm:pt-16">
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-steel">
                {exec.role}
              </div>
              <h3 className="mt-2 font-display text-3xl text-steel sm:text-4xl">
                {exec.name}
              </h3>
              <div className="mt-3 text-sm text-gray-600">
                {exec.meta.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <a
                href={`mailto:${exec.email}`}
                className="mt-3 inline-block text-sm font-medium text-logo hover:text-steel"
              >
                {exec.email}
              </a>
              {(exec.instagram || exec.linkedin) && (
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  {exec.instagram && (
                    <a
                      href={`https://instagram.com/${exec.instagram}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-medium text-logo hover:text-steel"
                    >
                      @{exec.instagram}
                    </a>
                  )}
                  {exec.linkedin && (
                    <a
                      href={exec.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-medium text-logo hover:text-steel"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="aspect-[4/5] w-36 shrink-0 overflow-hidden rounded-xl bg-steel/5 shadow-sm ring-1 ring-steel/15 sm:w-44">
              {exec.photo ? (
                <img
                  src={exec.photo}
                  alt={exec.name}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <Placeholder />
              )}
            </div>
          </div>

          <div className="mt-6 space-y-4 border-t border-gray-200 pt-6">
            {exec.bio.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-gray-700">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
