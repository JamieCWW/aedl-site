import { ServiceType } from "../../types";

export function SECTIONLIST_Item({
  even,
  service,
}: {
  even: boolean;
  service: ServiceType;
}) {
  return (
    <>
      <div className="relative flex w-full flex-col rounded-3xl p-4">
        <div
          className={`z-10  w-full rounded-full bg-aedl py-2 text-2xl text-white shadow-md shadow-slate-600 sm:w-1/2 sm:text-3xl `}
        >
          <h2 className={`pl-5 sm:pl-20`}>{service.header}</h2>
        </div>
        <div className=" w-full grow text-xs sm:px-32 sm:text-base">
          <div
            className={`-mt-6 flex min-h-20 flex-col gap-2 rounded-3xl bg-slate-200 p-3 py-10`}
          >
            <div className="w-fit bg-slate-400 px-4 text-white">
              {service?.spec}
            </div>
            <div className="w-full px-4">{service.description}</div>

            {service?.covered && (
              <ul className="list-disc px-10">
                {" "}
                {service?.covered.map((el) => {
                  return <li key={el}>{el}</li>;
                })}{" "}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
