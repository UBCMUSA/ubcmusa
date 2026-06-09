import { Link } from "react-router-dom";
import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";
import DownloadButton from "../../components/DownloadButton.jsx";
import Lead from "../../components/Lead.jsx";

const CONSTITUTION_PDF = "/images/MUSA%20Constitution%20and%20Bylaws%20(2018).pdf";

function ArchiveLink({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-lg border border-steel/40 px-5 py-3 text-sm font-semibold text-steel transition hover:border-steel hover:bg-steel/5"
    >
      {children} →
    </Link>
  );
}

export default function Musa() {
  return (
    <PageStub
      eyebrow="Resources"
      title="MUSA"
      description="Transparency, Governance & Advocacy Hub"
    >
      <article className="space-y-14">
        <p className="text-base leading-relaxed text-gray-700">
          Welcome to MUSA Central. This dedicated resource portal houses the
          structural frameworks, institutional records, and active advocacy
          initiatives that keep our student government accountable to the
          undergraduate body. Below, you can access our legal documentation, track
          council decisions, review strategic goals, and find out how MUSA is
          fighting for student rights across campus.
        </p>

        {/* 1 */}
        <section>
          <SectionEyebrow center>Governing Documents &amp; Legislation</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Our society's legal, ethical, and administrative boundaries are defined
            by our foundational governing documents. These frameworks ensure that
            MUSA operates with absolute integrity, equity, and in complete alignment
            with the code and regulations of the UBC Alma Mater Society (AMS).
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="The MUSA Constitution">
              The foundational document outlining our long-term mandate, membership
              rights, and organizational boundaries.
            </Lead>
            <Lead term="Society Bylaws">
              The active rules regulating the specific duties of our executive
              portfolios, council composition, and legislative voting procedures.
            </Lead>
            <Lead term="Code of Conduct & Ethics">
              Our established guidelines regarding conflict of interest, student
              safety, anti-harassment, and equitable resource distribution.
            </Lead>
            <Lead term="Operational Procedures Manual">
              The day-to-day administrative rules detailing how committees are formed,
              grants are distributed, and student lounge spaces are regulated.
            </Lead>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <DownloadButton
              label="MUSA Constitution & Bylaws (PDF)"
              note="MUSA Constitution and Bylaws (2018).pdf"
              href={CONSTITUTION_PDF}
            />
            <DownloadButton
              label="Code of Conduct & Procedures (PDF)"
              note="In the process of being drafted"
            />
          </div>
        </section>

        {/* 2 */}
        <section>
          <SectionEyebrow center>Council Records &amp; Institutional Memory</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Every legislative decision, policy vote, and structural update is
            formally documented to maintain an unvarnished historical record of our
            student government. Coordinated by the VP Administration and the
            Administrative Coordinator, MUSA hosts a completely open-data public
            archive.
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="Council Meeting Agendas">
              Published 48 hours prior to every bi-weekly MUSA Council session,
              allowing undergraduate members to review upcoming legislative topics. To
              have something added to the agenda or to be a Student at Large / Guest
              Speaker, please contact the MUSA President at{" "}
              <a href="mailto:ubcmusa.president@gmail.com" className="text-logo hover:text-steel">
                ubcmusa.president@gmail.com
              </a>
              .
            </Lead>
            <Lead term="Approved Meeting Minutes">
              Complete, unedited transcripts of Council debates, executive updates,
              and official voting logs, published immediately following formal
              approval.
            </Lead>
            <Lead term="Executive & Committee Reports">
              Updates submitted by individual Vice Presidents and committees tracking
              portfolio progress, budget adjustments, and operational milestones.
            </Lead>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <ArchiveLink to="/about/meeting-agendas">Access Live Agenda Archive</ArchiveLink>
            <ArchiveLink to="/about/meeting-minutes">Access Live Minutes Archive</ArchiveLink>
            <DownloadButton
              label="Latest Executive Progress Report"
              note="Incoming"
            />
          </div>
          <p className="mt-4 text-sm italic text-gray-500">
            For documents not listed or found here, please contact the MUSA VP
            Administration to receive the documents you wish to obtain at{" "}
            <a href="mailto:ubc.musa@gmail.com" className="text-logo hover:text-steel">
              ubc.musa@gmail.com
            </a>
            .
          </p>
        </section>

        {/* 3 */}
        <section>
          <SectionEyebrow center>Active Advocacy &amp; Campaigns</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            MUSA is the direct link between undergraduate musicians and university
            administration. We actively champion student rights, facility access, and
            optimal learning conditions.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            <span className="font-semibold text-steel">
              The Chan Centre Student Access Initiative:
            </span>{" "}
            A core focus of MUSA's current academic advocacy centers on student
            access, baseline scheduling, and equity within the Chan Centre for the
            Performing Arts. MUSA, alongside the AMS, is actively engaging in
            structural dialogues with the School of Music administration, Faculty of
            Arts, and Chan Centre executive teams to safeguard vital stage time,
            optimize dress rehearsal blocks, and ensure that the student body has the
            world-class environments required to complete their training without
            disruption.
          </p>
          <div className="mt-6">
            <DownloadButton
              label="Read the Full Chan Centre Advocacy Brief"
              note="Incoming"
            />
          </div>
          <p className="mt-4 text-sm italic text-gray-500">
            For inquiries regarding ongoing advocacy efforts, or to bring a new
            situation to MUSA's attention, please contact the MUSA President at{" "}
            <a href="mailto:ubcmusa.president@gmail.com" className="text-logo hover:text-steel">
              ubcmusa.president@gmail.com
            </a>
            .
          </p>
        </section>

        {/* 4 */}
        <section>
          <SectionEyebrow center>Strategic Planning &amp; Restructuring</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            To ensure MUSA scales effectively and serves future generations of music
            students, we operate under fixed long-term development models and
            organizational blueprints.
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="The MUSA Long-Term Strategic Plan">
              Our multi-year institutional roadmap outlining core goals for campus
              visibility, faculty relations, financial sustainability, and expanded
              student services over the next 5–10 years.
            </Lead>
            <Lead term="The MUSA Organizational Restructuring Blueprint">
              Detailed documentation outlining our newly introduced council portfolios
              and roles (including our Chief of Staff, Governance Commissioner, and
              expanded director positions) designed to maximize efficiency and provide
              more leadership opportunities for undergraduate students.
            </Lead>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <DownloadButton label="5–10-Year Strategic Plan (PDF)" note="Incoming" />
            <DownloadButton label="Restructuring Plan Blueprint (PDF)" note="Incoming" />
          </div>
        </section>

        {/* 5 */}
        <section>
          <SectionEyebrow center>Student Feedback &amp; Engagement Channels</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Accountability requires continuous, open, and safe communication loops
            between the student body, the MUSA executive team, and the School of Music
            administration.
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="Monthly Student-Faculty Town Halls">
              In-person forums bringing together undergraduate musicians, the School
              of Music Director, administrative leaders, faculty, and staff to
              collaborate on immediate quality-of-life improvements.
            </Lead>
            <Lead term="Online Suggestion Box">
              A continuous, highly secure digital portal connected directly to our
              monthly Town Hall agendas. Submissions can be made completely
              anonymously to ensure absolute student comfort when reporting urgent
              concerns or personal hurdles.
            </Lead>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <ArchiveLink to="/events">
              View Next Town Hall Schedule
            </ArchiveLink>
            <ArchiveLink to="/resources/academic">
              Submit a Suggestion or Urgent Note
            </ArchiveLink>
          </div>
        </section>
      </article>
    </PageStub>
  );
}
