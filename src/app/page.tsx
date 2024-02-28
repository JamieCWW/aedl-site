import { SECTION_About } from "@/components/SECTION_About";
import { SECTION_Body } from "@/components/SECTION_Body";
import { SECTION_Carousel } from "@/components/SECTION_Carousel";
import { SECTION_Location } from "@/components/SECTION_Location";
import { SECTION_Projects } from "@/components/SECTION_Projects";
import { SECTION_Services } from "@/components/SECTION_Services";

export default function Home() {
  return (
    <main>
      <SECTION_Body additionalClasses={"-mt-20 overflow-hidden h-dvh"}>
        <SECTION_Carousel />
      </SECTION_Body>
      <SECTION_Body>
        <SECTION_About />
      </SECTION_Body>
      <SECTION_Body>
        <SECTION_Services />
      </SECTION_Body>
      <SECTION_Body>
        <SECTION_Location />
      </SECTION_Body>
      <SECTION_Body additionalClasses="">
        <SECTION_Projects />
      </SECTION_Body>
    </main>
  );
}
