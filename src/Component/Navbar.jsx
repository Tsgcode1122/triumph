import React, { useState, useEffect } from "react";
import "../hero.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";
import {
  IoIosArrowDropdown,
  IoIosArrowDropright,
  IoMdTime,
} from "react-icons/io";
import menu from "../Images/icons/menu1.png";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    event.stopPropagation();
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebarOnOutsideClick = (event) => {
    const sidebar = document.getElementById("sidebarr");
    if (sidebar && !sidebar.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("click", closeSidebarOnOutsideClick);
    }

    return () => {
      document.removeEventListener("click", closeSidebarOnOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <div className="md:hidden fixed w-full bg-lightC  p-4 flex justify-between z-50 border-b-2 border-lightC sm:px-6 ">
        <Link
          to="/"
          className="border border-lightC rounded-md transition-all duration-300 hover:text-black hover:bg-brightC hover:border-lightC"
        >
          <img className="max-w-full h-[20px] " alt="Logo" />
        </Link>
        <div className="shadow-md p-1 bg-redC rounded-lg border-lightC  transition-all duration-300 hover:scale-[1.02] hover:bg-redC  hover:border-l-blueC hover:border-l-4">
          <img
            src={menu}
            alt="menu"
            className="max-w-full h-[20px] "
            onClick={(event) => toggleSidebar(event)}
          />
        </div>
      </div>

      {isSidebarOpen && (
        <motion.div
          className="  md:hidden bg-white right-0  top-0 fixed z-50 w-[60%] h-full tsgf font-medium 
         shadow-md"
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <div className="flex  float-end p-4 ">
            <div className="shadow-md p-1 bg-redC rounded-lg border-lightC  transition-all duration-300 hover:scale-[1.02] hover:bg-redC  hover:border-l-blueC hover:border-l-4">
              <img
                src={menu}
                alt="menu"
                className="max-w-full h-[20px] "
                onClick={(event) => toggleSidebar(event)}
              />
            </div>
          </div>
          <ul className="mt-16" id="sidebarr">
            <li className="pb-2">
              <Link
                to="/"
                className="flex justify-between p-2 border shadow-inner border-lightC rounded-md transition-all duration-300 hover:scale-[1.02] hover:bg-lightC hover:border-blueC text-redC"
                onClick={(event) => toggleSidebar(event)}
              >
                HOME <IoIosArrowDropright />
              </Link>
            </li>

            <li className="pb-2">
              <Link
                to="/About"
                className="flex justify-between shadow-inner p-2 border border-lightC rounded-md transition-all duration-300  hover:scale-[1.02] hover:bg-lightC hover:border-blueC hover:text-redC"
                onClick={(event) => toggleSidebar(event)}
              >
                ABOUT <IoIosArrowDropright />
              </Link>
            </li>
            <li className="pb-2">
              <Link
                to="/Services"
                className="flex justify-between p-2 shadow-inner border border-lightC rounded-md transition-all duration-300  hover:scale-[1.02] hover:bg-lightC hover:border-blueC hover:text-redC"
                onClick={(event) => toggleSidebar(event)}
              >
                SERVICES <IoIosArrowDropright />
              </Link>
            </li>
            <li className="pb-2">
              <Link
                to="/Contact"
                className="flex justify-between p-2 border shadow-inner border-lightC rounded-md transition-all duration-300  hover:scale-[1.02] hover:bg-lightC hover:border-blueC hover:text-redC"
                onClick={(event) => toggleSidebar(event)}
              >
                CONTACT US <IoIosArrowDropright />
              </Link>
            </li>
            <li className="pb-2">
              <Link
                to="/Gallery"
                className="flex justify-between p-2 border shadow-inner border-lightC rounded-md transition-all duration-300  hover:scale-[1.02] hover:bg-lightC hover:border-blueC hover:text-redC"
                onClick={(event) => toggleSidebar(event)}
              >
                GALLERY <IoIosArrowDropright />
              </Link>
            </li>
            {/* <li className="pb-2">
              <Link
                to="/ServiceArea"
                className="flex justify-between p-2 border shadow-inner border-lightC rounded-md transition-all duration-300 hover:scale-[1.02] hover:bg-lightC hover:border-blueC  hover:text-redC"
                onClick={(event) => toggleSidebar(event)}
              >
                SERVICE AREA
                <IoIosArrowDropright />
              </Link>
            </li> */}
            <li className="pb-2">
              <Link
                to="/Reviews"
                className="flex justify-between p-2 border shadow-inner border-lightC rounded-md transition-all duration-300 hover:scale-[1.02] hover:bg-lightC hover:border-blueC  hover:text-redC"
                onClick={(event) => toggleSidebar(event)}
              >
                REVIEWS
                <IoIosArrowDropright />
              </Link>
            </li>
          </ul>
          <div className="m-2  px-2 pt-4 shadow-inner border border-lightC rounded-md ">
            <ul>
              <li className="flex items-center  gap-2 mb-4 text-redC">
                <CiMail /> triumphsolar@yahoo.com
              </li>
              <li className="flex items-center  gap-2">
                {" "}
                <IoMdTime />
                Monday-Saturday: 8AM - 6PM
              </li>
            </ul>
          </div>
        </motion.div>
      )}

      <div className="hidden fixed w-full bg-lightC text-darkC  md:flex md:px-4  navbar z-50 lg:px-8 xl:px-28  ">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            <img className="max-w-full h-[50px] " alt="Logo" />
          </Link>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal px-1 md:text-[16px]  lg:text-[18px] xl:text-xl ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/Gallery">Gallery</Link>
            </li>

            <li>
              <Link to="/Reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
