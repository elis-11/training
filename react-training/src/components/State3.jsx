import { useState } from "react";
import "./App.css";

function State3() {
  const [numbers, setNumbers] = useState([1, 2]);

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10);
    setNumbers([...numbers, randNumber]);
    //  setNumbers([ ])  // clear display
    console.log(numbers);
  };

  return (
    <div className="State3">
      <button onClick={addNumber}>New Number </button>
      <ul>
        {numbers.map((num, index) => (
          <div style={{ borderBottom: "2px solid gray" }} key={index}>
            {num}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default State3;
