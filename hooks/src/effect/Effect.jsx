import { useState } from "react";
import { List } from "./List";

export const Effect = () => {
  const [visible, setVisible] = useState(true);

  // const toggleVisible = () =>{
  // setVisible(visible => !visible)
  // setVisible(!visible)
  // }
  {/* <button type='button' onClick={toggleVisible}>Show /  Hide</button> */}

  return (
    <div className="flex flex-col justify-center">
      <div>
      <button className='w-12 border-2 bg-rose-100' type="button" onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
      </div>
      <div>
      {visible && <List />}
      {/* <button type='button' onClick={()=> setVisible(!visible)}>Show /  Hide</button> */}
      </div>
    </div>
  );
};
