import React from "react";

import { Outlet, Link, useNavigate } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import lashB from "../Images/service-bg.jpg";

const Footer = () => {
  const bStyle = {
    backgroundImage: `url(${lashB})`,
  };
  return (
    <>
      <div className="bg-lightC">
        <div
          className=" grid min-[500px]:grid-cols-2 gap-4 sm:gap-6 bg-cover bg-center text-lightC mt-8 box-shad min-[500px]:px-8 pt-12 lg:grid-cols-4 xl:px-36 gb  iix:grid-cols-1  ixr:grid-cols-1 ixi:grid-cols-1 ixr:px-4 iix:px-2 ixi:px-4"
          style={bStyle}
        >
          <div className="pb-6 iix:pb-2 ixr:pb-2 ixi:pb-2  ">
            <h3 className="text-redC mb-1 font-bold font-tsg text-xl">
              About Us
            </h3>
            <p>
              {" "}
              Illuminate your home with TriumphSolarPicasso – specialists in
              solar services, installations, and system diagnosis. Our team
              delivers excellence in solar cleaning, pressure washing, painting,
              gutter cleaning, and versatile handyman solutions.
            </p>
          </div>
          <div className="min-[500px]:pb-6 iix:pb-2 ixr:pb-2 ixi:pb-2 ">
            <h3 className="text-redC mb-1 font-tsg text-xl font-bold">
              Useful Links
            </h3>
            <ul className="flex flex-col gap-3 tsgf iix:flex  iix:flex-row iix:gap-1 ixr:flex-row ixr:flex ixi:flex ixi:flex-row ">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Service">Service</Link>
              </li>
              <li>
                <Link to="/Gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="pb-6 iix:hidden ixr:hidden ixi:hidden  ">
            <h3 className="text-redC mb-1 font-bold font-tsg text-xl">
              Service List
            </h3>
            <div className="flex flex-col gap-2">
              <p>Solar Diagnosis/Maintenance</p>
              <p>All Pressure Washing</p>
              <p>Leak Repair</p>
              <p>Exterior/Interior Painting</p>
              <p>Landscape Service</p>
              <p>Pool Services</p>
              <p>and handyman services...</p>
            </div>
          </div>
          <div className="min-[500px]:pb-6 iix:pb-2 ixr:pb-2 ixi:pb-2  ">
            <h3 className="text-redC mb-1 font-tsg text-xl font-bold">
              Contact Us
            </h3>
            <div className="flex flex-col gap-2 tsgf">
              <a href="https://www.instagram.com/triumphsolarpicasso?igsh=MWF5d21nN3p4bWEzZQ==">
                <button className=" flex items-center text-justify gap-4">
                  <FaInstagram /> triumphsolarpicasso
                </button>
              </a>
              <a href="tel:+14016326426">
                <button className=" flex items-center text-justify gap-4">
                  <IoMdCall /> (401) 632 6426
                </button>
              </a>

              <a>
                <button className=" flex text-justify items-center gap-4">
                  <CiLocationOn /> 123 Main St, City, United States
                </button>
              </a>

              <a href="mailto:triumphsolar@yahoo.com">
                <button className=" flex items-center gap-4">
                  <MdOutlineEmail />
                  triumphsolar@yahoo.com
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center bg-blueC text-lightC p-4">
          <p>&copy; 2024 TriumphSolar All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
