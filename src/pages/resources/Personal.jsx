import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";

export default function Personal() {
  return (
    <PageStub
      eyebrow="Resources"
      title="Personal"
      description="Student Wellness & Community Support"
    >
      <article className="space-y-14">
        <p className="text-base leading-relaxed text-gray-700">
          Elite musical training demands exceptional physical and mental stamina.
          MUSA is committed to ensuring you never have to navigate the high-pressure
          conservatory environment alone. Use these community-led health networks and
          resources to stay healthy and balanced.
        </p>

        {/* 1 */}
        <section>
          <SectionEyebrow center>Peer-to-Peer Support Network</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Conservatory life brings unique pressures, from performance anxiety to
            social isolation in the practice rooms. Our peer network provides a
            confidential space to talk through the unique hurdles of a music degree
            with someone who understands it firsthand.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            <span className="font-semibold text-steel">Community Mentorship:</span>{" "}
            This program pairs students across cohorts—including Doctorate, Masters,
            and Undergraduate levels—to offer personal guidance, share coping
            strategies for stage fright, and build a stronger safety net within our
            school.
          </p>
        </section>

        {/* 2 */}
        <section>
          <SectionEyebrow center>Mental Health &amp; Wellness Events</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            MUSA actively works to transform a competitive atmosphere into a
            collaborative, supportive family through intentional wellness programming
            throughout the academic year.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            <span className="font-semibold text-steel">Wellness Initiatives:</span>{" "}
            Join us for our marquee Wellness Weeks, featuring dedicated stress-relief
            zones in the student lounge, mental health panel discussions, and
            community social spaces designed to give you a much-needed break during
            midterm and jury season.
          </p>
        </section>

        {/* 3 */}
        <section>
          <SectionEyebrow center>UBC Counselling Services</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            For professional, confidential mental health care and immediate medical
            resources, MUSA provides a direct and seamless gateway to central
            university networks.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            <span className="font-semibold text-steel">Campus Connections:</span>{" "}
            Access quick links, location details, and intake information for UBC
            Counselling Services, drop-in health sessions, and 24/7 provincial support
            lines like Here2Talk.
          </p>
        </section>

        {/* 4 */}
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
        </section>
      </article>
    </PageStub>
  );
}
