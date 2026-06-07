import PageStub from "../../components/PageStub.jsx";

const PILLARS = [
  {
    n: "01",
    title: "Academic & Institutional Advocacy",
    body: "We serve as the direct, unyielding link between the student body, faculty leadership, and central university administration. MUSA actively champions student rights, baseline facility access, and optimal scheduling models. We work to ensure that our peer musicians have the safe, structurally sound, and state-of-the-art environments required to complete their high-caliber training without disruption.",
  },
  {
    n: "02",
    title: "Student Well-being & Community Building",
    body: "The intense pressure of elite musical instruction can easily lead to academic and social isolation. MUSA is dedicated to turning a highly competitive conservatory environment into a supportive, collaborative family. We fund and execute targeted mental health initiatives, create dedicated social spaces, and establish vital peer-support networks to keep our students grounded, healthy, and inspired.",
  },
  {
    n: "03",
    title: "Professional Development & Cross-Faculty Collaboration",
    body: "We actively bridge the gap between the classroom, the rehearsal hall, and the professional arts industry. This year, MUSA is intentionally breaking out of our traditional campus bubble. We are launching expansive collaborative mixers, educational seminars, and professional resources in partnership with other major UBC undergraduate societies, expanding our students' networks and preparing them to lead Vancouver's future cultural and business landscapes.",
  },
];

const EXPERIENCE = [
  {
    title: "Flagship Social Traditions",
    body: "Welcome Back BBQ, Koerner's Socials, Holiday Gatherings, and the marquee Spring Formal Gala.",
  },
  {
    title: "Wellness & Academic Resources",
    body: "Wellness Weeks, therapy animal visits, jury and recital prep guides, and a functional locker rental database.",
  },
  {
    title: "Career Readiness Frameworks",
    body: "Professional headshot days, resume workshops, financial literacy for freelance artists, and a performance booking board.",
  },
];

export default function WhatIsMUSA() {
  return (
    <PageStub
      eyebrow="About Us"
      title="What is MUSA"
      description="Guided by the pillars of academic advocacy, student well-being, and professional development, MUSA is dedicated to empowering over 400 musicians at the UBC School of Music to achieve creative excellence and discover their unique journeys within an inclusive, collaborative community."
    >
      <article className="space-y-12">
        <section>
          <h2 className="font-display text-3xl text-steel">Our Mission</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            The Music Undergraduate Students' Association (MUSA) is the official
            student government, constituency council, and community backbone
            representing over 400 undergraduate musicians, scholars, and future
            cultural leaders at the University of British Columbia School of Music.
            Operating as a core subsidiary of the UBC Alma Mater Society (AMS), MUSA
            serves as the collective voice and institutional anchor for our unique
            student body.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            Unlike traditional academic paths, a music student's journey demands an
            extraordinary level of solitary discipline, high-stakes public
            performance, and rigorous creative training. MUSA is the heartbeat
            behind the scenes, working tirelessly to ensure that our peers are
            holistically supported while maintaining the historic, world-class
            standard of excellence that defines our school.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-steel">
            Our Three Strategic Pillars
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            To deliver a professionalized, high-impact student experience, all of
            MUSA's initiatives, services, and operations are guided by three core
            mandates:
          </p>
          <ol className="mt-8 space-y-6">
            {PILLARS.map((p) => (
              <li key={p.n} className="rounded-xl border border-steel/10 bg-white p-7">
                <div className="flex items-start gap-5">
                  <div className="font-display text-5xl leading-none text-steel/40">{p.n}</div>
                  <div>
                    <h3 className="font-display text-2xl text-steel">{p.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-700">
                      {p.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="font-display text-3xl text-steel">The MUSA Experience</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            Much like the largest undergraduate societies at UBC, MUSA supports its
            members through a diverse array of student-led initiatives, professional
            services, and community traditions. Throughout the academic year, we
            enrich the undergraduate journey by hosting:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {EXPERIENCE.map((e) => (
              <div
                key={e.title}
                className="rounded-xl border border-steel/10 bg-white p-6"
              >
                <h3 className="font-display text-xl text-steel">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{e.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-steel/10 bg-steel/5 p-10">
          <h2 className="font-display text-3xl text-steel">
            Our Commitment to Community
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            At MUSA, we strive to build a diverse, equitable, and inclusive
            community where every student feels safe, valued, and heard. Music is a
            universal language, but every student's academic and artistic journey
            is entirely personal. Whether you are a performance major preparing for
            the international stage, a scholar engaging in cutting-edge musicology,
            or an incoming student finding your footing, MUSA is here to empower
            you to discover your own unique path, achieve creative excellence, and
            thrive throughout your university years at UBC.
          </p>
        </section>
      </article>
    </PageStub>
  );
}
