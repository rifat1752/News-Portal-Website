/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdBookmarkAdd,MdBookmarkAdded } from "react-icons/md";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from 'sweetalert2';

const NewsCard = ({ booked, anews, index, cat, onRemove }) => {
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
    <div>
      <div className="w-72 h-[410px] flex flex-col m-5 bg-base-100 border shadow-2xl overflow-hidden">
        <figure className=" w-full overflow-hidden h-[210px]">
          <img className="w-full h-full object-cover hover:scale-110  transition duration-300" src={anews.urlToImage} alt="news" />
          
        </figure>

        <div className="w-full relative  h-[200px]  flex ">
          <div className="flex flex-col items-center p-2 j">
          <h1 className="text-xl font-semibold text-wrap mb-2">{anews.title}</h1>
          <h2 className="">
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
          <div onClick={handleAddToNews} className=" cursor-pointer text-white text-lg text-center top-0 right-0 z-10">
           {
             <div className={` flex justify-center text-3xl items-center   `} >{bookmark?<MdBookmarkAdded className="text-blue-600"/>:<MdBookmarkAdd className="text-gray-700"/>} </div>
           }
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default NewsCard;