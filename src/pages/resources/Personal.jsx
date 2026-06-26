import { Link } from "react-router-dom";
import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";
import Lead from "../../components/Lead.jsx";
import ContentImage from "../../components/ContentImage.jsx";

function SubHead({ children }) {
  return (
    <h3 className="mt-7 text-sm font-semibold uppercase tracking-wider text-steel">
      {children}
    </h3>
  );
}

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
            Music degree life brings unique pressures, from performance anxiety to
            social isolation in the practice rooms. Our peer network provides a
            confidential space to talk through the unique hurdles of a music degree
            with someone who understands it firsthand.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            <span className="font-semibold text-steel">Community Mentorship:</span>{" "}
            This program pairs students across cohorts, including Doctorate, Masters,
            and Undergraduate levels, to offer personal guidance, share coping
            strategies for stage fright, and build a stronger safety net within our
            school.
          </p>
          <p className="mt-3 text-sm italic text-gray-500">
            Please contact the MUSA VP Student Resource at{" "}
            <a
              href="mailto:ubcmusa.vpstudentresource@gmail.com"
              className="text-logo hover:text-steel"
            >
              ubcmusa.vpstudentresource@gmail.com
            </a>{" "}
            for all inquiries.
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
            Join us for our Wellness Weeks, featuring dedicated stress-relief zones in
            the student lounge, mental health panel discussions, and community social
            spaces designed to give you a much-needed break during midterm and jury
            seasons.
          </p>
          <ContentImage
            className="mt-6 mx-auto max-w-sm"
            src="/images/optimized/wellness-week.jpg"
            alt="MUSA Wellness Week initiatives"
          />
          <p className="mt-6 text-sm italic text-gray-500">
            Find details regarding these events under the{" "}
            <Link to="/events" className="text-logo hover:text-steel">
              Events
            </Link>{" "}
            tab and posted on MUSA social media pages.
          </p>
        </section>

        {/* 3 */}
        <section>
          <SectionEyebrow center>Professional, Crisis &amp; Community Support Networks</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Your mental health, safety, and physical well-being are paramount. If you
            are experiencing an immediate crisis, require professional mental health
            care, or need to see a medical doctor, please use the verified campus,
            provincial, and national networks below.
          </p>

          <SubHead>Immediate Emergency &amp; Crisis Support (24/7)</SubHead>
          <p className="mt-2 text-base leading-relaxed text-gray-700">
            If you or someone you know is in immediate danger, facing a severe medical
            emergency, or experiencing an acute mental health crisis, do not wait to
            reach out.
          </p>
          <ul className="mt-3 space-y-3 text-base leading-relaxed">
            <Lead term="Emergency Services (Police, Ambulance, Fire)">
              Dial 911 immediately for any urgent or life-threatening crisis.
            </Lead>
            <Lead term="National Suicide Crisis Helpline">
              Call or text 988 — a free, confidential, Canada-wide 24/7 suicide
              prevention and mental health crisis lifeline.
            </Lead>
            <Lead term="BC Mental Health Support Line">
              Dial 310-6789 (no area code needed) for free, confidential emotional
              support, information, and resources specific to British Columbia, 24
              hours a day.
            </Lead>
            <Lead term="BC Suicide Line (Crisis Centre BC)">
              Call 1-800-784-2433 (1-800-SUICIDE) for immediate, confidential support
              from a trained crisis intervener anywhere in BC.
            </Lead>
          </ul>

          <SubHead>UBC Campus Health &amp; Medical Services</SubHead>
          <p className="mt-2 text-base leading-relaxed text-gray-700">
            UBC provides professional medical care, family doctors, and psychiatric
            care right here on campus for undergraduate and graduate students.
          </p>
          <ul className="mt-3 space-y-3 text-base leading-relaxed">
            <Lead term="UBC Counselling Services">
              Located on Level 3 of the Gateway Building (5955 University Boulevard).
              Call 604-822-3811 to book a same-day Wellness Advising appointment to be
              matched with brief, intentional counselling, group therapy, or
              psychiatric referrals.
            </Lead>
            <Lead term="UBC Student Health Service">
              Located at Orchard Commons (6363 Agronomy Road). Call 604-822-7011 to
              book an appointment with a family doctor, nurse practitioner, or
              psychiatrist for prescriptions, physical exams, or ongoing medical
              treatment.
            </Lead>
          </ul>

          <SubHead>BC Student &amp; Non-Emergency Health Resources</SubHead>
          <p className="mt-2 text-base leading-relaxed text-gray-700">
            Access specialized, free medical advice and student-focused single-session
            tele-counselling at any time of day or night.
          </p>
          <ul className="mt-3 space-y-3 text-base leading-relaxed">
            <Lead term="Here2Talk (BC Post-Secondary Support)">
              Call toll-free at 1-877-857-3397, or dial 604-642-5212 from outside
              Canada. This service connects BC post-secondary students with free,
              confidential, single-session professional counselling and community
              referrals 24/7 via phone, web chat, or mobile app.
            </Lead>
            <Lead term="HealthLink BC (Non-Emergency Medical Advice)">
              Dial 811 to speak with a registered nurse, pharmacist, or dietitian. Use
              this service for trusted health information, symptom assessment, or
              assistance navigating the provincial healthcare system to find a local
              family doctor.
            </Lead>
          </ul>
        </section>
      </article>
    </PageStub>
  );
}
