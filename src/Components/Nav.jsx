import React from "react";
import { Link } from "react-router-dom";
import Themebtn from "./Themebtn";

function Nav() {
  return (
    <>
      <nav className="flex justify-between p-3">
        <Link to={"/"}><div>
          <img className="w-32 dark:invert" src="src\assets\img\logofoodies.png" alt="" />
          </div></Link> 
        <ul className="flex gap-5 mx-5 text-lg font-bold">
          <li className=""><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/service"}>Services</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li><Themebtn /></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
