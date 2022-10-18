//!1
import { useEffect, useState } from "react";

export const Effect1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer)
  }, []);  
  //}, []);  // stop the timer

  return <div>I've rendered {count} times!</div>;
};
//!2
import React, { useEffect, useState } from 'react'

export const Effect2 = () => {
    const [count, setCount] = useState(0);
    const [calculate, setCalculate] = useState(0)

    useEffect(() => {
      setCalculate(() => count * 2)
    }, [count])
    
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={()=> setCount((c) => c + 1)} className='bg-gray-400 px-4'>+</button>
        <p>Calculation: {calculate}</p>
    </div>
  )
}

