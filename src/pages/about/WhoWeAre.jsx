import { useState, useEffect } from "react";
import PageStub from "../../components/PageStub.jsx";

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
    photo: "/images/optimized/rosie-headshot.jpg",
    bio: [
      "I am a second-year student in Piano Performance, and this is my first year with MUSA. I'm very excited to be on this team as Vice-President External and am looking forward to supporting our student body wholeheartedly.",
      "I love meeting new people and building genuine relationships, and I see this role as an opportunity to do exactly that. I believe that the impact of what we do here extends far beyond the stage, and will contribute to developing the rising musicians here at UBC.",
      "I'm also passionate about community, which is something I've carried with me through various volunteer and leadership experiences over the years. During high school, I consistently took initiative to be involved with my community— including founding a nonprofit organization and volunteering for the Peace Arch Hospital Foundation Youth in Action team, organizing fundraisers and city-wide events to support local healthcare initiatives. I plan to bring this passion and enthusiasm to this role, working with a genuine desire to make a difference. I'm so excited to work alongside such a talented and driven group of people, and I can't wait to see what we build together.",
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

export default function WhoWeAre() {
  const [selected, setSelected] = useState(null);

  return (
    <PageStub
      eyebrow="About Us"
      title="Who We Are"
      description="Meet the 2025–26 MUSA executive team, the students working behind the scenes to advocate for, support, and connect the UBC School of Music community."
    >
      <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
        {EXECS.map((e) => (
          <button
            key={e.role}
            type="button"
            onClick={() => setSelected(e)}
            className="group block text-left"
            aria-label={`Read bio for ${e.name}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-steel/5 shadow-sm ring-1 ring-steel/10 transition-[transform,box-shadow] duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-xl">
              {e.photo ? (
                <img
                  src={e.photo}
                  alt={e.name}
                  className="h-full w-full object-cover object-top transition-transform duration-[600ms] ease-out group-hover:scale-105"
                />
              ) : (
                <Placeholder />
              )}
              {/* hover overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-steel/80 via-steel/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-x-0 bottom-4 translate-y-2 text-center text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                View bio →
              </span>
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-display text-2xl text-steel">{e.name}</h3>
              <p className="mt-1 text-sm font-medium text-gray-600">{e.role}</p>
            </div>
          </button>
        ))}
      </div>

      {selected && <ExecModal exec={selected} onClose={() => setSelected(null)} />}
    </PageStub>
  );
}

function Placeholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-steel/10 text-steel/50">
      <svg viewBox="0 0 24 24" className="h-20 w-20" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="12" cy="8.5" r="3.75" />
        <path d="M4.5 20c1.3-3.8 4.2-5.5 7.5-5.5s6.2 1.7 7.5 5.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

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
          {/* Top: name/info on the left, photo top-right (fixed size) */}
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

          {/* Bottom: bio */}
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
