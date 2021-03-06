import { useContext, useState } from "react";
import { UserContext } from "./../../store/UserContext";
import { Link } from "react-router-dom";
import "./navbar.styles.css";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
  };
  return (
    <nav
      className={`navbar md:shadow-none ${
        isNavOpen &&
        "shadow-lg shadow-accent-50  transition-all duration-500 ease-in "
      }`}
    >
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
      <div
        className={` md:flex md:justify-end md:items-center md:h-full  md:opacity-100 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto  transition-all duration-500 ease-in ${
          isNavOpen
            ? "opacity-100 top-[70px] bg-secondary drop-shadow-2xl"
            : "opacity-0 top-[-490px]"
        } md:opacity-100 md:bg-transparent`}
      >
        {currentUser && (
          <>
            <Link
              to="/"
              className="navbar-list-item"
              onClick={toggleNavbar}
              key="homeRoute"
            >
              <span>
                Home
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block ml-1 mb-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </span>
            </Link>

            <Link
              to="/resources"
              className="navbar-list-item"
              onClick={toggleNavbar}
              key="resourceRoute"
            >
              <span>
                Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block ml-1 mb-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </span>
            </Link>
          </>
        )}
        {currentUser?.isSignedIn && (
          <Link
            to="/user/search"
            className="navbar-list-item"
            onClick={toggleNavbar}
            key="searchDonorRoute"
          >
            <span>
              Search donor
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block ml-1 mb-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Link>
        )}
        {currentUser?.isSignedIn &&
          currentUser?.isAdmin(
            <Link
              to="/admin/dashboard"
              className="navbar-list-item"
              onClick={toggleNavbar}
              key="adminDashboardRoute"
            >
              <span>
                Dashboard
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block ml-1 mb-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
                </svg>
              </span>
            </Link>
          )}
        {!currentUser && (
          <>
            <Link
              to="/signup"
              className="navbar-list-item"
              onClick={toggleNavbar}
              key="signupRoute"
            >
              <span>
                Sign up
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block ml-1 mb-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
              </span>
            </Link>

            <Link
              to="/signin"
              className="navbar-list-item"
              onClick={toggleNavbar}
              key="signInRoute"
            >
              <span>
                Sign In
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block ml-1 mb-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </>
        )}
        {currentUser && (
          <Link
            to="/signout"
            className="navbar-list-item"
            onClick={toggleNavbar}
            key="signOutRoute"
          >
            <span>
              Sign out
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block ml-1 mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
