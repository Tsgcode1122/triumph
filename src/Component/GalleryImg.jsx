import React, { useRef } from "react";
import "../hero.css";
import bef1 from "../Images/bef1.jpg";
import aft1 from "../Images/aft1.jpg";
import bef2 from "../Images/bef2.jpg";
import aft2 from "../Images/aft2.jpg";
import brick from "../Images/icons/light.png";
import ReactCompareImage from "react-compare-image";
import useZoomInAnimation from "../animation/useZoomInAnimation";

const GalleryImg = () => {
  const containerRef = useRef(null);
  useZoomInAnimation(".zoom");

  return (
    <>
      <div className="bg-cover bg-center justify-center text-center">
        <div className="flex flex-col items-center relative my-8 zoom">
          <img
            src={brick}
            className="max-w-full h-[3rem]  rounded-full bg-lightC p-2 absolute mt-[-2rem] box-shad "
            alt="Flooring"
          />
          <h2 className="text-redC tsgB subhead xl:text-xl font-bold">
            TRANSFORMATION
          </h2>
          <p className="text-blueC font-tsg mt-[3rem] text-xl bg-lightC p-2 absolute xl:text-[25px] rounded-xl">
            Before & After
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 sticky gap-4 items-center">
          <div className="mb-4" ref={containerRef}>
            <ReactCompareImage
              leftImage={bef1}
              rightImage={aft1}
              aspectRatio="wider"
              containerRef={containerRef}
            />
          </div>
          <ReactCompareImage
            leftImage={bef2}
            rightImage={aft2}
            aspectRatio="wider"
            containerRef={containerRef}
          />
        </div>
      </div>
    </>
  );
};

export default GalleryImg;
