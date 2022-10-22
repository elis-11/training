import { useEffect, useState } from "react";

export const List = () => {
  const [numbers, setNumbers] = useState([1, 2]);
  const [count, setCount] = useState(0);

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10);
    //  setNumbers([ ])  // clear display
    const newArray = [...numbers, randNumber];
    setNumbers(newArray);
    console.log(numbers);
  };
  useEffect(()=>{
    console.log('COUNT is updated!');
  },[count])
  

  useEffect(() => {
    console.log("NUMBERS is updated!");
  }, [numbers]); // numbers updated

  useEffect(() => {
    console.log("component has been rendered");
  }); // component  updated

  useEffect(() => {
    console.log("COMPONENT DID MOUNT! "); // component didMount = rendered = otobrasilsya
    return () => {
      console.log("COMPONENT WILL UNMOUNT!"); // component willUnMount = deleted
    };
  }, []);

  return (
    <div className='flex flex-col items-center justify-center'>
      <span className='flex justify-evenly font-bold text-lg mb-7'>
      <button className='border-2 px-6 bg-rose-100' onClick={() => setCount(count + 1)}>+</button>
      <h2 className='mx-7'>{count}</h2>
      <button className='border-2 px-6 bg-rose-100' onClick={() => setCount(count + 1)}>-</button>
      </span>
      <div>
      <button className='border-2 px-6 bg-rose-100 p-2 m-5' onClick={addNumber}>New Number </button>
        {numbers.map((num, index) => (
          <div
            key={index}
            style={{ border: "2px solid lavender ", padding: ".7em" }}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};
