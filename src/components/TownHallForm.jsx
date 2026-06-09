import { useState } from "react";

function Field({ label, name, type = "text", required = false }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-steel">
        {label}
        {required && <span className="text-gray-400"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 outline-none transition focus:border-steel focus:ring-2 focus:ring-steel/20"
      />
    </label>
  );
}

/**
 * Virtual Town Hall submission form. Wired to Netlify Forms (name="town-hall").
 * Submissions appear in the Netlify dashboard; add an email notification there
 * to forward them to ubcmusa.vpstudentresource@gmail.com.
 * (Submitting only works on the deployed Netlify site, not local dev.)
 */
export default function TownHallForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | done | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="rounded-xl border border-gray-200 bg-steel/5 p-8 text-center">
        <h3 className="font-display text-2xl text-steel">Thank you</h3>
        <p className="mt-2 text-gray-700">
          Your submission has been sent to the VP Student Resource. We'll follow up
          by email if a response is needed.
        </p>
      </div>
    );
  }

  return (
    <form
      name="town-hall"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8"
    >
      <input type="hidden" name="form-name" value="town-hall" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Student number" name="studentNumber" />
        <div className="sm:col-span-2">
          <Field label="Area of study / instrument" name="areaOfStudy" />
        </div>
        <div className="sm:col-span-2">
          <label className="block">
            <span className="text-sm font-medium text-steel">
              Concern <span className="text-gray-400">*</span>
            </span>
            <textarea
              name="concern"
              rows={6}
              required
              className="mt-1.5 w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 outline-none transition focus:border-steel focus:ring-2 focus:ring-steel/20"
            />
          </label>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-md bg-steel px-6 py-3 text-sm font-semibold text-white transition hover:bg-steel-dark disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting…" : "Submit"}
        </button>
        {status === "error" && (
          <p className="text-sm text-red-600">
            Something went wrong. Please email{" "}
            <a href="mailto:ubcmusa.vpstudentresource@gmail.com" className="underline">
              ubcmusa.vpstudentresource@gmail.com
            </a>{" "}
            directly.
          </p>
        )}
      </div>
    </form>
  );
}
