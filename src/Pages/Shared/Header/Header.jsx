
import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";
import MenuButton from "./MenuButton";
import Navbar1 from "../Navbar/Navbar1";
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
  const formattedDate = currentTime.format("dddd, MMMM Do, YYYY");
  const formattedTime = currentTime.format("h:mm:ss A");


  return (
    <div className="flex flex-row  w-full items-center justify-between">
       <div className="w-1/3 flex  -mt-10 ">
    <Navbar1></Navbar1>
    </div>
      <div className="w-1/3 flex flex-col justify-start ">
      <img
        className=" mx-auto h-16 "
        src="https://i.ibb.co.com/vVBx4Lv/logo.png"
        alt=""
      />
      <h1 className="text-xl  text-slate-500">
        Journalism Without Fear or Favour
      </h1>
      </div>
      <div className="text-xl w-1/3  mt-2">
      <div>{formattedDate}</div>
      <div>{formattedTime}</div>
      </div>
   
    <div className="right-bar">
      
    </div>
    </div>
  );
};

export default Header;
