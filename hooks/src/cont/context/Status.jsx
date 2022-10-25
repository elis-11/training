import React from "react";
import { useContext } from "react";
import Context from "./Context";

export const Status = () => {

const value = useContext(Context)

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h3>Total: {value.counter} books</h3>
      </div>
    </div>
  );
};
