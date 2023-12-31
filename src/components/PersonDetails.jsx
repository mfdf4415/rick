import img from "../assets/images.jpeg";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

const PersonDetails = () => {
  return (
    <section className="basis-8/12 w-full">
      <div className="flex gap-4 rounded-xl bg-slate-700 overflow-hidden">
        <div className="basis-4/12 w-full h-38">
          <img src={img} className="object-cover w-full h-full" />
        </div>
        <div className="basis-6/12 flex flex-col gap-2 justify-center">
          <div className="gap-1">
            <div className="text-lg text-white font-bold">Hello</div>
            <span className="text-sm text-white font-light">Alive-Human</span>
          </div>
          <div className="gap-1">
            <div className="text-sm text-slate-400">Last khnown location:</div>
            <span className="text-lg text-white font-bold">Manchester</span>
          </div>
          <button className="bg-slate-400 text-white text-sm font-bold px-1 py-2 rounded-xl">
            Add to favorite
          </button>
        </div>
      </div>
      <EpisodesList />
    </section>
  );
};

export default PersonDetails;

const EpisodesList = () => {
  return (
    <div className="mt-4 rounded-xl p-4 w-full bg-slate-700 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-slate-400">
          List of Episodes:
        </span>
        <span>
          <ArrowDownCircleIcon className="w-7 h-7 text-white" />
        </span>
      </div>
      <ul>
        <li className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-sm text-slate-300">00 - S01E01:</span>{" "}
            <span className="text-sm text-white font-bold">Pilot</span>
          </div>
          <span className="bg-slate-500 text-white text-sm font-bold p-2 rounded-2xl">
            Octobr 2,2004
          </span>
        </li>
        <li className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-sm text-slate-300">00 - S01E01:</span>{" "}
            <span className="text-sm text-white font-bold">Pilot</span>
          </div>
          <span className="bg-slate-500 text-white text-sm font-bold p-2 rounded-2xl">
            Octobr 2,2004
          </span>
        </li>
      </ul>
    </div>
  );
};
