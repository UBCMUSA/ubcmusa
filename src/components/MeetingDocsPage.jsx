import PageStub from "./PageStub.jsx";
import { MEETING_DATES, formatMeetingDate } from "../data/governance.js";

function PdfIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-steel" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M14 3v5h5" strokeLinejoin="round" />
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Lists the council meeting PDFs (agendas or minutes) with view links.
 * dir = folder under public/documents; prefix = file name prefix.
 */
export default function MeetingDocsPage({ eyebrow, title, description, dir, prefix }) {
  return (
    <PageStub eyebrow={eyebrow} title={title} description={description}>
      <ul className="space-y-3">
        {MEETING_DATES.map((d) => (
          <li key={d}>
            <a
              href={`/documents/${dir}/${prefix}-${d}.pdf`}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 transition hover:border-steel/40 hover:shadow-md"
            >
              <span className="flex items-center gap-3">
                <PdfIcon />
                <span className="font-medium text-steel">{formatMeetingDate(d)}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-logo transition group-hover:text-steel">
                View PDF
                <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm italic text-gray-500">
        Prior-year records are available on request — contact the VP Administration
        at ubc.musa@gmail.com.
      </p>
    </PageStub>
  );
}
