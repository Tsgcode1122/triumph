import { React, useEffect } from "react";
import lashB from "../Images/b1.jpg";

import WhyChooseUs from "../Component/WhyChooseUs";
import Whychoose from "../Component/Whychoose";
import ContactForm from "../Component/ContactForm";
import Footer from "../Component/Footer";
import AboutWith from "../Component/AboutWith";
import ScrollToTopButton from "../Component/ScrollToTopButton";
const About = () => {
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  });
  const bStyle = {
    backgroundImage: `url(${lashB})`,
  };
  return (
    <>
      <div>
        <div className="pt-16  bg-center bg-cover text-center" style={bStyle}>
          <h1 className="p-[60px] text-lightC font-bold bg-blueC  bg-opacity-60 text-2xl">
            Discover TriumphSolarPicasso
          </h1>
        </div>
        <AboutWith />
        <Whychoose />
        <WhyChooseUs />
        <ContactForm />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default About;
