import NavBar from "./components/NavBar";
import PersonDetails from "./components/PersonDetails";
import PersonList from "./components/PersonList";
import {allCharacters} from "../data/data"

function App() {
  return (
    <div className="w-full h-screen  bg-slate-800 py-4 px-8 ">
      <NavBar />
      <div className="flex items-start justify-center mt-4 gap-4">
        <PersonList allCharacters={allCharacters} />
        <PersonDetails />
      </div>
    </div>
  );
}

export default App;
