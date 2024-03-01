import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import lashB from "../Images/hero.jpg";
import "../hero.css";
import HeroService from "./HeroService";
const Hero = () => {
  const bStyle = {
    backgroundImage: `url(${lashB})`,
  };
  return (
    <>
      <div
        className="m-0  bg-cover bg-center justify-center text-center  bg-no-repeat  "
        style={bStyle}
      >
        <div className=" min-[500px]:px-8 py-8 pt-[12rem] pb-[10rem] bg-blueC bg-opacity-60 text-lightC h-full w-screen  iix:px-2 iix:overflow-hidden   ixr:px-2   ixi:px-2    ">
          <div className="pb-4 md:mt-12 lg:mt-24  ">
            <h1 className=" min-[500px]:text-[70px] leading-10  font-bold font-tsg sm:text-[80px] sm:leading-[70px] md:text-[90px] lg:text-[100px] xl:text-[120px] iix:text-[60px] ixr:text-[60px] ixi:text-[60px] ">
              TRIUMPH
            </h1>
            <span className="text-lightC min-[500px]:text-[35px] font-bold font-tsg sm:text-[40px] md:text-[42px] lg:text-[45px] xl:text-[50px]  iix:text-[32px]    ixr:text-[32px]   ixi:text-[32px]    ">
              SolarPicasso
            </span>
          </div>
          <p className="tsgf sm:text-[20px] sm:px-8 md:px-12 lg:px-24 lg:text-[22px] xl:text-[25px]  xl:px-32  iix:text-[18px]    ixr:text-[18px]   ixi:text-[18px]    ">
            Pioneering Excellence in Solar Cleaning, Comprehensive Pressure
            Washing, Painting, and Handyman Services for Residential and
            Commercial Properties
          </p>
          <div className=" tsgf pt-8 gap-4 sm:text-[15px] lg:text-[17px]  xl:text-[20px]">
            <Link to="/Contact">
              {" "}
              <button className="bg-redC shadow-lightC  border-solid border-lightC rounded-md p-2 shadow  mr-3 ">
                Get a Quote
              </button>
            </Link>
            <Link to="/Services">
              {" "}
              <button className="bg-redC shadow-lightC  border-solid border-lightC rounded-md p-2 shadow  ">
                Explore Services
              </button>
            </Link>
          </div>
        </div>
      </div>
      <HeroService />
    </>
  );
};

export default Hero;
