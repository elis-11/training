import { useEffect, useRef, useState } from "react";

export const RefTimer = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);
  const timerRef = useRef();

  const addNumber = () => {
    setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
  };

  const start = () => {
    timerRef.current = setInterval(addNumber, 1000);
  };

  const stop = () => { 
    console.log(timerRef.current)
    clearInterval(timerRef.current);
  };

  return (
    <div className="flex flex-col ">
      <button onClick={addNumber} className=" border-2 bg-violet-50">
        Add Number{" "}
      </button>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <ul>
        {/* {numbers.map((num, index) => ( */}
        {[...numbers].reverse().map((num, index) => (
          <li key={index} className="border-2 border-violet-100 p-4 font-bold">
            {num}.
          </li>
        ))}
      </ul>
    </div>
  );
};
