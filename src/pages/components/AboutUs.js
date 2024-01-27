import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Drawer from "./Drawer";

function AboutUS() {
  const [isShowDrawer, setIsShowDrawer] = useState(false);

  const aboutUsItems = [
    { title: "معرفی شرکت" },
    { title: "اعضای شرکت" },
    { title: "موقعیت های شغلی" },
  ];

  const handleOnMouseOver = () => {
    setIsShowDrawer(true);
  };

  const handleOnMouseLeave = () => {
    setIsShowDrawer(false);
  };

  return (
    <a
      style={{ position: "relative" }}
      onMouseOver={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}
    >
      درباره ما
      {isShowDrawer && <Drawer items={aboutUsItems} />}
    </a>
  );
}

export default AboutUS;
