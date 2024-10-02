import './Header.css'

function Header() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          ShopNow
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <a href="/" className="cart-icon">
              <span className="cart-count">Login/SignUp</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
