"use client";
import { useState } from "react";
import { FORM_Input } from "./FORM_Input";
import { FORM_TextField } from "./FORM_TextField";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";

export function SECTION_ContactUS() {
  const methods = useForm();
  const [isSubmitted, setSubmitted] = useState(false);
  const { formState } = methods;

  const onSubmit = async (data: any) => {
    try {
      await axios.post("./api/contactform", data);
      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
    }

    // Perform your submit logic here
  };

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
            <FormProvider {...methods}>
              <form
                className="flex flex-col gap-2 py-4 sm:gap-4"
                onSubmit={methods.handleSubmit(onSubmit)}
              >
                <FORM_Input name="First Name" />
                <FORM_Input name="Surname" />
                <FORM_Input name="Location" />
                <FORM_Input name="Company Name" />
                <FORM_Input name="Number" />
                <FORM_Input name="Email" />
                <FORM_TextField />
                <button
                  className="mx-4 rounded-lg bg-emerald-400 p-4 hover:bg-emerald-600 hover:text-white"
                  type="submit"
                  disabled={formState.isSubmitted}
                >
                  {formState.isSubmitting
                    ? "Submitting"
                    : isSubmitted
                    ? "Sent ✅"
                    : "Submit"}
                </button>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </>
  );
}
