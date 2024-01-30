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
import { useState, useEffect } from "react";
import Swiper from "./Swiper";

export default function Services() {
  const navigate = useNavigate();

  const [showSwiper, setShowSwiper] = useState(false);
  const handlewidthSize = () => {
    if (window.innerWidth < 660) {
      setShowSwiper(true);
    } else {
      setShowSwiper(false);
    }
    console.log(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handlewidthSize);
  }, [window.innerWidth]);

  const textHandler = () => {
    navigate({ pathname: "/set-text" });
  };

  const imageHandler = () => {
    navigate({ pathname: "/set-image" });
  };

  const voiceToTextHandler = () => {
    navigate({ pathname: "/voice-to-text" });
  };

  const textToVoiceHandler = () => {
    navigate({ pathname: "/text-to-voice" });
  };

  return (
    <>
      {!showSwiper && (
        <div className="services-wrapper">
          <div className="service-container">
            <div className="services-title">
              <h2>خدمات شرکت</h2>
            </div>
            <div className="services-container">
              <div className="service-box" onClick={textHandler}>
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
                <span>تعیین عناوین(متن)</span>
              </div>
              <div className="service-box" onClick={imageHandler}>
                <div className="icons-container">
                  <FontAwesomeIcon
                    icon={faImage}
                    style={{ fontSize: "2em", color: "#219ebc" }}
                  />
                </div>
                <span>تعیین عناوین(عکس)</span>
              </div>
              <div className="service-box" onClick={voiceToTextHandler}>
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
                    style={{
                      fontSize: "2em",
                      color: "#219ebc",
                      marginRight: "1em",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faMicrophone}
                    style={{
                      fontSize: "2em",
                      color: "#219ebc",
                      marginRight: "1em",
                    }}
                  />
                </div>
                <span>تبدیل ویس به متن</span>
              </div>
              <div className="service-box" onClick={textToVoiceHandler}>
                <div className="icons-container">
                  <FontAwesomeIcon
                    icon={faMicrophone}
                    style={{ fontSize: "2em", color: "#219ebc" }}
                  />
                  <FontAwesomeIcon
                    icon={faRepeat}
                    style={{
                      fontSize: "2em",
                      color: "#219ebc",
                      marginRight: "1em",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    style={{
                      fontSize: "2em",
                      color: "#219ebc",
                      marginRight: "1em",
                    }}
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
      )}
      {showSwiper && <Swiper />}
    </>
  );
}
