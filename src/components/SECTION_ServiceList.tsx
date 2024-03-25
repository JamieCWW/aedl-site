import services from "@/../public/services.json";
import { ServiceType } from "../../types";
import { SECTIONLIST_Item } from "./SECTIONLIST_Item";
import { HEADINGS_Sub } from "./HEADINGS_Sub";

export function SECTION_ServiceList() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 py-5">
      <div className=" flex w-full flex-col gap-5 sm:px-20">
        {services?.map((service: any, index: any) => {
          const even = index % 2 !== 0;

          return <SECTIONLIST_Item key={index} even={even} service={service} />;
        })}
      </div>
    </div>
  );
}
