import { ReactNode } from "react";

export function CAROUSEL_TextBox({ children }: { children: ReactNode }) {
  return (
    <section className="absolute z-10 ml-4 flex h-full w-1/2 flex-col justify-center gap-3 bg-slate-700/50 text-white sm:left-36 sm:w-[30rem]">
      {children}
    </section>
  );
}
