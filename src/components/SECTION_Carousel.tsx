import { CAROUSEL_Tile } from "./CAROUSEL_Tile";
import { CAROUSEL_TextBox } from "./COURSEL_TextBox";
import { CAROUSEL_Header } from "./CAROUSEL_Header";
import { CAROUSEL_Divider } from "./CAROUSEL_Divider";
import { CAROUSEL_SubHeader } from "./CAROUSEL_SubHeader";

const items = [
  {
    photo: "/plans.jpg",
    header: "Plans & Drawings",
    subheading:
      "We Create plans and drawings to spec up your electrical needs based on your existing GA plan",
  },
  {
    photo: "/elecspec.webp",
    header: "Electrical System Design",
    subheading: "We Design and calculate your system",
  },
  {
    photo: "/emergency.webp",
    header: "Emergency Lighting",
    subheading: "We Design and Organise your emergency lighting.",
  },
  {
    photo: "/firealarm.jpg",
    header: "Fire Alarm Systems",
    subheading: "We Design your fire alarm system to your spec",
  },
];

export function SECTION_Carousel() {
  return (
    <div className="flex size-full animate-carousel sm:flex-row">
      {items.map((item, index) => (
        <CAROUSEL_Tile image={item.photo} key={index}>
          <CAROUSEL_TextBox>
            <CAROUSEL_Header>{item.header}</CAROUSEL_Header>
            <CAROUSEL_Divider />
            <CAROUSEL_SubHeader>{item.subheading}</CAROUSEL_SubHeader>
          </CAROUSEL_TextBox>
        </CAROUSEL_Tile>
      ))}
    </div>
  );
}
