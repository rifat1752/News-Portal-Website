import { useEffect, useState } from "react";
import NewsCard from "../Shared/NewsCard/NewsCard";
import RightSideNav from "../Shared/RightSideNav/RightSidenNav";
import NewsCardShorts from "../Shared/NewsCard/NewsCardShorts";
import TopHeadLine from "../Shared/TopHeadLine/TopHeadLine";

const ArtsPage = () => {
  const [news, setNews] = useState([]);
    const cat = "arts";

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${cat}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
    .then(res=>res.json())
    .then(data=>setNews(data.articles))
  },[])

    return (
        <div>
            
             <div className="my-10 grid grid-cols-4">
                  <div className="grid col-span-3 grid-cols-1 md:grid-cols-3">
                    {news.slice(0,3).map((anews,index) => anews.title !== "[Removed]" && (
                      <NewsCard key={index} index={index} cat={cat} anews={anews}></NewsCard>
                    ))}
                  </div>
                  <div className="">
                      <RightSideNav></RightSideNav>
                  </div>
             </div>    
        
        
             <div className="flex items-center justify-center ">
              <hr className="w-5/12 border-[#ffa589]  rounded-full"/>
              <p className="w-2/12 text-center text-2xl font-semibold text-slate-500">More news </p>
              <hr className="w-5/12 border-[#ffa589]  rounded-full"/>
              </div>

              <div className="my-10  flex ">
                <div className=" flex gap-2 w-9/12 flex-wrap justify-between">
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
                <div className=" mx-2 w-3/12">
                <TopHeadLine></TopHeadLine>
                </div>
      </div>
        </div>
    );
};


export default ArtsPage;
