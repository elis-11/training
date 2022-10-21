import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ margin: "0 3rem", }}>
      <Link to="/" style={{ margin: "3rem", color: "green", fontWeight: 'bold' }}>
        Class
      </Link>
      <Link to="/hooks" style={{ margin: "3rem", color: "green", fontWeight: 'bold' }}>
        Hooks
      </Link>
      <Link to="/ref" style={{ margin: "3rem", color: "green", fontWeight: 'bold' }}>
        Ref
      </Link>
    </nav>
  );
};
