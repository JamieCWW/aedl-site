"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LINK_Custom } from "./LINK_Custom";

export function NAVBAR_Body() {
  const [scrolled, hasScrolled] = useState(false);

  useEffect(() => {
    function scrollUpdate() {
      const currentScroll = window.scrollY; // Corrected to scrollY
      const screenHeight = window.innerHeight - 60;

      if (screenHeight <= currentScroll) {
        hasScrolled(true);
      } else {
        hasScrolled(false);
      }
    }

    // Add event listener when component mounts
    window.addEventListener("scroll", scrollUpdate);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", scrollUpdate);
    };
  }, []);
  return (
    <nav
      className={`sticky top-0 z-20 flex h-20 w-full  items-center justify-between text-white ${
        !scrolled ? "bg-transparent " : "border-b-4 border-aedl bg-aedl-dark"
      } px-4 py-2`}
    >
      <div>Logo place holder</div>

      <div className=" hidden gap-6 sm:flex">
        <LINK_Custom href="/">Home</LINK_Custom>
        <LINK_Custom href="/">Projects</LINK_Custom>
        <LINK_Custom href="/">Services</LINK_Custom>
        <LINK_Custom href="/">Contacts</LINK_Custom>
      </div>
    </nav>
  );
}
