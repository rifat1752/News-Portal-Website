import { useEffect, useState } from "react";
import NewsCard from "../Shared/NewsCard/NewsCard";
import RightSideNav from "../Shared/RightSideNav/RightSidenNav";
import NewsCardShorts from "../Shared/NewsCard/NewsCardShorts";
import TopHeadLine from "../Shared/TopHeadLine/TopHeadLine";


const InternationalPage = () => {
  const [news, setNews] = useState([]);
    const cat = "international+politics";

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${cat}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
    .then(res=>res.json())
    .then(data=>setNews(data.articles))
  },[])

    return (
        <div>
             <div className="my-10 flex flex-col-reverse lg:grid lg:grid-cols-4 xl:grid-cols-5">
        <div className="flex flex-wrap col-span-3 xl:col-span-4 justify-center lg:justify-normal ">
          {news.slice(0,3).map((anews,index) => anews.title !== "[Removed]" && (
            <NewsCard key={index} index={index} cat={cat} anews={anews}></NewsCard>
          ))}
        </div>
        <div className="flex justify-center">
            <RightSideNav></RightSideNav>
        </div>
      </div>    
        

      <div className="flex items-center justify-center ">
              <hr className="w-1/3 sm:w-5/12 border-[#ffa589]  rounded-full"/>
              <p className="w-1/3 sm:w-2/12 text-center text-lg lg:text-2xl font-semibold text-slate-500">More news </p>
              <hr className="w-1/3 sm:w-5/12 border-[#ffa589]  rounded-full"/>
              </div>

              <div className="my-10  flex ">
                <div className=" flex gap-5 lg:w-9/12 flex-wrap justify-center">
          {news.slice(4,news?.length).map(
            (anews, index) =>
              anews.title !== "[Removed]" && (
                <NewsCardShorts
                  key={index}
                  index={index}
                  cat={cat}
                  anews={anews}
                ></NewsCardShorts>
              )
           )}
                </div>
                <div className=" hidden lg:block mx-2 w-3/12">
                <TopHeadLine></TopHeadLine>
                </div>
      </div>
        </div>
    );
};

export default InternationalPage;