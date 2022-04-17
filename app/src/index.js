import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import Profile from "./profile.js";
import Search from "./search.js";
import Homepage from "./home.js";
import Medication from './medication';
import { check } from './tools';
import InitialSearch from './initial-search';

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(check, 1000);

root.render(
  <>
  {/*<Navbar/>*/}
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />}>
      </Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/info">
        <Route path=":din" element={<InitialSearch />}></Route>
      </Route>
      <Route path="/medication" element={<Medication />} />
    </Routes>
  </Router>
  </>
)
