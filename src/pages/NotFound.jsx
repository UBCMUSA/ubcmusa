import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="bg-sheet">
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="font-display text-7xl text-steel sm:text-8xl">404</div>
        <h1 className="mt-4 font-display text-3xl text-steel sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-700">
          The page you're looking for doesn't exist or may have moved. Let's get you
          back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md bg-steel px-5 py-3 text-sm font-semibold text-white transition hover:bg-steel-dark"
          >
            Back to Home →
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-steel/40 px-5 py-3 text-sm font-semibold text-steel transition hover:border-steel hover:bg-steel/5"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
