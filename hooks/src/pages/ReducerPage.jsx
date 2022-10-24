import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Reducer } from "../reducer/Reducer";
import { Reducer2 } from "../reducer/Reducer2";
import { Reducer3 } from "../reducer/Reducer3";
import { Reducer4 } from "../reducer/Reducer4";

export const ReducerPage = () => {
  return (
    <div>
      <nav>
        <NavLink to="" className="font-bold px-3 text-violet-400">Reducer</NavLink>
        <NavLink to="reducer2" className="font-bold px-3 text-violet-400">Reducer2</NavLink>
        <NavLink to="reducer3" className="font-bold px-3 text-violet-400">Reducer3</NavLink>
        <NavLink to="reducer4" className="font-bold px-3 text-violet-400">Reducer4</NavLink>
      </nav>
      <Routes>
        <Route path="" element={<Reducer />} />
        <Route path="reducer2" element={<Reducer2 />} />
        <Route path="reducer3" element={<Reducer3 />} />
        <Route path="reducer4" element={<Reducer4 />} />
      </Routes>
    </div>
  );
};
