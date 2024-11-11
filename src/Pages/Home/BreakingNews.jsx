import { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const BreakingNews = () => {
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
        <div className="flex w-full overflow-hidden">
            <button className="w-36 text-white text-poppins font-semibold h-10 text-xs sm:text-sm md:text-base  bg-[#f8825e]">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100} className=" font-semibold">
                {
                    headLines?.map((headLine, index)=> headLine.title !== "[Removed]" && (
                        <Link onClick={() => handleClicked(index)} to={`/news/${cat}/${headLine?.title}`} key={index} className="flex flex-row items-center gap-2 border-r-4 px-4 border-[#ffa88d] ">
                            <h1 className="text-xs sm:text-sm md:text-base text-[#f8825e]">{headLine?.author?`${headLine?.author}:` :""}</h1>
                        <p className="  sm:text-sm md:text-base  text-slate-600 font-Poppins ">{headLine.title}</p>
                        </Link>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;