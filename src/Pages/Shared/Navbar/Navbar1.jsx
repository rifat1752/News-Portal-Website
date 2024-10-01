
import { Link, NavLink } from "react-router-dom";
import Navbar_Categories from "./Navbar_Categories";


const Navbar1 = () => {
   
    return (
        <div className="nav   ">
            <label  className=" z-10 -top-5 -left-1 relative">
                <input type="checkbox" className="nav-input" name="" id="" />
                <div className="toggle-button ml-2 cursor-pointer ">
                    <span className="top_line  common"></span>
                    <span className="middle_line common"></span>
                    <span className="bottom_line common"></span>
                </div>
               <div className="nav-slide  text-poppins bg-[#fafafa] rounded  ">
               <h1 className="text-3xl pl-24 pt-2 pb-4 font-extrabold text-[#ff8d6b]">Menu</h1>
                <ul className="text-left border-b-2">
                    <li >
                        <NavLink className=" link-nav pl-5 cursor-pointer " to="/">Home</NavLink>
                    </li>
                    <li >
                        <NavLink className="link-nav pl-5 cursor-pointer" to='/about'>About Us</NavLink>
                    </li>
                    <li >
                        <NavLink className="link-nav pl-5 cursor-pointer">Contact Us</NavLink>
                    </li>
                    <li >
                        <NavLink className="link-nav pl-5 cursor-pointer">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink className="link-nav pl-5 cursor-pointer">LogOut</NavLink>
                    </li>
                </ul>
                <Navbar_Categories toggle={true}></Navbar_Categories>
               </div>
            </label>
        </div>
    );
};

export default Navbar1;

<li className="list-none mx-6 text-lg   font-bold"><NavLink to='/' className={({ isActive, isPending }) =>isActive? "active text-[#FF007F] ": isPending? "pending": ""}>Home</NavLink></li>