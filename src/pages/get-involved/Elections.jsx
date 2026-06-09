import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";
import Lead from "../../components/Lead.jsx";

export default function Elections() {
  return (
    <PageStub
      eyebrow="Get Involved"
      title="Elections"
      description="Democratic Leadership & Student Representation."
    >
      <article className="space-y-14">
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-gray-700">
            MUSA is built upon a firm foundation of democratic student representation.
            As an official subsidiary constituency council of the UBC Alma Mater
            Society (AMS), our highest legislative choices and core leadership roles
            are decided directly by your votes.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            Elections are run under strict constitutional guidelines and managed by an
            independent, non-partisan Elections Officer to guarantee absolute
            fairness, campaign transparency, and electoral integrity for all
            candidates.
          </p>
        </div>

        <section>
          <SectionEyebrow center>Annual Election Cycles</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            MUSA operates two separate democratic voting windows to align with
            academic years and welcome incoming cohorts:
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="Fall Elections (October)">
              Focused on electing our academic class leaders, specifically our 1st
              Year, 2nd Year, 3rd Year, and 4th Year Representatives. This cycle allows
              incoming classes to select their own peer advocates early in the fall
              term.
            </Lead>
            <Lead term="Spring Elections (March)">
              Our primary general election cycle held to select the central executive
              board for the upcoming academic year — including the President, VP Admin,
              VP Finance, VP Internal, VP External, and VP Student Resource.
            </Lead>
          </ul>
        </section>

        <section>
          <SectionEyebrow center>Running for Office: How It Works</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Stepping up to run for a seat on the MUSA Council is one of the most
            impactful ways to shape life at the UBC School of Music. If you want to
            put your name on the ballot, you must navigate three structural
            milestones:
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="The Nomination Package">
              Candidates must download and complete an official nomination package,
              gathering a required minimum of student peer signatures to verify their
              ballot eligibility.
            </Lead>
            <Lead term="The Annual General Meeting (AGM) Platforms">
              Nominees are highly recommended to attend MUSA's AGM during the
              campaigning window to present a brief 1–2 minute speech outlining their
              platform and taking questions from the electorate.
            </Lead>
            <Lead term="Campaign Spending Rules">
              To keep elections equitable, all candidates must operate within strict
              campaign expenditure limits monitored by the Elections Officer.
            </Lead>
          </ul>
        </section>

        <section>
          <SectionEyebrow center>How to Cast Your Vote</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            When voting opens, all active undergraduate music members will receive an
            automated electoral ballot via the central university student network.
            Voting is hosted completely securely on the AMS WebVote platform:
          </p>
          <div className="mt-6">
            <a
              href="https://ams.ubc.ca/vote"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md bg-steel px-5 py-3 text-sm font-semibold text-white transition hover:bg-steel-dark"
            >
              Cast Your Ballot via AMS WebVote →
            </a>
          </div>
        </section>

        <section>
          <SectionEyebrow center>Electoral Integrity &amp; Reports</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Following the close of every election cycle, the Elections Officer conducts
            an independent audit of vote tallies and constitutional compliance before
            publishing a formal Electoral Integrity Report for public review.
          </p>
        </section>
      </article>
    </PageStub>
  );
}
