import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "../hero.css";
import whyB from "../Images/slider-bg.png";
import icon1 from "../Images/icons/satisfaction.png";
import icon2 from "../Images/icons/prooo.png";
import icon3 from "../Images/icons/years.png";
import { IoMdCall } from "react-icons/io";
import icon4 from "../Images/icons/staff.png";
const Whychoose = () => {
  const bStyle = {
    backgroundImage: `url(${whyB})`,
  };
  const [counts, setCounts] = useState({
    supplies: 30,
    customers: 0,
    products: 0,
    partners: 0,
  });

  const targets = {
    supplies: 525,
    customers: 550,
    products: 14,
    partners: 30,
  };

  useEffect(() => {
    const section = document.querySelector("#why-choose-1");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Object.keys(counts).forEach((key) => {
            const targetNumber = targets[key];

            if (counts[key] < targetNumber) {
              const intervalId = setInterval(() => {
                setCounts((prevCounts) => {
                  const newCounts = { ...prevCounts };
                  newCounts[key] += 1;
                  return newCounts[key] <= targetNumber
                    ? newCounts
                    : prevCounts;
                });
              }, 200);

              return () => clearInterval(intervalId);
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(section);

    return () => observer.disconnect();
  }, [counts, targets]);

  return (
    <>
      <div className=" m-0 bg-blueC min-[500px]:px-8 py-8 xl:px-48 ixi:px-2 iix:px-2 ixr:px-2">
        <div
          id="why-choose-section"
          className="     grid min-[500px]:grid-cols-2 lg:grid-cols-4  items-center   iix:grid-cols-1 ixr:grid-cols-2 ixi:grid-cols-2 "
        >
          <div
            className=" flex  flex-col min-w-[10rem] justify-center items-center text-center m-4 ixi:min-w-0 ixi:mx-0 ixr:min-w-0"
            id="why-choose-1"
          >
            <img src={icon1} className="h-16 mb-2" />
            <div>
              <h2 className="text-redC m-0  text-2xl font-tsg font-bold">
                {counts.supplies.toLocaleString()}+
              </h2>
              <h4 className=" text-lightC block font-h4 text-primary-color font-medium text-lg leading-none tsgf">
                Happy Clients
              </h4>
            </div>
          </div>
          <div className="flex  flex-col min-w-[10rem] justify-center items-center text-center m-4 ixi:min-w-0 ixr:min-w-0 ">
            <img src={icon2} className="h-16 mb-2" />
            <div>
              {" "}
              <h2 className="text-redC m-0  text-2xl font-tsg font-bold ">
                {counts.customers.toLocaleString()}+
              </h2>
              <h4 className=" text-lightC block mt-0 font-h4 text-primary-color font-medium text-lg leading-none tsgf">
                Project Done
              </h4>
            </div>
          </div>
          <div className="flex  flex-col min-w-[10rem] justify-center items-center text-center m-4  ixi:min-w-0  ixr:min-w-0">
            <img src={icon3} className="h-16 mb-2" />
            <div>
              <h2 className="text-redC m-0  text-2xl font-tsg font-bold">
                {counts.products}
              </h2>
              <h4 className=" text-lightC block font-h4 text-primary-color font-medium text-lg leading-none tsgf">
                Years of Experience
              </h4>
            </div>
          </div>
          <div className="flex  flex-col min-w-[10rem] justify-center items-center text-center m-4  ixi:min-w-0  ixr:min-w-0">
            <img src={icon4} className="h-16 mb-2" />
            <div>
              <h2 className="text-redC m-0  text-2xl font-tsg font-bold">
                {counts.partners}
              </h2>
              <h4 className=" text-lightC block font-h4 text-primary-color font-medium text-lg leading-none tsgf">
                Staffs
              </h4>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center lg:mt-8 ">
          <a href="tel:+14016326426">
            <button className="bg-redC text-lightC shadow-lightC border-solid border-lightC rounded-md p-2 shadow m-4 tsgf flex items-center gap-4">
              <IoMdCall /> (401) 632 6426
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Whychoose;
