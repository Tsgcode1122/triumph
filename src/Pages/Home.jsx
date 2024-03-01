import { React, useEffect } from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import About from "../Component/AboutUs";
import Whychoose from "../Component/Whychoose";
import Services from "./Services";
import ServiceList from "../Component/ServiceList";
import MovingText from "../Component/MovingText";
import WhyChooseUs from "../Component/WhyChooseUs";
import GalleryImg from "../Component/GalleryImg";
import ImageGallery from "../Component/ImageGallery";
import ServiceAreass from "../Component/ServiceAreass";
import Reviewss from "../Component/Reviewss";
import ContactForm from "../Component/ContactForm";
import Footer from "../Component/Footer";
import ScrollToTopButton from "../Component/ScrollToTopButton";

const Home = () => {
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MovingText />
      <ServiceList />
      <Whychoose />
      <WhyChooseUs />
      <GalleryImg />
      <ServiceAreass />
      <ImageGallery />
      <Reviewss />
      <ContactForm />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Home;
