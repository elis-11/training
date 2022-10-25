import { useContext } from "react";
import Context from "./Context";

export const Card = ({ amound }) => {
  const value = useContext(Context);

  const handleClick = () => {
    value.countBooks(amound);
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
          Buy {amound} books
        </button>
      </div>
    </div>
  );
};
