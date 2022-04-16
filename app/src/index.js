import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Profile from "./profile.js";
import Information from "./info.js";
import Scan from "./add.js";
import Homepage from "./home.js";
import translateText from "./api-calls/translateText.js";
import textToSpeech from './api-calls/textToSpeech';

const root = ReactDOM.createRoot(document.getElementById("root"));
// translateText("Hello World!", "zh", (test) =>{
//   setInterval(() => {console.log(test);}, 1000);
// });

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />}>
      </Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/scan" element={<Scan />}></Route>
      <Route path="/info">
        <Route path=":din" element={<Information />}></Route>
      </Route>
    </Routes>
  </Router>
)
