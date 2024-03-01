import { React, useEffect } from "react";
import lashB from "../Images/b5.jpg";
import ServiceAreass from "../Component/ServiceAreass";
import ContactForm from "../Component/ContactForm";
import ScrollToTopButton from "../Component/ScrollToTopButton";

const ServiceArea = () => {
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
            ABOUT US
          </h1>
        </div>
        <ServiceAreass />
        <ContactForm />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default ServiceArea;
