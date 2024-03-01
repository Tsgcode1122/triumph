import { React, useEffect } from "react";
import lashB from "../Images/b3.jpg";

import Footer from "../Component/Footer";
import ContMain from "../Component/ContMain";
import ScrollToTopButton from "../Component/ScrollToTopButton";
const Contact = () => {
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
            Connect With TriumphSolarPicasso
          </h1>
        </div>
        <ContMain />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Contact;
