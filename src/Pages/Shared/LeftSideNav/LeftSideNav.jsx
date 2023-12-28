import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch("https://api.npoint.io/bc93dbce834c6c32bf40")
        .then(res=> res.json())
        .then(data => setCategories(data));
    },[])
    console.log(categories)

    return (
        <div>
            <h2 className="text-2xl my-5 mx-2  font-bold">All Categories </h2>
            {categories.map(category => 
            <>
            <div className="w-full">
            <li className="list-none h-10  border"><Link className="w-full  text-lg ml-10   font-semibold text-slate-400 " key={category.id}>{category.name}</Link></li>
            </div>
            </>)}
        </div>
    );
};

export default LeftSideNav;