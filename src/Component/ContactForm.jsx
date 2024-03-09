import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { GenIcon } from "react-icons";
import "../hero.css";
import brick from "../Images/icons/staff.png";
import { FaInstagram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import useZoomInAnimation from "../animation/useZoomInAnimation";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
const ContactForm = () => {
  useZoomInAnimation(".zoom");
  useLeftToRightSwipe(".left-in");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    services: "",
    message: "",
    type: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xnqkdolz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",

          services: "",
          message: "",
          type: "",
        });

        setShowSuccessMessage(true);

        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 10000);
      } else {
        console.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };

  return (
    <>
      <div className="   m-0 lg:mt-16 bg-blueC tsgf md:px-16 xl:px-32">
        <div className="lg:grid lg:grid-cols-2 items-center">
          <div className="text-center bg-blueC pb-16 pt-8 ">
            <div className=" flex flex-col items-center relative my-8 zoom pt-8">
              <img
                src={brick}
                className="max-w-full h-[3rem] rounded-full bg-blueC p-2 absolute mt-[-2rem] box-shad "
                alt="Flooring"
              />
              <h2 className="text-redC tsgB subheadb  font-bold">CONTACT US</h2>
              <p className="text-lightC font-tsg mt-[3rem] text-xl bg-blueC p-2 absolute  rounded-xl">
                Get An Instant Quote Now!
              </p>
            </div>
            <p className="text-lightC mb-4  text-center min-[500px]:mx-8 tsgf iix:mx-4 ixr:mx-4 ixi:mx-4 left-in">
              Questions, feedback, or inquiries? Connect with us by phone,
              email, or the form below. Whether you're an artist, enthusiast, or
              curious visitor, let's start a conversation and explore
              possibilities together. Our customer support is ready to hear you.
              Get a quote now!
            </p>
            <div className="flex flex-col items-center justify-center  bg-transparent tsgf">
              <div className="flex px-4 justify-center  items-center ixi:gap-4 mb-4 tsgf ixi:flex-col iix:flex-col iix:gap-4 ixr:flex-col ixr:gap-4">
                <a href="https://www.instagram.com/triumphsolarpicasso?igsh=MWF5d21nN3p4bWEzZQ==">
                  <button className=" text-lightC shadow-lightC border-solid border-lightC rounded-md p-2 box-shad mr-3 flex items-center gap-4">
                    <FaInstagram /> triumphsolarpicasso
                  </button>
                </a>
                <a href="tel:+14016326426">
                  <button className=" text-lightC shadow-lightC border-solid border-lightC rounded-md p-2 box-shad mr-3 flex items-center gap-4">
                    <IoMdCall /> (401) 632 6426
                  </button>
                </a>
              </div>
              <div className="flex px-4 justify-center mb-4">
                <a>
                  <button className=" text-lightC shadow-lightC border-solid border-lightC rounded-md p-2 box-shad mr-3 flex items-center gap-4">
                    <CiLocationOn /> 123 Main St, City, United States
                  </button>
                </a>
              </div>
              <div className="flex flex-col px-4 justify-center">
                <a href="mailto:triumphsolar@yahoo.com">
                  <button className=" text-lightC shadow-lightC border-solid border-lightC rounded-md p-2 box-shad mr-3 flex items-center gap-4">
                    <MdOutlineEmail />
                    triumphsolar@yahoo.com
                  </button>
                </a>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 min-[500px]:px-10 py-10 sm:px-24 md:mx-16 font-tsg bg-lightC mt-[-29px] box-shad gb lg:mx-2 lg:px-6 iix:px-4 ixi:px-4 ixr:px-4 "
          >
            <div className="zoom">
              <div className="min-[500px]:flex justify-between iix:grid iix:grid-cols-2 iix:gap-3 ixr:grid ixr:grid-cols-2 ixr:gap-3">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-blueC "
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 border rounded w-full shadow-2xl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-blueC"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 border rounded w-full shadow-2xl"
                  />
                </div>
              </div>
              <div className="min-[500px]:flex justify-between iix:grid iix:grid-cols-2 iix:gap-3 ixr:grid ixr:grid-cols-2 ixr:gap-3">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-blueC font-tsg"
                  >
                    Phone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 border rounded w-full shadow-2xl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-blueC font-tsg"
                  >
                    Address*
                  </label>
                  <input
                    type="tel"
                    id="address"
                    name="address"
                    placeholder="Full Address"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 border rounded w-full shadow-2xl"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="services"
                  className="block text-sm font-bold text-blueC"
                >
                  Select Services:
                </label>
                <select
                  id="services"
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 border rounded w-full shadow-2xl"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="service1">Solar Install/Cleaning</option>
                  <option value="service2">Landscape Service</option>
                  <option value="service1">All Pressure Washing Service</option>
                  <option value="service2">Exterior/Interior Painting</option>
                  <option value="service1">Leak Repair</option>
                  <option value="service2">Pool Screen Repair</option>
                  {/* Add more service options as needed */}
                </select>
              </div>
              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-bold text-blueC"
                >
                  Residential or Commercial:
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 border rounded w-full shadow-2xl"
                >
                  <option value="" disabled>
                    Select a type
                  </option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-blueC"
                >
                  Your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message in detailed"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 border rounded w-full shadow-2xl"
                ></textarea>
              </div>
              <div className="text-center bg-redC rounded-xl text-lightC">
                <button
                  type="submit"
                  className=" text-lightC bg-redC font-bold  px-8 py-2 inline-block tsgf"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
        {showSuccessMessage && (
          <div className="success-message bg-green-200 text-green-800 p-2 rounded mt-4">
            <p>Thanks for messaging</p>
            <p>We'll respond to you as soon as possible.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactForm;
