import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Profile from "./profile.js";
import Information from "./info.js";
import Scan from "./add.js";
import Homepage from "./home.js";
import Login from './login.js';
import Register from './register';

const root = ReactDOM.createRoot(document.getElementById("root"));
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
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
)
