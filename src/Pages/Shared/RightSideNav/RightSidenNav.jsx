import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaInstagram, FaTwitter  } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";

import Qzon1 from "../../../assets/qZone1.png"
import Qzon2 from "../../../assets/qZone2.png"
import Qzon3 from "../../../assets/qZone3.png"
import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext, useEffect, useState } from "react";
import moment from "moment";


const RightSideNav = () => {
  const {handleGoogleSignIn, handleGithubSignIn} = useContext(AuthContext)
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Split the format for date and time
  const formattedDate = currentTime.format("dddd, MMMM Do YYYY");
  const formattedTime = currentTime.format("h:mm:ss A");

  return (
    <div className="w-60  h-96 float-end  border-l-2 flex flex-col gap-1  border-[#ff8d6b]">
        <div className="py-2 border-b">
          <div className=" text-center  font-semibold text-poppins">{formattedTime}</div>
          <div className=" text-center">{formattedDate}</div>
        </div>
      <div className=" border-b">
       <div className="flex flex-col ">
       <button onClick={handleGoogleSignIn} className="mb-1 pl-16 hover:bg-[#ff8d6b] hover:text-white text-slate-700 flex items-center gap-2 text-xl w-full h-12  font-semibold">
       Log in with
        <FcGoogle />  
       </button>
        <button onClick={handleGithubSignIn} className="mb-2 pl-16  hover:bg-[#ff8d6b] hover:text-white text-slate-700 flex items-center gap-2 text-xl w-full h-12  font-semibold">
        Log in with
        <FaGithub className="text-black" />
        </button>
       </div>
      </div>

      <div className="my-5 ">
        <h2 className="ml-4 text-2xl font-bold text-[#005A7F] ">Find Us On</h2>
       <div className="social   w-full flex flex-col ">
        <a href="" className=" pl-16  hover:bg-[#ff8d6b] hover:text-white text-slate-700 flex items-center gap-2 text-xl w-full h-12  font-semibold"><MdFacebook className="text-blue-600"/> Facebook</a>
        <a href="" className="pl-16   hover:bg-[#ff8d6b] hover:text-white text-slate-700 flex items-center gap-2 text-xl w-full h-12  font-semibold"><FaTwitter className="text-blue-600"/> Twitter</a>
        <a href="" className="pl-16  hover:bg-[#ff8d6b] hover:text-white text-slate-700 flex items-center gap-2 text-xl w-full h-12  font-semibold"><FaInstagram className="text-fuchsia-600"/> Instagram</a>
       </div>
      </div>
    </div>
  );
};

export default RightSideNav;
