/* eslint-disable react/prop-types */
import {  useLocation, useNavigate, useSearchParams } from "react-router-dom";
import qs from'query-string'

const Navbar_Category = ({name,toggle,selected}) => {
    const [params, setParams]= useSearchParams()
    const navigate= useNavigate();
    const location = useLocation();
    const isSelected = location.pathname === `/${name.toLowerCase()}`;
    const handleClick =()=>{
        const url = `/${name.toLowerCase()}`; // Navigate to '/category-name'
        navigate(url);
        }
    
    params.get('category')
    
    return (
    
                            <li onClick={handleClick}
                            className={`link-nav ${toggle?"text-left pl-5":"px-2  text-lg border-r "} ${isSelected ? 'bg-[#ff8d6b] text-white' : ''} `}
                          >
                            {name}
                          </li>
    );
};

export default Navbar_Category;