import { HEADINGS_Sub } from "./HEADINGS_Sub";
import { PROJECT_Card } from "./PROJECT_Card";

const projects = [
  {
    name: "Multi-Story Car Park",
    location: "Surrey",
    description:
      "A comprehensive design for a private facility 5-level car park, lighting, controls, power, containment, distribution, electric vehicle charging, fire alarm, and lightning protection. Working alongside specialist providing a bespoke design to meet their needs as well as keeping with strict planning controls and wildlife conservation.",
    dates: "June 2022",
    image: "/multiOne.jpg",
  },
  {
    name: "Multi-Story Car Park",
    location: "Berkshire",
    description:
      "A unique and challenging design for a 2-level car park for the local train station. Includes lighting, controls, power, containment, distribution, electric vehicle charging, fire alarm, disabled refuge system and lightning protection. With specialists’ contractors we produced a design that fitted within the site constraints and existing site services to deliver on time and budget.",
    dates: "April 2023",
    image: "/multiTwo.jpg",
  },
  {
    name: "Bespoke Hotel and Cottages",
    location: "Surrey",
    description:
      "Within the lovely Surrey hills and connected to a well-known golf course, this hotel design was brought together with a well-established electrical contractor and provided their team with all our expertise to hand this project over to their client. All our expertise was brought to bear to deliver this project from distribution, power, lighting, BMS, controls, fire alarm, and network systems.",
    dates: "October 2022 - January 2023",
    image: "/cottage.jpg",
  },
  {
    name: "Steakhouse",
    location: "Canterbury",
    description:
      "A small local brand steak house design was requested by one of our electrical contractors to provide drawings and calculations for the cabling on site. Delivered in a very short timescale this was a very tasty project to be involved in.",
    dates: "September 2022 - October 2022",
    image: "/steak.jpg",
  },
];

export function SECTION_Projects() {
  return (
    <div className="flex size-full flex-col gap-10 px-10 py-20 text-center ">
      <HEADINGS_Sub>Projects</HEADINGS_Sub>
      <div className="flex flex-wrap gap-4">
        {projects.map((el) => {
          return <PROJECT_Card {...el} key={el.name} />;
        })}
      </div>
    </div>
  );
}
