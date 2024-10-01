import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import BreakingNews from "../Pages/Home/BreakingNews";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar_Categories from "../Pages/Shared/Navbar/Navbar_Categories";

const Root = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 font-Poppins bg-white">
      <div className="head flex mb-16 flex-col items-center text-center ">
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar_Categories root={true}></Navbar_Categories>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
