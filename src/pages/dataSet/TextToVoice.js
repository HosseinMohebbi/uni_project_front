// import React from "react";
// import "./TextToVoice.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function TextToVoice() {
//   const [texts, setTexts] = useState({});
  
  
//   useEffect(() => {
//     axios
//       .get(
//         "http://localhost:3000/questions/speaking-questions/?page=1&pageSize=10"
//       )
//       .then((res) => {
//         setTexts(res.data);
//       });
//   }, []);

//   return (
//     <div>
//       <button onClick={play}>play</button>
//       <div className="voice-to-text-input-container">
//         <textarea name="" id="" cols="160" rows="16"></textarea>
//       </div>
//     </div>
//   );
// }

// export default TextToVoice;
