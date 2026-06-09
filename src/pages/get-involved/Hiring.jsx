import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";
import Lead from "../../components/Lead.jsx";

function SubHead({ children }) {
  return (
    <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-steel">
      {children}
    </h3>
  );
}

export default function Hiring() {
  return (
    <PageStub
      eyebrow="Get Involved"
      title="Hiring Opportunities"
      description="Student Leadership — workforce and involvement opportunities for UBC music students."
    >
      <article className="space-y-14">
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-gray-700">
            Welcome to the central workforce and involvement hub for UBC music
            students. MUSA is dedicated to connecting undergraduate musicians with
            valuable skill-building roles both within our own council and across the
            broader university ecosystem.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            Whether you are looking to manage internal student services, work directly
            for the School of Music faculty, join central campus government, or secure
            a paid UBC Work Learn position, explore the different employment and
            involvement tiers below.
          </p>
        </div>

        <section>
          <SectionEyebrow center>MUSA Internal Hired Portfolios</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            MUSA relies on a talented team of hired staff, directors, and coordinators
            to execute our daily services, marketing pipelines, financial accounting,
            and community programs. These roles are run through non-partisan
            application and interview processes overseen by the Executive Office.
          </p>
          <SubHead>Core Internal Recruitment Windows</SubHead>
          <ul className="mt-3 space-y-3 text-base leading-relaxed">
            <Lead term="Fall Council Hiring (Early September)">
              Applications open for specialized executive portfolio staff, including
              directors, coordinators, and facility managers.
            </Lead>
            <Lead term="Junior Committee Recruitment (Late September)">
              Designed specifically to onboard first-year students and new members
              into active council operations, providing an excellent stepping stone
              for future student government leadership.
            </Lead>
          </ul>
          <SubHead>Portfolio Teams</SubHead>
          <ul className="mt-3 space-y-3 text-base leading-relaxed">
            <Lead term="Presidential Executive Staff">
              Chief of Staff, Governance Commissioner
            </Lead>
            <Lead term="Administrative Branch (Under VP Admin)">
              Administrative Coordinator
            </Lead>
            <Lead term="Financial Branch (Under VP Finance)">
              Financial Coordinator
            </Lead>
            <Lead term="Internal Branch (Under VP Internal)">
              Marketing Director, Creative Director
            </Lead>
            <Lead term="External Branch (Under VP External)">
              Community Engagement Director, Sponsorship Director
            </Lead>
            <Lead term="Student Resource Branch (Under VP Student Resource)">
              Lounge Manager
            </Lead>
          </ul>
        </section>

        <section>
          <SectionEyebrow center>School of Music &amp; Faculty Opportunities</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            The UBC School of Music regularly hires undergraduate and graduate
            students for specialized, paid operational roles to support the academic
            year, performance logistics, and recruitment infrastructure.
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="Student Recruitment Ambassadors">
              Join the UBC Music admissions team for high-profile events like the
              annual Info Day for US Students. Tasks include monitoring the School of
              Music booth, sharing your lived international student experience, and
              conducting guided facility tours for prospective students.
            </Lead>
            <Lead term="Performance & Ensemble Support Staff">
              Paid opportunities routinely open for stage crew members, orchestral
              managers, score/ensemble librarians, and specialized tech operators to
              assist with concert logistics in the Chan Centre, Roy Barnett Hall, and
              the Old Auditorium.
            </Lead>
            <Lead term="Academic Work Learn Roles">
              Look out for faculty-backed positions including office assistants,
              digital media creators, and research assistants, posted at the start of
              each term.
            </Lead>
          </ul>
        </section>

        <section>
          <SectionEyebrow center>AMS &amp; Inter-Constituency Opportunities</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            As a subsidiary council of the Alma Mater Society (AMS), MUSA encourages
            music students to branch out into central university government and
            collaborate with other undergraduate societies across campus.
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="AMS Committees & Staff Roles">
              Expand your leadership network by applying for roles within central AMS
              operations. Paid and volunteer positions open annually across various
              student services, resource groups, and central governance committees
              (such as the HR, Finance, and Advocacy committees).
            </Lead>
            <Lead term="Inter-Constituency Collaborations">
              Broaden your professional scope by looking out for externally hired
              director or volunteer roles hosted by our partner constituencies,
              including the Arts Undergraduate Society (AUS), Science Undergraduate
              Society (SUS), and Kinesiology Undergraduate Society (KUS), if open to
              all UBC students.
            </Lead>
          </ul>
        </section>

        <section>
          <SectionEyebrow center>Central UBC Postings &amp; Career Boards</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            If you are looking for general on-campus employment that works around your
            demanding practice schedules, utilize UBC's centralized career search
            frameworks.
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="UBC Work Learn Program">
              The premier on-campus employment framework for undergraduate students.
              Work Learn roles provide subsidized, professional part-time jobs (up to
              10 hours/week in the winter and 20 hours/week in the summer) across
              various university departments, allowing you to earn an income while
              maintaining your academic balance.
            </Lead>
            <Lead term="UBC Careers Online">
              The main job board accessible to all UBC students and alumni, matching
              you with hundreds of off-campus internships, summer jobs, and graduate
              employment opportunities.
            </Lead>
          </ul>
        </section>
      </article>
    </PageStub>
  );
}
