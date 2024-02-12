import React from "react";

function Header() {
  return (
    <>
      <div className="w-full h-auto">
        <img
          className=" w-full h-[80vh] "
          src="src\assets\img\header.jpg"
          alt=""
        />
        <h1 className="text-4xl absolute right-0 text-black font-semibold top-[100px] mx-5">
          Welcome!!
        </h1>
      </div>
    </>
  );
}

export default Header;
