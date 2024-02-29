import { ReactNode } from "react";

export function CAROUSEL_SubHeader({ children }: { children: ReactNode }) {
  return (
    <p className="w-full px-4 text-xs hover:text-blue-200 sm:text-lg">
      {children}
    </p>
  );
}
