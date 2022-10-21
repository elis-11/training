import { useState } from "react";
import "../App.css";
import { List } from "./List";

export const Hooks = () => {
  const [visible, setVisible] = useState(true);

  // const toggleVisible = () =>{
  // setVisible(visible => !visible)
  // setVisible(!visible)
  // }

  return (
    <div className="App">
      {visible && <List />}
      {/* <button type='button' onClick={toggleVisible}>Show /  Hide</button> */}
      {/* <button type='button' onClick={()=> setVisible(!visible)}>Show /  Hide</button> */}
      <button type="button" onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
    </div>
  );
};
