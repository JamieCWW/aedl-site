type Project = {
  name: string;
  description: string;
  location: string;
  dates: string;
  image: string;
};

export function PROJECT_Card({
  name,
  description,
  location,
  dates,
  image,
}: Project) {
  return (
    <div
      className="group relative h-96 min-w-52 shrink-0 grow cursor-pointer overflow-hidden rounded-lg border border-slate-300 bg-cover py-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute left-0 top-2 z-20 bg-aedl px-4 py-1 font-bold text-white">
        {name}
        <br />
        <span className="w-full text-xs italic">({location})</span>
      </div>
      <div className="absolute top-full z-10 size-full overflow-auto bg-slate-700/50 px-2 pb-2 pt-20 text-sm text-white transition duration-300 ease-in-out group-hover:-translate-y-full sm:text-base">
        {description}
      </div>
      <div className="absolute bottom-2 right-0 bg-aedl-dark px-4 py-1 text-xs italic text-white">
        {dates}
      </div>
    </div>
  );
}
