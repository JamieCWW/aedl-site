import Link from "next/link";
import { ReactNode } from "react";

export function LINK_Custom({
  children,
  href,
  ...addtionalProps
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="transition ease-in-out hover:underline active:text-red-200"
      {...addtionalProps}
    >
      {children}
    </Link>
  );
}
