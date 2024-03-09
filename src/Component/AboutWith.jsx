import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import about from "../Images/brickb.png";
import aboutu from "../Images/t2.jpg";
import Whychoose from "./Whychoose";
import brick from "../Images/icons/light.png";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
import useZoomInAnimation from "../animation/useZoomInAnimation";
import "../hero.css";
const AboutUs = () => {
  useLeftToRightSwipe(".left-in");
  useZoomInAnimation(".zoom");
  const bStyle = {
    backgroundImage: `url(${about})`,
  };
  return (
    <>
      <div className="m-0  p-6 bg-cover bg-center justify-center text-center sm:px-6   bg-no-repeat md:px-8 lg:px-16 xl:px-32">
        <div className="pt-6">
          <div className=" flex flex-col items-center relative my-8 zoom">
            <img
              src={brick}
              className="max-w-full h-[3rem] rounded-full bg-lightC p-2 absolute mt-[-2rem] box-shad "
              alt="Flooring"
            />
            <h2 className="text-redC tsgB subhead  font-bold xl:text-xl">
              ABOUT US
            </h2>
            <p className="text-blueC font-tsg mt-[3rem] text-xl bg-lightC p-2 absolute  rounded-xl xl:text-2xl">
              Get to know Us
            </p>
          </div>
          <div className="lg:flex lg:justify-between lg:gap-8 items-center">
            <div className="lg:flex-1 pb-8">
              <article className="text-center tsgf xl:text-xl">
                At TriumphSolarPicasso, we specialize in illuminating homes
                through solar services, offering solar installations/system
                diagnosis. Our expert team delivers excellence in a spectrum of
                home services, including solar cleaning, pressure washing,
                painting, gutter cleaning, and versatile handyman solutions.
                Trust us to transform your living space into a haven of
                brilliance and functionality. Welcome to TriumphSolarPicasso –
                where every service is a brushstroke of excellence.
              </article>
            </div>
            <div className="lg:flex-1 left-in">
              <img
                src={aboutu}
                className="max-w-full border-design border-design border-solid flex flex-wrap gap-1 box-shad"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
