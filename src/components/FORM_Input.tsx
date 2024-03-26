export function FORM_Input({ name = "First name", type = "text" }) {
  return (
    <div className="relative flex flex-col gap-1 px-10">
      <label className=" -top-3 left-14 rounded-lg bg-white px-4  text-xs text-aedl sm:text-base">
        {name}
      </label>
      <input
        type={type}
        className="rounded-lg border-2 border-aedl p-1 text-xs outline-none sm:text-base"
      />
    </div>
  );
}
