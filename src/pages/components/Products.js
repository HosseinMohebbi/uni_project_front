import React, { useState } from "react";
import Drawer from "./Drawer";
import "./Products.css"

function Products() {
  const [isShowDrawer, setIsShowDrawer] = useState(false);
  
  const productItems = [
    { title: "تعیین عناوین متن", path: "/set-text" },
    { title: "تعیین عناوین عکس", path: "set-image" },
    { title: "تبدیل ویس به متن", path: "/voice-to-text" },
    { title: "تبدیل متن به ویس", path: "/text-to-voice" },
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
