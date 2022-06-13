import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.css";

const NAV_ITEMS = [
  {
    route: "/",
    displayText: "Home",
    isAuthRequired: false,
  },
  {
    route: "/resources",
    displayText: "Resources",
    isAuthRequired: false,
  },
  {
    route: "/user/search",
    displayText: "Search donor",
    isAuthRequired: true,
  },
  {
    route: "/admin/dashboard",
    displayText: "Dashboard",
    isAuthRequired: true,
  },
  {
    route: "/signup",
    displayText: "Sign up",
    isAuthRequired: false,
  },
  {
    route: "/signin",
    displayText: "Sign in",
    isAuthRequired: false,
  },
  {
    route: "/signout",
    displayText: "Sign out",
    isAuthRequired: false,
  },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand group">
        <Link to="/" className="flex items-center ">
          <ion-icon name="pulse-sharp"></ion-icon>{" "}
          {/* <ion-icon name="medical-sharp"></ion-icon> */}
          <span className="ml-2 tracking-wide font-IBM lowercase text-gray-900 group-hover:text-gray-500">
            Lifeline
          </span>
        </Link>
      </div>
      <div className="navbar-toggler">
        <button onClick={toggleNavbar}>
          {isNavOpen ? (
            <ion-icon name="close"></ion-icon>
          ) : (
            <ion-icon name="menu"></ion-icon>
          )}
        </button>
      </div>
      <ul
        className={` md:flex md:justify-end md:items-center md:h-full  md:opacity-100 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto  transition-all duration-500 ease-in ${
          isNavOpen
            ? "opacity-100 top-16 bg-secondary"
            : "opacity-0 top-[-490px]"
        } md:opacity-100`}
      >
        {NAV_ITEMS.map((item, index) => {
          return (
            <li
              key={item.displayText + index}
              className="navbar-list-item"
              onClick={toggleNavbar}
            >
              <Link to={item.route}>{item.displayText}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
