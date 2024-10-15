/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";

const NewsCardShorts = ({ booked, anews, index, cat, onRemove }) => {
    const { category, setCategory, pageIndex, setPageIndex } = useContext(AuthContext);
  const [bookmark, setBookmark] = useState(false);

  // Check if the news is already bookmarked when the component mounts
  useEffect(() => {
    if (booked) {
      setBookmark(true);
    } else {
      getSavedNewsByCategoryAndIndex(cat, index);
    }
  }, [cat, index, booked]); /// Run the effect whenever cat or index changes

  const handleClicked = () => {
    setCategory(cat);
    setPageIndex(index);
  };

  const handleAddToNews = () => {
    let savedNews = JSON.parse(localStorage.getItem('savedNews')) || [];
    const isExist = savedNews.find(news => news.index === index && news.cat === cat);

    if (!isExist) {
      const newsToSave = { ...anews, cat: cat, index: index };
      savedNews = [...savedNews, newsToSave];
      localStorage.setItem('savedNews', JSON.stringify(savedNews));
      setBookmark(true);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "News has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const updatedNews = savedNews.filter(news => !(news.index === index && news.cat === cat));
      localStorage.setItem('savedNews', JSON.stringify(updatedNews));
      setBookmark(false);
      Swal.fire({
        position: "center",
        icon: "info",
        title: "News has been removed",
        showConfirmButton: false,
        timer: 1500,
      });

      if (onRemove) {
        onRemove(index, cat); // Notify BookMarked.jsx to update state
      }
    }
  };

  const getSavedNewsByCategoryAndIndex = (cat, index) => {
    // Retrieve the saved news array from localStorage
    const savedNews = JSON.parse(localStorage.getItem('savedNews')) || [];

    // Find the specific news based on index and cat
    const foundNews = savedNews.find(news => news.index === index && news.cat === cat);

    return foundNews ? setBookmark(true) : setBookmark(false); // Set bookmark state based on whether news is found
  };

    return (
        <div className="bg-white overflow-hidden group relative  mt-5 w-60 lg:w-72 hover:border-white border-b-2 border-[#ffa589] h-52  lg:h-44 ">
            <div className="relative  w-60 lg:w-72 flex flex-col justify-start    h-52 lg:h-44">
               <figure className=" absolute top-0 w-60 lg:w-72 h-52 lg:h-44">
                <img className="w-60 lg:w-72 h-52 lg:h-44 bg-slate-600 p-[1px] opacity-0  group-hover:opacity-100  transition brightness-75 duration-300 ease-out  object-cover" src={anews.urlToImage} alt="news" />

                <div onClick={handleAddToNews} className="absolute cursor-pointer text-white text-lg text-center top-0 right-0 z-10">
                </div>
              </figure> 
              <div className="absolute  opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm flex flex-col gap-2 justify-center items-center  w-60 lg:w-72 h-52 lg:h-44 z-10">
                <Link to={`/news/${cat}/${anews?.title}`}  className="text-slate-50 text-lg h-10   hover:bg-[#ff7f58] w-44 text-center p-1 rounded-full">Read Now</Link>
                <div onClick={handleAddToNews} className=" cursor-pointer  text-lg text-center  z-10">
                <div 
  className={`w-48 text-lg h-10 text-slate-50 p-1 rounded-full transition-colors duration-300 ${bookmark ? "hover:bg-green-400" : "hover:bg-[#f87851]"}`}
>
  {bookmark ? (
    <div className="flex justify-center items-center gap-2">
      <MdBookmarkAdded className="text-blue-600 text-2xl" /> <p>Bookmarked</p>
    </div>
  ) : (
    <div className="flex justify-center items-center gap-2">
      <MdBookmarkAdd className="text-gray-500 text-2xl" /> <p>Bookmark</p>
    </div>
  )}
</div>

          </div>
              </div>
              
            <h1 className="text-xl px-2 font-semibold text-[#005A7F]  mb-2">{anews.title}</h1>
            <h2 className="text-sm px-2 ">
            {anews?.description?.length > 50 ? (
              <p>
                {anews?.description?.slice(0, 50)} ...
                <Link
                  onClick={() => handleClicked()}
                  to={`/news/${cat}/${anews?.title}`}
                  className="text-orange-600 text-center font-semi-bold"
                >
                  read more
                </Link>
              </p>
            ) : (
              <p>{anews.description}</p>
            )}
          </h2>
            </div>
           
        </div>
    );
};

export default NewsCardShorts;