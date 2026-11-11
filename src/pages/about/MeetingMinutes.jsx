import MeetingDocsPage from "../../components/MeetingDocsPage.jsx";
import { MINUTES_DATES_2026_2027 } from "../../data/governance.js";

export default function MeetingMinutes() {
  return (
    <MeetingDocsPage
      eyebrow="How We Run"
      title="Meeting Minutes"
      description="Complete, unedited transcripts of Council debates, executive updates, and voting logs, published following formal approval."
      noun="Minutes"
      dir="minutes"
      prefix="minutes"
      dates2026_2027={MINUTES_DATES_2026_2027}
    />
  );
}
