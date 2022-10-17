import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Effect1 } from "./components/Effect1";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { State1 } from "./components/State1";
import { State2 } from "./components/State2";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/state1" element={<State1 />} />
        <Route path="/state2" element={<State2 />} />
        <Route path="/effect1" element={<Effect1 />} />
      </Routes>
    </div>
  );
};
