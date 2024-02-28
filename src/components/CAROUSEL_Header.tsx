import { ReactNode } from "react";

export function CAROUSEL_Header({ children }: { children: ReactNode }) {
  return (
    <h1 className="ml-12 text-5xl leading-[4rem] sm:ml-32 sm:text-[7rem] sm:leading-[6rem]">
      {children}
    </h1>
  );
}
