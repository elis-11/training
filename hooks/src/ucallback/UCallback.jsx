import { useCallback } from "react";
import { useState } from "react";
import { Buttons } from "./Buttons";

export const UCallback = () => {
  const [count, setCount] = useState(0);

  // const onPlus = () => setCount((count) => count + 1);  //  without useCallback
  // const onMinus = () => setCount((count) => count - 1);
  const onPlus = useCallback(() => setCount((count) => count + 1), []);
  const onMinus = useCallback(() => setCount((count) => count - 1), []);

  return (
    <div className="flex flex-col justify-center ml-48">
      <h1 className='text-3xl'>{count}</h1>
      <Buttons onPlus={() => onPlus()} onMinus={() => onMinus()} 
      />
    </div>
  );
};
