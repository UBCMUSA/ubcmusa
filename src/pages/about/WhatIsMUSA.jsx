import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";

const EXPERIENCE = [
  {
    title: "Flagship Social Traditions",
    body: "Building an inclusive campus culture through events like our Welcome Back BBQ, Koerner's Socials, Holiday Gatherings, and the marquee Spring Formal Gala.",
  },
  {
    title: "Wellness & Academic Resources",
    body: "Providing critical student support through Wellness Weeks, therapy animal visits, specialized jury and recital preparation guides, and a functional locker rental database.",
  },
  {
    title: "Career Readiness Frameworks",
    body: "Equipping future professionals with real-world tools through professional headshot days, resume workshops, financial literacy sessions for freelance artists, and an external performance booking board.",
  },
];

export default function WhatIsMUSA() {
  return (
    <PageStub eyebrow="About Us" title="What is MUSA">
      <article className="space-y-14">
        <section className="space-y-5">
          <p className="text-base leading-relaxed text-gray-700">
            The Music Undergraduate Students' Association (MUSA) is the official
            student government, constituency council, and community backbone
            representing over 400 undergraduate musicians, scholars, and future
            cultural leaders at the University of British Columbia School of Music.
            Operating as a core subsidiary of the UBC Alma Mater Society (AMS), MUSA
            serves as the collective voice and institutional anchor for our unique
            student body.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            Unlike traditional academic paths, a music student's journey demands an
            extraordinary level of solitary discipline, high-stakes public
            performance, and rigorous creative training. MUSA is the heartbeat
            behind the scenes, working tirelessly to ensure that our peers are
            holistically supported while maintaining the historic, world-class
            standard of excellence that defines our school.
          </p>
        </section>

        <section>
          <SectionEyebrow center>The MUSA Experience</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Much like the largest undergraduate societies at UBC, MUSA supports its
            members through a diverse array of student-led initiatives, professional
            services, and community traditions. Throughout the academic year, we
            enrich the undergraduate journey by hosting:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {EXPERIENCE.map((e) => (
              <div
                key={e.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="font-display text-xl text-steel">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{e.body}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </PageStub>
  );
}
