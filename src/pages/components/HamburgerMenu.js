import React from "react";
import "./HamburgerMenu.css";
import { Link } from "react-router-dom";

function HamburgerMenu() {
  return (
    <div class="wrapper">
      <nav>
        <input type="checkbox" id="menu" name="menu" class="m-menu__checkbox" />
        <label class="m-menu__toggle" for="menu">
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#219ebc"
            stroke-width="2"
            stroke-linecap="butt"
            stroke-linejoin="arcs"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </label>
        <label class="m-menu__overlay" for="menu"></label>
        <div class="m-menu">
          <div class="m-menu__header">
            <label
              class="m-menu__toggle"
              for="menu"
              style={{ position: "absolute", left: "1em" }}
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#219ebc"
                stroke-width="2"
                stroke-linecap="butt"
                stroke-linejoin="arcs"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </label>
          </div>
          <ul>
            <li>
              <label>
                <Link to="/" style={{ color: "black" }}>
                  خانه
                </Link>
              </label>
            </li>
            <li>
              <label class="a-label__chevron" for="item-2">
                <a >محصولات</a>
              </label>
              <input
                type="checkbox"
                id="item-2"
                name="item-2"
                class="m-menu__checkbox"
              />
              <div class="m-menu">
                <div class="m-menu__header">
                  <span>محصولات</span>
                  <label class="m-menu__toggle" for="item-2">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#219ebc"
                      stroke-width="2"
                      stroke-linecap="butt"
                      stroke-linejoin="arcs"
                    >
                      <path d="M19 12H6M12 5l-7 7 7 7" />
                    </svg>
                  </label>
                </div>
                <ul>
                  <li>
                    <label>تعیین عناوین متن</label>
                  </li>
                  <li>
                    <label>تعیین عناوین عکس</label>
                  </li>

                  <li>
                    <label>تبدیل ویس به متن</label>
                  </li>
                  <li>
                    <label>تبدیل متن به ویس</label>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <label class="a-label__chevron" for="item-3">
                <a>درباره ما</a>
              </label>
              <input
                type="checkbox"
                id="item-3"
                name="item-3"
                class="m-menu__checkbox"
              />
              <div class="m-menu">
                <div class="m-menu__header">
                  <span>درباره ما</span>
                  <label class="m-menu__toggle" for="item-3">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#219ebc"
                      stroke-width="2"
                      stroke-linecap="butt"
                      stroke-linejoin="arcs"
                    >
                      <path d="M19 12H6M12 5l-7 7 7 7" />
                    </svg>
                  </label>
                </div>
                <ul>
                  <li>
                    <label>معرفی شرکت</label>
                  </li>
                  <li>
                    <label>اعضای شرکت</label>
                  </li>
                  <li>
                    <label>موقعیت های شغلی</label>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <label>
                <Link to="/contact-us" style={{ color: "black" }}>
                  تماس با ما
                </Link>
              </label>
            </li><li>
              <label>
                <Link to="/register" style={{ color: "black" }}>
                  ثبت نام
                </Link>
              </label>
            </li>
            <li>
              <label>
                <Link to="/login" style={{ color: "black" }}>
                  ورود
                </Link>
              </label>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
