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

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function formatMeetingDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}
