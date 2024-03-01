import React from "react";
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import "../hero.css";
import brick from "../Images/icons/light.png";
import useZoomInAnimation from "../animation/useZoomInAnimation";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
const reviews = [
  {
    id: 1,
    name: "Eleanor Turner",
    rating: 5,
    date: "November 20, 2023",
    content:
      "I recently used their Solar Install/Cleaning service, and I'm thrilled with the results! The team was professional, efficient, and my solar panels are now working at their best. Excellent job!",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    rating: 4,
    date: "January 8, 2024",
    content:
      "Had the Exterior/Interior Painting service done by them. The painters were skilled, and the color suggestions were fantastic",
  },

  {
    id: 3,
    name: "John Doe",
    rating: 5,
    date: "February 15, 2023",
    content: "Excellent service and friendly staff! Highly recommended.",
  },
  {
    id: 4,
    name: "Jane Smith",
    rating: 4,
    date: "March 3, 2023",
    content: "Great experience! Quick and efficient service.",
  },
];

const Reviewss = () => {
  useZoomInAnimation(".zoom");

  const getInitials = (name) => {
    const names = name.split(" ");
    return names
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <>
      <div className=" mx-8 mt-8 md:mx-10 lg:mx-16 xl:mx-36 zoom">
        <div className=" flex flex-col items-center relative mt-16 mb-12 ">
          <img
            src={brick}
            className="max-w-full h-[3rem] rounded-full bg-lightC p-2 absolute mt-[-2rem] box-shad "
            alt="Flooring"
          />
          <h2 className="text-redC tsgB subhead  font-bold">REVIEWS</h2>
          <p className="text-blueC font-tsg mt-[3rem] text-xl bg-lightC p-2 absolute  rounded-xl">
            Our Clients Trust Us
          </p>
        </div>
        <div className="sm:grid sm:grid-cols-2 gap-4  ">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white box-shad rounded-md p-4 mb-4 box-shad "
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blueC text-lightC rounded-full flex items-center justify-center font-semibold mr-2 box-shad font-tsg">
                    {getInitials(review.name)}
                  </div>
                  <div className="text-lg font-semibold font-tsg">
                    {review.name}
                  </div>
                </div>
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, index) => (
                    <div key={index} className="text-yellow-500 mr-1">
                      ⭐
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-gray-500 tsgf mb-2">{review.date}</div>
              <div className="text-darkC tsgf">{review.content}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center  items-center bg-lightC mt-[-10px]  p-4 tsgf ">
        <Link to="/Reviews">
          <button className="bg-redC text-lightC shadow-lightC border-solid border-lightC rounded-md p-2 box-shad mr-3">
            More Reviews
          </button>
        </Link>
        <a href="tel:+14016326426">
          <button className="bg-redC text-lightC shadow-lightC border-solid border-lightC rounded-md p-2 box-shad mr-3 flex items-center gap-4">
            <IoMdCall /> (401) 632 6426
          </button>
        </a>
      </div>
    </>
  );
};

export default Reviewss;
