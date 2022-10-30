import { INCREMENT, DECREMENT } from "./boilerplate4";

export const increment = (payload) => ({
  type: INCREMENT,
  payload,
});
export const decrement = (payload) => ({
  type: DECREMENT,
  payload,
});
// export const increment = (payload) => {
//   return {
//     type: INCREMENT,
//     payload,
//   };
// };
// export const decrement = (payload) => {
//   return {
//     type: DECREMENT,
//     payload,
//   };
// };

