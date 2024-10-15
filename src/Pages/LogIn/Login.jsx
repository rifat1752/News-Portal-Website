import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2/src/sweetalert2.js";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const Login = () => {
  const { login,loading, setLoading, handleGithubSignIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  

  const handleLogin = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // log in
    login(email, password)
      .then((Result) => {
        console.log(Result.user);
        e.target.reset();
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          title: "success!",
          text: "Login Successfull!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const googleProvider = new GoogleAuthProvider()
  const handleGoogle =()=>{

        signInWithPopup(auth,googleProvider)
    .then(result =>{
      const user = result.user; 
      console.log(user); 
    
      navigate(location?.state? location.state : "/");
      Swal.fire({
          title: "success!",
          text: "Login Successfull!",
          icon: "success"
        })
  })
  .catch(error =>{
      console.log("error", error);
  })
  }


  const githubProvider = new GithubAuthProvider();
  const githubHandle=()=>{

    signInWithPopup(auth, githubProvider)
    .then(result=>{
      const user = result.user; 
      console.log(user); 
    
      navigate(location?.state? location.state : "/");
       Swal.fire({
           title: "success!",
           text: "Login Successful!",
           icon: "success"
         })
   })
   .catch(error =>{
       console.log("error", error)
   })
  }
  return (
    <div className=" ">
      <div>
        <div className=" ">
          <div className=" my-10">
            <div className="text-center  my-5 lg:text-left">
              <h1 className="text-5xl font-bold text-[#005A7F] text-poppins text-center ">Login Your Account</h1>
            </div>
           <div className=" my-10 py-10 flex justify-around items-center">
           <div className="hidden md:block" >
              <img className="w-72 h-[320px] lg:w-[360px] lg:h-96" src="https://i.ibb.co.com/tLQbn7q/information.jpg" alt="" />
            </div>
            <div className=" border  p-5 rounded   shadow-lg shadow-[#005A7F]">
              <form onSubmit={handleLogin} className=" flex flex-col sm:w-80 w-[280px]">
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
                  <span className=" text-2xl text-[#005A7F]  font-semibold">
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
                    <div className="flex items-center text-sm">
                      {" "}
                      <a
                        href="#"
                        className="label-text-alt hover:underline text-red-600 font-semibold"
                      >
                        Forgot password?
                      </a>
                      <p className="ml-5">
                        Don&apos;t have an Account?{" "}
                        <Link
                          to="/register"
                          className="hover:underline text-green-600 hover:text-green-600 font-semibold"
                        >
                          {" "}
                          Register
                        </Link>
                      </p>
                    </div>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="bg-[#ff8d6b] h-10 text-xl font-bold text-[#364347] rounded-full hover:bg-[#005A7F] hover:text-white transition-all duration-500 ">
                    Log in
                  </button>
                </div>
                <p className="text-center text-[#ff8d6b] text-2xl font-bold my-2">or</p>
              </form>
              
              <div className="flex justify-center gap-10 items-center">
                  <button
                    onClick={()=>handleGoogle()}
                    className=" "
                  >
                    <FcGoogle className="hover:scale-110 text-3xl" />
                  </button>
                  <button
                    onClick={()=>{githubHandle()}}
                    className="hover:scale-110 text-3xl"
                  >
                    <FaGithub />
                  </button>
                </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
