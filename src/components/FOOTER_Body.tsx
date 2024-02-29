import Image from "next/image";

import iosh from "@/../public/iosh.png";
import niceic from "@/../public/NICEIC-BAFE.png";
import { LINK_Custom } from "./LINK_Custom";

export function FOOTER_Body() {
  return (
    <footer className="flex h-fit w-full flex-col items-center justify-center gap-2 border-t-4 border-aedl bg-aedl-dark px-4 py-10 text-white">
      <div className="flex size-full flex-wrap justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="italic text-aedl underline">Get in Touch</h3>
          <div className="flex flex-col gap-2 text-xs text-slate-400">
            <LINK_Custom href="mailto:adrian@aedl.uk">
              adrian@aedl.uk
            </LINK_Custom>
            <LINK_Custom href="mailto:info@aedl.uk">info@aedl.uk</LINK_Custom>
            <LINK_Custom href="tel:+447916629531">
              (+44)07916 629531
            </LINK_Custom>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="italic text-aedl underline">Connect</h3>
          <div className="flex flex-col gap-2 text-xs text-slate-400">
            <LINK_Custom href="https://www.linkedin.com/in/adrian-eade-b3522634/?originalSubdomain=uk">
              LinkedIn
            </LINK_Custom>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="italic text-aedl underline">Sitemap</h3>
          <div className="flex flex-col gap-2 text-xs text-slate-400">
            <LINK_Custom href="/">Home</LINK_Custom>
            <LINK_Custom href="/">Services</LINK_Custom>
            <LINK_Custom href="/">Projects</LINK_Custom>
            <LINK_Custom href="/">Contact</LINK_Custom>
          </div>
        </div>
        <div className="flex w-full list-none flex-col gap-2 text-xs text-slate-400 sm:w-1/5">
          <h3 className="italic text-aedl underline">Opening Hours</h3>
          <ul>
            <li className="flex gap-3">
              <span className="w-1/3">Monday: </span>
              <span>9:00 - 5:00</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1/3">Tuesday: </span>
              <span>9:00 - 5:00</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1/3">Wednesday: </span>
              <span>9:00 - 5:00</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1/3">Thursday: </span>
              <span>9:00 - 5:00</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1/3">Friday: </span>
              <span>9:00 - 5:00</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1/3">Saturday: </span>
              <span>CLOSED</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1/3">Sunday: </span>
              <span>CLOSED</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-xs">
        Website Created By{" "}
        <a href={"https://www.condorwebworks.co.uk"} target="__blank">
          Condor Web Works
        </a>{" "}
        © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
