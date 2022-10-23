import React from "react";

export const Buttons = ({ onPlus, onMinus }) => {
  console.log("Buttons render");

  return (
    <div>
      <button onClick={onPlus} className="mx-2 px-8 font-bold bg-purple-100">
        +
      </button>
      <button onClick={onMinus} className="mx-2 px-8 font-bold bg-purple-100">
        -
      </button>
    </div>
  );
};
