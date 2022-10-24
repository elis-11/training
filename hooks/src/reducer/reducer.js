import { INCREMENT, DECREMENT } from "./boilerplate4";

export const reducer = (state, action) => {
  switch (action.type) {
    case DECREMENT:
      return {
        counter: state.counter - action.payload,
      };
    case INCREMENT:
      return {
        counter: state.counter + action.payload,
      };
    default:
      return { ...state };
  }
};
