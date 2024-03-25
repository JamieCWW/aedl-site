import Link from "next/link";
import { ReactNode } from "react";

export function LINK_Custom({
  children,
  href,
  onClick,
}: {
  children: ReactNode;
  href: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className="transition ease-in-out hover:underline active:text-red-200"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
