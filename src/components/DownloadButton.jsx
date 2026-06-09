function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Download button. With `href` it's an active link; without, it's a muted
 * "not yet available" placeholder showing the status note.
 */
export default function DownloadButton({ label, note, href }) {
  if (href) {
    return (
      <a
        href={href}
        download
        className="group inline-flex items-center gap-3 rounded-lg border border-steel/30 bg-white px-5 py-3 text-sm font-semibold text-steel transition hover:border-steel hover:bg-steel hover:text-white"
      >
        <DownloadIcon />
        <span className="flex flex-col">
          <span>{label}</span>
          {note && (
            <span className="text-xs font-normal text-gray-500 group-hover:text-white/80">
              {note}
            </span>
          )}
        </span>
      </a>
    );
  }
  return (
    <div className="inline-flex items-center gap-3 rounded-lg border border-dashed border-gray-300 bg-gray-50 px-5 py-3 text-sm font-medium text-gray-400">
      <DownloadIcon />
      <span className="flex flex-col">
        <span>{label}</span>
        {note && <span className="text-xs italic">{note}</span>}
      </span>
    </div>
  );
}
