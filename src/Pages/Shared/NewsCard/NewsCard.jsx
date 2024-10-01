/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";


const NewsCard = ({anews,index,cat}) => {
  const {category, setCategory,pageIndex, setPageIndex}= useContext(AuthContext)
     
     const handleClicked = () =>{
      setCategory(cat);
      setPageIndex(index);
     }

     console.log("card category & index",cat,index)

    return (
        <div>
            <div   className=" w-72 h-[410px] flex flex-col m-5  bg-base-100  border shadow-2xl">            
              <figure className="w-full h-5/12  "><img className="w-full h-full object-cover" src={anews.urlToImage} alt="news" /></figure>
            
            <div className="w-full h-7/12 p-2 flex flex-col ">
            <h1 className="text-xl font-semibold  text-center mb-2">{anews.title}</h1>
            <h2 className="">
                    {
                       anews?.description?.length>50? <p className="">{ anews?.description?.slice(0,50)} ... <Link onClick={()=>handleClicked()} to={`/news/${cat}/${index}`}  className="text-orange-600 text-center  font-semi-bold">  read more</Link> </p>
                        :<p>{anews.description}</p>
                    }
                </h2>
            </div>
            
              {/* <div className="card-body">
               
               
              </div> */}
            </div>
        </div>
    );
};

export default NewsCard;