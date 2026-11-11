import MeetingDocsPage from "../../components/MeetingDocsPage.jsx";
import { AGENDA_DATES_2026_2027 } from "../../data/governance.js";

export default function MeetingAgendas() {
  return (
    <MeetingDocsPage
      eyebrow="How We Run"
      title="Meeting Agendas"
      description="Agendas are published 48 hours prior to every bi-weekly MUSA Council meeting,
              allowing undergraduate members to review upcoming legislative topics."
      noun="Agendas"
      dir="agendas"
      prefix="agenda"
      dates2026_2027={AGENDA_DATES_2026_2027}
    />
  );
}
