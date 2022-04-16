import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Profile from "./profile.js";
import Information from "./info.js";
import Add from "./add.js";
import Homepage from "./home.js";
import translateText from "./api-calls/translateText.js";
import textToSpeech from './api-calls/textToSpeech';

const root = ReactDOM.createRoot(document.getElementById("root"));
//var test = translateText("Hello World!", "zh");
//setInterval(() => {console.log(test);}, 1000);
//var test = textToSpeech("Hello World!", "en-us");
//setInterval(() => {console.log(test);}, 1000);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />}>
      </Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/add" element={<Add />}></Route>
      <Route path="/info" element={<Information />}></Route>
    </Routes>
  </Router>
)
