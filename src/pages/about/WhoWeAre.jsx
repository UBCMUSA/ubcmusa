import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageStub from "../../components/PageStub.jsx";
import { EMAILS } from "../../data/directory.js";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";

const HIRING_URL = "/get-involved/hiring";

const EXECS = [
  {
    role: "President",
    name: "Millen Sandhu",
    meta: [
      "4th-year BMus Undergraduate Student",
      "Tenor, UBC Opera",
      "Councillor, AMS",
      "Board Member, CiTR 101.9 FM & Discorder",
    ],
    email: EMAILS.president,
    instagram: "millensandhu.musapresident",
    linkedin: "https://www.linkedin.com/in/millen-sandhu/",
    photo: "/images/optimized/millen-headshot.jpg",
    bio: [
      "Millen Sandhu is a tenor studying opera performance at the UBC School of Music, serving as the President of the Music Undergraduate Students' Association (MUSA) and an AMS Councillor. Millen was born and raised here in Vancouver. In his role as president, Millen is focused on building strong, long-term support systems for music students, whether that is academically, financially, or socially. Through his work with MUSA and his seat on the AMS Council, he aims to advocate for an excellent academic experience while creating more opportunities for music students to collaborate with other faculties across campus.",
      "As a classical singer himself, Millen knows firsthand the intense discipline, long hours, and dedication required to pursue a music degree. His daily experience in the practice rooms and rehearsal halls gives him a genuine understanding of the unique challenges performance students face, which directly guides his approach to student leadership. He has recently performed the title role in Leonard Bernstein's Candide, and other roles in Street Scene and Die Zauberflöte, he also has a deep love for German Lied. Outside of music and student government, Millen loves to stay active and unwind by travelling, hiking, playing board games, and hanging out with friends.",
    ],
  },
  {
    role: "Vice-President Administration",
    name: "Megan Arboleda West",
    pronouns: "They/Them",
    meta: ["3rd-year Arts Undergraduate Student", "Music & Sociology Double Major"],
    email: EMAILS.vpAdmin,
    linkedin: "https://www.linkedin.com/in/megan-a-38175526a",
    photo: "/images/optimized/megan-headshot.jpg",

    bio: [
        "Megan Arboleda West is a third-year Arts student at UBC, double majoring in Music and Sociology, and currently serves as VP Administration for the Music Undergraduate Students’ Association.",

        "With a strong passion for the intersections of the arts, culture and community, Megan is always eager to get involved and support programs that cultivate artistic and culture-centered initiatives. They have volunteered with the Lapu Lapu Day Block Party as the Assistant Volunteer Registration Lead, as a Rehearsal Liaison for the Unison Choral Festival, and currently volunteers with the Building Bayanihan Project. Megan is excited to put their experience to use in supporting the MUSA team and the music students at UBC.",

        "Outside of the campus community and volunteering, you can find Megan spending time with friends and family, frequenting local artist markets, and attending live performances.",
    ],
  },
  {
    role: "Vice-President Finance",
    name: "Aleksandra Van-Looy",
    meta: ["2nd-year BMus Undergraduate Student", "Soprano, UBC Opera"],
    email: EMAILS.vpFinance,
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
    email: EMAILS.vpInternal,
    instagram: "zaii.dn3",
    linkedin: "https://www.linkedin.com/in/zaiden-grayda-reyes-bb771432b",
    photo: "/images/optimized/zaiden-headshot.jpg",
    bio: [
      "I am a third-year flute student and am entering my third year with MUSA. Over the past two years, my involvement with the association has given me the opportunity to connect with students across the School of Music, contribute to initiatives that support student life, and help strengthen our sense of community. Through these experiences, I have developed a strong appreciation for the role MUSA plays in representing and supporting music students. As Vice-President Internal, I am excited to continue building meaningful relationships within our community while working alongside an incredible team to bring new ideas and initiatives to life.",
    ],
  },
  {
    role: "Vice-President External",
    email: EMAILS.vpExternal,
    applyUrl: HIRING_URL,
  },
  {
    role: "Vice-President Student Resource",
    name: "Pin Yi Hu",
    meta: ["2nd-year BMus Undergraduate Student", "Viola Performance"],
    email: EMAILS.vpStudentResource,
    instagram: "p.inyi",
    linkedin: "https://www.linkedin.com/in/pinyihu",
    photo: "/images/optimized/pinyi-headshot2.jpg",
    bio: [
      "Pin Yi Hu is a second-year Viola Performance student at the UBC School of Music and VP Student Resource for the Music Undergraduate Students' Association. Having grown up in the lower mainland, Pin Yi has been involved in the BC youth music community for years, performing with local ensembles across the Tri-Cities and Vancouver. This background within the local arts community motivates her commitment to creating stronger support networks for her peers. As the primary link between the student body and MUSA, her goal is to support an inclusive community where student voices are not just heard, but actively put into practice.",
      "Deeply curious about human behaviour, Pin Yi is currently working toward a double major in Music and Psychology. When she isn't practicing her viola or studying, you can find her mindlessly sketching on any paper surface, or attempting to make a new variation of a matcha latte.",
      "Pin Yi is incredibly excited to connect with everyone this year! Whether you have a quick question about navigating UBC resources, want to pitch an idea, or just need someone to chat with, please do not hesitate to contact her.",
    ],
  },
];

const [PRESIDENT, VP_ADMIN, VP_FINANCE, VP_INTERNAL, VP_EXTERNAL, VP_STUDENT] = EXECS;

// Hired & appointed council members.
const CHIEF_OF_STAFF = {
  role: "Chief of Staff",
  name: "Jeremy Han",
  meta: ["4th-year Arts Undergraduate Student"],
  email: EMAILS.chiefOfStaff,
  photo: "/images/optimized/jeremyhan-headshot.png",
  bio: [
    "Jeremy is a settler learning, living and working between the ancestral, traditional and unceded territories of the xʷməθkʷəy̓əm (Musqueam) people. Jeremy is a 4th year arts student at the University of British Columbia and is passionate about community, governance, leadership and creating spaces where people feel heard and represented. He is thrilled to be a part of MUSA this year and to be able to advocate for various goals and initiatives at UBC. He is also looking forward to working alongside other like minded people and with the AMS along with the other faculty societies at UBC. Outside of school, Jeremy enjoys music in every capacity and being involved with the not for & nonprofit sector!",
  ],
};

const GOVERNANCE_COMMISSIONER = {
  role: "Governance Commissioner",
  name: "Kira Hu",
  meta: ["4th-year BMus & B+MM Undergraduate Student"],
  email: EMAILS.governance,
  instagram: "kiira.hu",
  bio: [
    "Kira Hu is a 4th year BMUS and B+MM student at the University of British Columbia, serving as Governance Commissioner for the Music Undergraduate Students' Association (MUSA) for this '26/'27 school year. As an aspiring law student, Kira strives to bring a thoughtful approach to her role, aiming to contribute to a more engaging community within the music faculty. As well, in her last year at UBC, she also hopes to give back to the community that has provided her with such a welcoming and supportive undergraduate experience. Having experienced the close-knit environment within the Faculty of Music firsthand, she hopes to help create more opportunities for students to connect, collaborate, and support one another. She looks forward to making the most of her final year as well as getting to know more members of the Faculty of Music.",
    "Outside of academics, Kira likes to spend time with friends, and enjoys traveling, going for long walks, and baking. She also loves exploring new spots and checking out new restaurants and cafes around the city.",
  ],
};

// Independent officer — impartial of the executive, so the chart renders this
// one off to the side with no reporting line.
const ELECTIONS_OFFICER = {
  role: "Elections Officer",
  name: "Jeremy Solomon",
  pronouns: "He/Him",
  meta: ["5th-year BMus Undergraduate Student", "Horn Performance"],
  email: EMAILS.elections,
  instagram: "jeremy.solomon_",
  photo: "/images/optimized/jeremy-solomon-headshot.jpg",
  bio: [
    "Jeremy Solomon is a fifth year undergraduate Horn performance major at UBC, currently serving as the 2026/27 MUSA Chief Elections Officer. Born in Vancouver, Jeremy has performed with numerous ensembles around Vancouver and spreads his love of music wherever and whenever he has the chance. Outside of music, Jeremy enjoys playing sports with his friends and watching the latest movies in theatres.",
    "As an advocate for student involvement, Jeremy is pleased to be continuing his third year in the role of Elections Officer and has served on the MUSA council as Fourth-Floor Lounge Manager in his second and third year at UBC. Jeremy is also the Large Ensemble Music Librarian for the UBC School of Music, creating sheet music for over 150 students.",

  ]
};

const MARKETING_DIRECTOR = {
  role: "Marketing Director",
  name: "Max Luo",
  pronouns: "He/Him",
  meta: ["1st-year BMus Undergraduate Student","General Studies, Piano Focus"],
  email: EMAILS.marketing,
  instagram: "mushhmelon",
  bio: [
    "Hello, I’m Max and I am a 1st year transfer student currently studying General Studies in Music with a concentration in piano. Being a music content creator for the past 2 years, I always enjoy looking for new ways to promote music and engage the audience.",
    "As marketing director, my goal is to use my content-creating experience to bring school-wide attention to issues and events involving our music school. This will mostly be in the form of short videos or skits, so feel free to contact me if you would like to be part of the content!",

  ]
};

const SOFTWARE_DEVELOPER = {
  role: "Software Developer",
  name: "Nathan Wu",
  meta: ["4th-year BSc Undergraduate Student", "Computer Science"],
  linkedin: "https://www.linkedin.com/in/nathanwu05/",
  photo: "/images/optimized/nathan-headshot.jpg",
  bio: [
    "Hey I'm Nathan, a fourth-year Computer Science student in the Faculty of Science at UBC. I had the opportunity to design and build the MUSA website from scratch this year, replacing the club's old Wix setup with a fully custom site to give MUSA a more professional online presence.",
    "If you'd like to see more of my work or get in touch, feel free to visit nathanwu.ca.",
  ],
};

const SOFTWARE_DEVELOPER_2 = {
  role: "Software Developer",
  name: "Colin Yang",
  meta: ["4th-year BSc Undergraduate Student", "Computer Science"],
  bio: [
    "Colin is a 4th year at UBC pursuing a combined major in Computer Science and Statistics",
  ],
};

// Open roles. `applyUrl` surfaces an "Apply for this role" link in the bio
// modal; Lounge Manager is filled outside the hiring cycle, so it has none.


const ADMIN_COORDINATOR = {
  role: "Administrative Coordinator",
  email: EMAILS.adminCoordinator,
  applyUrl: HIRING_URL,
};

const CREATIVE_DIRECTOR = {
  role: "Creative Director",
  email: EMAILS.creative,
  applyUrl: HIRING_URL,
};
const COMMUNITY_OUTREACH_DIRECTOR = {
  role: "Community Outreach Director",
  email: EMAILS.community,
  applyUrl: HIRING_URL,
};
const SPONSORSHIP_DIRECTOR = {
  role: "Sponsorship Director",
  email: EMAILS.sponsorship,
  applyUrl: HIRING_URL,
};
const FINANCE_COORDINATOR = {
  role: "Finance Coordinator",
  email: EMAILS.financeCoordinator,
  applyUrl: HIRING_URL,
};
const LOUNGE_MANAGER = {
  role: "Lounge Manager",
  name: "Tia Lau",
  pronouns: "She/Her",
  email: EMAILS.loungeManager,
  meta: ["1st-year BMus & BEd Undergraduate Student", "Harp General Studies"],
  instagram: "tialau_1112",
  photo: "/images/optimized/tia-lau-headshot.jpg",
  bio: [
    "Tia Lau is a first-year Harp General Studies and Music Education student at the UBC School of Music.",
    "Tia is excited about joining MUSA as the Lounge Manager. She hopes to bring new ideas, enhance the lounge experience and plan fun events that will help students make connections with each other. She sees this role as a great opportunity to meet more music students from different years, build connections and become more involved in the UBC music community.",
    "As someone who is passionate about music and enjoys being part of a creative community, Tia hopes to provide an environment where students feel welcomed, comfortable and connected. She is excited to collaborate with the MUSA team, hear students’ suggestions and help create a positive and enjoyable lounge experience for everyone.",
    "She looks forward to making the most of her first year at UBC and contributing to the School of Music community!",

  ]
};

const STRING = {
    role: "Strings",
    name: "Alesha Chan",
    pronouns: "She/Her",
    email: EMAILS.stringsRep,
    photo: "/images/optimized/alesha-headshot.jpg",
    meta: ["2nd-year BMus Undergraduate Student", "Violin Performance"],
    bio: [
        "Alesha Chan is a second-year Violin Performance student at UBC, currently serving as the Violin Representative for the Strings Undergraduate Students’ Association. With a passion for music and community involvement, Alesha was a member of the Richmond Delta Youth Orchestra for nine years, where she gained experience as both a principal violinist and concertmaster. Throughout her musical journey, she has also enjoyed performing in chamber ensembles, including quartets and quintets.",
        "As the Strings Representative, Alesha hopes to serve as a bridge between string students and MUSA, ensuring that students feel heard and supported within the School of Music. She is excited to contribute to creating a welcoming and inclusive environment for everyone.",
        "Outside of practicing and performing, Alesha enjoys cooking and baking for friends and family. She looks forward to meeting more students this year and encourages everyone to reach out with any questions or concerns!",
    ]
}

const KEYBOARD = {
    role: "Keyboard",
    name: "Shua Cho",
    email: EMAILS.keyboardRep,
    applyURL: HIRING_URL,
}

const VOICE_OPERA = {
    role: "Voice/Opera",
    name: "Anastasia Lutsenko",
    meta: ["Anastasia Lutsenko-Goretoy","4th-year BMus Undergraduate Student","Voice Performance"],
    instagram: "nastya.lutsenko_",
    email: EMAILS.voiceOperaRep,
    photo: "/images/optimized/anastasia-headshot.jpg",
    bio: [
        "Anastasia (Nastya) Goretoy is a soprano from Vernon, BC working towards a BMUS in Voice Performance. Since dedicating herself to music, she has performed and competed in various ensembles, masterclasses, and festivals across Canada and the West Coast. With boundless ambition, Nastya strives to become a prominent figure in the local music scene as a performer, educator, and entrepreneur. Alongside her husband Philip, she conducts choir at Westlynn Baptist Church in North Vancouver. When not practicing, Anastasia can be found hiking, serving in her church's Russian Language ministry, or experimenting with food.",
    ]
}

const WIND_BRASS_PERCUSSION = {
    role: "Wind, Brass, and Percussion",
    name: "Nicholas Hoshida",
    pronouns: "He/Him",
    meta: ["2nd-year B-Mus Undergraduate Student","Trombone Performance"],
    email: EMAILS.windBrassPercussionRep,
    photo: "/images/optimized/nicholas-headshot.jpg",
    instagram: "keikikritic",
    bio: [
        "Hi, I'm Nicholas Hoshida (or Nick, if you prefer), the Winds Brass Percussion representative for the Music Undergraduate Students’ Association! If you have any questions regarding MUSA and any issues regarding Woodwind, Brass, or Percussion (WBP) topics, I’ll be more than happy to help you in any way I can.",
        "I am also the UBC music school’s Chamber Music Librarian for WBP, so if your chamber group needs any music regarding future events, feel free to contact me.",
        "I am currently undergoing an undergraduate trombone performance degree (29’), and also have a long history with music ever since I was little, playing piano since 1st grade, and trombone since 6th. I have also had many opportunities to play with professional orchestras back in high school, which allowed me to get to know all about the non-string instruments.",
        "I hope to be of assistance to anyone in need of WBP issues, and I am more than grateful to be a part of this association. I look forward to meeting and supporting you throughout the year!",

    ]
}

const COMPOSITION = {
    role: "Composition",
    name: "Hailan Gao",
    pronouns: "She/Her",
    meta: ["1st-year BMus Undergraduate Student","Composition"],
    email: EMAILS.compositionRep,
    photo: "/images/optimized/hailan-headshot.jpg",
    instagram: "hailan_music",
    linkedin: "https://www.linkedin.com/in/hailan-gao-composer/",
    bio: [
        "Hailan Gao is a first-year Composition student at the UBC School of Music and acts as Composition Representative for the Music Undergraduate Students’ Association.",
        "Having studied in Germany for ten years and completed the Abitur, alongside performing in a traditional Chinese orchestra, Hailan focuses on writing soundtracks that blend Western cinematic orchestration with traditional Asian instrumentation. Her goal is to bridge these diverse musical worlds to tell unique, culturally rich stories through sound.",
        "In her role as the Composition Representative, Hailan aims to amplify student voices within the department and create collaborative platforms for composers across all year levels. She is excited to hear all your thoughts and ideas to improve, so please don’t hesitate to email her or come up and talk to her in person!",

    ]
}

const BAMUSIC = {
    role: "BA in Music",
    name: "Ethan Kerouac",
    pronouns: "He/Him",
    meta: ["2nd-year BA in Music Undergraduate Student"],
    email: EMAILS.baMusicRep,
    instagram: "ethankerouac",
    photo: "/images/optimized/ethan-headshot.jpg",
    bio: [
        "Hey Music! My name’s Ethan and I’m very excited to represent the Arts students majoring in Music! Music has always been the biggest part of my life, and I’m looking forward to meeting new people and making our community an even better place for all Music students. Outside of UBC, I’m either bartending, producing music, taking photos, keeping up with my favourite fashion brands, cooking, and exploring the city trying new restaurants. I can't wait to meet everyone and make this year a success for MUSA!" 
    ]
}
const FIRST_YEAR_CHAIR = {
    role: "First Year Chair",
    name: "Ian Avila",
    pronouns: "He/Him",
    meta: ["1st-year BMus Undergraduate Student","General Studies, Secondary Education"],
    email: EMAILS.fycChair,
    instagram: "Ian_avila17",
    photo: "/images/optimized/ian-headshot.jpg",
    bio: [
        "Ian Avila is a first-year Bachelor of Music student specializing in General Studies with a focus on Secondary Education, with saxophone as his primary instrument. Originally from Calgary, he completed his secondary musical education through Western Canada High School’s Band Program, where he performed in the Wind Ensemble and Jazz Band as Lead Alto Saxophonist. Beyond the alto saxophone, he is also active on tenor and soprano saxophone, with occasional experience on baritone saxophone and piano.",
        "Outside of performing, Ian has always valued student leadership and community involvement. During his time at Western Canada High School, he served on the Band Leadership Executive, contributing to the Facilities and Logistics Committee. Through this experience, he developed an appreciation for the work that goes on behind the scenes to support a thriving student community. It also shaped his belief in servant leadership: the idea that meaningful leadership begins with serving others and creating opportunities for those around you to succeed.",
        "As MUSA’s First-Year Committee Chair, Ian hopes to be an active voice for incoming music students by listening to their concerns, advocating for their needs, and helping make their transition into university life a positive experience. He is particularly interested in organizing community events and initiatives that encourage connection, collaboration, and a stronger sense of belonging within the UBC School of Music. Above all, he hopes to contribute to an environment where every student feels welcomed, supported, and valued.",
    ]
}

const FIRST_YEAR_MEMBER1 = {
    role: "First Year Committee",
    name: "Andreas Tsang",
    pronouns: "He/Him",
    meta: ["1st-year BMus Undergraduate Student","Composition"],
    instagram: "andreas.tsang",
    photo: "/images/optimized/andreas-headshot.jpg",
    bio: [
        "Hi my name is Andreas Tsang. I am from Toronto, Ontario, and I am a first-year music composition major, serving in MUSA as a member of the First Year Committee.",
        "Throughout my years as a musician, I have been involved in many collaborative projects and ensembles. I play the piano, double bass, and trumpet, and have conducted various ensembles too. I love working and performing with others, and I believe fostering community and collaboration, especially in music, is very important.",
        "As a member of FYC, I will work with the other members to strengthen the community and to make UBC Music a fun place to learn and grow.",
    ]
}

const FIRST_YEAR_MEMBER2 = {
    role: "First Year Committee",
    name: "Maximillian Yip",
    pronouns: "He/Him",
    meta: ["1st-year BMus Undergraduate Student", "Violin Performance"],
    instagram: "maximilianyip",
    photo: "/images/optimized/maximillian-headshot.jpg",
    bio: [
        "My name is Max Yip, and I am a first-year BMus student in violin performance from Toronto, Ontario. As a violinist who has played in multiple symphonic orchestras growing up, I understand the importance of building a strong community and developing bonds with fellow musicians. Although pursuing a music degree requires intense dedication and often leads to long hours in the practice room, I believe that the relationships we form are just as important. ",
        "As a member of MUSA’s first-year committee, I am here to ensure that our cohort’s ideas, concerns and feedback are always heard and represented. I am looking forward to serve and along with the other members of the first-year committee, we will be responsible for planning a variety of upcoming events! If you ever have any suggestions for future events or questions about anything, feel free to reach out!",
        "Make sure to be on the lookout for all upcoming events! ",
        "Outside of music, I am a very passionate basketball player. If I’m not sawing away at my violin in a practice room, you can probably find me at rec north putting shots up!",
    ]
    
}

const FIRST_YEAR_MEMBER3 = {
    role: "First Year Committee",
    name: "Rae Huang",
    pronouns: "She/Her",
    meta: ["1st-year BMus Undergraduate Student","Cello Performance"],
    instagram: "rui3ro",
    photo: "/images/optimized/rae-headshot.jpg",
    bio: [
        "Hi! My name is Rae Huang, and I am a first-year music student at UBC, majoring in cello performance. I am serving as a member of MUSA’s First Year Committee!",
        "I’ve been playing the cello for many years, and music has always been a huge part of my life. Throughout my musical journey, I’ve had the opportunity to perform in various places and ensembles. These experiences have allowed me to connect with other musicians and develop a strong appreciation for my community.",
        "As a member of FYC, I hope to help create a welcoming and inclusive environment where everyone feels supported. I’m excited to work with the rest of MUSA to organize events, bring new ideas to life, and make UBC music even better!",
    ]
}

const FIRST_YEAR_MEMBER4 = {
    role: "First Year Committee",
    name: "Johnny Shen",
    pronouns: "He/Him",
    email: "johnnyshen2@gmail.com",
    instagram: "johnnyshen_",
    photo: "/images/optimized/johnnyshen-headshot.jpg",
    bio: [
        "Johnny Shen is a first-year trumpet performance major studying at the UBC School of Music and a part of First Year Committee. Having played in various ensembles at Burnaby North Secondary, Johnny has experience in many band settings, along with a strong passion for exploring music. Johnny also participated in the Vancouver Youth Symphony Orchestra, where he found his dream to become a musician. Johnny's interest in music also travelled to different instruments, including the French horn and piano. Outside of trumpet, Johnny pursued athletics and leadership, playing and coaching in Burnaby North Secondary's badminton team and teaching children French horn at the Vancouver Oriental Philharmonic Orchestra.",
        "I am excited to be joining MUSA for the first year and cannot wait to connect and make new friends. I can't wait to contribute to the community through events and service, along with being a source of positive energy within the community.",
    ]
}




// Organizational structure (placeholders use { role } only).
const GROUPS = [
  {
    label: "Direct Reports & Independent Officers",
    members: [CHIEF_OF_STAFF, GOVERNANCE_COMMISSIONER],
    aside: ELECTIONS_OFFICER,
  },
  {
    label: "Executive Portfolios",
    members: [
      { ...VP_ADMIN, reports: [ADMIN_COORDINATOR, SOFTWARE_DEVELOPER, SOFTWARE_DEVELOPER_2] },
      { ...VP_FINANCE, reports: [FINANCE_COORDINATOR] },
      {
        ...VP_INTERNAL,
        reports: [MARKETING_DIRECTOR, CREATIVE_DIRECTOR],
      },
      {
        ...VP_EXTERNAL,
        reports: [COMMUNITY_OUTREACH_DIRECTOR, SPONSORSHIP_DIRECTOR],
      },
      { ...VP_STUDENT, reports: [LOUNGE_MANAGER] },
    ],
  },
  {
    label: "Division Representatives",
    members: [
      STRING,
      KEYBOARD,
      VOICE_OPERA,
      WIND_BRASS_PERCUSSION,
      COMPOSITION,
      BAMUSIC
    ],
  },
  {
    label: "First Year Committee",
    members: [
        {...FIRST_YEAR_CHAIR, reports: [FIRST_YEAR_MEMBER1, FIRST_YEAR_MEMBER2, FIRST_YEAR_MEMBER3, FIRST_YEAR_MEMBER4] }
    ],
  }
];

export default function WhoWeAre() {
  const [selected, setSelected] = useState(null);
  const chartScrollRef = useRef(null);
  const presidentRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const profile = searchParams.get("profile");

  useEffect(() => {
    if (profile === "lounge-manager") {
      setSelected(LOUNGE_MANAGER);
    }
  }, [profile]);

  const open = (p) => setSelected(p);
  const closeProfile = () => {
    setSelected(null);

    if (searchParams.has("profile")) {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete("profile");
      setSearchParams(nextParams, { replace: true });
    }
  };


  useLayoutEffect(() => {
    const centerPresident = () => {
        const container = chartScrollRef.current;
        const president = presidentRef.current;

        if (!container || !president || !container.clientWidth) return;

        const containerRect = container.getBoundingClientRect();
        const presidentRect = president.getBoundingClientRect();

        const offset =
        presidentRect.left +
        presidentRect.width / 2 -
        (containerRect.left + containerRect.width / 2);

        container.scrollLeft += offset;
    };

    centerPresident();

    window.addEventListener("resize", centerPresident);

    return () => {
        window.removeEventListener("resize", centerPresident);
    };
  }, []);

  return (
    <PageStub
      wide
      eyebrow="About Us"
      title="Who We Are"
      description="Behind every event, advocacy campaign, and student resource is a team of elected and hired undergraduate student leaders dedicated to making your experience at the UBC School of Music the best it can be. The MUSA Executive and Council are composed of peers from diverse musical disciplines, including performance, composition, education, and musicology, who balance their own rigorous hours in the practice rooms with a shared commitment to serving our community."
    >
      <div className="mx-auto mb-14 max-w-4xl overflow-hidden rounded-2xl shadow-md ring-1 ring-steel/10">
        <img
          src="/images/optimized/who-are-we.jpg"
          alt="The MUSA executive and council team"
          className="h-full w-full object-cover"
        />
      </div>

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
                {g.aside && (
                  <Twig key={g.aside.role}>
                    <OrgCard person={g.aside} onClick={open} />
                  </Twig>
                )}
              </Branch>
            </Twig>
          ))}
        </Branch>
      </div>

      {/* Desktop: top-down horizontal org chart */}
      {/* Desktop: top-down horizontal org chart */}
      {/* Desktop: top-down horizontal org chart */}
        <div
            ref={chartScrollRef}
            className="mt-12 hidden overflow-x-auto pb-4 lg:block"
            tabIndex={0}
            aria-label="Scrollable MUSA organizational chart"
        >
        <div className="mx-auto flex w-max min-w-full flex-col items-center px-6">
            <div ref={presidentRef}>
            <ChartCard person={PRESIDENT} onClick={open} />
        </div>

          {GROUPS.map((g) => (
            <div key={g.label} className="flex flex-col items-center">
              <ChartLine />
              <GroupChip>{g.label}</GroupChip>
              <ChartLine />
              <div className="relative">
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

                {/* Detached from the tree on purpose: this officer reports to
                    no one, so no connector is drawn. */}
                {g.aside && (
                  <div className="absolute left-full top-4 ml-14 flex flex-col items-center">
                    <ChartCard person={g.aside} onClick={open} />
                    <div className="mt-2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.16em] text-steel/50">
                      Independent Officer
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && <ExecModal exec={selected} onClose={closeProfile} />}
    </PageStub>
  );
}

// Whether the modal has anything to show — vacant roles still qualify via
// their contact email and application link.
function hasDetail(person) {
  return (
    Array.isArray(person.bio) ||
    !!(
      person.pronouns ||
      person.instagram ||
      person.linkedin ||
      person.email ||
      person.applyUrl
    )
  );
}

/* ── Horizontal chart primitives (desktop) ─────────────────── */

// Connector classes for a child cell: up-line (before) + horizontal bar (after,
// trimmed on first/last, hidden for only-child).
const CHART_LI =
  "relative flex flex-col items-center px-1.5 pt-4 before:absolute before:left-1/2 before:top-0 before:h-4 before:w-px before:-translate-x-1/2 before:bg-gray-300 before:content-[''] after:absolute after:left-0 after:right-0 after:top-0 after:border-t after:border-gray-300 after:content-[''] first:after:left-1/2 last:after:right-1/2 only:after:hidden";

function ChartLine() {
  return <div className="h-4 w-px bg-gray-300" />;
}

function GroupChip({ children }) {
  return (
    <div className="rounded-full border border-gray-200 bg-steel/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-steel/70">
      {children}
    </div>
  );
}

function ChartCard({ person, onClick, small = false }) {
  const clickable = hasDetail(person);
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
        {person.pronouns && (
          <div className="text-[10px] text-gray-500">{person.pronouns}</div>
        )}
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
  const clickable = hasDetail(person);
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
        {person.pronouns && (
          <div className="text-xs text-gray-500">{person.pronouns}</div>
        )}
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
      aria-label={exec.name || exec.role}
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
                {exec.name || "Position Open"}
              </h3>
              {exec.pronouns && (
                <p className="mt-1 text-sm text-gray-500">{exec.pronouns}</p>
              )}
              {exec.meta && (
                <div className="mt-3 text-sm text-gray-600">
                  {exec.meta.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
              {exec.email && (
                <a
                  href={`mailto:${exec.email}`}
                  className="mt-3 inline-block text-sm font-medium text-logo hover:text-steel"
                >
                  {exec.email}
                </a>
              )}
              {(exec.instagram || exec.linkedin) && (
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  {exec.instagram && (
                    <a
                      href={`https://www.instagram.com/${exec.instagram}`}
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
              {exec.applyUrl && (
                <div className="mt-4">
                  <Link
                    to={exec.applyUrl}
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 rounded-full bg-steel px-4 py-2 text-sm font-medium text-white transition hover:bg-steel-dark active:scale-97"
                  >
                    Apply for this role
                    <span aria-hidden="true">→</span>
                  </Link>
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

          {exec.bio && (
            <div className="mt-6 space-y-4 border-t border-gray-200 pt-6">
              {exec.bio.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-gray-700">
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
