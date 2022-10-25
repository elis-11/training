import { useState } from "react";
import { Actions } from "./Actions";
import Context from "./Context";
import { Status } from "./Status";

export const CONTEXT = () => {
  const [counter, setCounter] = useState(0);

  const countBooks = (n) => setCounter(counter + n);

  const value={
    counter,
    countBooks
}

  return (
    <Context.Provider value={value}>
      <div>
        <Status />
        <Actions />
      </div>
    </Context.Provider>
  );
};
