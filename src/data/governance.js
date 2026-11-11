// Council meeting documents (PDFs in public/documents/). Newest first.
export const MEETING_DATES = [
  "2025-11-25",
  "2025-11-18",
  "2025-11-04",
  "2025-10-28",
  "2025-10-21",
  "2025-10-14",
  "2025-10-07",
  "2025-09-30",
  "2025-09-23",
  "2025-09-16",
  "2025-09-09",
  "2025-08-22",
  "2025-05-05",
];

export const AGENDA_DATES_2026_2027 = [
  "2026-10-28",
  "2026-10-21",
  "2026-10-01",
];

export const MINUTES_DATES_2026_2027 = [
  "2026-10-21",
  "2026-10-01",
];

// "2025-11-25" -> "11/25/25"
export function formatShortDate(iso) {
  const [y, m, d] = iso.split("-");
  return `${m}/${d}/${y.slice(2)}`;
}
