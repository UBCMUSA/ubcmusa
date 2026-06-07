import PageStub from "../components/PageStub.jsx";

export default function Contact() {
  return (
    <PageStub
      eyebrow="Get in Touch"
      title="Contact Us"
      description="Reach the MUSA executive team directly, find our offices, or drop by the student lounge on the fourth floor of the UBC School of Music."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-steel/10 bg-white p-8">
          <h2 className="font-display text-2xl text-steel">General Inquiries</h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-steel">Email</dt>
              <dd>
                <a href="mailto:ubc.musa@gmail.com" className="text-logo hover:text-steel">
                  ubc.musa@gmail.com
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
        <div className="rounded-xl border border-steel/10 bg-white p-8">
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
    </PageStub>
  );
}
