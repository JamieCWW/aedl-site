import { HEADINGS_Sub } from "./HEADINGS_Sub";
import { PROJECT_Card } from "./PROJECT_Card";

const projects = [
  {
    name: "Multi-Story Car Park",
    location: "Surrey",
    description: "",
    dates: "June 2022",
    image: "/multiOne.jpg",
  },
  {
    name: "Multi-Story Car Park",
    location: "Berkshire",
    description: "",
    dates: "April 2023",
    image: "/multiTwo.jpg",
  },
  {
    name: "Bespoke Hotel and Cottages",
    location: "Surrey",
    description: "",
    dates: "October 2022 - January 2023",
    image: "/cottage.jpg",
  },
  {
    name: "Steakhouse",
    location: "Canterbury",
    description: "",
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
