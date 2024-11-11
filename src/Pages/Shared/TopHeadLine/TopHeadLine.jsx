import { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";


const TopHeadLine = () => {
    const [headLines, setHeadLines]=useState([])
    const cat ="top-headlines";
  const { category, setCategory, pageIndex, setPageIndex } = useContext(AuthContext);


    const handleClicked = (index) => {
        setCategory(cat);
        setPageIndex(index);
      };

    useEffect(() => {
        fetch(`${import.meta.env.VITE_NEWS_LINK}`)
      .then((res) => res.json())
      .then((data) =>setHeadLines(data.filter(article => article.category === cat)));
      }, []);

      
    return (
        <div className="border-l-2 border-[#ffa589] flex flex-col w-full overflow-hidden pl-4   ">
            <button className=" text-white text-poppins font-bold text-center h-10 bg-[#f8825e]">Top HeadLine</button>
            <div className="flex flex-col">
           
                {
                    headLines?.slice(0,50).map((headLine, index)=> headLine.title !== "[Removed]" && (
                        <Link  onClick={() => handleClicked(index)} key={index} to={`/news/${cat}/${headLine?.title}`}>
                        <div key={index} className="flex flex-col items-center gap-2 hover:scale-105 transition duration-300 border-b pt-2 pb-4 ">
                            <h1 className="  text-xs text-slate-600 font-Poppins " ><span className="text-base font-bold mr-2 text-[#005A7F]">{headLine?.author?`${headLine?.author}:` :""}</span>{headLine.title}</h1>
                        </div>
                        </Link>
                        
                    ))
                }
            
            </div>
        </div>
    );
};


export default TopHeadLine;