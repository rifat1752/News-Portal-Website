import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from 'sweetalert2/src/sweetalert2.js'



const Login = () => {
    const {login} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogin = e =>{
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // log in
        login(email,password)
        .then(Result=>{
            console.log(Result.user);
            e.target.reset();
            navigate(location?.state?location.state:'/');
            Swal.fire({
                title: "success!",
                text: "Login Successfull!",
                icon: "success"
              })
        })
        .catch(error=>{
          console.error(error)
        })
    }


    return (
        <div>
           <Navbar></Navbar>
           <div>
           <div className="hero ">
  <div className="hero-content flex-col ">
    <div className="text-center  my-5 lg:text-left">
      <h1 className="text-5xl font-bold ">Login Your Account</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl shadow-blue-500">
      <form onSubmit={handleLogin} className="card-body w-96">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base  font-semibold">Email Address</span>
          </label>
          <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-semibold">Password</span>
          </label>
          <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
          <label className="label">
           <div className="flex items-center text-sm"> <a href="#" className="label-text-alt hover:underline text-red-600 font-semibold">Forgot password?</a>
            <p className="ml-5">Don&apos;t have an Account? <Link to='/register' className="hover:underline text-green-600 hover:text-green-600 font-semibold"> Register</Link></p></div>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  className="btn bg-slate-900 text-slate-100 text-2xl">Log in</button>
        </div>
      </form>
    </div>
  </div>
</div>
           </div>
         
        </div>
    );
};

export default Login;