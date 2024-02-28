import { HEADINGS_Sub } from "./HEADINGS_Sub";
import { LOCATION_Map } from "./LOCATION_Map";

export function SECTION_Location() {
  return (
    <div className="flex h-2/3 w-full flex-col items-center justify-center gap-10 bg-gray-200 py-20">
      <HEADINGS_Sub>Locations</HEADINGS_Sub>
      <div className="flex size-full flex-col items-center justify-center gap-5 text-xs sm:flex-row sm:text-base">
        <div className="flex h-full items-center justify-center">
          <LOCATION_Map />
        </div>
        <div className="w-5/6 sm:w-1/3">
          Based in the heart of the Midlands,{" "}
          <strong className="text-sm text-aedl sm:text-lg">
            Advanced Electrical Design Ltd
          </strong>{" "}
          is your nationwide partner for top-tier electrical design solutions.
          From London to Edinburgh, and everywhere in between, we cover the
          entirety of the UK with our expertise and dedication. Wherever your
          project is located, trust us to deliver compliant, innovative designs
          that meet your requirements and exceed your expectations
        </div>
      </div>
    </div>
  );
}
