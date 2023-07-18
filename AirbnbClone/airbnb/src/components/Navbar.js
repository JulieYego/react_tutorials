import logo from "../assets/images/airbnb.png";
import "../assets/styles/styles.css";

function Navbar() {
  return (
    <nav>
      <img className="nav--logo" src={logo} alt="logo" />
    </nav>
  );
}

export default Navbar;
