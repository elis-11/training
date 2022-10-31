import { useReducer } from "react";

export const Reducer5 = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
       return { count: state.count + 10 };
      case "decrement":
       return { count: state.count - 10 };
      default:
        ({ ...state });
        // throw new Error()
    }
  };

const [state,  dispatch] = useReducer(reducer, initialState)

  return (
    <div className="flex items-center">
    <button className="border-2 px-6 bg-rose-100 p-2 m-5" onClick={() => dispatch({type: 'decrement'})}>-</button>
    <h1>Count: {state.count}</h1>
    <button className="border-2 px-6 bg-rose-100 p-2 m-5" onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  )
};
