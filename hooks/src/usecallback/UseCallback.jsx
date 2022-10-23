import { useCallback } from "react";
import { useEffect, useRef, useState } from "react";

export const UseCallback = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);
  const ulRef = useRef();
  const numbersRef = useRef();

  numbersRef.current = numbers;

  const addNumber = () => {
    setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
  };

  const handleScroll = useCallback(() => {
    console.log('scroll', numbersRef.current);
  }, []);
  
  const start = () => {
    ulRef.current.addEventListener("scroll", handleScroll);
  };
  
  const stop = () => {
    ulRef.current.removeEventListener("scroll", handleScroll);
    console.log("skroll", numbersRef.current);
  };

  return (
    <div className="flex flex-col ">
      <button onClick={addNumber} className=" border-2 bg-violet-50">
        Add Number{" "}
      </button>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <ul ref={ulRef}>
        {/* {[...numbers].reverse().map((num, index) => ( */}
        {[...numbers].reverse().map((num, index) => (
          <li key={index} className="border-2 border-violet-100 p-4 font-bold">
            {num}.
          </li>
        ))}
      </ul>
    </div>
  );
};
