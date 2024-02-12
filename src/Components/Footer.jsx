import React from "react";
import Hr from "./Hr";

function Footer() {
  return (
    <>
      <footer className="flex mt-28 p-4 justify-around flex-wrap-reverse">
        <div>
          <img className="dark:invert" src="src\assets\img\logofoodies.png" alt="" />
        </div>
        <div className="flex gap-32 flex-wrap">
          <ul className="font-semibold">
            <li>Legal</li>
            <li>License</li>
            <li>Terms & Conditions</li>
            <li>Privacy</li>
          </ul>
          <ul className="font-semibold">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
          <ul className="font-semibold">
            <li>Team</li>
            <li>Order</li>
            <li>Management</li>
            <li>NEWS</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
