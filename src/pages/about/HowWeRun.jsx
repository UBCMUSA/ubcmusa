import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" strokeLinecap="round" />
    </svg>
  );
}

/** Download button. With `href` it's an active link; without, it's a muted
 *  "not yet available" placeholder showing the status note. */
function DownloadButton({ label, note, href }) {
  if (href) {
    return (
      <a
        href={href}
        download
        className="group inline-flex items-center gap-3 rounded-lg border border-steel/30 bg-white px-5 py-3 text-sm font-semibold text-steel transition hover:border-steel hover:bg-steel hover:text-white"
      >
        <DownloadIcon />
        <span className="flex flex-col">
          <span>{label}</span>
          {note && (
            <span className="text-xs font-normal text-gray-500 group-hover:text-white/80">
              {note}
            </span>
          )}
        </span>
      </a>
    );
  }
  return (
    <div className="inline-flex items-center gap-3 rounded-lg border border-dashed border-gray-300 bg-gray-50 px-5 py-3 text-sm font-medium text-gray-400">
      <DownloadIcon />
      <span className="flex flex-col">
        <span>{label}</span>
        {note && <span className="text-xs italic">{note}</span>}
      </span>
    </div>
  );
}

function LeadItem({ term, children }) {
  return (
    <li>
      <span className="font-semibold text-steel">{term}:</span>{" "}
      <span className="text-gray-700">{children}</span>
    </li>
  );
}

export default function HowWeRun() {
  return (
    <PageStub
      eyebrow="About Us"
      title="How We Run"
      description="The Music Undergraduate Students' Association (MUSA) operates as a highly structured, transparent, and autonomous student government. We believe that professional leadership requires absolute accountability to the student body we serve."
    >
      <article className="space-y-16">
        <p className="text-base leading-relaxed text-gray-700">
          Our operations, legislative processes, and financial decisions are
          governed by democratic frameworks, clear constitutional guidelines, and
          an unwavering commitment to open data. Under the oversight of our
          Executive, Chief of Staff, and Governance Commissioner, MUSA ensures that
          every dollar spent and every policy enacted is fully accessible to our
          members, faculty partners, and the broader university community.
        </p>

        {/* 1 */}
        <section>
          <SectionEyebrow center>Foundational Documents &amp; Legislation</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Our society's legal and administrative boundaries are defined by our
            core governing documents. These frameworks ensure that MUSA operates
            fairly, ethically, and in total alignment with the regulations of the
            UBC Alma Mater Society (AMS).
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <LeadItem term="The MUSA Constitution">
              The foundational document outlining our long-term mandate, membership
              rights, and organizational structure.
            </LeadItem>
          </ul>
          <p className="mt-5 text-sm italic text-gray-500">
            All current governing documents are available for public download below.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <DownloadButton
              label="MUSA Constitution & Bylaws (PDF)"
              note="MUSA Constitution and Bylaws (2018).pdf"
              href="/images/MUSA%20Constitution%20and%20Bylaws%20(2018).pdf"
            />
          </div>
        </section>

        {/* 2 */}
        <section>
          <SectionEyebrow center>Financial Accountability</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            MUSA manages student fees and corporate sponsorships with the highest
            level of fiscal discipline. Under the mandate of the Vice President
            Finance and the Financial Coordinator, our budgets undergo rigorous
            internal accounting and structural audits.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            We believe that students have a right to know exactly how their
            constituency fees are being reinvested into the community.
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <LeadItem term="Annual Operating Budgets">
              At the start of each academic year, a comprehensive itemized budget is
              drafted by the VP Finance, reviewed by the Executive Office, and voted
              on for approval by the Student Council.
            </LeadItem>
            <LeadItem term="Term Financial Statements">
              At the close of each winter term, MUSA publishes transparent expense
              reports detailing actual expenditures across student programming,
              wellness initiatives, and facility resources.
            </LeadItem>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <DownloadButton
              label="Approved 2026–2027 Budget Projection (PDF)"
              note="To be released in August 2026"
            />
            <DownloadButton
              label="Past Financial Ledger Archive"
              note="To be released"
            />
          </div>
        </section>

        {/* 3 */}
        <section>
          <SectionEyebrow center>Council Records &amp; Institutional Memory</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Every legislative decision, facility advocacy initiative, and policy
            vote is formally documented to maintain an unvarnished historical record
            of our student government.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            Coordinated by the Vice President Administration and the Administrative
            Coordinator, MUSA hosts a public archive of all official corporate
            schedules and records.
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <LeadItem term="Council Meeting Agendas">
              Published 48 hours prior to every bi-weekly MUSA Council meeting,
              allowing undergraduate members to review upcoming legislative topics.
            </LeadItem>
            <LeadItem term="Approved Meeting Minutes">
              Complete, unedited transcripts of Council debates, executive updates,
              and voting logs, published immediately following formal approval.
            </LeadItem>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-steel/40 px-5 py-3 text-sm font-semibold text-steel transition hover:border-steel hover:bg-steel/5"
            >
              Meeting Agendas →
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-steel/40 px-5 py-3 text-sm font-semibold text-steel transition hover:border-steel hover:bg-steel/5"
            >
              Meeting Minutes →
            </a>
          </div>
        </section>

        {/* 4 */}
        <section>
          <SectionEyebrow center>Democratic Oversight &amp; Elections</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            MUSA is built upon a foundation of democratic student representation.
            Our Elections Officer operates as an independent, non-partisan electoral
            officer to ensure that all student leadership transitions are fair,
            transparent, and strictly democratic.
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <LeadItem term="General Elections">
              Held annually in the spring term to elect the incoming President and
              Vice Presidents, and in the fall term to elect representatives.
            </LeadItem>
            <LeadItem term="Voter Guides & Campaign Transparency">
              MUSA publishes a comprehensive nomination package and official voter
              guides detailing candidate platforms prior to voting opening on the AMS
              WebVote system at{" "}
              <a
                href="https://ams.ubc.ca/vote"
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-logo underline-offset-2 hover:text-steel hover:underline"
              >
                ams.ubc.ca/vote
              </a>
              .
            </LeadItem>
            <LeadItem term="Electoral Integrity Reports">
              Following every election cycle, the Elections Officer publishes a
              formal review verifying vote tallies and constitutional compliance.
            </LeadItem>
          </ul>
        </section>
      </article>
    </PageStub>
  );
}
