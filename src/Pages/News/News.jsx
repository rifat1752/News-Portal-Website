import Navbar from "../Shared/Navbar/Navbar";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSidenNav";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const News = () => {
  const news = useLoaderData();
  const { title,author, rating, details, image_url, total_view,category_id,others_info, thumbnail_url} = news;


  return (
    <div>
      
      <div className="grid  md:grid-cols-4">
        <div className="col-span-3 flex flex-col  gap-10 m-5 p-5 bordered md:mr-5 ">
          <img className="w-full" src={image_url} alt="" />
          <h1 className="text-5xl font-bold"> {title}</h1>
          <p className="text-lg text-slate-600">{details}</p>
         <Link to='/'> <button className="btn w-40  text-white bg-[#D72050]">All news</button></Link>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
