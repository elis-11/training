import { useContext } from "react";
import Context from "./Context";

export const Card = ({ number }) => {
  const value = useContext(Context);

  const handleClick = () => {
    value.countBooks(number);
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
