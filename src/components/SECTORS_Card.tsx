import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SECTORS_Card({ name, icon }: { name: string; icon: IconProp }) {
  return (
    <div
      key={name}
      className="flex h-40 w-28 flex-col items-center justify-between gap-4 rounded-2xl border-2 border-white p-4 text-center text-white sm:h-52 sm:w-36"
    >
      <div className="flex size-10 items-center justify-center rounded-full bg-white p-2 sm:size-28 sm:p-6">
        <FontAwesomeIcon icon={icon} className="text-aedl sm:text-3xl" />
      </div>
      <span>{name}</span>
    </div>
  );
}
