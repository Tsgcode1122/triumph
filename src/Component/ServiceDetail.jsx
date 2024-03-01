import { React, useEffect } from "react";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import lashB from "../Images/b1.jpg";
import t1 from "../Images/t1.jpg";
import t2 from "../Images/t2.jpg";

import { Outlet, Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { serviceData } from "./ServiceData";
import "../hero.css";
const ServiceDetail = () => {
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  });
  const bStyle = {
    backgroundImage: `url(${lashB})`,
  };
  console.log("ServiceDetail component rendered");
  const { serviceId } = useParams();
  const service = serviceData.find((service) => service.id === serviceId);

  return (
    <>
      <div className=" tsgf text-justify">
        <div className="pt-16  bg-center bg-cover text-center" style={bStyle}>
          <h1 className="p-[60px] text-lightC font-bold bg-blueC  bg-opacity-60 text-2xl">
            {service.service_name}
          </h1>
        </div>
        <div className=" items-center justify-center p-4 bg-lightC sm:px-2 md:px-4 lg:px-6 lg:grid lg:gap-4 xl:px-32">
          <div className="lg:grid lg:grid-cols-2 items-center">
            <div className="l p-4 mb-2  mx-4 bg-blueC rounded-md box-shad iix:px-2 iix:mx-0 ixr:px-2 ixi:px-2 ixr:mx-0 ixi:mx-0">
              <p className="text-white">{service.description}</p>
            </div>

            <div className="w-full p-4 flex justify-center space-x-8">
              <img
                src={service.image}
                alt="Solar Installations and Cleaning"
                className="border-design"
              />
            </div>
          </div>
          <div className="lg:flex lg:flex-row-reverse items-center">
            <div className="flex w-full lg:flex-col md:px-4 iix:flex-col ixr:grid ixi:grid iix:p-0 ">
              <div className=" iix:min-w-0 p-4 mb-8 mx-2 bg-blueC rounded-md box-shad">
                <h2 className="text-white text-2xl mb-4 font-bold">
                  {service.h_one}
                </h2>
                <ul className="text-white">
                  <li> {service.p_one}</li>
                  <li> {service.p_two}</li>
                  <li> {service.p_three}</li>
                </ul>
              </div>

              <div className="p-4 mb-8 mx-2 bg-blueC rounded-md box-shad">
                <h2 className="text-white text-2xl mb-4 font-bold">
                  {service.h_two}
                </h2>
                <ul className="text-white">
                  <li> {service.p_2one}</li>
                  <li> {service.p_2two}</li>
                  <li>{service.p_2three}</li>
                </ul>
              </div>
            </div>

            {/* Images */}
            <div className="w-full p-4 flex justify-center space-x-8">
              <img
                src={service.image_2}
                alt="Solar Installations and Cleaning"
                className="border-design"
              />
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
};

export default ServiceDetail;
