import React from "react";
import { Link } from "react-router-dom";
import serviceB from "../Images/bb.jpg";
import brick from "../Images/icons/light.png";
import { serviceData } from "./ServiceData";
import useZoomInAnimation from "../animation/useZoomInAnimation";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
const ServiceList = () => {
  useZoomInAnimation(".zoom");
  useLeftToRightSwipe(".left-in");
  const bStyle = {
    backgroundImage: `url(${serviceB})`,
  };
  return (
    <>
      <div className="m-0 min-[500px]:px-8 py-8 bg-lightC bg-center justify-center text-center sm:px-6   bg-no-repeat iix:px-4 ixi:px-6 ixr:px-6">
        <div className=" flex flex-col items-center relative mt-8 mb-14 zoom">
          <img
            src={brick}
            className="max-w-full h-[3rem] rounded-full bg-lightC p-2 absolute mt-[-2rem] box-shad "
            alt="Flooring"
          />
          <h2 className="text-redC tsgB subhead  font-bold xl:text-xl">
            OUR SERVICES
          </h2>
          <p className="text-blueC font-tsg mt-[3rem] text-xl bg-lightC p-2 absolute  rounded-xl text-[25px]">
            Providing the Best Services
          </p>
        </div>
        <div className="grid grid-cols-1 sm:px-4 lg:px-8 xl:px-28 sm:grid-cols-2 md:grid-cols-2  xl:grid-cols-3 gap-4">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="my-2 bg-lightC box-shad border-design left-in "
            >
              {service.video ? (
                <video
                  src={service.video}
                  alt={service.service_name}
                  className="border-des"
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img
                  src={service.img}
                  alt={service.service_name}
                  className="border-des max-h-[20rem] w-full"
                />
              )}
              <div className="p-2 ">
                <h2 className="text-blueC text-xl font-bold font-tsg text-[25px]">
                  {service.service_name}
                </h2>
                <p className="mb-4 tsgf text-center  min-h-[8rem] xl:min-h-[10rem] p-2  ixi:text-[14px] iix:text-[12px] ixr:text-[14px] ">
                  {service.service_description}
                </p>
                <Link key={index} to={`/Services/${service.id}`}>
                  <button className="bg-redC shadow-lightC border-solid border-lightC rounded-md p-2 shadow mr-3 text-lightC">
                    Read More...
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceList;
