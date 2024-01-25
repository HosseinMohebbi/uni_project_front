import React from "react";
import "./Main.css";
import Services from "./components/Services";
import aiImage from "../assets/aiImage.jpg";
import ImageParallax from "./components/ImageParallax";
import Slong from "./components/Slong";

function Main() {
  return (
    <div className="main-wrapper">
      {/* <img src={aiImage} alt="" width="100%" height="1000em"/> */}
      <Slong />
      {/* <ImageParallax /> */}
      <ImageParallax><Services /></ImageParallax>
      {/* <Services /> */}
    </div>
  );
}

export default Main;
