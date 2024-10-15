import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2/src/sweetalert2.js";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);
  const navigate = useNavigate()
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
        navigate(location?.state?location.state:'/');
        Swal.fire({
          title: "success!",
          text: "Register Successful!",
          icon: "success",
        });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="">
      <div>
        <div className="">
          
          <div className="my-10 ">
            <div className="text-center  mb-5 lg:text-left">
              <h1 className="text-5xl font-bold text-[#005A7F] text-poppins text-center">Register Your Account</h1>
            </div>
            <div className=" my-10 py-10 flex justify-around items-center">
            <div className="hidden md:block">
              <img className="w-72 h-[320px] lg:w-[360px] lg:h-96" src="https://i.ibb.co.com/tLQbn7q/information.jpg" alt="" />
            </div>
            <div className="  border  p-5 rounded  shadow-lg shadow-[#005A7F]">
              <form onSubmit={handleRegister} className="flex flex-col   sm:w-80 w-[280px]">
                <div className="form-control">
                  <label className="label">
                    <span className="text-2xl text-[#005A7F]  font-semibold">
                      Your Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    className="h-10 outline-none border-b-2 border-[#005A7F] hover:border-[#ff8d6b] transition-all duration-500"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-2xl text-[#005A7F]  font-semibold">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                   className="h-10 outline-none border-b-2 border-[#005A7F] hover:border-[#ff8d6b] transition-all duration-500"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                  <span className="text-2xl text-[#005A7F]  font-semibold">
                      Email Address
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                   className="h-10 outline-none border-b-2 border-[#005A7F] hover:border-[#ff8d6b] transition-all duration-500"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                  <span className="text-2xl text-[#005A7F]  font-semibold">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="h-10 outline-none border-b-2 border-[#005A7F] hover:border-[#ff8d6b] transition-all duration-500"
                    required
                  />
                  <label className="label">
                    <div className="flex items-center text-sm"></div>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="bg-[#ff8d6b] h-10 text-xl font-bold text-[#364347] rounded-full hover:bg-[#005A7F] hover:text-white transition-all duration-500 ">
                    Register
                  </button>
                </div>
                <div className="text-center my-5 text-sm">
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
    </div>
  );
};

export default Register;
