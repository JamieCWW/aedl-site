import { SECTION_Body } from "@/components/SECTION_Body";
import { SECTION_ServiceList } from "@/components/SECTION_ServiceList";
import { SECTION_Services } from "@/components/SECTION_Services";
import { SECTION_ServicesHeader } from "@/components/SECTION_ServicesHeader";

export default function ServicesPage() {
  return (
    <>
      <SECTION_Body additionalClasses="-mt-20 h-[50dvh] w-full bg-aedl-dark">
        <SECTION_ServicesHeader />
      </SECTION_Body>
      <SECTION_Body additionalClasses="sm:pt-10 pt-48">
        <SECTION_ServiceList />
      </SECTION_Body>
    </>
  );
}
