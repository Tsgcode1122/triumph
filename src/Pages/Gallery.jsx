import { React, useEffect } from "react";
import lashB from "../Images/b4.jpg";
import GalleryImg from "../Component/GalleryImg";
import ImageGallery from "../Component/ImageGallery";
import Footer from "../Component/Footer";
import ContactForm from "../Component/ContactForm";
import ScrollToTopButton from "../Component/ScrollToTopButton";
const Gallery = () => {
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  });
  const bStyle = {
    backgroundImage: `url(${lashB})`,
  };
  return (
    <>
      <div>
        <div className="pt-16  bg-center bg-cover text-center" style={bStyle}>
          <h1 className="p-[60px] text-lightC font-bold bg-blueC  bg-opacity-60 text-2xl">
            EXPLORE OUR WORK ON THE 'GRAM
          </h1>
        </div>
        <ImageGallery />

        <GalleryImg />
        <ContactForm />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Gallery;
