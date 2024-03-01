import React, { useState } from "react";
import "../hero.css";
import brick from "../Images/icons/light.png";
import Image1 from "../Images/image1.jpg";
import Image2 from "../Images/image2.jpg";
import Image3 from "../Images/image3.jpg";
import Image4 from "../Images/image4.jpg";
import Image5 from "../Images/image5.jpg";
import Image6 from "../Images/image6.jpg";
import Image7 from "../Images/image7.jpg";
import Image8 from "../Images/image8.jpg";
import Image9 from "../Images/image9.jpg";
import Image10 from "../Images/image10.jpg";
import useZoomInAnimation from "../animation/useZoomInAnimation";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
const ImageGallery = () => {
  useZoomInAnimation(".zoom");
  const images = [
    { id: 1, src: Image1, height: "250px" },
    { id: 2, src: Image2, height: "200px" },
    { id: 3, src: Image3, height: "200px" },
    { id: 4, src: Image4, height: "200px" },
    { id: 5, src: Image5, height: "200px" },
    { id: 6, src: Image6, height: "200px" },
    { id: 7, src: Image7, height: "200px" },
    { id: 8, src: Image8, height: "200px" },
    { id: 9, src: Image9, height: "200px" },
    { id: 10, src: Image10, height: "250px" },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="bg-lightC xl:mx-36">
        <div className=" flex flex-col items-center relative mt-16 zoom">
          <img
            src={brick}
            className="max-w-full h-[3rem] rounded-full bg-lightC p-2 absolute mt-[-2rem] box-shad "
            alt="Flooring"
          />
          <h2 className="text-redC tsgB subhead xl:text-xl font-bold">
            GALLERY
          </h2>
          <p className="text-blueC font-tsg mt-[3rem] text-xl bg-lightC p-2 absolute xl:text-[25px] rounded-xl">
            Our Projects
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 bg-lightC pt-16 mt-12  pb-8 px-4 gb box-shad relative   md:px-8 md:pt-16 lg:px-16 lg:pt-24 xl">
          {images.map((image, index) => {
            let height = image.height;
            let marginTop = 0;
            let borderRadius = 0;
            if (index > 0 && index % 2 === 1) {
              marginTop = -50;
            }
            if (index === 0) {
              marginTop = -50;
            }
            // Adjust height for large screens
            if (height !== "300px" && window.innerWidth >= 1280) {
              height = "400px";
            }
            if (index === 0 && window.innerWidth >= 1280) {
              height = "450px";
            }
            if (index === 9 && window.innerWidth >= 1280) {
              height = "450px";
            }

            return (
              <>
                <div
                  key={image.id}
                  style={{
                    height,
                    marginTop,
                    position: "relative",
                    overflow: "hidden",
                    borderRadius:
                      index === 0
                        ? "30px 6px 6px 6px"
                        : index === 1
                          ? "0px 30px 6px 6px"
                          : "",
                    boxShadow: "1px 1px 7px -1px rgb(0, 0, 0)",
                  }}
                  className="rounded-md md:rounded-3xl  cursor-pointer "
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image.src}
                    alt={`Image ${image.id}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className="rounded-md shadow-2xl "
                  />
                </div>
              </>
            );
          })}
        </div>
        {modalVisible && (
          <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 backdrop-filter backdrop-blur flex items-center justify-center z-40">
            <div className="bg-white p-4 rounded-md w-full max-w-3xl relative">
              <button
                className="absolute top-0 right-0 p-2 text-redC bg-lightC rounded-xl box-shad "
                onClick={closeModal}
              >
                Cancel
              </button>
              {selectedImage && (
                <img
                  src={selectedImage.src}
                  alt={`Image ${selectedImage.id}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="rounded-md"
                />
              )}
            </div>
          </div>
        )}
        <div className="flex relative justify-center  items-center bg-lightC mt-[-10px]  p-4 box-shad gt tsgf">
          <Link to="/Contact">
            <button className="bg-redC text-lightC shadow-lightC border-solid border-lightC rounded-md p-2 shadow mr-3">
              Get Free Quote!!!
            </button>
          </Link>
          <a href="tel:+14016326426">
            <button className="bg-redC text-lightC shadow-lightC border-solid border-lightC rounded-md p-2 shadow mr-3 flex items-center gap-4">
              <IoMdCall /> (401) 632 6426
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
