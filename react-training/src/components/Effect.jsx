import { useEffect, useState } from "react";

export const Effect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, []);

  return (
    <div>
      <DisplayData data={data} />
    </div>
  );
};
