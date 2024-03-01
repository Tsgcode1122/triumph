import React, { useEffect } from "react";
import "../hero.css";
import { motion, useAnimation } from "framer-motion";
import img1 from "../Images/icons/house.png";
import img2 from "../Images/icons/roller.png";
import img3 from "../Images/icons/solar-panel.png";
import img4 from "../Images/icons/house.png";
import img5 from "../Images/icons/roller.png";
const MovingText = () => {
  const textVariants = {
    initial: { x: "40%" },
    animate: {
      x: "-100%",
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <div
      className="bg-blueC p-2"
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "flex",
      }}
    >
      <motion.p
        variants={textVariants}
        initial="initial"
        animate={controls}
        className="text-[15px] md:text-[18px] text-white tsgf flex"
      >
        <span className="ml-8 items-center flex  gap-2">
          <img className="h-4" src={img1} /> God first
        </span>
        <span className="ml-8 items-center flex gap-2">
          <img className="h-4" src={img2} /> Quality
        </span>
        <span className="ml-8 items-center flex  gap-2">
          <img className="h-4" src={img3} /> Integrity
        </span>
        <span className="ml-8 items-center flex  gap-2">
          <img className="h-4" src={img4} /> Transparency
        </span>
        <span className="ml-8 items-center flex  gap-2">
          <img className="h-4" src={img5} /> Helping the community save
        </span>
      </motion.p>
    </div>
  );
};

export default MovingText;
