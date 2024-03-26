"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LINK_Custom } from "./LINK_Custom";
import Image from "next/image";

import logo from "@/../public/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCross, faXmark } from "@fortawesome/free-solid-svg-icons";

export function NAVBAR_Body() {
  const [scrolled, hasScrolled] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    function scrollUpdate() {
      const currentScroll = window.scrollY; // Corrected to scrollY
      const screenHeight = window.innerHeight / 2;

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
      className={`sticky top-0 z-20 flex h-20 w-full  items-center justify-between  ${
        !scrolled
          ? "bg-transparent text-white"
          : "border-b-4 border-aedl bg-white text-aedl-dark"
      } px-4 py-2`}
    >
      <div>
        <Link href={"/"}>
          <Image
            src={logo}
            width={175}
            height={75}
            alt="logo"
            className="relative z-50 stroke-white"
          />
        </Link>
      </div>

      <div className={` hidden gap-6 text-aedl sm:flex`}>
        <LINK_Custom href="/">Home</LINK_Custom>
        <LINK_Custom href="/services">Services</LINK_Custom>
        <LINK_Custom href="/contact">Contact</LINK_Custom>
      </div>
      <div className="flex sm:hidden">
        <FontAwesomeIcon
          icon={open ? faXmark : faBars}
          className={`relative z-50 text-3xl text-aedl`}
          onClick={() => setOpen(!open)}
        />
        <div
          className={`${
            open
              ? "absolute left-0 top-0 z-10 flex h-dvh w-screen items-center justify-center bg-aedl-dark/50 text-white backdrop-blur"
              : "hidden"
          }`}
        >
          <div className="flex h-1/2 flex-col justify-around text-center text-4xl">
            <LINK_Custom href="/" onClick={() => setOpen(false)}>
              Home
            </LINK_Custom>
            <LINK_Custom href="/services" onClick={() => setOpen(false)}>
              Services
            </LINK_Custom>

            <LINK_Custom href="/contact" onClick={() => setOpen(false)}>
              Contact
            </LINK_Custom>
          </div>
        </div>
      </div>
    </nav>
  );
}
