
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import NewsCard from "../Shared/NewsCard/NewsCard";


const Dashboard = () => {
  
    return (
        <div className="flex flex-col-reverse ">
           <div className="">
           <Outlet></Outlet>
           </div>
           <div className=" mx-auto flex flex-row   gap-5 items-end ">
           <NavLink 
  to="/dashboard" 
  end
  className={({ isActive, isPending }) => 
    isPending ? "pending" : isActive 
    ? "bg-[#ff8d6b] hover:bg-[#fd5522]  transition duration-300 w-32 text-center h-10 py-2 font-bold text-slate-50" 
    : "bg-[#005A7F] hover:bg-[#3589aa] transition duration-300 w-32 text-center h-10 py-2 font-bold text-slate-50"
  }
>
  Bookmarked
</NavLink>

<NavLink 
  to="/dashboard/profile" 
  className={({ isActive, isPending }) => 
    isPending ? "pending" : isActive 
    ? "bg-[#ff8d6b] hover:bg-[#fd5522] transition duration-300 w-32 text-center h-10 py-2 font-bold text-slate-50" 
    : "bg-[#005A7F] hover:bg-[#3589aa] transition duration-300 w-32 text-center h-10 py-2 font-bold text-slate-50"
  }
>
  Update Profile
</NavLink>

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