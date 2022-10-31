import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Reducer1 } from "../reducer/Reducer1";
import { Reducer2 } from "../reducer/Reducer2";
import { Reducer3 } from "../reducer/Reducer3";
import { Reducer4 } from '../reducer/reducer4/Reducer4'
import { Reducer5 } from "../reducer/reducer5/Reducer5";
import { Reducer6 } from "../reducer/reducer6/Reducer6";
import { Reducer7 } from "../reducer/reducer7/Reducer7";

export const Reducer = () => {
  return (
    <div>
      <nav>
        <NavLink to="" className="font-bold px-3 text-violet-400">Reducer1</NavLink>
        <NavLink to="reducer2" className="font-bold px-3 text-violet-400">Reducer2</NavLink>
        <NavLink to="reducer3" className="font-bold px-3 text-violet-400">Reducer3</NavLink>
        <NavLink to="reducer4" className="font-bold px-3 text-violet-400">Reducer4</NavLink>
        <NavLink to="reducer5" className="font-bold px-3 text-violet-400">Reducer5</NavLink>
        <NavLink to="reducer6" className="font-bold px-3 text-violet-400">Reducer6</NavLink>
        <NavLink to="reducer7" className="font-bold px-3 text-violet-400">Reducer7</NavLink>
      </nav>
      <Routes>
        <Route path="" element={<Reducer1 />} />
        <Route path="reducer2" element={<Reducer2 />} />
        <Route path="reducer3" element={<Reducer3 />} />
        <Route path="reducer4" element={<Reducer4 />} />
        <Route path="reducer5" element={<Reducer5 />} />
        <Route path="reducer6" element={<Reducer6 />} />
        <Route path="reducer7" element={<Reducer7 />} />
      </Routes>
    </div>
  );
};
