import { ReactNode } from "react";

export function HEADINGS_Sub({
  children,
  invert = false,
}: {
  children: ReactNode;
  invert?: boolean;
}) {
  return (
    <h2
      className={`text-2xl font-bold sm:text-5xl ${
        invert ? "text-white" : "text-aedl"
      }`}
    >
      {children}
    </h2>
  );
}
