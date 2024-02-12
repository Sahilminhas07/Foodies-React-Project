import React from "react";

function Subscribe() {
  return (
    <>
      <section className="mt-20">
        <form action="#" className="flex flex-col md:flex-row items-center justify-center">
          <input
            className="py-5 px-3 w-full md:w-[50vw] lg:w-[30vw] dark:text-black bg-[#eeeeee] rounded-xl border-none outline-none mb-3 md:mb-0 md:mr-3"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-[black] dark:invert text-white font-semibold text-lg px-7 py-4 rounded-2xl">Subscribe</button>
        </form>
      </section>
    </>
  );
}

export default Subscribe;
