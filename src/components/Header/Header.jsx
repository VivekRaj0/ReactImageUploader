import "./Header.css";

function Header() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <a className="logo" href="/">Logo.</a>
      </div>
      <div className="navbar-center">
        <ul className="menu">
          <li className="home">
            <a href="/">Home</a>
          </li>
          <li className="about">
            <a>About</a>
          </li>
          <li className="contact">
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="auth">
            <li>
                 <a href="/">SignUp</a>
            </li>
            <li>
                 <a href="/">Login</a>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
