import Image from "next/image";

export function LOCATION_Map() {
  return (
    <>
      <Image
        alt="AEDL Location"
        width={600}
        height={400}
        src={`https://maps.googleapis.com/maps/api/staticmap?center=52.373199,-1.261740&zoom=10&size=600x400&key=${process.env.GOOGLE_API}&PARAMETERS`}
      />
    </>
  );
}
