import React from "react";

export const Card = ({ number, countBooks }) => {

  const handleClick = () => {
    countBooks(number);
  };

  return (
    <div className="m-6 border p-6">
      <div>
        <p>Buy books:</p>
        <button
          type="button"
          onClick={handleClick}
          className="bg-fuchsia-200 p-2"
        >
          Buy {number} books
        </button>
      </div>
    </div>
  );
};
