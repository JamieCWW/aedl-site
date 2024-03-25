import { CAROUSEL_Tile } from "./CAROUSEL_Tile";
import { CAROUSEL_TextBox } from "./COURSEL_TextBox";
import { CAROUSEL_Header } from "./CAROUSEL_Header";
import { CAROUSEL_Divider } from "./CAROUSEL_Divider";
import { CAROUSEL_SubHeader } from "./CAROUSEL_SubHeader";

import items from "@/../public/services.json";
import { ServiceType } from "../../types";

export function SECTION_Carousel() {
  return (
    <div className="flex size-full animate-carousel sm:flex-row">
      {items
        .filter((el) => el.carousel)
        .map((service: ServiceType, index: number) => {
          if (!service.subheading) return;
          return (
            <CAROUSEL_Tile image={service.photo} key={index}>
              <CAROUSEL_TextBox>
                <CAROUSEL_Header>{service.header}</CAROUSEL_Header>
                <CAROUSEL_Divider />
                <CAROUSEL_SubHeader>{service.subheading}</CAROUSEL_SubHeader>
              </CAROUSEL_TextBox>
            </CAROUSEL_Tile>
          );
        })}
    </div>
  );
}
