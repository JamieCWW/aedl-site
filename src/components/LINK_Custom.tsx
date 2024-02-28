import Link from "next/link";
import { ReactNode } from "react";

export function LINK_Custom({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link href={href} className="transition ease-in-out hover:text-aedl">
      {children}
    </Link>
  );
}
