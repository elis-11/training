import { useState } from "react";

export const State2 = () => {
  const [cars, setCars] = useState([
    {
      _id: "1a",
      brand: "Toyota",
      model: "Prius",
      color: "green",
      year: 2009,
      size: "Large",
      price: 79,
    },
    {
      _id: "2a",
      brand: "Ford",
      model: "Prius",
      color: "red",
      year: 2012,
      size: "Large",
      price: 61,
    },
    {
      _id: "3a",
      brand: "Volvo",
      model: "Prius",
      color: "black",
      year: 2020,
      size: "Large",
      price: 94,
    },
    {
      _id: "4a",
      brand: "BMW",
      model: "Prius",
      color: "black",
      year: 2019,
      size: "Large",
      price: 99,
    },
    {
      _id: "5a",
      brand: "Mercedes",
      model: "Prius",
      color: "green",
      year: 2021,
      size: "Large",
      price: 99,
    },
  ]);
  return <div>State2</div>;
};
