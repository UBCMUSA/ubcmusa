import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";
import Lead from "../../components/Lead.jsx";
import ContentImage from "../../components/ContentImage.jsx";

export default function Grads() {
  return (
    <PageStub
      eyebrow="Student Life"
      title="Grads"
      description="Graduating Class Hub — celebrating your milestone."
    >
      <article className="space-y-14">
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-gray-700">
            Congratulations on reaching the final stretch of your degree at the UBC
            School of Music! Graduating from a rigorous music program takes an immense
            amount of solitary discipline, thousands of hours in the practice rooms,
            and remarkable artistic resilience. MUSA is proud to celebrate your
            achievements and help you smoothly navigate your final milestones as an
            undergraduate.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            This page serves as your central hub for all graduating class traditions,
            senior events, studio portraits, and transition resources.
          </p>
        </div>

        <ContentImage
          src="/images/optimized/grad-2.jpg"
          alt="UBC School of Music graduating class"
        />

        <section>
          <SectionEyebrow center>Official Graduation Portraits &amp; Class Composite</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            To preserve the historic legacy of each graduating class, MUSA partners
            with{" "}
            <a
              href="https://www.evangelosphotography.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-logo hover:text-steel"
            >
              Evangelos Photography
            </a>
            , British Columbia's premier graduation photography studio and the
            official partner for UBC composite portraits.
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="The Class Composite">
              Being photographed by Evangelos ensures you are included in the official
              MUSA Graduating Class Composite, which will be permanently framed and
              displayed within the School of Music facilities.
            </Lead>
            <Lead term="What's Included">
              Your portrait session includes formal cap-and-gown photography,
              individual instrument poses, and a professional headshot session that
              you can use for your personal performance websites, casting portfolios,
              and studio biographies.
            </Lead>
            <Lead term="Booking Details">
              Appointment blocks specifically reserved for School of Music students
              will open during the winter term. Links to secure your spot at
              Evangelos' studio will be published here as soon as bookings go live.
            </Lead>
          </ul>
          <p className="mt-4 text-sm italic text-gray-500">
            More details will be published during the academic year. Stay tuned.
          </p>
          <ContentImage
            className="mt-6"
            src="/images/optimized/grad-1.jpg"
            alt="UBC School of Music graduation"
          />
        </section>

        <section>
          <SectionEyebrow center>Year-End Graduating Class Events</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            MUSA hosts a series of signature end-of-year traditions to honour our
            graduating seniors, celebrate shared memories, and send you off into the
            professional arts world with style.
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="The MUSA Grad Send-Off">
              A dedicated, intimate social gathering hosted by the MUSA Council
              specifically for the graduating cohort. This event features catered
              refreshments, student-led reflection speeches, the presentation of
              individual cohort awards, and a final toast to your years in the Music
              Building and Old Auditorium.
            </Lead>
            <Lead term="The Spring Formal Gala">
              The marquee social highlight of the academic year. While open to the
              entire student body, the formal gala prominently features a special
              recognition ceremony for our graduating seniors, highlighting their
              dedication to the school over their university journeys.
            </Lead>
          </ul>
        </section>

        <section>
          <SectionEyebrow center>UBC Convocation &amp; Ceremony Details</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            The official university graduation ceremony is a monumental occasion where
            you walk across the stage at the Chan Centre for the Performing Arts to
            formally receive your degree.
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="Ceremony Schedule">
              The exact dates and scheduling blocks for the School of Music
              convocation ceremonies are currently To Be Determined (TBD) by the
              university administration. MUSA is tracking official timelines closely
              and will update this section immediately once the final calendar is
              confirmed.
            </Lead>
            <Lead term="Regalia & Ticketing">
              Guidelines on renting your academic gowns, securing guest tickets for the
              Chan Centre, and crossing-the-stage protocol will be updated here as
              graduation season approaches.
            </Lead>
          </ul>
        </section>

        <section>
          <SectionEyebrow center>Transitioning to an Active MUSA Alumnus</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Graduation isn't the end of your relationship with MUSA — it's a
            transition into a lifelong network. Our alumni are the pride of the UBC
            School of Music, leading professional symphony orchestras, operatic
            stages, academic institutions, and cultural businesses worldwide. Staying
            involved as an active alumnus keeps our community strong and directly
            impacts the next generation of music students:
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="The MUSA Alumni Network">
              Join our regional tracking database to share your professional career
              achievements and stay connected with fellow graduates.
            </Lead>
            <Lead term="Mentorship Opportunities">
              Offer your real-world insights to current undergraduate students by
              participating in career readiness panels, financial literacy workshops,
              or professional networking mixers arranged by the VP External.
            </Lead>
            <Lead term="Community Support">
              Return as a guest speaker or professional resource for our student body,
              helping bridge the gap between the classroom and Vancouver's cultural
              landscape.
            </Lead>
          </ul>
          <p className="mt-4 text-sm italic text-gray-500">
            Please contact our MUSA Vice-President External at{" "}
            <a href="mailto:musa.vpexternal@gmail.com" className="text-logo hover:text-steel">
              musa.vpexternal@gmail.com
            </a>{" "}
            or the MUSA President at{" "}
            <a href="mailto:ubcmusa.president@gmail.com" className="text-logo hover:text-steel">
              ubcmusa.president@gmail.com
            </a>
            . We look forward to staying in touch and building on the extensive
            community surrounding the UBC School of Music.
          </p>
        </section>

        <section>
          <SectionEyebrow center>Stay Up to Date</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Specific deadlines for portrait bookings, event ticketing windows, and
            finalized university convocation schedules will be updated routinely right
            here on this webpage and shared across our official social media channels
            via Instagram{" "}
            <a
              href="https://instagram.com/ubcmusa"
              target="_blank"
              rel="noreferrer noopener"
              className="text-logo hover:text-steel"
            >
              @ubcmusa
            </a>
            . Check back frequently as the winter term progresses to ensure you don't
            miss a single graduation milestone!
          </p>
        </section>
      </article>
    </PageStub>
  );
}
