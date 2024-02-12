import React from "react";
import Images from "./Images";
import Hr from "./Hr";

function Menu(props) {
  return (
    <>
      <div className="mt-10 ">
        <h1 className="text-center font-bold text-4xl">Menu & Services</h1>
        <div className="flex w-full flex-wrap justify-around mt-10">
          <Images value="src\assets\img\Menu\1.jpg" />
          <Images value="src\assets\img\Menu\2.jpg" />
          <Images value="src\assets\img\Menu\3.jpg" />
          <Images value="src\assets\img\Menu\4.jpg" />
          <Images value="src\assets\img\Menu\5.jpg" />
          <Images value="src\assets\img\Menu\6.jpg" />
          <Images value="src\assets\img\Menu\7.jpg" />
          <Images value="src\assets\img\Menu\8.jpg" />
          <Images value="src\assets\img\Menu\9.jpg" />
        </div>
      </div>
    </>
  );
}

export default Menu;
