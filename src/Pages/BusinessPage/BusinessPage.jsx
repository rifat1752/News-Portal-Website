import { useEffect, useState } from "react";
import NewsCard from "../Shared/NewsCard/NewsCard";
import RightSideNav from "../Shared/RightSideNav/RightSidenNav";
import { data } from "autoprefixer";


const BusinessPage = () => {
    const cat ="business";
  // const [categoryName, setCategoryName] = useState("All News");
  //      const [selectedCategory, setSelectedCategory] = useState(null);
  const [news, setNews] = useState([]);
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${cat}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
    .then(res=>res.json())
    .then(data=>setNews(data.articles))
  },[])
//   
    return (
        <div>
             <div className="grid grid-cols-4">
        <div className="grid col-span-3 grid-cols-1 md:grid-cols-3">
          {news.map((anews,index) => anews.title !== "[Removed]" && (
            <NewsCard key={index} index={index} cat={cat} anews={anews}></NewsCard>
          ))}
        </div>
        <div className="">
            <RightSideNav></RightSideNav>
        </div>
      </div>    
        </div>
    );
};

export default BusinessPage;