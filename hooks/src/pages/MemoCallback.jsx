import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Memo } from "../memo/Memo";
import { UCallback } from "../ucallback/UCallback";
import { UseCallback } from "../usecallback/UseCallback";

export const MemoCallback = () => {
  return (
    <div>
      <nav>
        <NavLink to="" className="font-bold px-3 text-fuchsia-200">UseCallback</NavLink>
        <NavLink to="ucallback" className="font-bold px-3 text-fuchsia-200">UCallback</NavLink>
        <NavLink to="memo" className="font-bold px-3 text-fuchsia-200">Memo</NavLink>
      </nav>
      <Routes>
        <Route path="" element={<UseCallback />} />
        <Route path="ucallback" element={<UCallback />} />
        <Route path="memo" element={<Memo />} />
      </Routes>
    </div>
  );
};
