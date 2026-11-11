import PageStub from "./PageStub.jsx";
import SectionEyebrow from "./SectionEyebrow.jsx";
import DownloadButton from "./DownloadButton.jsx";
import {
  MEETING_DATES,
  formatShortDate,
} from "../data/governance.js";

/**
 * Lists the council meeting PDFs (agendas or minutes) by academic year.
 * noun = "Agendas" | "Minutes"; dir = folder under public/documents;
 * prefix = file name prefix.
 */
export default function MeetingDocsPage({
  eyebrow,
  title,
  description,
  noun,
  dir,
  prefix,
  dates2026_2027 = [],
}) {
  return (
    <PageStub eyebrow={eyebrow} title={title} description={description}>
      <div className="space-y-14">
        <section>
          <SectionEyebrow center>{noun} 2026/2027</SectionEyebrow>
          {dates2026_2027.length > 0 ? (
            <ul className="mt-6 space-y-4">
              {dates2026_2027.map((d) => (
                <MeetingDocument
                  key={d}
                  date={d}
                  noun={noun}
                  prefix={prefix}
                  dir={dir}
                />
              ))}
            </ul>
          ) : (
            <p className="mt-5 text-sm italic text-gray-500">
              No {noun.toLowerCase()} have been posted for the 2026/2027 term yet —
              check back as Council meetings begin.
            </p>
          )}
        </section>

        <section>
          <SectionEyebrow center>{noun} 2025/2026</SectionEyebrow>
          <ul className="mt-6 space-y-4">
            {MEETING_DATES.map((d) => (
              <MeetingDocument
                key={d}
                date={d}
                noun={noun}
                prefix={prefix}
                dir={dir}
              />
            ))}
          </ul>
        </section>
      </div>
    </PageStub>
  );
}

function MeetingDocument({ date, noun, prefix, dir }) {
  return (
    <li className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="font-display text-2xl text-steel">
          {noun} — {formatShortDate(date)}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          {prefix}-{date}.pdf
        </p>
      </div>
      <DownloadButton
        label={`Download ${noun} (${formatShortDate(date)})`}
        href={`/documents/${dir}/${prefix}-${date}.pdf`}
      />
    </li>
  );
}
