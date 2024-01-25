import "./App.css";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Products from "./pages/components/Products";
import SetText from "./pages/dataSet/SetText";
import { Route, Routes } from "react-router";
import VoiceToText from "./pages/dataSet/VoiceToText";
import TextToVoice from "./pages/dataSet/TextToVoice";
import SetImage from "./pages/dataSet/SetImage"

function App() {
  console.log("asdsad")
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <header className="App-header"> */}

        {/* </header> */}
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/set-text"
          element={
            // <PrivateRoute>
              <SetText />
            // </PrivateRoute>
          }
        ></Route>
        {/* <Route path="/setText" element={<SetText />}></Route> */}
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/set-image" element={<SetImage/>}></Route>
        <Route path="/voice-to-text" element={<VoiceToText/>}></Route>
        <Route path="/text-to-voice" element={<TextToVoice/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
