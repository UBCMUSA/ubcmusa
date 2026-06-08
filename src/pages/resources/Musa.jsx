import { Link } from "react-router-dom";
import PageStub from "../../components/PageStub.jsx";

export default function Musa() {
  return (
    <PageStub
      eyebrow="Resources"
      title="MUSA"
      description="MUSA-specific resources for undergraduate music students — services, programs, and supports run by your student association."
    >
      <div className="flex flex-wrap gap-3">
        <Link
          to="/about/meeting-agendas"
          className="inline-flex items-center gap-2 rounded-lg border border-steel/40 px-5 py-3 text-sm font-semibold text-steel transition hover:border-steel hover:bg-steel/5"
        >
          Meeting Agendas →
        </Link>
        <Link
          to="/about/meeting-minutes"
          className="inline-flex items-center gap-2 rounded-lg border border-steel/40 px-5 py-3 text-sm font-semibold text-steel transition hover:border-steel hover:bg-steel/5"
        >
          Meeting Minutes →
        </Link>
      </div>
    </PageStub>
  );
}
