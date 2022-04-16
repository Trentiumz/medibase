import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from './nav-bar';
import Profile from "./profile.js";
import Information from "./info.js";
import Scan from "./scan.js";
import Homepage from "./home.js";
import Medication from './medication';

import * as googleTTS from 'google-tts-api';
const url = googleTTS.getAudioUrl("Boop super cool", {
  lang: 'en',
  slow: false,
  host: "https://translate.google.com"
});
console.log(url);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <Navbar/>
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />}>
      </Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/scan" element={<Scan />}></Route>
      <Route path="/info">
        <Route path=":din" element={<Information />}></Route>
      </Route>
      <Route path="/medication" element={<Medication />} />
    </Routes>
  </Router>
  </>
)
