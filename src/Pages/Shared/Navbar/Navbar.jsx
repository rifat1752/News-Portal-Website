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

 
  return (
    <div className="w-full">
      
    </div>
  );
};

export default Navbar;


{/* <div className="navbar-end">
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
        </div> */}