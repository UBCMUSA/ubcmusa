import { Link } from "react-router-dom";
import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";

function EventNote() {
  return (
    <p className="mt-3 text-sm italic text-gray-500">
      These initiatives will be updated under the{" "}
      <Link to="/events" className="text-logo hover:text-steel">
        Events
      </Link>{" "}
      tab and posted on MUSA social media pages.
    </p>
  );
}

export default function Professional() {
  return (
    <PageStub
      eyebrow="Resources"
      title="Professional"
      description="Career Readiness & Performance Hub"
    >
      <article className="space-y-14">
        <p className="text-base leading-relaxed text-gray-700">
          MUSA bridges the gap between your academic instruction and the professional
          creative economy. Use these resources to build your public brand, fund your
          projects, and prepare to lead Vancouver's cultural landscape.
        </p>

        <section>
          <SectionEyebrow center>Recital Raffles &amp; Audience Building</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Your degree recitals are the culmination of years of hard work, but
            drawing an audience and building buzz can be challenging for a busy
            student. MUSA provides an interactive promotion system to elevate your
            performance milestones.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            <span className="font-semibold text-steel">Concert Incentives:</span> MUSA
            hosts promotional Recital Raffles for student performances, offering prize
            incentives to attendees to drive high turnout, foster a vibrant concert
            culture, and celebrate our peers' artistic achievements.
          </p>
          <EventNote />
        </section>

        <section>
          <SectionEyebrow center>Professional Workshops with Faculty &amp; Staff</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Succeeding as a professional artist or cultural leader requires practical
            business skills that traditional performance curricula often skip.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            <span className="font-semibold text-steel">Industry Seminars:</span> We
            host regular career readiness workshops featuring expert faculty and staff
            and industry professional panel discussions. Learn real-world
            fundamentals, including freelance tax strategies, private teaching studio
            management, audition preparation, and arts grant writing.
          </p>
          <EventNote />
        </section>

        <section>
          <SectionEyebrow center>Career Infrastructure &amp; Creative Development</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Building a compelling public profile is critical to launching a successful
            career beyond graduation. MUSA equips you with the fundamental materials
            required to stand out.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            <span className="font-semibold text-steel">Professional Identity:</span>{" "}
            Access our ongoing career initiatives, including professional headshot
            booking days, resume and artistic biography editing workshops, and
            cross-faculty networking panels designed to expand your professional
            circle across the university.
          </p>
          <EventNote />
        </section>
      </article>
    </PageStub>
  );
}
