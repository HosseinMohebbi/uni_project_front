import React from "react";
import "./Header.css";
import logo from "../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Products from "./components/Products";
import { useSelector } from "react-redux";
import SignOut from "./SignOut";

function Header() {
  const isLogin = useSelector((state) => state.user.isLogin);
  const width = window.innerWidth;
  console.log("width", width)

  return (
    <div className="header">
      <div className="header-wrapper">
        {/* <div className="header-rightside"> */}
        <img src={logo} alt="abc" width="80px" />
        <ul className="header_list-container">
          <li>
            <Link to="/" style={{ color: "black" }}>
              خانه
            </Link>
          </li>
          <li className="li-with-angel">
            {/* محصولات
            <FontAwesomeIcon icon={faAngleDown} /> */}
            <Products />
          </li>
          {/* <li className="li-with-angel">
            <Products />
          </li> */}
          <li className="li-with-angel">
            درباره ما
            <FontAwesomeIcon icon={faAngleDown} />
          </li>
          <li>
            <Link to="/contact-us" style={{ color: "black" }}>
              تماس با ما
            </Link>
          </li>
        </ul>
        {/* </div> */}
        {!isLogin && (
          <ul className="header_list-container">
            <li>
              <Link to="/register" style={{ color: "black" }}>
                ثبت نام
              </Link>
            </li>
            <li>
              <Link to="/login" style={{ color: "black" }}>
                ورود
              </Link>
            </li>
          </ul>
        )}
        {/* {isLogin && (
          <div className="logout-container">
            <Link to="/">خروج از حساب</Link>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </div>
        )} */}
        {isLogin && <SignOut />}
      </div>
    </div>
  );
}

export default Header;
