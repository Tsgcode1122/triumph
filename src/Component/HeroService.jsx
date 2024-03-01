import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "../hero.css";
import brick from "../Images/icons/solarcl.png";
import paint from "../Images/icons/paint.png";
import lands from "../Images/icons/lands.png";
import washing from "../Images/icons/washing.png";
import leaking from "../Images/icons/leaking.png";
import pool from "../Images/icons/pool.png";
const HeroService = () => {
  return (
    <>
      <div className="tsgf  bg-lightC  mt-[-2rem] mx-4 border-2 border-solid border-lightC rounded-2xl p-2  flex flex-wrap gap-1 box-shad justify-center md:mx-8 md:mt-[-4rem] lg:mx-16 xl:mx-28  max-[320px]:mt-[-3rem]    ixr:mt-[-3rem]  ixi:mt-[-3rem] max-[320px]:px-1    ixr:px-1  ixi:px-1    ">
        <div className="bg-lightC flex  flex-col max-w-[7rem] justify-center items-center text-center mx-4 border-2 my-2 border-solid border-lightC rounded-xl p-1 shadow-md sm:max-w-[9rem] md:max-w-[10rem] md:p-2  max-[320px]:max-w-[25rem] max-[320px]:px-8    ixi:max-w-[9rem]  ixi:mx-1  ixr:max-w-[7.5rem]  ixr:mx-1 ">
          <img src={brick} className="max-w-full h-[2rem] " alt="Flooring" />
          <span className="text-[12px] md:text-[14px] max-[320px]:text-[12px] ixi:text-[12px] ">
            SOLAR INSTALL/CLEANING
          </span>
        </div>
        <div className="bg-lightC flex  flex-col max-w-[7rem] justify-center items-center text-center mx-4 border-2 my-2 border-solid border-lightC rounded-xl p-1 shadow-md sm:max-w-[9rem] md:max-w-[10rem] md:p-2  max-[320px]:max-w-[25rem] max-[320px]:px-8    ixr:max-w-[7rem]   ixi:max-w-[9rem]  ixi:mx-1  ixr:max-w-[7.5rem]  ixr:mx-1  ">
          <img src={washing} className="max-w-full h-[2rem] " alt="Flooring" />
          <span className="text-[12px] md:text-[14px]">
            ALL PRESSURE WASHING
          </span>
        </div>
        <div className="bg-lightC flex  flex-col max-w-[7rem] justify-center items-center text-center mx-4 border-2 my-2 border-solid border-lightC rounded-xl p-1 shadow-md sm:max-w-[9rem] md:max-w-[10rem] md:p-2  max-[320px]:max-w-[25rem] max-[320px]:px-8    ixr:max-w-[7rem]   ixi:max-w-[9rem]  ixi:mx-1 ixr:max-w-[7.5rem]  ixr:mx-1   ">
          <img src={paint} className="max-w-full h-[2rem] " alt="Flooring" />
          <span className="text-[12px] md:text-[14px]">
            EXTERIOR/INTERIOR PAINTING
          </span>
        </div>

        <div className="bg-lightC flex  flex-col min-w-[7rem] justify-center items-center text-center mx-4 border-2 my-2 border-solid border-lightC rounded-xl p-1 shadow-md sm:min-w-[9rem] md:min-w-[10rem] md:p-2  max-[320px]:min-w-[14rem] max-[320px]:px-8   ixi:min-w-[9rem]  ixi:mx-1 ixr:min-w-[7.5rem]  ixr:mx-1  ">
          <img src={lands} className="max-w-full h-[2rem] " alt="Flooring" />
          <span className="text-[12px] md:text-[14px]">LANDSCAPE</span>
        </div>
        <div className="bg-lightC flex  flex-col min-w-[7rem] justify-center items-center text-center mx-4 border-2 my-2 border-solid border-lightC rounded-xl p-1 shadow-md sm:min-w-[9rem] md:min-w-[10rem] md:p-2  max-[320px]:min-w-[14rem] ixi:min-w-[9rem]  ixi:mx-1 ixr:min-w-[7.5rem]  ixr:mx-1 ">
          <img src={leaking} className="max-w-full h-[2rem] " alt="Flooring" />
          <span className="text-[12px] md:text-[14px]">LEAK REPAIR</span>
        </div>
        <div className="bg-lightC flex  flex-col min-w-[7rem] justify-center items-center text-center mx-4 border-2 my-2 border-solid border-lightC rounded-xl p-1 shadow-md sm:min-w-[9rem] md:min-w-[10rem] md:p-2 max-[320px]:min-w-[14rem]  ixi:min-w-[9rem]  ixi:mx-1 ixr:min-w-[7.5rem]  ixr:mx-1   ">
          <img src={pool} className="max-w-full h-[2rem] " alt="Flooring" />
          <span className="text-[12px] md:text-[14px]">POOL SERVICES</span>
        </div>
      </div>
    </>
  );
};

export default HeroService;
