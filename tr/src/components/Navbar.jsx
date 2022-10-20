import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ margin: "3rem" }}>
      <Link to="/" style={{ margin: "3rem", color: "green" }}>
        Hooks
      </Link>
      <Link to="/class" style={{ margin: "3rem", color: "green" }}>
        Class
      </Link>
    </nav>
  );
};
