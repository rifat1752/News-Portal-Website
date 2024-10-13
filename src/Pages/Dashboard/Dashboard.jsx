
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import NewsCard from "../Shared/NewsCard/NewsCard";


const Dashboard = () => {
  
    return (
        <div className="grid grid-cols-6">
           <div className="col-span-5">
           <Outlet></Outlet>
           </div>
           <div className=" mx-auto flex flex-col  gap-1 items-end ">
                <Link to='/dashboard' className="bg-[#ff8d6b] hover:bg-slate-600 transition duration-300 w-36 text-center h-10  py-2 font-bold text-slate-50 ">Bookmarked News</Link>
                <Link to='/dashboard/profile' className="bg-[#ff8d6b] hover:bg-slate-600 transition duration-300 w-36 text-center h-10  py-2 font-bold text-slate-50 ">Update Profile</Link>
            </div>
        </div>
    );
};

export default Dashboard;

// const [bookedNews, setBookedNews] = useState([]) 
    
// useEffect(()=>{
//     const savedNews = JSON.parse(localStorage.getItem('savedNews')) || [];
//     setBookedNews(savedNews);
// },[])

// <div className="flex gap-3  flex-wrap justify-center">
// {
//     bookedNews.map(news=> <NewsCard key={news.index}  anews={news} booked={true}></NewsCard>)
// }
// </div>