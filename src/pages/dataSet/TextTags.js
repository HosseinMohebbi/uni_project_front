import React from 'react';
import "./TextTags.css"
import classNames from "classnames";

function TextTags(props) {
  const handleOnClick = () => {
    props.onClick(props.tag)
  }
  return (
    <div className={classNames('tag-container', props.isSelected && 'active')} onClick={handleOnClick}>
      {props.tag.name}
    </div>
  )
}

export default TextTags
