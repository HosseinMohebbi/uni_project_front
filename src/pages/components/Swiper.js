import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faQuoteLeft,
  faQuoteRight,
  faRepeat,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";

export default () => {
  return (
    <div
      style={{ width: "100%", margin: "0 auto", paddingRight: "2em" }}
      className="service-container"
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={1.4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
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
            <span>تعیین عناوین(متن)</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-box">
            <div className="icons-container">
              <FontAwesomeIcon
                icon={faImage}
                style={{ fontSize: "2em", color: "#219ebc" }}
              />
            </div>
            <span>تعیین عناوین(عکس)</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
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
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="service-box">
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
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};
