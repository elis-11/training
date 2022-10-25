import React from "react";

export const Card = ({ counter }) => {
  return (
    <div className="m-6 border p-6">
      <div>
        <p>Buy books:</p>
        <button type="button" className="bg-fuchsia-200 p-2">
          Buy {counter} book
        </button>
      </div>
    </div>
  );
};
