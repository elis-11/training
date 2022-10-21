import { useState } from "react";
import { List } from "./List";
import "../App.css";

export const Class = () => {
  const [visible, setVisible] = useState(true);

  // const toggleVisible = () =>{
  // setVisible(visible => !visible)
  // setVisible(!visible)
  // }

  return (
    <div className="App">
      {visible && <List />}
      {/* <button type='button' onClick={toggleVisible}>Show /  Hide</button> */}
      <button type="button" onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
      {/* {visible ? (
        <button type="button" onClick={() => setVisible(!visible)}>
          Hide
        </button>
      ) : (
        <button type="button" onClick={() => setVisible(!visible)}>
          Show
        </button>
      )} */}
    </div>
  );
};