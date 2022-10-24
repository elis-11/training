import { useReducer } from "react";

const DECREMENT = "decrement";
const INCREMENT = "increment";

const increment = (payload) => ({
  type: INCREMENT,
  payload,
});
const decrement = (payload) => ({
  type: DECREMENT,
  payload,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "DECREMENT":
      return {
        counter: state.counter - action.payload,
      };
    case "INCREMENT":
      return {
        counter: state.counter + action.payload,
      };
  }
};

export const Reducer3 = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 1,
  });

  return (
    <div>
      <button
        className="border-2 px-6 bg-rose-100 p-2 m-5"
        onClick={() => dispatch(decrement - 2)}
      >
        -2
      </button>
      <button
        className="border-2 px-6 bg-rose-100 p-2 m-5"
        onClick={() => dispatch(decrement - 1)}
      >
        -1
      </button>

      <span>{state.counter}</span>

      <button
        className="border-2 px-6 bg-rose-100 p-2 m-5"
        onClick={() => dispatch(increment + 1)}
      >
        +1
      </button>

      <button
        className="border-2 px-6 bg-rose-100 p-2 m-5"
        onClick={() => dispatch(increment + 2)}
      >
        +2
      </button>
    </div>
  );
};
