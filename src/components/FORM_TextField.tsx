import { useFormContext } from "react-hook-form";

export function FORM_TextField({ name = "Details Of Enquiry" }) {
  const { register, formState } = useFormContext();
  return (
    <div className="relative flex flex-col gap-1 px-10">
      <label className=" -top-3 left-14 rounded-lg bg-white px-4  text-xs text-aedl sm:text-base">
        {name}
      </label>
      <textarea
        {...register(name, {
          required: true,
        })}
        name={name}
        cols={40}
        rows={4}
        className="rounded-lg border-2 border-aedl p-1 text-xs outline-none disabled:text-slate-400 sm:text-base"
        disabled={formState.isSubmitted}
      ></textarea>
    </div>
  );
}
