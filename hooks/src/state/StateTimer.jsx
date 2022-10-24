import { useState } from "react";

export const StateTimer = () => {
  const [counts, setCounts] = useState([0, 0, 0]);

  const count = (n) => setCounts(counts.map((v, i) => v + (i === n)));

  //   const count = (n) => {
  //     setCounts(
  //       counts.map((v, i) => {
  //         if (n === i) {
  //           return v + 1;
  //         }
  //         return v;
  //       })
  //     );
  //   };

  return (
    <div className="flex justify-center">
      <ul>
        {[0, 1, 2].map((v)=>(
            <li key={v}>
          <button
            className="w-48 mb-1 p-3 bg-violet-200"
            onClick={() => count(v)}
            >
            I was clicked: {counts[v]} times
          </button>
        </li>
              ))}
      </ul>
    </div>
  );
};
