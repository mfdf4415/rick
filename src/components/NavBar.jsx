import { HeartIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between rounded-xl items-center p-6 bg-slate-500">
      <div className="text-white text-lg font-bold">LOGO🤪</div>
      <input
        className="bg-slate-400 rounded-xl outline-none border-0 text-slate-200 px-4 py-2 placeholder-gray-200 "
        type="text"
        placeholder="search ..."
      />
      <div className="text-slate-300">
        Found <span className="text-white text-lg underline">X</span> Results
      </div>
      <div>
        <HeartIcon className="text-white w-7 h-7" />
      </div>
    </div>
  );
};

export default NavBar;
