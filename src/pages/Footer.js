import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-sub">
          <h2 style={{ fontSize: "1em" }}>دانشگاه کاشان</h2>
          <div className="footer-sub-text">
            شرکت دانشگاه فعال‌ترین شرکت ایرانی در زمینه هوش مصنوعی و پردازش
            سیگنال است که از سال ۱۳۸۲ با پشتوانه فنی متخصصان دانشگاه کاشان،
            مشغول فعالیت بوده است. محصولات و خدمات ارائه شده توسط این شرکت به
            صورت تخصصی در زمینه‌های تبدیل گفتار به متن، متن به صدا، جستجو در
            صوت، پردازش تصویر و پردازش زبان طبیعی است.
          </div>
        </div>
        <div className="footer-sub important-pages">
          <h2 style={{ fontSize: "1em" }}>صفحات مهم</h2>
          <div className="page-title-container">محصولات</div>
          <div className="page-title-container">پشتیبانی</div>
          <div className="page-title-container"><Link to="/contact-us">تماس با ما</Link></div>
        </div>
        <div className="footer-sub call-to-us">
          <h2 style={{ fontSize: "1em", color: "black" }}>تماس با ما</h2>
          <div className="phone-number-container">
            <FontAwesomeIcon icon={faPhone} style={{color:"#219ebc"}}/>
            <div>03155912345</div>
          </div>
          <div className="phone-number-container">
            <FontAwesomeIcon icon={faEnvelope} style={{color:"#219ebc"}}/>
            <div>abcdeg@gmail.com</div>
          </div>
          <div className="phone-number-container">
            <FontAwesomeIcon icon={faLocationDot} style={{color:"#219ebc"}} />
            <div>استان اصفهان، راوند، بلوار قطب راوندی</div>
          </div>
          <div className="social-media-conainer">
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "1.4em", cursor: "pointer", color:"#219ebc" }} />
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.4em", cursor: "pointer", color:"#219ebc" }} />
            <FontAwesomeIcon icon={faTelegram} style={{ fontSize: "1.4em", cursor: "pointer", color:"#219ebc" }} />
          </div>
        </div>
      </div>
      <hr/>
      <div className="copyrights-wrapper">
        <div className="copyright-container">
          کلیه حقوق این سایت متعلق به شرکت دانشگاه می باشد.
        </div>
      </div>
    </div>
  );
}

export default Footer;
