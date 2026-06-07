/**
 * Shared section title used across the site — the "— TITLE —" dashed eyebrow.
 * `center` adds a trailing dash (matching the home page section titles).
 */
export default function SectionEyebrow({ children, center = false, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-3 font-semibold uppercase tracking-[0.24em] text-steel ${
        center ? "text-lg" : "text-xs"
      } ${className}`}
    >
      <span className="h-px w-8 bg-steel" />
      {children}
      {center && <span className="h-px w-8 bg-steel" />}
    </div>
  );
}
