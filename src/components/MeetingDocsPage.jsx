import PageStub from "./PageStub.jsx";
import SectionEyebrow from "./SectionEyebrow.jsx";
import DownloadButton from "./DownloadButton.jsx";
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
          <ul className="mt-6 space-y-4">
            {MEETING_DATES.map((d) => (
              <li
                key={d}
                className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h2 className="font-display text-2xl text-steel">
                    {noun} — {formatShortDate(d)}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {prefix}-{d}.pdf
                  </p>
                </div>
                <DownloadButton
                  label={`Download ${noun} (${formatShortDate(d)})`}
                  href={`/documents/${dir}/${prefix}-${d}.pdf`}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageStub>
  );
}
