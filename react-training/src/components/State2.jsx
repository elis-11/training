import { useState } from "react";

export const State2 = () => {
  const [count, setCount] = useState(0);
  const [cars, setCars] = useState({
    _id: "1a",
    brand: "Toyota",
    model: "Prius",
    color: "green",
    year: 2009,
    size: "Large",
    price: 79,
  });

  const updateColor = () => {
    setCars((previosState) => {
      return {
        ...previosState,
        color: "white",
      };
    });
  };

  return (
    <div>
      <div>
        <div>
        {cars.brand} is {cars.color} from {cars.year} year and costs{" "}
        {cars.price} euro
        </div>
        <button className="bg-red-200" onClick={updateColor}>new color</button>
        <p>Price {cars.price}</p>
        <p>Total {count}</p>
        <button
          type="button"
          className="bg-gray-200 py-0.5 px-5 mx-1 font-bold"
          onClick={() => setCount(count + cars.price)}
        >
          +
        </button>
        <button
          type="button"
          className="bg-gray-200 py-0.5 px-5 mx-1 font-bold"
          onClick={() => setCount(count - cars.price)}
        >
          -
        </button>
      </div>
    </div>
  );
};
