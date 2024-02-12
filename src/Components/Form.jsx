import React from "react";

function Form() {
  return (
    <>
      <section className="flex mt-10">
        <div className="w-[45%] mx-20 mt-10 bg-slate-200 p-3 flex rounded-md">
          <form action="">
            <input
              className="p-3 m-2 w-[47%]"
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="p-3 m-2 w-[47%]"
              type="text"
              placeholder="Contact Number"
            />
            <br />
            <input
              className="p-3 w-[97%] m-2"
              type="email"
              name=""
              id=""
              placeholder="Enter Your email"
            />
            <br />
            <input
              className="p-3 w-[97%] m-2"
              type="text"
              placeholder="Subject"
            />
            <br />
            <textarea
              className="p-2 m-2"
              name=""
              id=""
              cols="78"
              rows="10"
              placeholder="Message"
            ></textarea>
            <br />
            <button
              className="m-2 bg-black text-white px-4 py-3 rounded-md hover:bg-white hover:text-black hover:transition-all hover:font-semibold"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <img src="src\assets\img\Service 24_7-pana 1.svg" alt="" />
        </div>
      </section>
    </>
  );
}

export default Form;
