import React from "react";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faSackDollar } from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-title-container">
        <h2 className="contact-us-title">تماس با ما</h2>
      </div>
      <div className="phone-numbers-wrapper">
        <div className="phone-number-container">
          <FontAwesomeIcon icon={faSackDollar} style={{ fontSize: "3em", color: "#219ebc" }} />
          <div className="phone-numer-title">واحد فروش</div>
          <div className="phone-numer">031-55910000</div>
        </div>
        <div className="phone-number-container">
          <FontAwesomeIcon icon={faHeadset} style={{ fontSize: "3em", color: "#219ebc" }} />
          <div className="phone-numer-title">واحد پشتیبانی</div>
          <div className="phone-numer">031-55911111</div>
        </div>
      </div>
      <div className="address-wrapper">
        <div className="address-container">
          <div className="address-title">
            <strong>آدرس:</strong>
          </div>
          <div className="address">استان اصفهان، راوند، بلوار قطب راوندی</div>
        </div>
        <div className="postal-code-container">
          <div className="postal-code-title">کد پستی:</div>
          <div className="postal-code">1234567890</div>
        </div>
      </div>
      <div className="contact-us-form-wrapper">
        <label className="contact-us-name-label">
          نام و نام خانوادگی
          <input type="text" className="contact-us-name-input" />
        </label>
        <label className="contact-us-email-label">
          ایمیل
          <input type="email" className="contact-us-email-input" />
        </label>
        <label className="contact-us-subject-label">
          موضوع
          <input
            type="text"
            className="contact-us-subject-input"
          />
        </label>
        <label className="contact-us-text-label">
          متن پیام
          <textarea cols="100" rows="10" className="contact-us-text-input" />
        </label>
      </div>
    </div>
  );
}

export default ContactUs;
