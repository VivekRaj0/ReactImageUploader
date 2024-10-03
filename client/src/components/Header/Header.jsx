import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <a className="logo" href="/">Logo.</a>
      </div>
      <div className="navbar-center">
        <ul className="menu">
          <li className="home">
            <Link to="/">Home</Link>
          </li>
          <li className="about">
            <Link to="/about">About</Link>
          </li>
          <li className="contact">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="auth">
            <li>
                 <Link to="/signup">SignUp</Link>
            </li>
            <li>
                 <Link to="/login">Login</Link>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
