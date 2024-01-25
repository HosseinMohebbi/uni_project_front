import React, { useEffect } from "react";
import "./SetImage.css";
import TextTags from "./TextTags";
import { useState } from "react";
import { useDispatch } from "react-redux";

function SetImage() {
  const [tagSelected, setTagSelected] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="image-page">
      <div className="set-image-wrapper">
        <div className="image-container">
        
        </div>
      </div>
      <div className="tags-container">
        <TextTags text={"اقتصادی"}/>
        <TextTags text={"سیاسی"} />
        <TextTags text={"ورزشی"} />
        <TextTags text={"علمی"} />
        <TextTags text={"علمی"} />
        <TextTags text={"علمی"} />
      </div>
      <div className="buttons-container">
        <button className="submit-button button">تایید</button>
        <button className="submit-button button">اتمام</button>
      </div>
    </div>
  );
}

export default SetImage;
