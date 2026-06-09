import { Link } from "react-router-dom";
import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";
import TownHallForm from "../../components/TownHallForm.jsx";

export default function Academic() {
  return (
    <PageStub
      eyebrow="Resources"
      title="Academic"
      description="Academic Tools & Facility Services"
    >
      <article className="space-y-14">
        <p className="text-base leading-relaxed text-gray-700">
          Navigating a music degree requires balancing intensive course loads,
          theoretical analysis, and strict performance milestones. MUSA provides the
          essential services and peer infrastructure to help you succeed in the
          classroom and the practice room.
        </p>

        {/* 1 */}
        <section>
          <SectionEyebrow center>Music Textbook Library Service</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Music textbooks, score anthologies, and core musicology resources can be
            incredibly expensive. To help reduce your academic costs, MUSA operates a
            student-run textbook lending library.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            <span className="font-semibold text-steel">Borrow &amp; Donate:</span>{" "}
            Drop off your old music history, theory, or orchestration textbooks to
            help your peers, or browse our active inventory at the start of each term
            to borrow required materials for free.
          </p>
          <p className="mt-3 text-sm italic text-gray-500">
            Please contact the MUSA VP Administration at{" "}
            <a href="mailto:ubc.musa@gmail.com" className="text-logo hover:text-steel">
              ubc.musa@gmail.com
            </a>{" "}
            for any inquiries.
          </p>
        </section>

        {/* 2 */}
        <section>
          <SectionEyebrow center>Locker Booking System</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Keeping your instruments, sheet music, and performance attire safe is
            vital to your day-to-day peace of mind. MUSA directly manages the
            distribution and administration of student lockers across the School of
            Music.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            <span className="font-semibold text-steel">Secure Your Space:</span> Find
            MUSA representatives boothing in the School of Music Lobby during the
            first few weeks of school in September to book your locker for the year.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            Lockers are "rented" from September to April during the academic year at
            the prices of $20/year for new students looking for their first locker,
            and $15/year for returning students renewing their previous locker.
            Lockers vary in size to accommodate your instrument.
          </p>
          <p className="mt-3 text-sm italic text-gray-500">
            Please contact the MUSA VP Administration at{" "}
            <a href="mailto:ubc.musa@gmail.com" className="text-logo hover:text-steel">
              ubc.musa@gmail.com
            </a>{" "}
            for any inquiries.
          </p>
        </section>

        {/* 3 */}
        <section>
          <SectionEyebrow center>Peer-to-Peer Academic &amp; Professional Mentorship</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            When you need extra help breaking down complex theory homework or with
            advice on your next steps after your degree, your community has your back.
            MUSA structures a cross-degree mentorship framework to connect students
            across all levels of study.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            <span className="font-semibold text-steel">Degree Integration:</span> Our
            academic pipeline facilitates advanced academic support, where Doctorate
            students mentor Masters students, and Masters students help Undergraduates
            navigate advanced theory, composition, and analysis.
          </p>
          <p className="mt-3 text-sm italic text-gray-500">
            Sessions will vary in size and content. Please reach out to the MUSA VP
            Student Resource at{" "}
            <a
              href="mailto:ubcmusa.vpstudentresource@gmail.com"
              className="text-logo hover:text-steel"
            >
              ubcmusa.vpstudentresource@gmail.com
            </a>{" "}
            for inquiries regarding becoming a mentor or if you are a student seeking
            mentorship.
          </p>
        </section>

        {/* 4 */}
        <section>
          <SectionEyebrow center>Academic Workshops with Faculty &amp; Staff</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            MUSA collaborates closely with the school's instructors and staff to host
            targeted skills seminars outside of regular lecture hours.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            <span className="font-semibold text-steel">Curriculum Seminars:</span>{" "}
            Look out for specialized workshops focusing on jury preparation
            guidelines, score analysis techniques, and administrative tips for
            managing high-stakes academic timelines.
          </p>
          <p className="mt-3 text-sm italic text-gray-500">
            These seminars will be updated under the{" "}
            <Link to="/events" className="text-logo hover:text-steel">
              Events
            </Link>{" "}
            tab and posted on MUSA social media pages.
          </p>
        </section>

        {/* 5 */}
        <section>
          <SectionEyebrow center>Student-Faculty Town Halls</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Your personal comfort and systemic well-being are directly tied to
            institutional accountability. MUSA hosts monthly forums that bring
            students face-to-face with the people who run our school.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            <span className="font-semibold text-steel">Open Dialogue:</span> These
            monthly meetings connect the undergraduate student body with the School of
            Music Director, administration, faculty, and staff to voice community
            concerns, address facility issues, and collaborate on immediate
            quality-of-life improvements.
          </p>
          <p className="mt-3 text-sm italic text-gray-500">
            Find updates regarding the Town Hall Program under{" "}
            <Link to="/events" className="text-logo hover:text-steel">
              Events
            </Link>{" "}
            or on MUSA social media pages.
          </p>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            For pressing concerns, please fill out the Virtual Town Hall Form below
            or send an email to the MUSA VP Student Resource with your
            concerns/comments at{" "}
            <a
              href="mailto:ubcmusa.vpstudentresource@gmail.com"
              className="text-logo hover:text-steel"
            >
              ubcmusa.vpstudentresource@gmail.com
            </a>
            .
          </p>
          <div className="mt-6">
            <TownHallForm />
          </div>
        </section>
      </article>
    </PageStub>
  );
}
