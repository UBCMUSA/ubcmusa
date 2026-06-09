import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";
import Lead from "../../components/Lead.jsx";

export default function Downbeat() {
  return (
    <PageStub
      eyebrow="Student Life"
      title="The Downbeat"
      description="Your biweekly pulse on the UBC School of Music."
    >
      <article className="space-y-14">
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-gray-700">
            Welcome to the digital archive of The Downbeat, MUSA's official biweekly
            student newsletter. Serving as the central informational pipeline for our
            undergraduate community, The Downbeat consolidates essential campus news,
            institutional announcements, and student resources into a single,
            accessible publication designed to keep you informed and connected across
            rehearsal halls and classrooms.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            Whether you are looking for casual social events, tracking high-stakes
            academic deadlines, or seeking out paid professional work within the
            Vancouver arts scene, The Downbeat is your definitive guide to life at the
            School of Music.
          </p>
        </div>

        <section>
          <SectionEyebrow center>What You Will Find Inside Each Issue</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Every two weeks, The Downbeat brings a comprehensive breakdown of active
            student initiatives directly to your inbox and onto our student lounge
            boards:
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="Upcoming Events & Key Deadlines">
              Stay on top of your social and academic calendar. Find dates and
              locations for our Trivia Nights, Koerner's Pub Socials, Annual General
              Meetings (AGM), cohort-specific mixers, and stress-relief initiatives
              like our popular Rabbitats therapy bunny visits in the lobby.
            </Lead>
            <Lead term="Active Institutional Advocacy">
              Track MUSA's political and structural efforts to protect your music
              education. Get real-time reports on our Chan Centre Access campaign,
              sign active petitions, submit anonymous statements, and find schedules
              for organized community musical protests.
            </Lead>
            <Lead term="Paid Gigs & Professional Opportunities">
              Discover community-sourced employment opportunities curated exclusively
              for music students. Browse active listings for paid wedding bookings for
              string ensembles, student ambassador roles for university recruitment
              events, and free professional studio-teaching mentorship opportunities
              with industry experts.
            </Lead>
            <Lead term="Community Life & Event Recaps">
              Celebrate the highlights of our vibrant student culture. Enjoy event
              photo galleries and winner announcements from previous trivia sessions,
              community craft days (including origami and bracelet making), cohort
              social recaps, and campus Spirit Weeks.
            </Lead>
            <Lead term="Academic Workshops & Resources">
              Elevate your skills outside the traditional lecture setting. Find
              schedules for faculty-led professional workshops covering critical areas
              like rehearsal etiquette, performance anxiety management, and guided
              library tours or scavenger hunts with our music librarian.
            </Lead>
            <Lead term="Campus Perks, Surveys & Governance">
              Stay engaged with the democratic architecture of your society. Track
              active student election nominees and results, review official graduation
              photo and composite timelines, access group discounts for professional
              events like Vancouver Whitecaps matches, complete student experience
              surveys to win prizes, and read about internal MUSA brand updates.
            </Lead>
          </ul>
        </section>

        <section>
          <SectionEyebrow center>Find All the Editions Here</SectionEyebrow>
          <p className="mt-5 text-sm italic text-gray-500">
            Past editions of The Downbeat will be archived here as they are published
            — listed as "The Downbeat [mm/dd/yyyy]."
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            If you are looking for any that are not here, please contact our MUSA VP
            Administration at{" "}
            <a href="mailto:ubc.musa@gmail.com" className="text-logo hover:text-steel">
              ubc.musa@gmail.com
            </a>{" "}
            to find past copies.
          </p>
        </section>

        <section>
          <SectionEyebrow center>Have Something to Feature?</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            The Downbeat is built for the students, by the students. If you are a UBC
            musician, part of a student chamber ensemble, or representing a campus
            group and want to share an announcement with the community, we want to
            hear from you! Students can submit content to be featured in upcoming
            biweekly issues, including:
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-gray-700 marker:text-steel/50">
            <li>Upcoming degree recital promotions or concert advertisements.</li>
            <li>Paid gig opportunities or collaboration requests for local ensembles.</li>
            <li>Academic surveys, campus research initiatives, or faculty nominations.</li>
            <li>General community announcements or student life initiatives.</li>
          </ul>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            <span className="font-semibold text-steel">How to Submit:</span> To request
            an addition to the next issue of the newsletter, please contact the MUSA
            Vice-President Internal directly via email at{" "}
            <a href="mailto:ubcmusa.vpinternal@gmail.com" className="text-logo hover:text-steel">
              ubcmusa.vpinternal@gmail.com
            </a>
            . Ensure you submit your text copy, relevant web links, or promotional
            graphics at least 48 hours prior to our biweekly printing block to
            guarantee inclusion in the upcoming release.
          </p>
        </section>
      </article>
    </PageStub>
  );
}
