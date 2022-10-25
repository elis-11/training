import { Routes, Route, NavLink } from "react-router-dom";
import { Class } from "../classes/Class";
import { State } from "./State";
import { MemoCallback } from "./MemoCallback";
import { Effect } from "./Effect";
import { Reducer } from "./Reducer";

export const App = () => {
  return (
    <div className="App">
      <nav className=" h-[5rem] px-5 mb-[3rem] shadow-md bg-slate-200">
        <span className="flex justify-evenly text-xl text-cyan-800 items-center font-bold ">
          <NavLink
            to="/"
            className="hover:text-violet-400 active:text-violet-600 active:-violet-600 focus:outline-none focus:ring focus:ring-violet-300"
          >
            Class
          </NavLink>
          <NavLink to="/state">State</NavLink>
          <NavLink to="/effect">Effect</NavLink>
          <NavLink to="/reducer">Reducer</NavLink>
          <NavLink to="/mecall">MemoCallback</NavLink>
        </span>
      </nav>
      <Routes>
        <Route path="/" element={<Class />} />
        <Route path="/state/*" element={<State />} />
        <Route path="/effect/*" element={<Effect />} />
        <Route path="/reducer/*" element={<Reducer />} />
        <Route path="/memocallback/*" element={<MemoCallback />} />
      </Routes>
    </div>
  );
};
