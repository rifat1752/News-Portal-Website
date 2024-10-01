import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    const [headLines, setHeadLines]=useState([])

    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=06c6024b8a564ff586548b04aacb7103")
          .then((res) => res.json())
          .then((data) =>setHeadLines(data));
      }, []);
      console.log(headLines)
      
    return (
        <div className="flex w-full overflow-hidden">
            <button className="w-32 text-white text-poppins h-10 bg-[#f8825e]">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100} className="text-lg font-semibold">
                {
                    headLines.articles?.map((headLine, index)=> headLine.title !== "[Removed]" && (
                        <div key={index} className="flex flex-row items-center gap-2 border-r-4 px-4 border-[#ffa88d] ">
                            <h1 className="text-lg text-[#f8825e]">{headLine?.author?`${headLine?.author}:` :""}</h1>
                        <p className="  text-base text-slate-600 font-Poppins ">{headLine.title}</p>
                        </div>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;