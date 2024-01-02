import Navbar from "../Shared/Navbar/Navbar";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSidenNav";
import { useParams } from "react-router-dom";


const News = () => {
    const {id} = useParams();
    return (
        <div >
           <div className="head flex mb-16 flex-col items-center text-center ">
            <Header></Header>
            <Navbar></Navbar>
            </div>
            <div className="grid md:grid-cols-4">
               <div className="col-span-3">
                <h2>news details</h2>
                <p>{id}</p>
                </div> 
               <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default News;