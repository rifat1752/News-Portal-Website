import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2/src/sweetalert2.js";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photoURL, email, password);
    //
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        e.target.reset();
        Swal.fire({
          title: "success!",
          text: "Register Successful!",
          icon: "success",
        });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <div>
        <div className="hero ">
          <div className="hero-content rounded-sm flex-col ">
            <div className="text-center  mb-5 lg:text-left">
              <h1 className="text-5xl font-bold ">Register Your Account</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl shadow-blue-500">
              <form onSubmit={handleRegister} className="card-body w-96">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base  font-semibold">
                      Your Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base  font-semibold">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base  font-semibold">
                      Email Address
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-semibold">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <div className="flex items-center text-sm"></div>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-slate-900 text-slate-100 text-2xl">
                    Register
                  </button>
                </div>
                <div className="text-center text-sm">
                  <p className="ml-5">
                    {" "}
                    Have an Account?{" "}
                    <Link
                      to="/login"
                      className="hover:underline text-green-600 hover:text-green-600 font-semibold ml-2"
                    >
                      {" "}
                      Log In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
