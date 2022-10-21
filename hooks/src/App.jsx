import { Routes, Route } from "react-router-dom";
import { Class } from "./classes/Class";
import { Navbar } from "./Navbar";
import { Hooks } from "./hooks/Hooks";
import "./App.css";
import { Ref } from "./ref/Ref";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Class />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/ref" element={<Ref />} />
      </Routes>
    </div>
  );
};
