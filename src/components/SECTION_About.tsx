import { HEADINGS_Sub } from "./HEADINGS_Sub";

export function SECTION_About() {
  return (
    <div className="flex w-full flex-col items-center  gap-10 py-20 text-slate-600">
      <HEADINGS_Sub>About Us</HEADINGS_Sub>
      <p className="w-5/6 text-justify text-xs sm:w-1/2 sm:text-base">
        For over 34 years, has cultivated expertise across diverse sectors of
        the electrical industry. This extensive experience serves as the
        foundation for our commitment to delivering safe and compliant designs.
        Since 1986, our journey began humbly with a dual trade apprenticeship at
        British Rail in Rugby. From there, I navigated through various roles
        within the electrical field, culminating in the establishment of an
        electrical business in 2005. Over time, I honed my skills and leadership
        as an NICEIC & BAFE qualified supervisor, this venture evolved into a
        comprehensive M&E company, before transitioning to specialize in
        providing top-tier designs for electrical contractors and clients.
        <br />
        Drawing from years of practical engineering experience, Advanced
        Electrical Design Ltd was born from a lifelong aspiration to establish
        an Electrical Design Company. Since our inception, we have consistently
        delivered exceptional design services across diverse sectors,
        prioritizing client satisfaction above all else. Our unwavering
        commitment to compliance and high standards underscores every project we
        undertake.
        <br />
        At{" "}
        <strong className="text-sm text-aedl sm:text-lg">
          Advanced Electrical Design Ltd{" "}
        </strong>
        , we strive to make a positive impact with each client engagement,
        leading with environmental responsibility and a dedication to
        excellence. Our reputation for leadership and client-focused service
        resonates across all projects, as we continue to uphold our mission of
        delivering superior design solutions tailored to our clients needs and
        budgets.
      </p>
    </div>
  );
}
