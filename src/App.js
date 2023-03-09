import { useState } from "react";
import Navbar from "./components/Navbar";
import "./css//App.css";
import AskCesarAI from "./pages/AskCesarAI.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import ImageRendering from "./pages/ImageRendering";

export default function App() {
  const placeholderAskCesarAi = "Ask CesarAI..."
  const placeholderImageRendering = "Describe any image that you want to see..."

  const [disabled, setDisabled] = useState(false)

  return (
    <Router>
      <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/AskCesarAI" element={<AskCesarAI placeholder={placeholderAskCesarAi} disabled={disabled} setDisabled={setDisabled}/>}></Route>
            <Route path="/ImageRendering" element={<ImageRendering placeholder={placeholderImageRendering} disabled={disabled} setDisabled={setDisabled}/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}
