import { Link } from "react-router-dom";

export default function PageStub({ eyebrow, title, description, children, wide = false }) {
  return (
    <>
      <section className="bg-steel text-ivory">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          {eyebrow && (
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-bright">
              <span className="h-px w-8 bg-gold-bright" />
              {eyebrow}
              <span className="h-px w-8 bg-gold-bright" />
            </div>
          )}
          <h1 className="mt-4 font-display text-5xl text-ivory sm:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-3xl text-lg text-ivory/85">{description}</p>
          )}
        </div>
        <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>
      <section className="bg-sheet">
        <div className={`mx-auto ${wide ? "max-w-7xl" : "max-w-4xl"} px-4 py-20 sm:px-6 lg:px-8`}>
          {children ?? (
            <div className="rounded-xl border border-gray-200 bg-white p-10 text-center">
              <p className="text-base text-gray-600">
                Content for this page is being prepared. Check back soon — or get in
                touch if you have a question.
              </p>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-steel px-5 py-3 text-sm font-semibold text-white transition hover:bg-steel-dark"
                >
                  Contact MUSA →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
