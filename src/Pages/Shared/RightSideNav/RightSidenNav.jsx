import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext, useEffect, useState } from "react";
import moment from "moment";

const RightSideNav = () => {
  const { handleGoogleSignIn, handleGithubSignIn, user } = useContext(AuthContext);
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
    <div className={`w-full h-12 lg:w-60 ${user?"lg:h-64":"lg:h-96"} float-end lg:border-l-2 flex flex-row-reverse justify-between lg:justify-center mx-2 items-center lg:flex-col gap-5 border-[#ff8d6b]`}>
      <div className="lg:w-full py-2 lg:border-b">
        <div className="w-32 lg:w-full text-base md:text-lg lg:text-xl text-[#e25125] text-center font-semibold text-poppins">
          {formattedTime}
        </div>
        <div className="text-center hidden lg:block">{formattedDate}</div>
      </div>

      <div className="flex w-full flex-row  b lg:flex-col gap-5">
        {/* Conditionally render the entire div including buttons */}
        {!user ? (
          <div className="lg:w-full lg:border-b">
            <div className="flex flex-row lg:flex-col gap-5 lg:gap-0">
              <button
                onClick={handleGoogleSignIn}
                className="lg:mb-1 lg:pl-12 hover:scale-105 lg:hover:bg-[#ff8d6b] hover:text-white text-slate-700 flex items-center gap-2 text-xl w-full h-12 font-semibold"
              >
                <span className="hidden lg:block">Log in with</span>
                <FcGoogle className="text-xl lg:text-2xl" />
              </button>
              <button
                onClick={handleGithubSignIn}
                className="lg:mb-2 lg:pl-12 hover:scale-105 lg:hover:bg-[#ff8d6b] hover:text-white text-slate-700 flex items-center gap-2 text-xl w-full h-12 font-semibold"
              >
                <span className="hidden lg:block">Log in with</span>
                <FaGithub className="text-black text-xl lg:text-2xl" />
              </button>
            </div>
          </div>
        ) : null}

        {/* This section will always be rendered */}
        <div className="lg:w-full">
          <h2 className="hidden lg:block pl-4 text-2xl font-bold text-[#005A7F]">Find Us On</h2>
          <div className="social lg:pl-12 gap-5 lg:gap-0 w-full flex flex-row-reverse lg:flex-col">
            <a
              href="#"
              className="lg:hover:bg-[#ff8d6b] hover:text-white text-slate-700 gap-2 flex items-center text-base md:text-xl w-full h-12 font-semibold"
            >
              <MdFacebook className="text-blue-600 text-lg md:text-xl lg:text-2xl hover:scale-105" />
              <span className="hidden lg:block">Facebook</span>
            </a>
            <a
              href="#"
              className="lg:hover:bg-[#ff8d6b] hover:text-white text-slate-700 gap-2 flex items-center text-base md:text-xl w-full h-12 font-semibold"
            >
              <FaTwitter className="text-blue-600 text-lg md:text-xl lg:text-2xl hover:scale-105" />
              <span className="hidden lg:block">Twitter</span>
            </a>
            <a
              href="#"
              className="lg:hover:bg-[#ff8d6b] hover:text-white text-slate-700 gap-2 flex items-center text-base md:text-xl w-full h-12 font-semibold"
            >
              <FaInstagram className="text-fuchsia-600 text-lg md:text-xl lg:text-2xl hover:scale-105" />
              <span className="hidden lg:block">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
