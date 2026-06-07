import PageStub from "../../components/PageStub.jsx";

const EXECS = [
  {
    role: "President",
    name: "Millen Sandhu",
    meta: [
      "4th-year BMus Undergraduate Student",
      "Tenor, UBC Opera",
      "Councillor, AMS · HR Committee Chair, AMS",
    ],
    email: "ubcmusa.president@gmail.com",
    bio: [
      "Millen Sandhu is a tenor studying opera performance at the UBC School of Music, serving as the President of the Music Undergraduate Students' Association (MUSA) and an AMS Councillor. Millen was born and raised here in Vancouver. In his role as president, Millen is focused on building strong, long-term support systems for music students — whether that is academically, financially, or socially. Through his work with MUSA and his seat on the AMS Council, he aims to advocate for an excellent academic experience while creating more opportunities for music students to collaborate with other faculties across campus.",
      "As a classical singer himself, Millen knows firsthand the intense discipline, long hours, and dedication required to pursue a music degree. His daily experience in the practice rooms and rehearsal halls gives him a genuine understanding of the unique challenges performance students face, which directly guides his approach to student leadership. He has recently performed the lead role in Leonard Bernstein's Candide, and other roles in Street Scene and Die Zauberflöte; he also has a deep love for German Lied. Outside of music and student government, Millen loves to stay active and unwind by travelling, hiking, playing board games, and hanging out with friends.",
    ],
  },
  {
    role: "Vice-President Administration",
    name: "Almira Miao",
    meta: ["2nd-year BMus Undergraduate Student", "Flute Performance"],
    email: "ubc.musa@gmail.com",
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
    bio: [
      "My name is Aleksandra Van Looy, though most people know me as Sasha. I am from Burnaby, British Columbia, and I am proud to serve as MUSA's Vice-President of Finance this year.",
      "My previous experience includes managing ticket sales and supporting marketing initiatives in my high school theatre department. Alongside these experiences, I found that I really enjoyed statistics in high school, inspiring me to learn more about finance and accounting, leading me to pursue opportunities that combine analytical thinking with leadership.",
      "As Vice-President of Finance, I am excited to help strengthen MUSA's financial position through sponsorship opportunities, fundraising initiatives, and responsible financial planning. I am also looking forward to expanding my knowledge of bookkeeping and financial management through this role. I feel fortunate to be part of such a dedicated and hardworking executive team, and I look forward to helping create meaningful opportunities and more support for students throughout the year.",
    ],
  },
  {
    role: "Vice-President Internal",
    name: "Zaiden Grayda-Reyes",
    meta: ["3rd-year BMus Undergraduate Student", "Flute Performance"],
    email: "ubcmusa.vpinternal@gmail.com",
    bio: [
      "I am a third-year flute student and am entering my third year with MUSA. Over the past two years, my involvement with the association has given me the opportunity to connect with students across the School of Music, contribute to initiatives that support student life, and help strengthen our sense of community.",
      "Through these experiences, I have developed a strong appreciation for the role MUSA plays in representing and supporting music students. As Vice-President Internal, I am excited to continue building meaningful relationships within our community while working alongside an incredible team to bring new ideas and initiatives to life.",
    ],
  },
  {
    role: "Vice-President External",
    name: "Rosie Lin",
    meta: ["2nd-year BMus Undergraduate Student", "Piano Performance"],
    email: "musa.vpexternal@gmail.com",
    bio: [
      "I am a second-year student in Piano Performance, and this is my first year with MUSA. I'm very excited to be on this team as Vice-President External and am looking forward to supporting our student body wholeheartedly.",
      "I love meeting new people and building genuine relationships, and I see this role as an opportunity to do exactly that. I believe that the impact of what we do here extends far beyond the stage, and will contribute to developing the rising musicians here at UBC.",
      "I'm also passionate about community, which is something I've carried with me through various volunteer and leadership experiences over the years. During high school, I consistently took initiative to be involved with my community — including founding a nonprofit organization and volunteering for the Peace Arch Hospital Foundation Youth in Action team, organizing fundraisers and city-wide events to support local healthcare initiatives. I plan to bring this passion and enthusiasm to this role, working with a genuine desire to make a difference.",
    ],
  },
  {
    role: "Vice-President Student Resource",
    name: "TBD",
    meta: ["Position currently open"],
    email: "ubcmusa.vpstudentresource@gmail.com",
    bio: [
      "This position is currently open. If you are interested in joining the MUSA executive team, please reach out — we welcome candidates across the School of Music who are passionate about advocacy and student well-being.",
    ],
  },
];

export default function WhoWeAre() {
  return (
    <PageStub
      eyebrow="About Us"
      title="Who We Are"
      description="Meet the 2025–26 MUSA executive team — the students working behind the scenes to advocate for, support, and connect the UBC School of Music community."
    >
      <div className="space-y-10">
        {EXECS.map((e) => (
          <article
            key={e.role}
            className="overflow-hidden rounded-xl border border-steel/10 bg-white"
          >
            <header className="bg-steel/5 px-8 py-6">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-steel">
                {e.role}
              </div>
              <h2 className="mt-2 font-display text-3xl text-steel">{e.name}</h2>
              <div className="mt-3 text-sm text-gray-600">
                {e.meta.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <a
                href={`mailto:${e.email}`}
                className="mt-3 inline-block text-sm font-medium text-logo hover:text-steel"
              >
                {e.email}
              </a>
            </header>
            <div className="space-y-4 px-8 py-7">
              {e.bio.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-gray-700">
                  {para}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </PageStub>
  );
}
