import { Routes, Route } from "react-router-dom";
import { Class } from "./classes/Class";
import { Navbar } from "./Navbar";
import { Ref } from "./ref/Ref";
import { Effect } from "./effect/Effect";
import { RefTimer } from "./reftimer/RefTimer";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Class />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/reftimer" element={<RefTimer />} />
      </Routes>
    </div>
  );
};
