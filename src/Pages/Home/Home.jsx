import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSidenNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div className="">
            <div className="head flex mb-16 flex-col items-center text-center ">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border"><LeftSideNav></LeftSideNav></div>
            <div className=" md:col-span-2 border"><h2 className="text-2xl">News Coming soon</h2></div>
            <div className="border shadow-md"><RightSideNav></RightSideNav></div> 
            </div>     
        </div>
    );
};

export default Home;