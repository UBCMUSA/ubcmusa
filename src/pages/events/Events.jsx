import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";

const EVENT_TERMS = [
  {
    term: "Winter Term 1",
    months: [
      {
        month: "September",
        events: [
          {
            title: "Imagine Day & Welcome Back BBQ (Sept 8th)",
            tags: ["Internal", "Social"],
            desc: "MUSA kicks off the academic year on campus by welcoming incoming and returning music undergraduates by bringing back our signature Welcome Back BBQ. Alongside the food, council members distribute specialized care packages and custom MUSA stickers to build community spirit from day one.",
          },
          {
            title: "Annual General Meeting (AGM)",
            tags: ["Internal", "Governance"],
            desc: "Hosted early in the term in the School of Music, the AGM serves as our open governance forum where the Executive Board presents the society's yearly roadmap and financial transparency models. It is highly recommended for fall election nominees to present a brief 1–2 minute speech or campaign platform to the student body during this assembly.",
          },
          {
            title: "Professional Headshots (Roy Barnett Recital Hall)",
            tags: ["Internal", "Academic"],
            desc: "An essential professional readiness service held inside the Roy Barnett Recital Hall. MUSA provides affordable, high-resolution portrait sessions for students to secure industry-standard headshots for upcoming recital programs, casting agencies, and professional music portfolios.",
          },
          {
            title: "Koerner's Pub Social Night",
            tags: ["Internal", "Social"],
            desc: "A cozy evening of food and drinks hosted at Koerner's Pub to help music students unwind, chat, and reconnect after the first weeks of classes.",
          },
          {
            title: "Free Breakfast Friday (FBF)",
            tags: ["Internal", "Social"],
            desc: "To support student well-being during long rehearsal schedules, MUSA hosts a morning breakfast spread from 9:00 AM to 12:00 PM in the School of Music lobby, providing free food to jumpstart the day on the first Friday of every month.",
          },
          {
            title: "MUSA Student-Faculty Town Hall",
            tags: ["Faculty", "Social/Governance"],
            desc: "Held once a month, this program brings undergraduate musicians face-to-face with School of Music directors, administrators, faculty, and staff to voice facility concerns and collaborate on immediate quality-of-life adjustments.",
          },
          {
            title: "Locker Boothing (Sept 9th–18th)",
            tags: ["Internal", "Academic"],
            desc: "Running across a dedicated two-week window, the MUSA team sets up physical administrative booths in the lobby to help students register, audit, and secure physical lockers across the music buildings for instrument and sheet music storage.",
          },
          {
            title: "Fall Council Hiring",
            tags: ["Internal", "Governance"],
            desc: "Launched at the beginning of September, this recruitment campaign opens applications for vacant council positions, coordinator roles, and hired staff slots within our newly expanded organizational framework.",
          },
          {
            title: "Junior Committee Applications",
            tags: ["Internal", "Governance"],
            desc: "Opening in late September, this leadership initiative is designed to onboard first-year undergraduates and new community members into active student government operations early in their university journeys.",
          },
        ],
      },
      {
        month: "October",
        events: [
          {
            title: "MUSA Fall Elections",
            tags: ["Internal", "Governance"],
            desc: "Our formal democratic election cycle held to officially elect our core cohort leaders, including the 1st Year, 2nd Year, 3rd Year, and 4th Year Representatives, via the centralized AMS WebVote system (ams.ubc.ca/vote).",
          },
          {
            title: "Peer-to-Peer Academic Mentorship",
            tags: ["Internal", "Academic"],
            desc: "A comprehensive academic support pipeline structured across different degree tracks. Advanced Doctoral students provide guidance to Masters students, Masters students mentor 4th-year seniors, and 4th-year students actively mentor incoming 1st-year music undergraduates as they navigate advanced theory, juries, and history coursework.",
          },
          {
            title: "Halloween Trick-or-Treating",
            tags: ["Faculty", "Social"],
            desc: "A festive event designed to bring holiday cheer to the music corridors, featuring an organized Faculty Trick-or-Treat route through administrative and professor offices (TBD).",
          },
          {
            title: "MUSA Costume & Candy Event",
            tags: ["Internal", "Social"],
            desc: "A high-visibility spirit day where any student who wears a Halloween costume into the School of Music can visit any MUSA council members to receive free festive candy.",
          },
          {
            title: "MUSA Slime Craft Event",
            tags: ["Internal", "Social"],
            desc: "A hands-on, creative decompression event hosted in the lobby where students can take a break between intense practice blocks to mix custom, stress-relieving slime.",
          },
        ],
      },
      {
        month: "November",
        events: [
          {
            title: "Free Breakfast Friday & Town Hall",
            tags: ["Dual-Track", "Governance/Social"],
            desc: "Held on the first Friday of the month, delivering our signature free morning breakfast spread in the lobby followed immediately by our structured feedback assembly with school administration.",
          },
          {
            title: "UBC Wellness Week Support",
            tags: ["Constituency Collaboration", "Wellness"],
            desc: "MUSA joins the campus-wide health initiative at the AMS Nest, setting up localized resource booths, mental health guides, and student-support check-ins.",
          },
          {
            title: "Rabbitats Therapy Bunnies",
            tags: ["Internal", "Wellness"],
            desc: "A highly anticipated student well-being event hosted directly in the School of Music Lobby in partnership with the Rabbitats Rescue Society, allowing students to decompress and reduce performance anxiety by spending time with rescue therapy rabbits.",
          },
          {
            title: "MUSA Autumn Fundraiser",
            tags: ["Internal", "Philanthropy"],
            desc: "A strategic community campaign launched to raise targeted operational capital for student bursaries, upgraded lounge resources, and local outreach.",
          },
        ],
      },
      {
        month: "December",
        events: [
          {
            title: "Free Breakfast Friday & Town Hall",
            tags: ["Dual-Track", "Governance/Social"],
            desc: "The final first-Friday session of the autumn term, addressing facility hours during the winter exam block and setting holiday project priorities.",
          },
          {
            title: "Choral Outreach & Carol Grams",
            tags: ["External", "Community Outreach"],
            desc: "An external performance initiative where choral and vocal students visit local hospitals, clinics, and care facilities to sing holiday repertoire and distribute personalized “Carol Grams” to patients and healthcare staff.",
          },
          {
            title: "MUSA Winter Spirit Week",
            tags: ["Internal", "Social"],
            desc: "Held during the final week of autumn classes to combat pre-exam stress, featuring fun daily community themes like Pyjama Day to keep student morale high.",
          },
          {
            title: "MUSA Holiday Party",
            tags: ["Internal", "Social"],
            desc: "A warm, end-of-term winter celebration hosted in the 4th Floor Student Lounge, featuring festive decorations, sweet treats, and a cocoa bar to celebrate the end of the semester.",
          },
        ],
      },
    ],
  },
  {
    term: "Winter Term 2",
    months: [
      {
        month: "January",
        events: [
          {
            title: "Free Breakfast Friday & Town Hall",
            tags: ["Dual-Track", "Governance/Social"],
            desc: "Welcoming the student body back for the winter term with a fresh breakfast spread and an administrative touchbase regarding winter facility upkeep and ensemble planning.",
          },
          {
            title: "MUSA Vision Boards Craft Event",
            tags: ["Internal", "Social"],
            desc: "A creative New Year's social where students gather to design personal vision boards, mapping out their artistic aspirations, performance metrics, and degree goals for the upcoming year.",
          },
          {
            title: "Koerner's Pub Social Night",
            tags: ["Internal", "Social"],
            desc: "The winter term installment of our classic constituency pub social, bringing peers together for food, drinks, and casual networking after the winter break.",
          },
          {
            title: "The MUSA Faculty Showcase",
            tags: ["Faculty Collaboration", "Flagship Project"],
            desc: "One of MUSA's major projects reintroducing a premium concert event built to celebrate and highlight the world-class performance talent of the School of Music faculty. This initiative strengthens community bonds and fosters deep student-instructor mentorship networks outside the classroom.",
          },
          {
            title: "Peer-Led Community Event",
            tags: ["Internal", "Social"],
            desc: "A collaborative peer assembly designed to integrate students across different performance streams, coordinate ensemble schedules, and build internal networks.",
          },
        ],
      },
      {
        month: "February",
        events: [
          {
            title: "Free Breakfast Friday & Town Hall",
            tags: ["Dual-Track", "Governance/Social"],
            desc: "Our regular monthly first-Friday check-in focusing on midterm tracking, practice room availability, and student comfort.",
          },
          {
            title: "Valentine's Day Candygrams",
            tags: ["Club Collaboration", "Fundraiser"],
            desc: "A seasonal community fundraiser allowing students to purchase and send customized floral arrangements and sweet treats directly to their peers across the school.",
          },
          {
            title: "MUSA Winter Fundraiser Drive & Raffle",
            tags: ["Constituency Collaboration", "Philanthropy"],
            desc: "A community raffle draw featuring prize packages, organized in tandem with potential partners like the Kinesiology Undergraduate Society (KUS) to raise student project backing.",
          },
        ],
      },
      {
        month: "March",
        events: [
          {
            title: "Free Breakfast Friday & Town Hall",
            tags: ["Dual-Track", "Governance/Social"],
            desc: "A critical pre-jury consultation tracking facility operations, piano tuning schedules, and active student advocacy updates.",
          },
          {
            title: "The MUSA Annual Formal",
            tags: ["Internal", "Flagship Social"],
            desc: "The grand social highlight of the academic year (such as our classic “Starry Night” Formal) hosted in premium campus venues like the Cecil Green Park House. This formal gala brings the entire School of Music community together to strengthen social bonds, celebrate artistic achievements, and honour graduating seniors.",
          },
          {
            title: "MUSA Spring Craft Event",
            tags: ["Internal", "Social"],
            desc: "A casual decompression social hosted in the lobby, providing students with relaxing craft supplies like colouring books, origami paper, and friendship-bracelet making materials between long class blocks.",
          },
          {
            title: "Peer Event: Mock Juries & Preparation",
            tags: ["Internal", "Academic"],
            desc: "A student-led academic forum designed to prepare lower-year students for high-stakes spring juries, offering peer-compiled checklists, formatting advice, and live mock-auditions.",
          },
          {
            title: "MUSA Recital Raffles",
            tags: ["Internal", "Performance Support"],
            desc: "An audience-building promotional initiative where MUSA hosts prize drawings during undergraduate degree recitals, driving high attendance and celebrating student performance milestones.",
          },
          {
            title: "Resume & CV Building Seminar",
            tags: ["Internal", "Academic"],
            desc: "A specialized professional readiness workshop teaching students how to build freelance music resumes, structure curriculum vitae for graduate school, and write artist biographies.",
          },
          {
            title: "MUSA Spring General Elections",
            tags: ["Internal", "Governance"],
            desc: "The democratic election window where the incoming President, Vice-Presidents, and core executives are chosen for the next academic year.",
          },
          {
            title: "Freelancer Tax & Finance Collaboration",
            tags: ["External", "Professional Academic"],
            desc: "A professional development workshop matching students with financial experts to navigate self-employed artist tax models, freelance contract routing, invoicing, and grant writing.",
          },
        ],
      },
      {
        month: "April",
        events: [
          {
            title: "Free Breakfast Friday & Town Hall",
            tags: ["Dual-Track", "Governance/Social"],
            desc: "The final governance and breakfast check-in of the academic year, summarizing annual council achievements and transitioning portfolios to incoming officers.",
          },
          {
            title: "End of Year Celebration",
            tags: ["Internal", "Social"],
            desc: "A festive outdoor social event to celebrate the conclusion of final exams.",
          },
        ],
      },
    ],
  },
];

function Tag({ children }) {
  return (
    <span className="rounded-full bg-steel/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-steel">
      {children}
    </span>
  );
}

export default function Events() {
  return (
    <PageStub
      eyebrow="Events"
      title="Events"
      description="Event details & descriptions — the full academic-year timeline of MUSA programming."
    >
      <article className="space-y-14">
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-gray-700">
            Welcome to the definitive guide to the MUSA event calendar. To support
            our unique student body, MUSA operates a diverse portfolio of programming
            distributed across specialized tracks: internal student initiatives,
            inter-faculty collaborations, external community outreach, and direct
            joint ventures with the School of Music faculty and administration.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            Below is the comprehensive operational breakdown of every approved event
            for the academic year, organized chronologically by term and month.
          </p>
          <p className="text-sm italic text-gray-500">
            Please note that this page will be updated throughout the summer as events
            change. All details and events are subject to change. Updates will be
            posted here and on MUSA social media platforms.
          </p>
        </div>

        {EVENT_TERMS.map((term) => (
          <section key={term.term}>
            <SectionEyebrow center>{term.term}</SectionEyebrow>
            <div className="mt-8 space-y-10">
              {term.months.map((m) => (
                <div key={m.month}>
                  <h3 className="font-display text-2xl text-steel">{m.month}</h3>
                  <ul className="mt-4 space-y-6 border-l-2 border-steel/15 pl-6">
                    {m.events.map((ev) => (
                      <li key={ev.title} className="relative">
                        <span className="absolute -left-[1.7rem] top-1.5 h-2.5 w-2.5 rounded-full bg-steel/50" />
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                          <h4 className="font-semibold text-steel">{ev.title}</h4>
                          <span className="flex flex-wrap gap-1.5">
                            {ev.tags.map((t) => (
                              <Tag key={t}>{t}</Tag>
                            ))}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-gray-700">
                          {ev.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </article>
    </PageStub>
  );
}
