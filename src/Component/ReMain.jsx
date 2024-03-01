import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
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
  {
    id: 4,
    name: "Michael Johnson",
    rating: 5,
    date: "April 12, 2023",
    content:
      "Exceptional service! The team went above and beyond to meet our needs.",
  },
  {
    id: 5,
    name: "Emily Davis",
    rating: 4,
    date: "May 5, 2023",
    content:
      "Very satisfied with the results. Professional and courteous staff.",
  },
  {
    id: 6,
    name: "David Rodriguez",
    rating: 5,
    date: "June 20, 2023",
    content:
      "Outstanding service! Highly recommend for their attention to detail.",
  },
  {
    id: 7,
    name: "Sarah Thompson",
    rating: 4,
    date: "July 8, 2023",
    content:
      "Impressive workmanship and timely completion. Will definitely use again.",
  },
  {
    id: 8,
    name: "Alexandra Martinez",
    rating: 5,
    date: "August 15, 2023",
    content: "Professional and efficient service. Exceeded expectations.",
  },
  {
    id: 9,
    name: "William Lee",
    rating: 4,
    date: "September 1, 2023",
    content:
      "Great communication throughout the project. Very pleased with the outcome.",
  },
  {
    id: 10,
    name: "Olivia White",
    rating: 5,
    date: "October 10, 2023",
    content: "Top-notch service! Courteous and knowledgeable staff.",
  },
  {
    id: 11,
    name: "Daniel Harris",
    rating: 4,
    date: "November 18, 2023",
    content: "Excellent attention to detail. Delivered as promised.",
  },
  {
    id: 12,
    name: "Sophia Brown",
    rating: 5,
    date: "December 5, 2023",
    content: "Fantastic service! Couldn't be happier with the results.",
  },
];

const ReMain = () => {
  useZoomInAnimation(".zoom");
  useLeftToRightSwipe(".left-in");
  const getInitials = (name) => {
    const names = name.split(" ");
    return names
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <>
      <div className=" mx-8 mt-8 md:mx-10 lg:mx-16 xl:mx-36">
        <div className=" flex flex-col items-center relative mt-16 mb-12 zoom">
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
        <div className="sm:grid sm:grid-cols-2 gap-4 left-in">
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
      <div className="flex justify-center  items-center bg-lightC mt-[-10px]  p-4 ">
        <a href="tel:+14016326426">
          <button className="bg-redC text-lightC shadow-lightC border-solid border-lightC rounded-md p-2 box-shad mr-3 flex items-center gap-4">
            <IoMdCall /> (401) 632 6426
          </button>
        </a>
      </div>
    </>
  );
};

export default ReMain;
