import { Link } from "react-router-dom";
import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";
import Lead from "../../components/Lead.jsx";
import ContentImage from "../../components/ContentImage.jsx";

export default function StudentLounge() {
  return (
    <PageStub
      eyebrow="Student Life"
      title="Student Lounge"
      description="The MUSA Student Lounge — your space on the fourth floor of the Music Building."
    >
      <article className="space-y-14">
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-gray-700">
            Welcome to your home away from home within the UBC School of Music.
            Located on the old side of the fourth floor of the Music Building, the
            MUSA Student Lounge is a dedicated space built exclusively for music
            undergraduates to decompress, socialize, study, and refuel between
            demanding rehearsal blocks and practice room sessions.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            Whether you need a corner to analyze a score, a place to heat up your
            lunch, or just a comfortable couch to hang out with fellow musicians, the
            lounge is open to you throughout the academic year.
          </p>
        </div>

        <ContentImage
          src="/images/optimized/lounge.jpg"
          alt="Inside the MUSA Student Lounge"
        />

        <section>
          <SectionEyebrow center>What's Inside: Amenities &amp; Resources</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            We work hard to keep the lounge stocked with the daily essentials you
            need to survive long hours on campus. Inside the space, you will find:
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="Comfortable Seating & Study Spaces">
              Outfitted with cozy couches for relaxing between your schedule and
              dedicated study tables for wrapping up homework assignments.
            </Lead>
            <Lead term="Fully Equipped Kitchenette">
              Includes a shared microwave, refrigerator, and electric kettle to
              prepare your meals and hot drinks throughout the day.
            </Lead>
            <Lead term="Community Utensils & Basics">
              Stocked with plates, cups, and utensils so you never have to worry if
              you forgot your own pack.
            </Lead>
            <Lead term="MUSA Coffee Machine (Coming Soon!)">
              We are actively working on expanding our amenities to provide
              affordable, fresh coffee directly inside the lounge space.
            </Lead>
            <Lead term="The MUSA Bookshelf & Library">
              A community bookshelf featuring a rotating selection of sheet music,
              reference materials, and free books available for students to take,
              browse, or swap.
            </Lead>
            <Lead term="The Community Calendar">
              A physical bulletin board tracking active student life, ensemble
              performance schedules, and key MUSA operational dates.
            </Lead>
          </ul>
        </section>

        <section>
          <SectionEyebrow center>Lounge Traditions &amp; Community Events</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            The MUSA Student Lounge isn't just a rest stop — it is the hub for our
            community's favorite seasonal traditions. Managed in partnership with our
            executive portfolios, the lounge regularly transforms to host inclusive
            student events, including:
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="The MUSA Halloween Social">
              Complete with festive decorations, candy bowls, costume contests, and
              themed stress-relief activities right before midterm season.
            </Lead>
            <Lead term="The MUSA Holiday & Christmas Gathering">
              A cozy end-of-term celebration featuring hot cocoa bars, holiday music,
              gingerbread decorating, and a warm community escape from winter exam
              pressures.
            </Lead>
          </ul>
        </section>

        <section>
          <SectionEyebrow center>Shared Space Expectations: Keep It Clean</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            The lounge is proudly managed by the MUSA{" "}
            <Link to="/about/who-we-are" className="text-logo hover:text-steel">
              Lounge Manager
            </Link>
            , who oversees daily operations, equipment maintenance, and space
            inventory. However, because this room is shared by over 400 undergraduate
            artists, maintaining a welcoming environment is a collective
            responsibility. We ask all students to respect the following simple
            guidelines:
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="Clean Up After Yourself">
              Wash, dry, and return any community utensils or mugs you use, and wipe
              down tables after eating.
            </Lead>
            <Lead term="Label Your Food">
              Keep the fridge usable for everyone by labelling any items you store and
              disposing of leftovers before the weekend.
            </Lead>
            <Lead term="Respect Your Peers">
              Keep noise levels collaborative and mindful so that students using the
              space to study or rest can do so comfortably.
            </Lead>
          </ul>
        </section>

        <section>
          <SectionEyebrow center>Stay Up to Date</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Lounge announcements, facility updates, deep-cleaning schedules, and
            upcoming event notices will be posted routinely right here on this webpage
            and via our official Instagram channel{" "}
            <a
              href="https://instagram.com/ubcmusa"
              target="_blank"
              rel="noreferrer noopener"
              className="text-logo hover:text-steel"
            >
              @ubcmusa
            </a>
            . If you notice an amenity requires maintenance or want to suggest a new
            resource for the room, please drop your notes into the{" "}
            <Link to="/resources/academic" className="text-logo hover:text-steel">
              Online Suggestion Box
            </Link>
            .
          </p>
        </section>
      </article>
    </PageStub>
  );
}
