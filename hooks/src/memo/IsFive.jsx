import React, { useMemo } from "react";

let renderCount = 0;

export const IsFive = ({ value }) => {
  console.warn(`isFive render: ${++renderCount}`);

  // const getResult = () => {       //without useMemo
  //   let i = 0;
  //   while (i < 60000000) i++;
  //   return value === 5 ? " It's five  :)" : "  It isn't five :(";
  // };

  const getResult = useMemo(() => {
    let i = 0;
    while (i < 60000000) i++;
    return value === 5 ? " It's five  :)" : "  It isn't five :(";
  }, [value]);

  // return <h3>{getResult()}</h3>;  //without useMemo
  return <h3>{getResult}</h3>;
};
