import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";


const NewsCard = ({news}) => {
    const { _id,title, rating, details, image_url, total_view} = news;
    return (
        <div>
            <div className="card m-5 bg-base-100 border shadow-2xl">
              <div></div>
              <h1 className="text-2xl font-semibold my-2">{title}</h1>
              <figure className="my-2"><img src={image_url} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="">
                    {
                        details.length>200? <p>{details.slice(0,200)} ... <Link to={`news/${_id}`} className="text-orange-600 font-semi-bold">  read more</Link> </p>
                        :<p>{details}</p>
                    }
                </h2>
               
                <div className="card-actions my-5">
                <div className="w-full flex justify-between ">
                <div className="rating rating-md ">
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <p className="ml-4 text-xl font-bold text-slate-600">{rating.number}</p>
                 </div>
                <div className="flex justify-center items-center">
                <FaEye /> 
                <p className="ml-1">{total_view}</p>
                </div>
                </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default NewsCard;