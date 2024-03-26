import Image from "next/image";
import logo from "@/../public/logo.svg";
import { FORM_Input } from "./FORM_Input";
import { FORM_TextField } from "./FORM_TextField";

export function SECTION_ContactUS() {
  return (
    <>
      <div className="relative flex  size-full items-center justify-start gap-4 sm:items-start">
        <div className="absolute left-0 top-0 z-0 h-1/3 w-full bg-aedl-dark">
          {" "}
        </div>
        <div className="relative z-10  flex w-full flex-col justify-center gap-10 px-4 sm:mt-36 sm:flex-row sm:gap-40 sm:px-0">
          <div className="flex shrink-0 flex-col gap-2 px-2 sm:w-1/5 sm:px-0">
            <h1 className="text-7xl text-aedl">Contact Us!</h1>{" "}
            <p className="px-2 text-sm italic text-gray-400">
              Looking for more information, or to book in a consultion? Fill in
              your details and one of our team will get back to you ASAP!
            </p>
          </div>
          <div className="w-full shrink-0 rounded-xl border border-aedl-dark bg-white shadow-md shadow-aedl-dark sm:w-1/3">
            <form className="flex flex-col gap-2 py-4 sm:gap-4">
              <FORM_Input name="First Name" />
              <FORM_Input name="Surname" />
              <FORM_Input name="Location" />
              <FORM_Input name="Company Name" />
              <FORM_Input name="Number" />
              <FORM_Input name="Email" />
              <FORM_TextField />
              <button className="mx-4 rounded-lg bg-emerald-400 p-4 hover:bg-emerald-600 hover:text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
