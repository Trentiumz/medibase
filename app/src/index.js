import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Profile from "./profile.js";
import Information from "./info.js";
import Add from "./add.js";
import Homepage from "./home.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/add" element={<Add />}></Route>
      <Route path="/info" element={<Information />}></Route>
    </Routes>
  </Router>
)