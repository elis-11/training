import { useState } from "react";
import "../App.css";

export const Ref = () => {
  const [numbers, setNumbers] = useState([1, 2]);

  const addNumber = () => {
    const lastNumber = numbers[numbers.length - 1];
    setNumbers([...numbers, lastNumber + 1]);
  };

  return (
    <div className="App">
      <div>
        {numbers.map((num) => (
          <div
            key={num}
            style={{ border: "2px solid lavender", padding: ".7em" }}
          >
            {num}
          </div>
        ))}
      </div>
      <button
        onClick={addNumber}
        style={{ width: "100%", border: "2px solid lavender" }}
      >
        Add Number{" "}
      </button>
    </div>
  );
};
