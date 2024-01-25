import React from 'react';
import "./TextTags.css"

function TextTags(props) {
  return (
    <div className='tag-container'> 
      {props.text}
    </div>
  )
}

export default TextTags
