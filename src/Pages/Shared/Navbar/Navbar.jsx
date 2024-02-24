import { Link, NavLink } from "react-router-dom";

import userDefault from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut, photo } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "success!",
          text: "LogOut Successfull!",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "success!",
          text: "LogOut Successfull!",
          icon: "error",
        });
      });
  };

  const NavLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="ml-2">
        <NavLink to="/about">About</NavLink>
      </li>

     
    </>
  );
  return (
    <div className="w-full">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="w-10 mr-1">
            {user && <img className="rounded-full" src={photo} alt="user" />}
          </div>
          {user ? (
            <Link to="/">
              {" "}
              <button
                onClick={handleSignOut}
                className="btn btn-outline btn-info"
              >
                Log Out
              </button>
            </Link>
          ) : (
            <Link to="/login">
              {" "}
              <button className="btn btn-outline btn-info">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
