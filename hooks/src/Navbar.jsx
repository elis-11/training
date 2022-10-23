import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className=" h-[5rem] px-5 mb-[3rem] shadow-md bg-slate-200">

      <span className='flex justify-between items-center font-bold '>
      <Link to="/" className='hover:text-violet-400 active:text-violet-600 active:-violet-600 focus:outline-none focus:ring focus:ring-violet-300'>
        Class
      </Link>
      <Link to="/state1">
        State1
      </Link>
      <Link to="/effect">
        Effect
      </Link>
      <Link to="/ref">
        Ref
      </Link>
      <Link to="/reftimer">
      RefTimer
      </Link>
      <Link to="/usecallback">
      UseCallback
      </Link>
      <Link to="/ucallback">
      UCallback
      </Link>
      <Link to="/memo">
      Memo
      </Link>
      </span>
    </nav>
  );
};
