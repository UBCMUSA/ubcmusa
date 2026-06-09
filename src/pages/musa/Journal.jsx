import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";
import Lead from "../../components/Lead.jsx";

export default function Journal() {
  return (
    <PageStub
      eyebrow="Student Life"
      title="UBC Music Journal"
      description="Launching the UBC Music Journal — a call for founders & editors."
    >
      <article className="space-y-14">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-steel/10 px-4 py-1.5 text-sm font-semibold text-steel">
            📢 Status: Stay Tuned — launching for the 2026–2027 academic year
          </div>
          <p className="text-base leading-relaxed text-gray-700">
            MUSA is incredibly excited to announce the upcoming development of our
            school's first-ever music publication. While our community thrives on the
            public performance stage, we also produce exceptional, high-calibre
            scholarly research in the classroom every single day. The UBC Music
            Journal is being established to bridge this gap, creating a professional,
            peer-reviewed platform dedicated to showcasing outstanding undergraduate
            research in musicology, music theory, composition, music education, and
            ethnomusicology.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            Our vision is to model this publication after prestigious Canadian student
            forums — such as Western University's Nota Bene: Canadian Undergraduate
            Journal of Musicology — as well as highly successful, long-standing student
            journals right here at UBC, like UBC's own Cinephile.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            By establishing this journal, we aim to provide undergraduate scholars
            with authentic, hands-on experience with the academic peer-review and
            editorial publishing pipeline, allowing them to publish their work and
            share it with the global music research community before they graduate.
          </p>
        </div>

        <section>
          <SectionEyebrow center>Join the Founding Editorial Board</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            Because this is a brand-new initiative, we are building the framework from
            the ground up — and we need your help to bring it to life. We are issuing
            an open call to all passionate, dedicated UBC undergraduate students who
            want to build a lasting legacy at the School of Music. Whether you are a
            music major, a literature enthusiast, an aspiring academic, or a digital
            designer, there is a place for you on our founding team. We are actively
            seeking students for the following inaugural roles:
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed">
            <Lead term="Editors-in-Chief">
              Lead the administrative, strategic, and structural operations of the
              journal, manage the active editorial board, and oversee the final
              publishing roadmap.
            </Lead>
            <Lead term="Associate & Divisional Editors">
              Manage specific research categories (e.g., historical musicology, music
              theory, composition analysis) and coordinate initial manuscript
              screenings.
            </Lead>
            <Lead term="Peer Reviewers">
              Read, critique, and provide valuable academic feedback on student
              submissions to ensure analytical depth, clarity, and scholarly
              integrity.
            </Lead>
            <Lead term="Creative & Layout Directors">
              Design the visual branding of the journal, manage the digital
              typography, and format the final online/print editions to meet
              professional publication standards.
            </Lead>
          </ul>
        </section>

        <section>
          <SectionEyebrow center>Why Join Us?</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            This is a rare opportunity to help shape a new academic institution on
            campus from day one. You will gain invaluable, portfolio-building
            experience in project management, academic editing, collaborative
            leadership, and critical analysis — skills that are highly sought after by
            graduate schools, research institutions, and professional arts
            organizations.
          </p>
        </section>

        <section>
          <SectionEyebrow center>Express Your Interest</SectionEyebrow>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            If you want to be a part of the team that launches the first volume of the
            UBC Music Journal, we want to hear from you. You don't need prior
            publishing experience — just a strong work ethic, a commitment to music
            scholarship, and a desire to build something impactful for our community.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            To register your interest or ask questions about the upcoming timeline,
            please reach out to the MUSA Executive Office directly at{" "}
            <a href="mailto:ubc.musa@gmail.com" className="text-logo hover:text-steel">
              ubc.musa@gmail.com
            </a>
            .
          </p>
        </section>
      </article>
    </PageStub>
  );
}
