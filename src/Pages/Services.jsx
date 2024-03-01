import { React, useEffect } from "react";
import lashB from "../Images/b2.jpg";
import ServiceList from "../Component/ServiceList";
import ContactForm from "../Component/ContactForm";
import Footer from "../Component/Footer";
import ScrollToTopButton from "../Component/ScrollToTopButton";
const Services = () => {
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
            Explore Our Service List
          </h1>
        </div>
        <ServiceList />
        <ContactForm />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Services;
