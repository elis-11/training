import { NavLink, Route, Routes } from "react-router-dom";
import { State0 } from "../state/State0";
import { State1 } from "../state/State1";
import { State2 } from "../state/State2";
import { StateTimer } from "../state/StateTimer";

export const State = () => {
  return (
    <div>
      <nav>
        <NavLink to="" className="font-bold px-3 text-violet-400">
          State0
        </NavLink>
        <NavLink to="state1" className="font-bold px-3 text-violet-400">
          State1
        </NavLink>
        <NavLink to="state2" className="font-bold px-3 text-violet-400">
          State2
        </NavLink>
        <NavLink to="statetimer" className="font-bold px-3 text-violet-400">
          StateTimer
        </NavLink>
      </nav>
      <Routes>
          <Route path="" element={<State0 />} />
          <Route path="state1" element={<State1 />} />
          <Route path="state2" element={<State2 />} />
          <Route path="statetimer" element={<StateTimer />} />
      </Routes>
    </div>
  );
};
