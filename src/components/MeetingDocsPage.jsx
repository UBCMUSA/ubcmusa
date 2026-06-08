import PageStub from "./PageStub.jsx";
import SectionEyebrow from "./SectionEyebrow.jsx";
import { MEETING_DATES, formatShortDate } from "../data/governance.js";

/**
 * Lists the council meeting PDFs (agendas or minutes) by academic year.
 * noun = "Agendas" | "Minutes"; dir = folder under public/documents;
 * prefix = file name prefix.
 */
export default function MeetingDocsPage({ eyebrow, title, description, noun, dir, prefix }) {
  return (
    <PageStub eyebrow={eyebrow} title={title} description={description}>
      <div className="space-y-14">
        <section>
          <SectionEyebrow center>{noun} 2026/2027</SectionEyebrow>
          <p className="mt-5 text-sm italic text-gray-500">
            No {noun.toLowerCase()} have been posted for the 2026/2027 term yet —
            check back as Council meetings begin.
          </p>
        </section>

        <section>
          <SectionEyebrow center>{noun} 2025/2026</SectionEyebrow>
          <ul className="mt-5 list-disc space-y-2 pl-6 text-base marker:text-steel/50">
            {MEETING_DATES.map((d) => (
              <li key={d}>
                <a
                  href={`/documents/${dir}/${prefix}-${d}.pdf`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-medium text-logo underline-offset-2 hover:text-steel hover:underline"
                >
                  [{formatShortDate(d)}]
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageStub>
  );
}
