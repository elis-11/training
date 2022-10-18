import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Effect1 } from "./components/Effect1";
import { Effect2 } from "./components/Effect2";
import { Home } from "./pages/Home";
import { Navigation } from "./pages/Navigation";
import { State1 } from "./components/State1";
import { State2 } from "./components/State2";
import { Effect } from "./components/Effect";
import { State } from "./components/State";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/state" element={<State />} />
        <Route path="/state1" element={<State1 />} />
        <Route path="/state2" element={<State2 />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/effect1" element={<Effect1 />} />
        <Route path="/effect2" element={<Effect2 />} />
      </Routes>
    </div>
  );
};
