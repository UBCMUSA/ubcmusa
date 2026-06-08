import { Link } from "react-router-dom";
import PageStub from "../../components/PageStub.jsx";
import { EVENTS } from "../../data/events.js";

export default function EventDetails() {
  return (
    <PageStub
      eyebrow="Events"
      title="Event Details"
      description="Featured upcoming events with full descriptions, locations, and times. (These are placeholder events.)"
    >
      <div className="space-y-10">
        {EVENTS.map((ev) => (
          <article
            key={ev.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-steel/40 hover:shadow-2xl sm:flex-row"
          >
            <div className="relative shrink-0 overflow-hidden bg-steel/5 sm:w-2/5">
              <img
                src={ev.image}
                alt={ev.title}
                className="h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 sm:h-full"
              />
            </div>
            <div className="p-7 sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">
                {ev.date} · {ev.time} · {ev.location}
              </div>
              <h2 className="mt-2 font-display text-2xl text-steel sm:text-3xl">
                {ev.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                {ev.details}
              </p>
              <div className="mt-6">
                <Link
                  to="/events/calendar"
                  className="inline-flex items-center gap-2 rounded-md bg-steel px-5 py-3 text-sm font-semibold text-white transition hover:bg-steel-dark"
                >
                  View Calendar →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageStub>
  );
}
