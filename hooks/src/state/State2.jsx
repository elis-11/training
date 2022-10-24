import React from "react";
import { useState } from "react";

export const State2 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((n)=> n + 1);
    setCount((n)=> n + 1);
    setCount((n)=> n + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>I was clicked {count} times</button>
    </div>
  );
};
