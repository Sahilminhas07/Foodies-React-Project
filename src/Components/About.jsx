import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Footer from "./Footer";
import Images from "./Images";
import AboutContent from "./AboutUS/AboutContent";
import Hr from "./Hr";

function About() {
  return (
    <>
      <Nav />
      <Banner value="src/assets/img/Banner/about.jpg" />
      <section className="m-10">
        <h1 className="text-center font-bold text-4xl">About Us</h1>
        <Hr />
        <div className=" flex justify-around mt-10 sm:flex sm:flex-row">
          <Images value="src\assets\img\About\1.jpg" />
          <AboutContent />
        </div>
        <Hr />
        <div className=" flex justify-around mt-10">
          <AboutContent />
          <Images value="src\assets\img\About\2.jpg" />
        </div>
        <Hr />

        <div className=" flex justify-around mt-10">
          <Images value="src\assets\img\About\3.jpg" />
          <AboutContent />
        </div>
        <Hr />

        <div className=" flex justify-around mt-10">
          <AboutContent />
          <Images value="src\assets\img\About\4.jpg" />
        </div>
        <Hr />

      </section>

      <Footer />
    </>
  );
}

export default About;
