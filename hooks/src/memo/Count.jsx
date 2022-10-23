import React from "react";

const render = {
  count1: 0,
  count2: 0,
};

export default React.memo(function Count({ id, value }) {
  console.warn(`Count${id} render: ${++render[`count${id}`]}`); //sooobshenie

  return (
    <div>
      <h1 className="bg-slate-200 px-3">{value}</h1>
    </div>
  );
});
