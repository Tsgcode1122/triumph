// ServiceArea.jsx
import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "../hero.css";
import brick from "../Images/icons/staff.png";
import lashB from "../Images/service-bg.jpg";
import useZoomInAnimation from "../animation/useZoomInAnimation";
const ServiceAreass = () => {
  useZoomInAnimation(".zoom");
  const serviceAreas = [
    { id: 1, name: "123 Main St, City" },
    { id: 2, name: "456 Oak St, City" },
    { id: 3, name: "789 Pine St, City" },
    { id: 4, name: "101 Elm St, City" },
    { id: 5, name: "202 Maple St, City" },
    { id: 6, name: "303 Birch St, City" },
    { id: 7, name: "404 Cedar St, City" },
    { id: 8, name: "505 Walnut St, City" },
    { id: 9, name: "606 Pine St, City" },
    { id: 10, name: "707 Oak St, City" },
  ];
  const bStyle = {
    backgroundImage: `url(${lashB})`,
  };
  return (
    <>
      <div
        className="p-8 sm:px-16 lg:px-20 xl:px-36 bg-cover bg-center"
        style={bStyle}
      >
        <div className=" flex flex-col items-center relative my-8 zoom">
          <img
            src={brick}
            className="max-w-full h-[3rem] rounded-full bg-blueC p-2 absolute mt-[-2rem] box-shad "
            alt="Flooring"
          />
          <h2 className="text-redC tsgB subheadb xl:text-xl font-bold">
            SERVICE AREA
          </h2>
          <p className="text-lightC font-tsg mt-[3rem] xl:text-[25px] text-xl bg-blueC p-2 absolute  rounded-xl">
            Serving various cities :
          </p>
        </div>

        <div className="grid grid-cols-2  gap-1 sm:grid-cols-3 lg:grid-cols-4 ">
          {serviceAreas.map((area) => (
            <div key={area.id} className="flex items-center my-4">
              <div className="mr-4">📍</div>
              <div>
                <h4 className="text-lightC text-lg tsgf">{area.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceAreass;
