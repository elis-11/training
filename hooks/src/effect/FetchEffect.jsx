import { useEffect, useState } from "react";

export const FetchEffect = () => {
  //! 1 - DATA from API
  //   const [users, setUsers] = useState([]);
  //   const [search, setSearch] = useState('')

  //   useEffect(() => {
  //     // fetch("/users")
  //     fetch("/users?search=" + search)
  //       .then((response) => response.json())
  //       .then((users) => setUsers);
  // //   }, []);
  //   }, [search]);

  //! 2 - Timer
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const flagInterval = setInterval(() => {
      console.log("fired");
      setTimer(timer + 1);
    }, 5000);
    return () => clearInterval(flagInterval);
  });
  return <div>{timer}</div>;
};
