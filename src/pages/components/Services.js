import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faArrowRight,
  faQuoteLeft,
  faQuoteRight,
  faRepeat,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Services() {
  const navigate = useNavigate();

  const buttonHandler = () => {
    // if(!isLogin){
    //   navigate({pathname: "/login"})
    // }else {
    //   navigate({pathname: "/setText"})
    // }
    navigate({ pathname: "/setText" });
  };

  return (
    <div className="services-wrapper">
      <div className="service-container">
        <div className="services-title">
          <h2>خدمات شرکت</h2>
        </div>
        <div className="services-container">
          <div className="service-box">
            <div className="icons-container">
              <FontAwesomeIcon
                icon={faQuoteRight}
                style={{ fontSize: "2em", color: "#219ebc" }}
              />
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ fontSize: "2em", color: "#219ebc" }}
              />
            </div>
            <span>تعیین عناوین(عکس)</span>
          </div>
          <div className="service-box">
            <div className="icons-container">
              <FontAwesomeIcon
                icon={faImage}
                style={{ fontSize: "2em", color: "#219ebc" }}
              />
            </div>
            <span>تعیین عناوین(متن)</span>
          </div>
          <div className="service-box">
            <div className="icons-container">
              <FontAwesomeIcon
                icon={faQuoteRight}
                style={{ fontSize: "2em", color: "#219ebc" }}
              />
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ fontSize: "2em", color: "#219ebc" }}
              />
              <FontAwesomeIcon
                icon={faRepeat}
                style={{ fontSize: "2em", color: "#219ebc", marginRight: "1em" }}
              />
              <FontAwesomeIcon
                icon={faMicrophone}
                style={{ fontSize: "2em", color: "#219ebc", marginRight: "1em" }}
              />
            </div>
            <span>تبدیل ویس به متن</span>
          </div>
          <div className="service-box" onClick={buttonHandler}>
            <div className="icons-container">
              <FontAwesomeIcon
                icon={faMicrophone}
                style={{ fontSize: "2em", color: "#219ebc" }}
              />
              <FontAwesomeIcon
                icon={faRepeat}
                style={{ fontSize: "2em", color: "#219ebc", marginRight: "1em" }}
              />
              <FontAwesomeIcon
                icon={faQuoteRight}
                style={{ fontSize: "2em", color: "#219ebc", marginRight: "1em" }}
              />
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ fontSize: "2em", color: "#219ebc" }}
              />
            </div>
            <span>تبدیل متن به ویس</span>
          </div>
        </div>
      </div>
    </div>
  );
}
