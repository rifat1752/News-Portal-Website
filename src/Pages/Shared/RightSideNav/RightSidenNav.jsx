import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaInstagram, FaTwitter  } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";

import Qzon1 from "../../../assets/qZone1.png"
import Qzon2 from "../../../assets/qZone2.png"
import Qzon3 from "../../../assets/qZone3.png"
import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext } from "react";


const RightSideNav = () => {
  const {handleGoogleSignIn, handleGithubSignI} = useContext(AuthContext)
  return (
    <div>
      <div className="">
        <h2 className="ml-2 text-2xl font-bold my-5">Login with</h2>
       <div className="flex flex-col items-center">
       <button onClick={handleGoogleSignIn} className="btn btn-outline mb-2 w-[90%] btn-info">
        <FcGoogle />
               Log in with Google
         </button>
        <button onClick={handleGithubSignI} className="btn btn-outline mb-2 w-[90%] btn-info">
        <FaGithub />
        Log in with gitHub
        </button>
       </div>
      </div>

      <div className="my-10 ">
        <h2 className="ml-2 text-2xl font-bold my-5">Find Us On</h2>
       <div className="social   w-full flex flex-col">
        <a href="" className="border w-full pl-4  hover:bg-emerald-100  flex items-center py-2 text-slate-600  text-xl font-semibold"><MdFacebook className="text-blue-600  mx-2"/> Facebook</a>
        <a href="" className="border w-full pl-4  hover:bg-emerald-100  flex items-center py-2 text-slate-600  text-xl font-semibold"><FaTwitter className="text-blue-600  mx-2"/> Twitter</a>
        <a href="" className="border w-full  pl-4 hover:bg-emerald-100 flex items-center py-2 text-slate-600  text-xl font-semibold"><FaInstagram className="text-fuchsia-600  mx-2"/> Instagram</a>
       </div>
      </div>

      <div className="bg-slate-200 mt-20 py-5 rounded">
      <h2 className="ml-2  text-2xl font-bold   ">Q-Zone</h2>
      
       <div className="img  my-5 grid grid-rows-3 gap-5">
       <img src={Qzon1} alt="" />
        <img src={Qzon2} alt="" />
        <img src={Qzon3} alt="" />
       </div>
      </div>
    </div>
  );
};

export default RightSideNav;
