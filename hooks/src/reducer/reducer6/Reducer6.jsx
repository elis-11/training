import { useReducer } from "react";

export const Reducer6 = () => {
  const initialState = { count: 10 };

  const reducer = (state, { type, payload = 1 }) => {
    switch (type) {
      case "decrement":
        return { count: state.count - 10 };
      case "increment":
        return { count: state.count + 10 };
      case "plus":
        return { count: state.count + payload };
      default:
        ({ ...state });
      // throw new Error()
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex items-center">
      <button
        className="border-2 px-6 bg-rose-100 p-2 m-5"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <h1>Count: {state.count}</h1>
      <button
        className="border-2 px-6 bg-rose-100 p-2 m-5"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
      <button
        className="border-2 px-6 bg-rose-100 p-2 m-5"
        onClick={() => dispatch({ type: "plus", payload: 100 })}
      >
        plus
      </button>
    </div>
  );
};
