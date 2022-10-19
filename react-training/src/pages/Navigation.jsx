import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center font-bold h-[5rem] px-5 shadow-md bg-gray-200 text-white text-lg">
      <h3 className="">React Hooks</h3>
      <span className="font-bold">
        <Link to="/" className="mr-2 active-red-300">
          Home
        </Link>
        <Link to="/todo" className="mr-2 active-red-300">
          Todo
        </Link>
        <Link to="/state1" className="mr-2 active-red-300">
          State1
        </Link>
        <Link to="/state2" className="mr-2 active-red-300">
          State2
        </Link>
        <Link to="/effect" className="mr-2 active-red-300">
          Effect
        </Link>
        <Link to="/effect1" className="mr-2 active-red-300">
          Effect1
        </Link>
        <Link to="/effect2" className="mr-2 active-red-300">
          Effect2
        </Link>
      </span>
    </nav>
  );
};
