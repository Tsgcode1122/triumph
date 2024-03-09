import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "../hero.css";
import brick from "../Images/icons/light.png";
import useZoomInAnimation from "../animation/useZoomInAnimation";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
import useRightToLeftSwipe from "../animation/useRightToLeftSwipe";
const WhyChooseUs = () => {
  useZoomInAnimation(".zoom");
  useLeftToRightSwipe(".left-in");
  useRightToLeftSwipe(".right-in");
  return (
    <>
      <div className="p-8 sm:px-16 lg:px-24 xl:px-36 ">
        <div className=" flex flex-col items-center relative my-8  zoom">
          <img
            src={brick}
            className="max-w-full h-[3rem] rounded-full bg-lightC p-2 absolute mt-[-2rem] box-shad "
            alt="Flooring"
          />
          <h2 className="text-redC tsgB subhead  font-bold">WHY CHOOSE US</h2>
          <p className="text-blueC font-tsg mt-[3rem] text-xl bg-lightC p-2 absolute  rounded-xl">
            What We Offers{" "}
          </p>
        </div>

        <div className="text-center md:grid md:grid-cols-2 md:gap-4 ">
          <div className="my-4 text-lightC bg-blueC border-lightC border-design p-6  box-shad ">
            <h3 className="font-bold font-tsg text-redC  md:text-xl xl:text-[25px] left-in">
              EXPERTISE
            </h3>
            <p className="tsgf text-center  xl:text-xl">
              With industry leadership and extensive experience, we deliver
              excellence in every service. Your satisfaction is our priority.
            </p>
          </div>

          <div className="my-4 text-lightC bg-blueC border-lightC border-design p-6  box-shad ">
            <h3 className="font-bold font-tsg text-redC md:text-xl xl:text-[25px] left-in">
              VERSATILITY
            </h3>
            <p className="tsgf text-center  xl:text-xl">
              Offering a range of home services including painting, gutter
              cleaning, solar maintenance, and more. to meet your need.
              Prioritizing your contentment.
            </p>
          </div>

          <div className="my-4 text-lightC bg-blueC border-lightC p-6   border-design box-shad">
            <h3 className="font-bold font-tsg text-redC md:text-xl xl:text-[25px] rleft-in">
              QUALITY SERVICE
            </h3>
            <p className="tsgf text-center  xl:text-xl">
              We are committed to delivering excellence in every service we
              offer. Our services are not only of the highest quality but also
              trustworthy and dependable.
            </p>
          </div>

          <div className="my-4 text-lightC bg-blueC border-lightC border-design p-6  box-shad ">
            <h3 className="font-bold font-tsg text-redC md:text-xl xl:text-[25px] left-in">
              CUSTOMER SATISFACTION
            </h3>
            <p className="tsgf text-center xl:text-xl">
              We prioritize your contentment by providing top-notch services.
              Our team consists of highly trained experts dedicated to ensuring
              your satisfaction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
