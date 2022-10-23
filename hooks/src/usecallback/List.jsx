import { useEffect, useState } from "react";

export const List = () => {
  const [count, setCount] = useState(0);

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
    </div>
  );
};
