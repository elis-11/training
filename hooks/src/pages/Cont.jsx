import { NavLink, Route, Routes } from "react-router-dom";
import { Context1 } from "../cont/cont1/Context1";
import { Context2 } from "../cont/cont2/Context2";
import { CONTEXT } from "../cont/context/CONTEXT";

export const Cont = () => {
  return (
    <div>
      <nav>
        <NavLink className="font-bold px-3 text-violet-300 hover:text-violet-700" to="">Context1</NavLink>
        <NavLink className="font-bold px-3 text-violet-300 hover:text-violet-700" to="context2">Context2</NavLink>
        <NavLink className="font-bold px-3 text-violet-300 hover:text-violet-700" to="CONTEXT">CONTEXT</NavLink>
      </nav>
      <Routes>
        <Route path="" element={<Context1 />} />
        <Route path="context2" element={<Context2 />} />
        <Route path="CONTEXT" element={<CONTEXT />} />
      </Routes>
    </div>
  );
};
