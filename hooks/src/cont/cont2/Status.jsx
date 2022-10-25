import React from "react";

export const Status = ({counter}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h3>Total: {counter} books</h3>
      </div>
    </div>
  );
};
