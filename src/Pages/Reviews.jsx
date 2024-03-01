import { React, useEffect } from "react";
import lashB from "../Images/b6.jpg";

import ServiceAreass from "../Component/ServiceAreass";
import Footer from "../Component/Footer";
import ReMain from "../Component/ReMain";
import ScrollToTopButton from "../Component/ScrollToTopButton";
const Reviews = () => {
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
            Elevating Service Excellence for You
          </h1>
        </div>
        <ReMain />
        <ServiceAreass />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Reviews;
