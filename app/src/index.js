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
import { check } from './tools';
import Search from './search';

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(check, 1000);

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
        <Route path=":din" element={<Search />}></Route>
      </Route>
      <Route path="/medication" element={<Medication />} />
    </Routes>
  </Router>
  </>
)
