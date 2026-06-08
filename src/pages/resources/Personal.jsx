import PageStub from "../../components/PageStub.jsx";
import SectionEyebrow from "../../components/SectionEyebrow.jsx";

export default function Personal() {
  return (
    <PageStub eyebrow="Resources" title="Personal">
      <section>
        <SectionEyebrow center>Student Well-being &amp; Community Building</SectionEyebrow>
        <p className="mt-5 text-base leading-relaxed text-gray-700">
          The intense pressure of elite musical instruction can easily lead to
          academic and social isolation. MUSA is dedicated to turning a highly
          competitive conservatory environment into a supportive, collaborative
          family. We fund and execute targeted mental health initiatives, create
          dedicated social spaces, and establish vital peer-support networks to keep
          our students grounded, healthy, and inspired.
        </p>
      </section>
    </PageStub>
  );
}
