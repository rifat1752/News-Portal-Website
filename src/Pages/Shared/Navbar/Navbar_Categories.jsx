import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar_Category from "./Navbar_Category";

const Navbar_Categories = ({toggle,root}) => {
    const [categories, setCategories] = useState([]);
    const [params, setParams] = useSearchParams();
    const category = params.get("category");



    useEffect(() => {
        fetch("https://api.npoint.io/bc93dbce834c6c32bf40")
          .then((res) => res.json())
          .then((data) => setCategories(data));
      }, []);


    return (
        <div className="">
            <ul className={`flex ${toggle?"flex-col":"hidden lg:flex flex-row flex-wrap justify-center   "}  `}>
                
                     {categories.map((item) => <Navbar_Category
                     key={item.id}
                     name={item.name}
                     toggle={toggle}
                     selected={category === item.name}
                     >

                     </Navbar_Category>
                          
                      )}
                
            </ul>
        </div>
    );
};

export default Navbar_Categories;