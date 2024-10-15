
import { useEffect, useState } from "react";
import Navbar1 from "../Navbar/Navbar1";
import { Link } from "react-router-dom";
import moment from "moment";
const Header = () => {
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
    <div className="flex flex-row w-full mb-5  items-center ">
       <div className="w-1/3 flex  mt-0 md:-mt-5  ">
    <Navbar1></Navbar1>
    </div>
      
      <div className="w-1/3  flex flex-col  justify-start items-center ">
      <Link to='/'>   <img
        className=" w-64 mx-auto "
        src="https://i.ibb.co.com/vVBx4Lv/logo.png"
        alt=""
      /></Link>
   
      <h1 className="text-xs sm:text-base md:text-lg lg:text-xl w-72 text-center  text-slate-500">
        Journalism Without Fear or Favour
      </h1>
      </div>
    
    </div>
  );
};

export default Header;
