import React from "react";
import "./Main.css";
import Services from "./components/Services";
import ImageParallax from "./components/ImageParallax";
import Slong from "./components/Slong";

function Main() {
  return (
    <div className="main-wrapper">
      <Slong />
      <ImageParallax>
        <Services />
      </ImageParallax>
    </div>
  );
}

export default Main;
