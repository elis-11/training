import { Routes, Route } from "react-router-dom";
import { Class } from "./classes/Class";
import { Navbar } from "./components/Navbar";
import { Hooks } from "./hooks/Hooks";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hooks />} />
        <Route path="/class" element={<Class />} />
      </Routes>
    </div>
  );
};
