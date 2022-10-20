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
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={addNumber}>New Number </button>
      <div>
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
