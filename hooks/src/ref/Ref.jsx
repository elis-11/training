import { useEffect, useRef, useState } from "react";

export const Ref = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);
  const ulRef = useRef();

  const addNumber = () => {
    const lastNumber = numbers[numbers.length - 1];
    setNumbers([...numbers, lastNumber + 1]);
  };

  const handleScroll = () => {
    console.log("bil scrol");
  };

  useEffect(() => {
    ulRef.current.addEventListener("scroll", handleScroll);
  }, []);

  const removeScroll = () => {
    console.log(ulRef);
    ulRef.current.removeEventListener("scroll", handleScroll);
  };

  return (
    <div className="flex flex-col ">
      <button onClick={addNumber} className=" border-2 bg-violet-50">
        Add Number{" "}
      </button>
      <button onClick={removeScroll}>Don't follow</button>
      <ul ref={ulRef}>
        {numbers.map((num, index) => (
          <li key={index} className="border-2 border-violet-100 p-4 font-bold">
            {num}.
          </li>
        ))}
      </ul>
    </div>
  );
};
