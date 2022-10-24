import { Link } from "react-router-dom";
// className={(navData) => (navData.isActive ? "active" : "none")}

export const Navbar = () => {
  return (
    <nav className=" h-[5rem] px-5 mb-[3rem] shadow-md bg-slate-200">
      <span className="flex justify-between items-center font-bold ">
        <Link
          to="/"
          className="hover:text-violet-400 active:text-violet-600 active:-violet-600 focus:outline-none focus:ring focus:ring-violet-300"
        >
          Class
        </Link>
        <Link to="/statepage">StatePage</Link>
        <Link to="/effectpage">EffectPage</Link>
        <Link to="/mecall">MeCall</Link>
      </span>
    </nav>
  );
};
