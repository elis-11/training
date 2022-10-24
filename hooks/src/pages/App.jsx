import { Routes, Route } from "react-router-dom";
import { Class } from "../classes/Class";
import { StatePage } from "./StatePage";
import { MeCall } from "./MeCall";
import { EffectPage } from "./EffectPage";
import { Navbar } from "./Navbar";
import { ReducerPage } from "./ReducerPage";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Class />} />
        <Route path="/statepage/*" element={<StatePage />} />
        <Route path="/effectpage/*" element={<EffectPage />} />
        <Route path="/reducerpage/*" element={<ReducerPage />} />
        <Route path="/mecall/*" element={<MeCall />} />
      </Routes>
    </div>
  );
};
