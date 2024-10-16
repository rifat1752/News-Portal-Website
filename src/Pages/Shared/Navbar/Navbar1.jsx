
import {  Link, NavLink } from "react-router-dom";
import Navbar_Categories from "./Navbar_Categories";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


const Navbar1 = () => {
    const { user,logOut, photo } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
          .then(() => {
            toast.success('Sign Out successful!')
          })
          .catch((error) => {
            toast.error("Error! Failed to Sign Out")
            
          });
      };
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
                {
                    user? <div className="flex border-b-2  flex-col justify-center items-end my-2">
                        <img className=" mr-8 w-12 h-12 border-2 my-1 border-slate-500 rounded-full bg-red-300" src={photo} alt="" />
                        <p className=" mr-2 font-bold text-sm">{user?.displayName}                        </p>
                    </div>:<h1 className="text-3xl pl-24 pt-2 pb-4 font-extrabold text-[#005A7F]">Menu</h1>
                }
               
                <ul className="text-left border-b-2">
                <li>
                        <NavLink 
                            className={({ isActive }) => 
                                `link-nav pl-5 cursor-pointer ${isActive ? 'bg-[#ff8d6b] text-white' : ''}`
                            } 
                             exact="true"
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                       {
                        user? <NavLink 
                        className={({ isActive }) => 
                            `link-nav pl-5 cursor-pointer ${isActive ? 'bg-[#ff8d6b] text-white' : ''}`
                        } 
                         exact="true"
                        to="/dashboard"
                    >
                        Dashboard
                    </NavLink>:''
                       }
                    </li>
                    <li>
                        <NavLink 
                            className={({ isActive }) => 
                                `link-nav pl-5 cursor-pointer ${isActive ? 'bg-[#ff8d6b] text-white' : ''}`
                            } 
                            to="/about"
                            
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({ isActive }) => 
                                `link-nav pl-5 cursor-pointer ${isActive ? 'bg-[#ff8d6b] text-white' : ''}`
                            } 
                             exact="true"
                            to="/contact"
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    
                    <li>
                        {
                            user?<Link to='/' onClick={handleSignOut} className="link-nav pl-5 cursor-pointer w-full text-left   ">LogOut</Link>:<NavLink to='/login' className="link-nav pl-5 cursor-pointer">Log In</NavLink>
                        }
                        
                    </li>
                </ul>
                <Navbar_Categories toggle={true}></Navbar_Categories>
               </div>
            </label>
        </div>
    );
};

export default Navbar1;

