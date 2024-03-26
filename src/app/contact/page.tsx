import { SECTION_Body } from "@/components/SECTION_Body";
import { SECTION_ContactUS } from "@/components/SECTION_ContactUs";

export default function ContactPage() {
  return (
    <>
      <SECTION_Body additionalClasses=" h-dvh">
        <SECTION_ContactUS />
      </SECTION_Body>
    </>
  );
}
