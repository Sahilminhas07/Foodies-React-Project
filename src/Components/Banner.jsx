import React from "react";

function Banner(props) {
  return (
    <>
      <div className="mx-20 h-[50vh] mt-7">
        <img className="h-full w-full" src={props.value} alt="" />
      </div>
    </>
  );
}

export default Banner;
