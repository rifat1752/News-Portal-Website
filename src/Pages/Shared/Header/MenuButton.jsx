import { useState } from "react";
import { Link } from "react-router-dom";

const MenuButton = () => {
  const [clicked, setClicked] = useState(false);

  const buttonHandler = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <details className="dropdown">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><Link>Home</Link></li>
    <li><Link>About</Link></li>
    <li><Link>Contact Us</Link></li>
  </ul>
  <ul>
    {}
  </ul>
</details>
    </div>
    );
  };

  export default MenuButton;
