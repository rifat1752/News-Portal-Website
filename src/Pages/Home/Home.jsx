import { Link, useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";

import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSidenNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard/NewsCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("All News");
  //      const [selectedCategory, setSelectedCategory] = useState(null);
  const datas = useLoaderData();
  const [news, setNews] = useState(datas);
  console.log(news);
  useEffect(() => {
    fetch("https://api.npoint.io/bc93dbce834c6c32bf40")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log("this is cat", categories);
  const filteredNews = (catId, catName) => {
    const updateNews = datas.filter((currentNews) => {
      return currentNews.category_id === catId;
    });
    setNews(updateNews);
    setCategoryName(catName);
  };
  return (
    <div >
     
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <div className="">
            <h2 className="text-2xl my-5 mx-2  font-bold">All Categories </h2>
            <div className="w-full ">
              <li
                onClick={() => setNews(datas)}
                className="list-none h-10 w-full hover:bg-slate-600 hover:text-white  text-lg pl-5 font-semibold text-slate-400 border"
              >
                {" "}
                All News{" "}
              </li>
              {categories.map((category) => (
                <>
                  <li
                    onClick={() => filteredNews(category.id, category.name)}
                    className="list-none h-10 w-full  text-lg pl-5 font-semibold text-slate-400 hover:bg-slate-600 hover:text-white border"
                    key={category.id}
                  >
                    {category.name}
                  </li>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className=" md:col-span-2">
          <div className="m-5 p-2 text-4xl font-bold text-slate-600">
            {categoryName} : {news.length}
          </div>
          {news.map((anews) => (
            <NewsCard key={anews.id} news={anews}></NewsCard>
          ))}
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
