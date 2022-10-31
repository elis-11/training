import { useReducer } from "react";
import { reducer } from "./reducer";
import { increment, decrement } from "./actions";

export const Reducer4 = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 1,
  });

  return ( 
    <div>
      <button
        className="border-2 px-6 bg-rose-100 p-2 m-5"
        onClick={() => dispatch(decrement(2))}
      >
        -2
      </button>
      <button
        className="border-2 px-6 bg-rose-100 p-2 m-5"
        onClick={() => dispatch(decrement(1))}
      >
        -1
      </button>

      <span>{state.counter}</span>

      <button
        className="border-2 px-6 bg-rose-100 p-2 m-5"
        onClick={() => dispatch(increment(1))}
      >
        +1
      </button>

      <button
        className="border-2 px-6 bg-rose-100 p-2 m-5"
        onClick={() => dispatch(increment(2))}
      >
        +2
      </button>
    </div>
  );
};


