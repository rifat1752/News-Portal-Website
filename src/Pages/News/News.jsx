import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSidenNav";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { CgProfile } from "react-icons/cg";
import Loading from "../../Components/Loading/Loading";

const News = () => {
  const [loading, setLoading] = useState(false);
  const {category, setCategory,pageIndex, setPageIndex}= useContext(AuthContext)
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);


  useEffect(()=>{
    setLoading(true);
    fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
    .then(res=>res.json())
    .then(data=>{
      setNews(data.articles);
      // Find the news article based on pageIndex
      const foundNews = data.articles.find((article, index) => index === pageIndex);
      setSelectedNews(foundNews);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false); // Ensure loading is turned off even if there's an error
    });
}, [category, pageIndex]);


const dateStr =selectedNews?.publishedAt;  // The timestamp

// Create a new Date object from the timestamp
const dateObj = new Date(dateStr);

// Format the date and time
const formattedDate = dateObj.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
});
const formattedTime = dateObj.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true  // For 12-hour format, remove this for 24-hour format
});


if (loading) {
  return <Loading />;
}
  return (
    <div className="">
      
      <div className=" my-5 flex flex-col-reverse lg:grid lg:grid-cols-4 xl:grid-cols-5 justify-items-center ">
        <div className="  lg:col-span-3 xl:col-span-4 flex flex-col p-2 gap-10  bordered  ">
          <img className="w-full" src={selectedNews?.urlToImage} alt="" />
          <div className="flex justify-between px-2 gap-5 ">
            <p>{selectedNews?.author && (<p className="flex sm:flex-row flex-col items-center font-semibold text-slate-600 text-base sm:text-lg lg:text-xl"> <span className="flex items-center justify-center"><CgProfile className="mr-2 text-[#fa987a]" />Author:</span> <span className="text-[#fa987a] ml-2">{selectedNews?.author}</span></p>)}</p>
            <p className="flex sm:flex-row flex-col sm:gap-3 font-semibold  text-slate-600 text-sm sm:text-base lg:text-lg"><span>{formattedTime}</span><span>{formattedDate}</span></p>
          </div>
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-justify p-2 md:p-5 text-poppins"> {selectedNews?.title}</h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 text-justify p-2 md:p-5 ">{selectedNews?.description}</p>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 text-justify p-2 md:p-5 ">{selectedNews?.content}</p>
          <p className="text-lg font-semibold">See the full Article at <span className="text-[#fa987a]"><a href={selectedNews?.url}  target="_blank" rel="noopener noreferrer">{selectedNews?.source?.name}</a></span></p>
         <Link to='/' className="bg-[#ff8d6b] w-40  h-10 text-center  text-xl font-bold text-slate-100 rounded-full hover:bg-[#005A7F] hover:text-white transition-all duration-500"> <button className="pt-1">All news</button></Link>
        </div>
        <div className="ml-5">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
