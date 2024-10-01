import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar_Categories = ({toggle,root}) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://api.npoint.io/bc93dbce834c6c32bf40")
          .then((res) => res.json())
          .then((data) => setCategories(data));
      }, []);

    return (
        <div className="">
            <ul className={`flex ${toggle?"flex-col":"hidden lg:flex flex-row flex-wrap justify-center my-5  "}  `}>
                
                     {categories.map((category) => (
                          <NavLink key={category.id} to={`/${category.name.toLowerCase()}`}>
                            <li
                            className={`link-nav ${toggle?"text-left pl-5":"px-2  text-lg border-r "} `}
                          >
                            {category.name}
                          </li>
                          </NavLink>
                      ))}
                
            </ul>
        </div>
    );
};

export default Navbar_Categories;