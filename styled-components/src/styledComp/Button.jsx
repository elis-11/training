import styled from "styled-components";

export const Button = styled.button`
  padding: 10px;
  border-radius: 20px;
  font-size: 1rem;
  color: #fff;
  // background-color: rgb(230, 191, 237)
  // background-color: ${({ variant }) =>
    variant === "secondary" ? "red" : "rgb(230, 191, 237)"}
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "rgb(230, 191, 237)"};
`;
