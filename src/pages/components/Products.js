import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Drawer from "./Drawer";

function Products() {
  const [isShowDrawer, setIsShowDrawer] = useState(false);
  
  const productItems = [
    { title: "تعیین عناوین متن", path: "/setText" },
    { title: "تعیین عناوین عکس", path: "setText" },
    { title: "تبدیل ویس به متن", path: "/setText" },
    { title: "تبدیل متن به ویس", path: "/setText" },
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
      محصولات
      {isShowDrawer && <Drawer items={productItems} />}
    </a>
  );
}

export default Products;
