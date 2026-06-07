import { useState } from "react";
import PageStub from "../../components/PageStub.jsx";
import { EVENTS } from "../../data/events.js";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Calendar() {
  // Default to the month of the first event.
  const first = EVENTS[0] ?? { year: new Date().getFullYear(), month: new Date().getMonth() };
  const [view, setView] = useState({ year: first.year, month: first.month });

  const step = (delta) => {
    setView((v) => {
      const m = v.month + delta;
      return {
        year: v.year + Math.floor(m / 12),
        month: ((m % 12) + 12) % 12,
      };
    });
  };

  const firstWeekday = new Date(view.year, view.month, 1).getDay();
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();

  // Build a 6-row grid (42 cells) so the calendar height stays stable.
  const cells = [];
  for (let i = 0; i < 42; i++) {
    const dayNum = i - firstWeekday + 1;
    cells.push(dayNum >= 1 && dayNum <= daysInMonth ? dayNum : null);
  }

  const eventsFor = (day) =>
    EVENTS.filter(
      (e) => e.year === view.year && e.month === view.month && e.day === day,
    );

  return (
    <PageStub
      eyebrow="Events"
      title="Calendar"
      description="A live calendar of everything MUSA — socials, wellness programming, workshops, and recitals."
    >
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
          <h2 className="font-display text-2xl text-steel">
            {MONTH_NAMES[view.month]} {view.year}
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous month"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-steel/30 text-steel transition hover:border-steel hover:bg-steel hover:text-white active:scale-90"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next month"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-steel/30 text-steel transition hover:border-steel hover:bg-steel hover:text-white active:scale-90"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Weekday labels */}
        <div className="grid grid-cols-7 border-b border-gray-200">
          {WEEKDAYS.map((d) => (
            <div
              key={d}
              className="px-2 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-500"
            >
              <span className="hidden sm:inline">{d}</span>
              <span className="sm:hidden">{d[0]}</span>
            </div>
          ))}
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7">
          {cells.map((day, i) => {
            const dayEvents = day ? eventsFor(day) : [];
            return (
              <div
                key={i}
                className={`min-h-[92px] border-b border-r border-gray-100 p-2 sm:min-h-[116px] ${
                  i % 7 === 6 ? "border-r-0" : ""
                } ${day ? "" : "bg-gray-50/50"}`}
              >
                {day && (
                  <>
                    <div className="text-right text-xs font-medium text-gray-400">
                      {day}
                    </div>
                    <div className="mt-1 space-y-1">
                      {dayEvents.map((e) => (
                        <div
                          key={e.title}
                          title={`${e.title} · ${e.time}`}
                          className="truncate rounded-md bg-steel px-2 py-1 text-[11px] font-semibold text-white"
                        >
                          {e.title}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend / list under the calendar */}
      <ul className="mt-8 space-y-3">
        {EVENTS.map((e) => (
          <li
            key={e.title}
            className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4"
          >
            <div className="flex w-14 flex-col items-center rounded-lg bg-steel py-2 text-white">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/75">
                {e.date.split(" ")[0]}
              </span>
              <span className="font-display text-xl">{e.date.split(" ")[1]}</span>
            </div>
            <div>
              <h3 className="font-display text-lg text-steel">{e.title}</h3>
              <p className="text-sm text-gray-600">
                {e.time} · {e.location}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </PageStub>
  );
}
