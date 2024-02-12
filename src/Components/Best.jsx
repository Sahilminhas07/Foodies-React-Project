import React from "react";
import Hr from "./Hr";

function Best() {
  return (
    <>
      <section className="mt-10 mx-10">
        <h1 className="text-center text-4xl font-bold">Best Of Us</h1>
        <Hr />
        <div className="flex justify-around flex-wrap">
          <div>
            <img
              className="hover:scale-110 transition-all"
              src="src\assets\img\burger.png"
              alt=""
            />
          </div>
          <div className="w-[40vw] mt-20 md:w-[]">
            <h1 className="text-4xl font-semibold">
              Burger Raja - The Ultimate Burger!
            </h1>
            <p className="mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              officia iure modi et! Blanditiis repudiandae vel voluptatum unde
              iure, doloribus nulla repellendus cum modi assumenda? Ducimus,
              harum dolores ipsam aliquid perspiciatis alias tempore repudiandae
              aut nisi soluta debitis molestias totam laboriosam saepe
              consequuntur quam quos iusto et magni nesciunt blanditiis.
            </p>
          </div>
        </div>

        <div className="flex justify-around flex-wrap-reverse">
          <div className="w-[40vw] mt-20">
            <h1 className="text-4xl font-semibold">
              Our Chef's Specialty
            </h1>
            <p className="mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              officia iure modi et! Blanditiis repudiandae vel voluptatum unde
              iure, doloribus nulla repellendus cum modi assumenda? Ducimus,
              harum dolores ipsam aliquid perspiciatis alias tempore repudiandae
              aut nisi soluta debitis molestias totam laboriosam saepe
              consequuntur quam quos iusto et magni nesciunt blanditiis.
            </p>
          </div>
          <div>
            <img
              className="hover:scale-110 transition-all"
              src="src\assets\img\desert.png"
              alt=""
            />
          </div>
        </div>
        <Hr />
      </section>
    </>
  );
}

export default Best;
