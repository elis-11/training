import { NavLink, Route, Routes } from "react-router-dom";
import { Effect1 } from "../effect/Effect1";
import { FetchEffect } from "../effect/FetchEffect";
import { Ref } from "../ref/Ref";
import { RefTimer } from "../reftimer/RefTimer";

export const Effect = () => {
  return (
    <div>
      <nav>
        <NavLink to="" className="font-bold px-3 text-fuchsia-200">
          Effect1
        </NavLink>
        <NavLink to="fetcheffect" className="font-bold px-3 text-fuchsia-200">
          FetchEffect
        </NavLink>
        <NavLink to="ref" className="font-bold px-3 text-fuchsia-200">
          Ref
        </NavLink>
        <NavLink to="reftimer" className="font-bold px-3 text-fuchsia-200">
          RefTimer
        </NavLink>
        <NavLink to="reftimer" className="font-bold px-3 text-fuchsia-200">
          RefTimer
        </NavLink>
      </nav>
      <Routes>
        <Route path="" element={<Effect1 />} />
        <Route path="fetcheffect" element={<FetchEffect />} />
        <Route path="ref" element={<Ref />} />
        <Route path="reftimer" element={<RefTimer />} />
        <Route path="reftimer" element={<RefTimer />} />
      </Routes>
    </div>
  );
};
