import "./App.css";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { Route, Routes } from "react-router";
// import VoiceToText from "./pages/dataSet/VoiceToText";
import TextToVoice from "./pages/dataSet/TextToVoice";
import SetImage from "./pages/dataSet/SetImage";
import { TextWrapper } from "./components/questions/text/TextWrapper";
import { ImageWrapper } from "./components/questions/image/ImageWrapper";
import { VoiceToTextWrapper } from "./components/questions/voiceToText/VoiceToTextWrapper";
import HamburgerMenu from "./pages/components/HamburgerMenu";
import { useEffect, useState } from "react";
import { TextToVoiceWrapper } from "./components/TextToVoice/TextToVoiceWrapper";

function App() {
  // let width = window.innerWidth;
  const [showHamber, setShowHamber] = useState(false);
  const handlewidthSize = () => {
    if (window.innerWidth < 874) {
      setShowHamber(true);
    }else{
      setShowHamber(false)
    }
    console.log(window.innerWidth)
  };

  useEffect(() => {
    window.addEventListener("resize", handlewidthSize);
  }, [window.innerWidth]);

  // console.log("width", width);
  return (
    <div className="App">
      {!showHamber && <Header />}
      {showHamber && <HamburgerMenu />}
      <Routes>
        {/* <header className="App-header" /> */}

        {/* </header> */}
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/set-text"
          element={
            <PrivateRoute>
              <TextWrapper />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/set-image"
          element={
            <PrivateRoute>
              <ImageWrapper />
            </PrivateRoute>
          }
        ></Route>
        {/* <Route path="/setText" element={<SetText />}></Route> */}
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<SignIn />}></Route>

        <Route path="/voice-to-text" element={<VoiceToTextWrapper />}></Route>
        <Route path="/text-to-voice" element={<TextToVoiceWrapper />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
