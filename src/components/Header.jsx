import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Logo = () => {
  return (
    <div className="w-24">
      <img
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
        alt="logo"
      />
    </div>
  );
};
const NavItem = () => {
  const cartItem = useSelector((store) => store.cart.items)
  return (
    <div className="nav-list-item">
      <ul className="flex gap-4">
        <Link to={"/"}>
          <li>Home</li>
        </Link>

        <Link to={"/about"}>
          <li>About</li>
        </Link>
        
        <Link to={'/contact'}>
          <li>Contact</li>
        </Link>

        <Link to={'/instamart'}>
          <li>Instamart</li>
        </Link>

        <Link to={'/registration'}>
          <li>Registration</li>
        </Link>
        <li>cart - {cartItem.length} item</li>
      </ul>
    </div>
  );
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {user} = useContext(UserContext);
  return (
    <header className="flex justify-between items-center bg-purple-100 shadow-lg">
      <Logo />
      <NavItem />
      <span className="font-bold text-red-900">{user.name}</span>
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Log out
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </header>
  );
};

export default Header;
