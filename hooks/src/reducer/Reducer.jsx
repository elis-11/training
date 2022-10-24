import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "incriminate":
      return {
        counter: state.counter + 1,
      };
  }
};

export const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 1,
  });
  const handleClick = () => {
    dispatch({
      type: "incriminate",
      payload: 1,
    });
  };

  return (
    <div>
      <button onClick={handleClick} className='border-2 px-6 bg-rose-100 p-2 m-5'>
        I was clicked {state.counter} times!
      </button>
    </div>
  );
};
