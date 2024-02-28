import { ReactNode } from "react";

export function CAROUSEL_Tile({
  children,
  classes,
  image,
}: {
  children: ReactNode;
  classes?: string;
  image?: string;
}) {
  return (
    <div
      className={`relative size-full min-w-32 shrink-0 overflow-hidden bg-cover bg-center bg-no-repeat ${classes}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute left-0 top-0 size-full bg-slate-700/40" />
      {children}
    </div>
  );
}
