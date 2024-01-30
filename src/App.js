import "./App.css";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { Route, Routes, useLocation } from "react-router";
// import VoiceToText from "./pages/dataSet/VoiceToText";
import TextToVoice from "./pages/dataSet/TextToVoice";
import SetImage from "./pages/dataSet/SetImage";
import { TextWrapper } from "./components/questions/text/TextWrapper";
import { ImageWrapper } from "./components/questions/image/ImageWrapper";
import { VoiceToTextWrapper } from "./components/questions/voiceToText/VoiceToTextWrapper";
import { TextToVoiceWrapper } from "./components/questions/TextToVoice/TextToVoiceWrapper";
import HamburgerMenu from "./pages/components/HamburgerMenu";
import { useEffect, useState } from "react";

function App() {
  // let width = window.innerWidth;
  const [showHamber, setShowHamber] = useState(false);
  const handlewidthSize = () => {
    if (window.innerWidth < 874) {
      setShowHamber(true);
    } else {
      setShowHamber(false);
    }
    console.log(window.innerWidth);
  };

  useEffect(() => {
    handlewidthSize();
    window.addEventListener("resize", handlewidthSize);
  }, []);

  const location = useLocation();

  return (
    <div className="App">
      {!showHamber &&
        location.pathname != "/set-text" &&
        location.pathname != "/set-image" &&
        location.pathname != "/voice-to-text" &&
        location.pathname != "/text-to-voice" && <Header />}
      {showHamber &&
        location.pathname != "/set-text" &&
        location.pathname != "/set-image" &&
        location.pathname != "/voice-to-text" &&
        location.pathname != "/text-to-voice" && <HamburgerMenu />}
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
        <Route
          path="/voice-to-text"
          element={
            <PrivateRoute>
              <VoiceToTextWrapper />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/text-to-voice"
          element={
            <PrivateRoute>
              <TextToVoiceWrapper />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
      </Routes>
      {location.pathname != "/set-text" &&
        location.pathname != "/set-image" &&
        location.pathname != "/voice-to-text" &&
        location.pathname != "/text-to-voice" && <Footer />}
    </div>
  );
}

export default App;
