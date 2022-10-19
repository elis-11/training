import { useEffect, useState } from "react";

export const Effect1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout()
  }, []);  
  //}, []);  // stop the timer

  return <div>I've rendered {count} times!</div>;
};
