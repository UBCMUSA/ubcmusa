import { Link } from "react-router-dom";
import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";
import Lead from "../../components/Lead.jsx";

export default function Join() {
  return (
    <PageStub
      eyebrow="Get Involved"
      title="Join MUSA"
      description="Discover your role in the MUSA community."
    >
      <article className="space-y-14">
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-gray-700">
            Join MUSA under the right role for you! Under MUSA's Restructuring Plan,
            many new positions have been introduced, increasing MUSA's capacity for
            excellence while providing more student opportunities. The majority of our
            positions are open to ALL UBC Undergraduate Students, providing valuable
            skills and experience to all students who share a common interest in
            Music.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            Whether you are a performance major practicing around the clock, a scholar
            tracking music history, or a non-music student who loves the arts, MUSA
            offers a professionalized environment to expand your network, lead
            impactful campaigns, and shape the cultural landscape of the university.
          </p>
        </div>

        <section>
          <SectionEyebrow center>Why Join the MUSA Team?</SectionEyebrow>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="Build Professional Portfolios">
              Gain hands-on, high-impact experience in corporate sponsorship, event
              management, creative media marketing, fiscal bookkeeping, or democratic
              governance.
            </Lead>
            <Lead term="Advocate for Your Peers">
              Take a direct role in shaping campus wellness initiatives, supporting
              academic resource databases, and representing the collective student
              voice to central university administration and the AMS.
            </Lead>
            <Lead term="Cultivate Community">
              Help us transform a highly competitive conservatory environment into a
              collaborative, supportive family by planning major student traditions
              and inter-faculty social mixers.
            </Lead>
            <Lead term="Open to Everyone">
              You do not need to be enrolled in a Bachelor of Music degree to get
              involved. If you are a UBC undergraduate who loves music and community
              leadership, there is a specialized portfolio built for you.
            </Lead>
          </ul>
        </section>

        <section>
          <SectionEyebrow center>Three Core Pathways to Join</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Depending on your availability, career interests, and academic schedule,
            you can join MUSA through three distinct avenues:
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="Elected Leadership (Executive Board & Year Representatives)">
              Run for office during our formal election cycles to directly vote on
              legislation, control core budgets, and serve as the face of your
              academic cohort.
            </Lead>
            <Lead term="Hired Staff & Appointed Directors">
              Apply for specialized operational roles within our executive portfolios
              to drive our administrative tracking, marketing graphics, financial
              coordination, or facility management.
            </Lead>
            <Lead term="Junior Committees & Volunteer Crews">
              Perfect for first-year students or those looking for a low-stakes
              introduction to student government. Help coordinate day-to-day event
              logistics, manage the lobby booths, or join seasonal planning
              committees.
            </Lead>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/get-involved/hiring"
              className="inline-flex items-center gap-2 rounded-md bg-steel px-5 py-3 text-sm font-semibold text-white transition hover:bg-steel-dark"
            >
              Hiring Opportunities →
            </Link>
            <Link
              to="/get-involved/elections"
              className="inline-flex items-center gap-2 rounded-md border border-steel/40 px-5 py-3 text-sm font-semibold text-steel transition hover:border-steel hover:bg-steel/5"
            >
              Elections →
            </Link>
          </div>
        </section>
      </article>
    </PageStub>
  );
}
