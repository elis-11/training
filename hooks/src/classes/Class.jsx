import { useState } from "react";
import { List } from "./List";

export const Class = () => {
  const [visible, setVisible] = useState(true);

  // const toggleVisible = () =>{
  // setVisible(visible => !visible)
  // setVisible(!visible)
  // }
  {
    /* <button type='button' onClick={toggleVisible}>Show /  Hide</button> */
  }

  return (
    <div className="flex justify-center">
      <div>
      {visible && <List />}
      </div>
      <div>
        <button className='border-2 px-6 bg-rose-100 p-2 m-5' type="button" onClick={() => setVisible(!visible)}>
          {visible ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};
