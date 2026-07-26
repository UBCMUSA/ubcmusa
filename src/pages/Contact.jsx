import PageStub from "../components/PageStub.jsx";
import SectionEyebrow from "../components/SectionEyebrow.jsx";
import { DIRECTORY } from "../data/directory.js";

export default function Contact() {
  return (
    <PageStub
      wide
      eyebrow="Get in Touch"
      title="Contact Us"
      description="Reach the MUSA executive team directly, find our offices, or drop by the student lounge on the fourth floor of the UBC School of Music."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-8">
          <h2 className="font-display text-2xl text-steel">General Inquiries</h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-steel">Email</dt>
              <dd>
                <a href="mailto:admin@ubcmusa.ca" className="text-logo hover:text-steel">
                  admin@ubcmusa.ca
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-steel">Mailing Address</dt>
              <dd className="text-gray-700">
                UBC School of Music<br />
                6361 Memorial Rd, Vancouver, BC V6T 1Z2
              </dd>
            </div>
          </dl>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-8">
          <h2 className="font-display text-2xl text-steel">Visit Us</h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-steel">Office</dt>
              <dd className="text-gray-700">Room E106, Old Auditorium Annex</dd>
            </div>
            <div>
              <dt className="font-semibold text-steel">President's Office</dt>
              <dd className="text-gray-700">Room 209, Old Auditorium</dd>
            </div>
            <div>
              <dt className="font-semibold text-steel">Student Lounge</dt>
              <dd className="text-gray-700">Fourth Floor, UBC School of Music</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-20">
        <div className="text-center">
          <SectionEyebrow center>Directory</SectionEyebrow>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-700">
            Reach any member of the Council or Student Government directly. If
            you are not sure who to contact, email{" "}
            <a href="mailto:admin@ubcmusa.ca" className="text-logo hover:text-steel">
              admin@ubcmusa.ca
            </a>{" "}
            and we will point you to the right person.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {DIRECTORY.map((section) => (
            <div
              key={section.group}
              className="rounded-xl border border-gray-200 bg-white p-8"
            >
              <h2 className="font-display text-2xl text-steel">
                {section.group}
              </h2>
              <dl className="mt-6 divide-y divide-gray-100 text-sm">
                {section.entries.map((entry) => (
                  <div
                    key={entry.role}
                    className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <dt className="font-semibold text-steel">{entry.role}</dt>
                    <dd className="sm:text-right">
                      {entry.email ? (
                        <a
                          href={`mailto:${entry.email}`}
                          className="break-all text-logo hover:text-steel"
                        >
                          {entry.email}
                        </a>
                      ) : (
                        <span className="text-gray-400">To be announced</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </PageStub>
  );
}
