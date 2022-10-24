import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "decrement":
      return {
        counter: state.counter - action.payload,
      };
    case "increment":
      return {
        counter: state.counter + action.payload,
      };
  }
};

export const Reducer2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 1,
  });

  return (
    <div>
      <button className='border-2 px-6 bg-rose-100 p-2 m-5'
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: 2,
          })
        }
      >
        -2
      </button>
          <button className='border-2 px-6 bg-rose-100 p-2 m-5'
            onClick={() =>
              dispatch({
                type: "decrement",
                payload: 1,
              })
            }
          >
            -1
          </button>

      <span>{state.counter}</span>

      <button className='border-2 px-6 bg-rose-100 p-2 m-5'
        onClick={() =>
          dispatch({
            type: "increment",
            payload: 1,
          })
        }
      >
        +1
      </button>

      <button className='border-2 px-6 bg-rose-100 p-2 m-5'
        onClick={() =>
          dispatch({
            type: "increment",
            payload: 2,
          })
        }
      >
        +2
      </button>
    </div>
  );
};
