
import Navbar1 from "../Navbar/Navbar1";
import { Link } from "react-router-dom";
const Header = () => {


  return (
    <div className="flex flex-row w-full items-center ">
       <div className="w-1/3 flex  -mt-10 ">
    <Navbar1></Navbar1>
    </div>
      
      <div className="w-1/3 flex flex-col justify-start ">
      <Link to='/'>   <img
        className=" mx-auto h-16 "
        src="https://i.ibb.co.com/vVBx4Lv/logo.png"
        alt=""
      /></Link>
   
      <h1 className="text-xl  text-slate-500">
        Journalism Without Fear or Favour
      </h1>
      </div>

    
   
    <div className="right-bar">
      
    </div>
    </div>
  );
};

export default Header;
