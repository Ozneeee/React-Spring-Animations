import "../Navbar/Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Liste</Link>
      <Link to="/stateAnim">State</Link>
      <Link to="/scroll">Scroll</Link>
    </nav>
  );
};

export default Navbar;
