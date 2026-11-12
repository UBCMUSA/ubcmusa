import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";
import DownloadButton from "../../components/DownloadButton.jsx";

const BUDGETS = [
//   {
//     year: "2025–2026",
//     filename: "MUSA Budget 2025-2026.xlsx",
//     href: "/documents/budgets/MUSA%20Budget%202025-2026.xlsx",
//   },
  {
    year: "2023–2024",
    filename: "MUSA Budget 2023-2024.xlsx",
    href: "/documents/budgets/MUSA%20Budget%202023-2024.xlsx",
  },
];

export default function BudgetArchive() {
  return (
    <PageStub
      eyebrow="How We Run"
      title="Budget Archive"
      description="Download MUSA's published annual budget documents. Files are provided in Excel format."
    >
      <div className="space-y-14">
        <section>
          <SectionEyebrow center>Available Budgets</SectionEyebrow>
          <ul className="mt-6 space-y-4">
            {BUDGETS.map((budget) => (
              <li
                key={budget.year}
                className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h2 className="font-display text-2xl text-steel">
                    {budget.year} Budget
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">{budget.filename}</p>
                </div>
                <DownloadButton
                  label={`Download ${budget.year} Budget (XLSX)`}
                  href={budget.href}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageStub>
  );
}
