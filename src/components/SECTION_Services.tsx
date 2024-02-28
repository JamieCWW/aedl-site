import {
  faBuildingColumns,
  faBurger,
  faChargingStation,
  faHandcuffs,
  faHotel,
  faHouse,
  faPeopleRoof,
  faPlaneDeparture,
  faSchoolFlag,
  faShop,
  faSquareParking,
  faTrainSubway,
} from "@fortawesome/free-solid-svg-icons";

import { HEADINGS_Sub } from "./HEADINGS_Sub";
import { SECTORS_Card } from "./SECTORS_Card";

const sectors = [
  { name: "Hotels", icon: faHotel },
  { name: "Care Homes", icon: faPeopleRoof },
  { name: "Retail Outlets", icon: faShop },
  { name: "Fast Food Outlets", icon: faBurger },
  { name: "Multi-Storey Car Parks", icon: faSquareParking },
  { name: "EV Car Chargers", icon: faChargingStation },
  { name: "Airports", icon: faPlaneDeparture },
  { name: "Railway Stations", icon: faTrainSubway },
  { name: "Domestic", icon: faHouse },
  { name: "Listed Buildings", icon: faBuildingColumns },
  { name: "Schools", icon: faSchoolFlag },
  { name: "Police Headquarters", icon: faHandcuffs },
];

export function SECTION_Services() {
  return (
    <div className="flex size-full flex-col items-center justify-start gap-10 bg-aedl py-20">
      <HEADINGS_Sub invert={true}>Sectors Covered</HEADINGS_Sub>
      <div className="flex w-[90%] flex-wrap items-center justify-center gap-2 sm:w-2/3 sm:gap-14">
        {sectors.map((el) => {
          return <SECTORS_Card {...el} key={el.name} />;
        })}
      </div>
    </div>
  );
}
