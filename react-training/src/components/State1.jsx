import { useState } from "react";

export const State1 = () => {
  const [color, setColor] = useState("red");
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [cat, setCat] = useState({
    name: "Tom",
    color: "red",
    year: 3,
  });

  const updateColor = () => {
    setCat((previosState) => {
      return { ...previosState, color: "white" };
    });
  };
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* COUNT */}
      <div className="bg-gray-200">
        <h2>You clicked {count} times</h2>
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="bg-gray-300 mx-3 px-5"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => setCount(count - 1)}
          className="bg-gray-300 px-5"
        >
          -
        </button>
      </div>
      {/* CAT */}
      <div className="bg-green-100">
        <p>
          {" "}
          My cat's name is {cat.name} {cat.color} and he is {cat.year} years old{" "}
        </p>
        <button type="button" onClick={updateColor} className="bg-gray-300">
          White
        </button>
      </div>
            {/* CAR */}
            <div className="bg-yellow-100">
        <h2>My {brand}</h2>
        <p>
          It is a {color} {model} from {year}
        </p>
      </div>
      {/* COLOR */}
      <div className="bg-red-100">
        <div>
          <span>My favorit color is: </span>
          <span style={{ color }}> {color}</span>
        </div>
        <div>
          <span>
            <button
              style={{ color: "green", margin: "1rem" }}
              type="button"
              onClick={() => setColor("green")}
            >
              Green
            </button>
          </span>
          <span>
            <button
              style={{ color: "red", margin: "1rem" }}
              type="button"
              onClick={() => setColor("red")}
            >
              Red{" "}
            </button>
          </span>
          <span>
            <button
              style={{ color: "fuchsia", margin: "1rem" }}
              type="button"
              onClick={() => setColor("fuchsia")}
            >
              Fuchsia
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
