import React, { useRef } from "react";
import aft1 from "../Images/aft1.jpg";
import bef1 from "../Images/bef1.jpg";
import aft2 from "../Images/aft2.jpg";
import bef2 from "../Images/bef2.jpg";

const ImageComparison = () => {
  const resizerRef = useRef(null);

  const handleTouchStart = (e) => {
    e.preventDefault();
    document.addEventListener("touchmove", handleTouchMove, false);
    document.addEventListener("touchend", handleTouchEnd, false);
  };

  const handleTouchMove = (e) => {
    const resizer = resizerRef.current;
    const deltaX = e.touches[0].clientX - resizer.getBoundingClientRect().left;
    resizer.style.left = `${deltaX}px`;
  };

  const handleTouchEnd = () => {
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
  };

  return (
    <div className="lg:grid lg:grid-cols-2 sticky gap-4 items-center">
      <div className="mb-4">
        <div className="diff aspect-[15/12] relative">
          <div className="diff-item-1">
            <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
              <img src={aft1} alt="After 1" />
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-200 text-9xl font-black grid place-content-center">
              <img src={bef1} alt="Before 1" />
            </div>
          </div>
          <div
            className="diff-resizer"
            onTouchStart={handleTouchStart}
            ref={resizerRef}
          ></div>
        </div>
      </div>
      <div className="diff aspect-[15/11] relative">
        <div className="diff-item-1">
          <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
            <img src={aft2} alt="After 2" />
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-9xl font-black grid place-content-center">
            <img src={bef2} alt="Before 2" />
          </div>
        </div>
        <div
          className="diff-resizer"
          onTouchStart={handleTouchStart}
          ref={resizerRef}
        ></div>
      </div>
    </div>
  );
};

export default ImageComparison;
