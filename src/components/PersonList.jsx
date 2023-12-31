import { EyeIcon } from "@heroicons/react/24/outline";
import img from "../assets/images.jpeg";

const options = [
  { name: "Rick", state: "Alive", type: "Human" },
  { name: "John doe", state: "Dead", type: "Human" },
];

const PersonList = ({ allCharacters }) => {
  return (
    <div className="basis-6/12 w-full">
      <ul className="flex flex-col gap-4">
        {allCharacters.map((character) => (
          <Person character={character} />
        ))}
      </ul>
    </div>
  );
};

export default PersonList;

const Person = ({ character }) => {
  return (
    <li className="flex gap-4 items-center justify-center list-none bg-slate-700 p-3 rounded-xl">
      <img
        src={character.image}
        className="w-16 h-16 object-cover rounded-xl"
      />
      <div className="flex-1 flex flex-col gap-1 ">
        <span className="text-lg text-white font-bold">
          {character.gender === "Male" ? "👨🏻‍🦰 " : "🙎🏼‍♀️ "}
          {character.name}
        </span>
        <span className="text-sm text-white font-light">
          {/* <span
            className={`h-5 w-5 rounded-full bg-white ${
              character.status === "Dead" ? "bg-red-600" : "bg-green-600"
            }`}
          ></span> */}
          {character.gender}-{character.species}
        </span>
      </div>
      <EyeIcon className="w-7 h-7 text-red-600 cursor-pointer" />
    </li>
  );
};
