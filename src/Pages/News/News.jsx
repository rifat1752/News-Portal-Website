import Navbar from "../Shared/Navbar/Navbar";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSidenNav";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { CgProfile } from "react-icons/cg";

const News = () => {
  const {category, setCategory,pageIndex, setPageIndex}= useContext(AuthContext)
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  console.log("auth category & index ",category,pageIndex) 


  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
    .then(res=>res.json())
    .then(data=>{
      setNews(data.articles);
      // Find the news article based on pageIndex
      const foundNews = data.articles.find((article, index) => index === pageIndex);
      setSelectedNews(foundNews);
    });
}, [category, pageIndex]);


const dateStr =selectedNews?.publishedAt;  // The timestamp

// Create a new Date object from the timestamp
const dateObj = new Date(dateStr);

// Format the date and time
const formattedDate = dateObj.toLocaleString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,  // For 12-hour format, remove this for 24-hour format
});




  return (
    <div>
      
      <div className="grid  md:grid-cols-4">
        <div className="col-span-3 flex flex-col  gap-10 m-5 p-5 bordered md:mr-5 ">
          <img className="w-full" src={selectedNews?.urlToImage} alt="" />
          <div className="flex justify-start gap-5 ">
            <p>{selectedNews?.author && (<p className="flex items-center text-xl"><CgProfile className="mr-2 text-[#fa987a]" />Author: <span className="text-[#fa987a] ml-2">{selectedNews?.author}</span></p>)}</p>
            <p className=" text-xl">{formattedDate}</p>
          </div>
          <h1 className="text-5xl font-bold"> {selectedNews?.title}</h1>
          <p className="text-lg text-slate-600">{selectedNews?.description}</p>
          <p className="text-lg text-slate-600">{selectedNews?.content}</p>
          <p>See the full Article at <span className="text-[#fa987a]"><a href={selectedNews?.url}  target="_blank" rel="noopener noreferrer">{selectedNews?.source?.name}</a></span></p>
         <Link to='/'> <button className="btn w-40  text-white bg-[#D72050]">All news</button></Link>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
