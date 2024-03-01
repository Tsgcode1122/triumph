import "./MinomuBlack-BWVKV.otf";

import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Preloader from "./Component/Preloader";
import Reviews from "./Pages/Reviews";
import Gallery from "./Pages/Gallery";
import ServiceArea from "./Pages/ServiceArea";
import ServiceDetail from "./Component/ServiceDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Services", element: <Services /> },
      { path: "Contact", element: <Contact /> },
      { path: "Gallery", element: <Gallery /> },
      { path: "Reviews", element: <Reviews /> },
      { path: "ServiceArea", element: <ServiceArea /> },
      {
        path: "Services/:serviceId",
        element: <ServiceDetail />,
      },
    ],
  },
]);

const App = () => {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setContentVisible(true);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {contentVisible ? (
        <RouterProvider router={router}>
          <Navbar />
        </RouterProvider>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default App;
