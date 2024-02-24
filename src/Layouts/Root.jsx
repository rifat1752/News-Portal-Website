import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import BreakingNews from "../Pages/Home/BreakingNews";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto font-Poppins">
      <div className="head flex mb-16 flex-col items-center text-center ">
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
