import React from "react";
import { useState } from "react";
import Count from "./Count";
import IsFive from "./IsFive";

export const Memo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex m-4">
        <h5>Count 1:</h5>
        <button className='px-4 font-bold' onClick={() => setCount1(count1 + 1)}>+</button>
        <Count id={1} value={count1} />
      </div>
      <div className='flex m-4'>
        <h5>Count 2:</h5>
        <button className='px-4 font-bold' onClick={() => setCount2(count2 + 1)}>+</button>
        <Count  id={2} value={count2} />
        <IsFive value={count2} />
      </div>
    </div>
  );
};
